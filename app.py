from flask import Flask, request, jsonify
import subprocess
from flask_cors import CORS
from ssh_connect import SSH
import sys
import json
import os
import pandas as pd
import asyncio
from eletricmaps import electric
sys.path.append("./")
from DB_Module import FireBase

app = Flask(__name__)
CORS(app)

ssh_us, ssh_uk, ssh_kr = None, None, None
fb_us, fb_uk, fb_kr = None, None, None
df = pd.read_csv(f"{os.getcwd()}/serverInfo.csv", header=None).values.tolist() # CPU, GPU, Memory
us_com_info, uk_com_info, kr_com_info = df[0], df[1], df[2]
print(us_com_info, uk_com_info, kr_com_info)
us_ci, uk_ci, kr_ci = 0.0, 0.0, 0.0
fb = FireBase("VGGNet", "server")

known_cpu_exec = "top -bn1 | grep \"Cpu(s)\" | sed \"s/.*, *\([0-9.]*\)%* id.*/\\1/\" | awk '{print 100 - $1}'"
known_gpu_exec = "nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits"
known_memory_exec = "free | awk '/^Mem:/ {print  $3 / 1024 \",\"  $2 / 1024 }'"
total_epoch = 100

with open(f"{os.getcwd()}/electricmaps_api.txt", 'r') as f:
    token =  f.readline()
electrics = electric(token=token)

def reset_migration_file():
    global fb
    fb.upload_migration(False, False, False, None, None)

def test_migration_file():
    global fb
    fb.upload_migration(False, False, True, "IT-CSO", "Italy")



@staticmethod
def migration_start(region, fb, ssh_instance, server_num, region_full,):
    fb.upload_migration(True, True, False, region, region_full)
    parser = fb.get_parser()
    parser['resumption'] = '1'
    parser['ssh_server'] = server_num
    fb.upload_parser(parser)
    command = f"docker start {region}"
    ssh_instance.exec(command)
    # 여기서 migration 파일 upload 
    fb.upload_migration(False, False, True, region, region_full)


@app.route('/mgnt/is_train', methods=['GET'])
def get_resource5():
    global uk_ci, kr_ci, us_ci, fb
    global ssh_us, ssh_uk, ssh_kr
    if ssh_us == None:
        ssh_us = SSH(0) 
    if ssh_uk == None:
        ssh_uk = SSH(1)  
    if ssh_kr == None:
        ssh_kr = SSH(2)
    us_ci = asyncio.run(electrics.get_carbon_intensity("US-NE-ISNE"))
    uk_ci = asyncio.run(electrics.get_carbon_intensity("IT-CSO"))
    kr_ci = asyncio.run(electrics.get_carbon_intensity("KR"))
    # DB Storage에서 Data 받아오기 
    contents = fb.get_data()
    is_migration = contents['migration']
    migration_progress = contents['migration_progress']
    is_learning = contents['is_learning']
    region = contents['region']
    region_full = contents['region_full']
    
    """ 
    migration 후 fb에 false로 업데이트,  
    """
    dest = None
    if is_migration and not migration_progress: # 마이그레이션이 진행중인지 체크하며 중복이 아닌지 쳌쳌 
        li = [["IT-CSO", uk_ci], ["US-NE-ISNE", us_ci], ["KR", kr_ci]] 
        li.sort(key = lambda x:x[1])
        if li[0][0] == 'US-NE-ISNE': # migration , server 0 
            dest = "US-NE-ISNE"
            migration_start(li[0][0], fb, ssh_us, 0, 'New England ISO')
        elif li[0][0] == 'IT-CSO':  # server 1
            dest = "IT-CSO"
            migration_start(li[0][0], fb, ssh_uk, 1, 'Italy')
        elif li[0][0] == 'KR':# server 2 
            dest = "KR"
            migration_start(li[0][0], fb, ssh_kr, 2, 'South Korea')
    
        
    return jsonify({
        "migration" : is_migration, # False ==> 학습 x, True 학습 o 
        "migration_progress" : migration_progress, # true : 마이그레이션 중, false : migration 해야 됨
        "is_learning" : is_learning,
        "region" : region,
        "region_full" : region_full,
        "dest_region" : dest
        # 학습여부, 현재 학습 위치, 마이그레이션 여부, 도착지
    })

        


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0',port=10003)


