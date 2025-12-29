from __init__ import *
from DB_Module import FireBase
from electricmaps import electric
from dotenv import load_dotenv
load_dotenv()

class GPUs:
    def __init__(self, gpu_id, model, resumption, ssh_server):
        self.used_gpu = [0]
        self.return_info = []
        self.carbon_emissions = [0]
        #DB 
        self.path = os.getcwd()
        df = pd.read_csv(self.path+"/carbon_config.csv").values.tolist()[int(ssh_server)]
        self._fb = FireBase(model, model)
        
        self.gpu_id = gpu_id
        self.model = model
        self.epoch = 0
        self.epoch_no = 0
        self.is_learning = False
        
        
        self._carbons = None
        self._elec = electric(token=os.getenv("ELECTRICITYMAPS_API_KEY"))
        
        self._region = df[0]
        self._region_full = df[1]
        self._threshold = float(df[2])
        self._carbons = asyncio.run(self._elec.get_carbon_intensity(self._region))
        self._cal_carbon = self._carbons / (60.0 * 12.0) # 5초마다

        self.learning_time = time.time()
        if resumption == 0:
            self.learned_time = 0
        else:
            try:
                self.download_checkpoint()
                json_data = self.get_resource()
                self.learned_time = json_data['learning_time']
                self.carbon_emissions.append(json_data['carbon_emission'])
                self.used_gpu.append(json_data['total_gpu'])
                print(self.carbon_emissions, self.used_gpu)
            except Exception as e:
                print(e)
                self.learned_time = 0        
        
        # Current 사용량 알기
        self.default_gpu_usage = None
        self.default_gpu_usage = self.get_gpu_usage()
        # asyncio.run(self.gpus_measurement())
        thread = threading.Thread(target=self.gpus_measurement)
        thread.start()
        
        
    # GPU 전력 사용량 측정 함수
    def get_gpu_usage(self):
        # sudo nvidia-smi command 
        command = f"nvidia-smi --id {self.gpu_id} --query-gpu=power.draw --format=csv,noheader,nounits"
        # command = f"nvidia-smi"
        result = subprocess.check_output(command, shell=True, universal_newlines=True)
        # result parsing
        power_draw = float(result.strip())  # Convert to kW
        if self.default_gpu_usage != None:
            power_draw -= self.default_gpu_usage
        if power_draw > 0:
            return power_draw
        else:
            return 0.0
        
    def get_gpu_freq_info(self):
        try:
            command = f"nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits"
            result = subprocess.check_output(command, shell=True, universal_newlines=True)
            result = result.split('\n')[0]
            # Getting GPU info by sudo nvidia-smi query
            # command = f"nvidia-smi --id {self.gpu_id} --query-gpu=clocks.current.memory,clocks.current.graphics --format=csv,noheader,nounits"
            # result = subprocess.check_output(command, shell=True, universal_newlines=True)

            # # 결과 파싱
            # lines = result.strip().split('\n')
            # memory_clock, core_clock = map(int, lines[0].strip().split(','))
            return float(result), 2475
    
        except Exception as e:
            print("Error:", e)
            return None

    # CPU 사용량 모니터링
    def monitor_cpu(self):
        try:
            cpu_percent_command = "top -bn1 | grep \"Cpu(s)\" | sed \"s/.*, *\([0-9.]*\)%* id.*/\\1/\" | awk '{print 100 - $1}'"
            result = subprocess.check_output(cpu_percent_command, shell=True, universal_newlines=True)
            result = float(result)
            return result
        except Exception as e:
            print(e)
            cpu_percent = psutil.cpu_percent(percpu=True)
            return (min(cpu_percent) + max(cpu_percent)) / 2

    # 메모리 사용량 모니터링
    def monitor_memory(self):
        try:
            memory_command = "free | awk '/^Mem:/ {print  $3 / 1024 \",\"  $2 / 1024 }'"
            result = subprocess.check_output(memory_command, shell=True, universal_newlines=True)
            used_memory, total_memory = result.strip().split(',')
            return float(used_memory), float(total_memory)
        except Exception as e:
            print(e)
            memory = psutil.virtual_memory()
            used_memory = memory.used / (1024*1024*1024) # 메모리 사용량을 GB 단위로 변환
            available_memory = memory.available / (1024*1024*1024) # 사용가능한  메모리 양을 GB 단위로 변환
            total_memory = used_memory + available_memory
            return used_memory, total_memory
    
    def gpus_measurement(self):
        while self.is_learning:
            if self._carbons != None:
                self.upload_resource()
            time.sleep(5)
        print("FIN")
        
    def upload_resource(self): # Firebase에 현재 Resource Upload
        cpus= self.monitor_cpu()
        memorys, total_memorys = self.monitor_memory()
        gpus = round(self.get_gpu_usage(), 2)
        clock, max_clock = self.get_gpu_freq_info()
        epoch = self.epoch
        learning_time = time.time() - self.learning_time
        use_gpu = float(gpus) if gpus != 0.0 else 0.0 # 5초마다
        self.used_gpu.append(use_gpu)
        emission = self.calculate_carbons_emission(use_gpu)
        self.carbon_emissions.append(emission)
        self._fb.upload_current_resource(round(cpus, 2), round(memorys, 2), round(total_memorys, 2), gpus, sum(self.used_gpu), epoch, clock, max_clock, learning_time+self.learned_time, sum(self.carbon_emissions), self._carbons, self.epoch_no)
        # return round(cpus, 2), round(memorys, 2), round(total_memorys, 2), round(gpus, 2), epoch, clock, max_clock
    
    def download_checkpoint(self):
        self._fb.download_from_firebase()
    
    def get_resource(self):
        return self._fb.get_resource()
    
    def upload_checkpoint(self):
        self._fb.upload_to_firebase()
    
    def calculate_carbons_emission(self, used_gpus):
        if self._carbons != None:
            # Carbon Emissions(gCO2eq) = Carbon Intensity(gCO2eq/kWh) * used_gpu(kWh) ==> usedGPU is Wh. used_gpu(kWh) = used(Wh) * (1 / 1000.0)
            carbon_emission = (self._cal_carbon * used_gpus) / (60.0 * 12.0)
            return carbon_emission
        else:
            return 0.0
            
    def epoch_update(self, epoch, epoch_no):
        self.epoch = epoch
        self.epoch_no = epoch_no
    
    def learning_update(self, is_learning):
        self.is_learning = is_learning
        if self.is_learning == True:
            thread = threading.Thread(target=self.gpus_measurement)
            thread.start()
    
    def update_carbon(self):
        self._carbons = asyncio.run(self._elec.get_carbon_intensity(self._region)) # 5s 간격
        self._cal_carbon = self._cal_carbon
        
    def can_learning(self):
        self.update_carbon()
        if self._carbons >= self._threshold:
            return False
        else:
            return True
    
    def upload_migration(self, is_migration):
        self._fb.upload_migration(is_migration, False, self.is_learning, self._region ,self._region_full)
    
    @staticmethod
    def get_parser(model):
        _fb = FireBase(model, "down")
        parser = _fb.get_parser()
        del _fb
        return parser

if __name__ == "__main__":
    gpus = GPUs(gpu_id="0", model="VGGNet", resumption=1, ssh_server=1, threshold=250)

    # gpus.upload_resource()
    # gpus.download_resource()
    # print(gpus.get_all_resource())
    # thread = threading.Thread(target=gpus.monitor_cpu)
    # thread.start()
    # print(gpus.get_gpu_usage())
    # gpus.learning_start()
