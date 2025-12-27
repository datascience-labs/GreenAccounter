import paramiko
import pandas as pd
import os
 
class SSH:
    def __init__(self, ssh_num):
        self._ssh_num = ssh_num
        self._ssh, self._ssh_pwd = self.connect_ssh()
    
    def connect_ssh(self):
        try:
            csv_path = os.getcwd() + "/ssh_data.csv"
            df = pd.read_csv(csv_path).values.tolist()[self._ssh_num] # ip, user, password, port 순으로 저장
            key_path = os.getcwd() + df[-1]
            ip, user, pwd, port = df[0], df[1], str(df[2]), df[3]

            ssh = paramiko.SSHClient()
            ssh.load_system_host_keys()  
            ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            try:
                ssh.connect(ip, username=user, password=pwd, port=port, timeout=10)
                print("SSH connected with password")
                return ssh, pwd
            except:
                print("Password authentication failed, trying private key...")
                private_key = paramiko.RSAKey.from_private_key_file(key_path)
                if len(df) > 4 and df[-1] and pd.notna(df[-1]):
                    key_path = os.getcwd() + df[-1]
                    private_key = paramiko.RSAKey.from_private_key_file(key_path)
                    ssh.connect(ip, username=user, pkey=private_key, port=port)
                    print("SSH connected with private key")
                    return ssh, None
                else:
                    raise Exception("No private key available")
            print("ssh connected with key") # with key 멘트 추가
            return ssh, None # private key 사용으로 pw 리턴할 필요 없음            
        except Exception as e:
            print(e)
            return None, None # retyurn 행 추가
        

    def get_hardware_info(self):
        hardware_info = {}
        try:
            # 1. CPU 모델명
            stdin, stdout, stderr = self._ssh.exec_command(
                "cat /proc/cpuinfo | grep 'model name' | head -1 | cut -d':' -f2"
            )
            cpu_model = stdout.read().decode().strip()
            hardware_info['cpu_model'] = cpu_model
            
            # 3. 전체 메모리 크기 (GB)
            stdin, stdout, stderr = self._ssh.exec_command(
                "free -g | grep Mem | awk '{print $2}'"
            )
            total_memory = stdout.read().decode().strip()
            hardware_info['total_memory_gb'] = total_memory
            
            # 4. GPU 모델명
            stdin, stdout, stderr = self._ssh.exec_command(
                "nvidia-smi --query-gpu=name --format=csv,noheader | head -1"
            )
            gpu_model = stdout.read().decode().strip()
            hardware_info['gpu_model'] = gpu_model if gpu_model else "No GPU"
            
        except Exception as e:
            print(f"Error getting hardware info: {e}")
        
        return hardware_info




    def __del__(self):
        """
        객체 소멸 시 ssh close
        """
        try:
            print("ssh disconnected")
            self._ssh.close()
        except Exception as e:
            print(e)
    
    def exec(self, command):
        try:
            commands = f"echo {self._ssh_pwd} | sudo -S {command}"
            stdin, stdout, stderr = self._ssh.exec_command(commands)
            lines = stdout.readlines()
            stdin = ''.join(lines)
            return stdin, stdout, stderr
        except:
            return None
    
       
if __name__ == "__main__":
    instance = SSH(0)
    stdin, stdout, stderr = instance.exec("nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits")
    # stdin, stdout, stderr = instance.exec("cd ws_test")
    # stdin, stdout, stderr = instance.exec("ls -la")
    hardware = instance.get_hardware_info()
    print(hardware)
    # print(stdin, stdout, stderr)
    # print(stdout)
    # print(stderr)