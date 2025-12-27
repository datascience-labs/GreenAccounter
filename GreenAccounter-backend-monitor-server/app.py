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
total_epoch = 100

electrics = electric(token=os.getenv("ELECTRICITYMAPS_API_KEY"))


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


@app.route('/res/resourceUS', methods=['GET'])
def get_resource():
    global ssh_us
    global electrics
    global us_ci
    if ssh_us == None:
        ssh_us = SSH(0)  
    try: 
        cpu, _, __ = ssh_us.exec(known_cpu_exec)
        gpu, _, _ = ssh_us.exec(known_gpu_exec)
        gpu = float(gpu.split('\n')[0])

        if gpu == "":
            gpu = 0.0
        memory, _, __ = ssh_us.exec(known_memory_exec)
        used_memory, total_memory = memory.strip().split(',')
        us_ci = asyncio.run(electrics.get_carbon_intensity("US"))
        hardware_info = ssh_us.get_hardware_info()

        return jsonify({
            'cpu' : float(cpu),
            'gpu' : float(gpu),
            'used_memory' : float(used_memory),
            'cpu_info' : hardware_info['cpu_model'],
            'gpu_info' : hardware_info['gpu_model'],
            'memory_info' : total_memory,
            'CI' : us_ci
            #CI Add 
        })
    except Exception as e:
        print(e)
        print("CPU",cpu)
        print("GPU",gpu)
        print("me",memory)
        return jsonify({
            'cpu' : float(0.0),
            'gpu' : float(0.0),
            'used_memory' : float(0.0),
            'cpu_info' : "",
            'gpu_info' : "",
            'memory_info' : "",
            'CI' : 0.0
        })

@app.route('/res/resourceUK', methods=['GET'])
def get_resource2():
    global ssh_uk
    global electrics
    global uk_ci
    if ssh_uk == None:
        ssh_uk = SSH(1)   
    try:
        cpu, _, _ = ssh_uk.exec(known_cpu_exec)
        gpu, _, _ = ssh_uk.exec(known_gpu_exec)
        gpu = float(gpu.split('\n')[0])
        if gpu == "":
            gpu = 0.0
        memory, _, _ = ssh_uk.exec(known_memory_exec)
        used_memory, total_memory = memory.strip().split(',')
        uk_ci = asyncio.run(electrics.get_carbon_intensity("IT-CSO"))
        hardware_info = ssh_uk.get_hardware_info()

        return jsonify({
            'cpu' : float(cpu),
            'gpu' : float(gpu),
            'used_memory' : float(used_memory),
            'cpu_info' : hardware_info['cpu_model'],
            'gpu_info' : hardware_info['gpu_model'],
            'memory_info' : total_memory,
            'CI' : uk_ci
            #CI Add 
        })
    except Exception as e:
        print(e)
        return jsonify({
            'cpu' : float(0.0),
            'gpu' : float(0.0),
            'used_memory' : float(0.0),
            'cpu_info' : "",
            'gpu_info' : "",
            'memory_info' : "",
            'CI' : 0.0
        })


@app.route('/res/resourceKR', methods=['GET'])
def get_resource3():
    global ssh_kr
    global electrics
    global kr_ci
    if ssh_kr == None:
        ssh_kr = SSH(2)   
    try:
        cpu, _, _ = ssh_kr.exec(known_cpu_exec)
        gpu, _, _ = ssh_kr.exec(known_gpu_exec)
        gpu = float(gpu.split('\n')[0])
        if gpu == "":
            gpu = 0.0
        memory, _, _ = ssh_kr.exec(known_memory_exec)
        used_memory, total_memory = memory.strip().split(',')
        kr_ci = asyncio.run(electrics.get_carbon_intensity("KR"))
        hardware_info = ssh_kr.get_hardware_info()
        return jsonify({
            'cpu' : float(cpu),
            'gpu' : float(gpu),
            'used_memory' : float(used_memory),
            'cpu_info' : hardware_info['cpu_model'],
            'gpu_info' : hardware_info['gpu_model'],
            'memory_info' : total_memory,
            'CI' : kr_ci
        })
    except Exception as e:
        print(e+"??")
        return jsonify({
            'cpu' : float(0.0),
            'gpu' : float(0.0),
            'used_memory' : float(0.0),
            'cpu_info' : "",
            'gpu_info' : "",
            'memory_info' : "",
            'CI' : 0.0
        })



if __name__ == '__main__':
    # command = "docker run -it --gpus all python3 VGGNet/train.py --epoch 100 --lr 0.001 --batch 8 --vgg_model VGG16 --cuda 0 --step_size 30 --gamma 0.1 --resumption 0 --ssh_server 0 --threshold 1000"
    # test_migration_file()
    # parser_save("docker run -it --gpus all --name US-CAL-BANC  python3 VGGNet/train.py --epoch 100 --lr 0.001 --batch 8 --vgg_model VGG16 --cuda 0 --step_size 30 --gamma 0.1 --resumption 0 --ssh_server 0 --threshold 1000", "KR")
    app.run(debug=False, host='0.0.0.0',port=10001)
    # print(get_resource5())


