import paramiko
import pandas as pd
import os
 
class SSH:
    def __init__(self, ssh_num):
        self._ssh_num = ssh_num
        self._ssh, self._ssh_pwd = self.connect_ssh()
    
    def connect_ssh(self):
        print(os.getcwd())
        try:
            csv_path = os.getcwd() + "/ssh_data.csv"
            df = pd.read_csv(csv_path).values.tolist()[self._ssh_num] # ip, user, password, port 순으로 저장
            key_path = os.getcwd() + df[-1]
            ip, user, pwd, port = df[0], df[1], str(df[2]), df[3]

            # private key Load
            private_key = paramiko.RSAKey.from_private_key_file(key_path)

            ssh = paramiko.SSHClient()
            ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            ssh.connect(ip, username=user, pkey=private_key, port=port) # password 대신 private key 사용
            print("ssh connected with key") # with key 멘트 추가
            return ssh, None # private key 사용으로 pw 리턴할 필요 없음            
        except Exception as e:
            print(e)
            return None, None # retyurn 행 추가
            
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
            print(stdin)
            return stdin, stdout, stderr
        except:
            return None
    
       
if __name__ == "__main__":
    instance = SSH(1)
    # stdin, stdout, stderr = instance.exec("free | awk '/^Mem:/ {print  $3 / 1024 \",\"  $2 / 1024 }'")
    # stdin, stdout, stderr = instance.exec("cd ws_test")
    stdin, stdout, stderr = instance.exec("ls -la")
    # print(stdin, stdout, stderr)
    # print(stdout)
    # print(stderr)