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
import json
sys.path.append("./")
from DB_Module import FireBase
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

ssh_us, ssh_uk, ssh_kr = None, None, None
fb_us, fb_uk, fb_kr = None, None, None
us_ci, uk_ci, kr_ci = 0.0, 0.0, 0.0
fb = FireBase("VGGNet", "server")

known_cpu_exec = "top -bn1 | grep \"Cpu(s)\" | sed \"s/.*, *\([0-9.]*\)%* id.*/\\1/\" | awk '{print 100 - $1}'"
known_gpu_exec = "nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits"
known_memory_exec = "free | awk '/^Mem:/ {print  $3 / 1024 \",\"  $2 / 1024 }'"
total_epoch = 0

electrics = electric(token=os.getenv("ELECTRICITYMAPS_API_KEY"))


def tt():
    return jsonify({"output":"hello"})

def reset_migration_file():
    global fb
    fb.upload_migration(False, False, False, None, None)

def test_migration_file():
    global fb
    fb.upload_migration(False, False, True, "IT-CSO", "Italy")

def parser_save(command, region):
    global fb, total_epoch
    try:
        li = command.split("python3")
        li = [l.strip() for l in li]
        parsers = li[1].split(" ")[1:]
        parser = dict()
        for i in range(0, len(parsers), 2):
            parser[parsers[i][2:]] = parsers[i+1]
        if region == "US":
            parser['ssh_server'] = '0'
            fb.upload_migration(False, False, True, "US", "United States of America")
        elif region == "IT-CSO":
            parser['ssh_server'] = '1'
            fb.upload_migration(False, False, True, "IT-CSO", "Italy")
        elif region == "KR":
            parser['ssh_server'] = '2'
            fb.upload_migration(False, False, True, "KR", "South Korea")
        total_epoch = parser['epoch']
        fb.upload_parser(parser)
        
        # splits = [item.strip() for item in command.split("python3")]
        # splits = [item.strip() for item in splits[0].split("--name")][1]
        # splits = splits.split(" ")[0]
        return_command = f"docker start {region}"
        print(f"docker start {region}")
        return return_command
    except:
        return command



async def get_carbon_intensity_for_zone(zone, key):
    CI = await electrics.get_carbon_intensity(zone)
    return key, CI

# 모든 탄소 집약도를 가져오는 비동기 함수
async def get_all_carbon_intensities(geo_dict):
    tasks = []
    for key, item in geo_dict.items():
        tasks.append(get_carbon_intensity_for_zone(item['id'], key))
    results = await asyncio.gather(*tasks)
    carbons = {key: CI for key, CI in results}
    return carbons

async def get_carbon_history_for_zone(zone, key):
    try:
        CI = await electrics.get_carbon_intensity_history(zone, 0)
        return key, CI
    except:
        print(key)
        return None, None

# 모든 탄소 집약도를 가져오는 비동기 함수
async def get_all_carbon_history_intensities(geo_dict):
    tasks = []
    for key, item in geo_dict.items():
        tasks.append(get_carbon_history_for_zone(item['id'], key))
    results = await asyncio.gather(*tasks)
    carbons = {key: CI for key, CI in results}
    return carbons
        
@app.route('/ci/cur-carbon-intensity', methods=['GET'])
def get_resource123():
    with open('geo_data.json', 'r') as json_file:
        geo_dict = json.load(json_file)
    carbons = asyncio.run(get_all_carbon_intensities(geo_dict))
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    carbon_historys = loop.run_until_complete(get_all_carbon_history_intensities(geo_dict))
    combined_data = {}
    for key in carbons:
        if key in carbon_historys:
            combined_data[key] = {
                "value": carbons[key],
                "history": carbon_historys[key],
                "full_name": geo_dict[key]['full_name']
            }
    return jsonify(combined_data)
    
    
@app.route('/ci/carbon-intensity', methods=['GET'])
def get_resource4():
    global electrics 
    us_ci = asyncio.run(electrics.get_carbon_intensity_history("US", -14))
    uk_ci = asyncio.run(electrics.get_carbon_intensity_history("IT-CSO", -7))
    kr_ci = asyncio.run(electrics.get_carbon_intensity_history("KR", 0))
    return jsonify({
        "US-CAL-BANC" : us_ci,
        "IE" : uk_ci,
        "KR" : kr_ci
    })



#이거 초당 반복으로 실행 하면 될듯
@app.route('/ci/get_resource', methods=['GET'])
def get_resourceyo():
    global fb, total_epoch
    try:
        json_data = fb.get_resource()
        return jsonify({'cpu' : json_data['cpu'],
                    'memory' : json_data['memory'],
                    'total_memory' : json_data['total_memory'],
                    'gpu' : json_data['gpu'],
                    'total_gpu' : json_data['total_gpu'],
                    'epoch' : json_data['epoch'],
                    'total_epoch' : total_epoch,
                    'clock' : json_data['clock'],
                    'max_clock' : json_data['max_clock'],
                    'learning_time' : json_data['learning_time'],
                    'carbon_emission' : json_data['carbon_emission'],
                    'total_epoch' : json_data['epoch_no'],
                    'CI' : json_data['CI']})
        
    except Exception as e:
        print(e)
        return jsonify({'cpu' : 0,
                        'memory' : 0,
                        'total_memory' : 0,
                        'gpu' : 0,
                        'total_gpu' : 0,
                        'epoch' : 0,
                        'clock' : 0,
                        'max_clock' : 0,
                        'learning_time' : 0,
                        'carbon_emission' : 0,
                        'CI' : 0}) 

@app.route('/ci/train-stop', methods=['GET'])
def dd():
    try:
        global uk_ci, kr_ci, us_ci, fb
        global ssh_us, ssh_uk, ssh_kr
        contents = fb.get_data()
        region = contents['region']
        command = f"docker stop {region}"
        print(command)
        if region == 'US': # migration , server 0 
            ssh_us.exec(command)        
        elif region == 'IT-CSO':  # server 1
            ssh_uk.exec(command)
        elif region == 'KR':# server 2 
            ssh_kr.exec(command)
        reset_migration_file()
        return jsonify({'res' : True}) 
    except:
        return jsonify({'res' : False}) 
    


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0',port=10002)


