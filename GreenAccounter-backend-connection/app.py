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

        
@app.route('/api/sshUS', methods=['POST'])
def execute_command1():
    global ssh_us
    if ssh_us == None:
        ssh_us = SSH(0)
    data = request.json
    command = data.get('command')
    print(command)
    exec_command = parser_save(command, "US")
    try:
        stdin, stdout, stderr = ssh_us.exec(exec_command)
        return jsonify({"output" : stdin})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.output.strip()})
    except Exception as e:
        return jsonify({'output': str(e)})


@app.route('/api/pwdUS', methods=['GET'])
def execute_command11():
    global ssh_us
    if ssh_us == None:
        ssh_us = SSH(0)
    try:
        stdin, stdout, stderr = ssh_us.exec("pwd")
        return jsonify({"output" : stdin})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.output.strip()})
    except Exception as e:
        return jsonify({'output': str(e)})
    

@app.route('/api/sshUK', methods=['POST'])
def execute_command2():
    global ssh_uk
    if ssh_uk == None:
        ssh_uk = SSH(1)
    data = request.json
    command = data.get('command')
    exec_command = parser_save(command, "IT-CSO")
    try:
        stdin, stdout, stderr = ssh_uk.exec(exec_command)
        return jsonify({"output" : stdin})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.output.strip()})
    except Exception as e:
        return jsonify({'output': str(e)})


@app.route('/api/pwdUK', methods=['GET'])
def execute_command22():
    global ssh_uk
    if ssh_uk == None:
        ssh_uk = SSH(1)
    try:
        stdin, stdout, stderr = ssh_uk.exec("pwd")
        return jsonify({"output" : stdin})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.output.strip()})
    except Exception as e:
        return jsonify({'output': str(e)})
    

@app.route('/api/sshKR', methods=['POST'])
def execute_command3():
    global ssh_kr
    if ssh_kr == None:
        ssh_kr = SSH(2)
    data = request.json
    command = data.get('command')
    exec_command = parser_save(command, "KR")
    try:
        stdin, stdout, stderr = ssh_kr.exec(exec_command)
        return jsonify({"output" : stdin})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.output.strip()})
    except Exception as e:
        return jsonify({'output': str(e)})


@app.route('/api/pwdKR', methods=['GET'])
def execute_command33():
    global ssh_kr
    if ssh_kr == None:
        ssh_kr = SSH(2)
    try:
        stdin, stdout, stderr = ssh_kr.exec("pwd")
        return jsonify({"output" : stdin})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.output.strip()})
    except Exception as e:
        return jsonify({'output': str(e)}) # 




if __name__ == '__main__':
    # command = "docker run -it --gpus all python3 VGGNet/train.py --epoch 100 --lr 0.001 --batch 8 --vgg_model VGG16 --cuda 0 --step_size 30 --gamma 0.1 --resumption 0 --ssh_server 0 --threshold 1000"
    # parser_save(command, "NONE")
    reset_migration_file()
    # test_migration_file()
    # parser_save("docker run -it --gpus all --name US-CAL-BANC  python3 VGGNet/train.py --epoch 100 --lr 0.001 --batch 8 --vgg_model VGG16 --cuda 0 --step_size 30 --gamma 0.1 --resumption 0 --ssh_server 0 --threshold 1000", "KR")
    app.run(debug=False, host='0.0.0.0',port=10000)
    # print(get_resource5())


