from __init__ import *
# from utils import Timer
import json
from config import Config

class Timer:
    def timer(func):
        def wrapper(*args, **kwargs):
            start_time = time.time() 
            func(*args, **kwargs)
            end_time = time.time() - start_time
            print(f"{func.__name__}함수의 excution time: {(end_time)}s")
        return wrapper

class FireBase:
    def __init__(self, model, name):
        self.model = model
        self.app = credentials.Certificate(Config.FIREBASE_AUTH_KEY)
        self.firebase_app = firebase_admin.initialize_app(self.app,{
                                                        'storageBucket': Config.FIREBASE_STORAGE_BUCKET,  # Replace with your actual bucket name
                                                        }, name= name)
        self.path = os.getcwd()
        self.file_path = f"{self.path}/{self.model}/file/model.pt"
        self.dest_path = f"{self.model}/model.pt"
        self.resource_path = f"{self.model}/resource.json"
        self.resource_file_path = f"{self.path}/{self.model}/file/resource.json" 
        self.migration_file_path = f"{self.model}/migration.json"
        self.migration_dest_file_path = f"{self.path}/web/flask-app/migration.json"
        self.parser_file_path = f"{self.model}/parser.json"
        self.parser_dest_file_path = f"{self.path}/{self.model}/parser.json"
        
    @Timer.timer
    def upload_to_firebase(self):
        bucket = storage.bucket(app=self.firebase_app)
        blob = bucket.blob(self.dest_path)
        blob.upload_from_filename(self.file_path)
        print(f"File uploaded to {self.dest_path}")
        
    @Timer.timer
    def download_from_firebase(self):
        bucket = storage.bucket(app=self.firebase_app)  # Make sure to pass the initialized app
        blob = bucket.blob(self.dest_path)
        blob.download_to_filename(self.file_path)
        print(f"File downloaded to {self.file_path}")
    
    @Timer.timer
    def upload_current_resource(self, used_cpu, used_memory, total_memory, used_gpu, total_gpu, epoch, clock, max_clock, learning_time, carbon_emission, carbons):
        bucket = storage.bucket(app=self.firebase_app)
        blob = bucket.blob(self.resource_path)
        try:
            resources = json.dumps({'cpu' : used_cpu,
                            'memory' : used_memory,
                            'total_memory' : total_memory,
                            'gpu' : used_gpu,
                            'total_gpu' : total_gpu,
                            'epoch' : epoch,
                            'clock' : clock,
                            'max_clock' : max_clock,
                            'learning_time' : learning_time,
                            'carbon_emission' : carbon_emission,
                            'CI' : carbons})
            
            blob.upload_from_string(resources, content_type='application/json')
            # print(f"File uploaded to {self.resource_path}")
        except:
            resources = json.dumps({'cpu' : 0,
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
            
            blob.upload_from_string(resources, content_type='application/json')
            print(f"File uploaded to {self.resource_path} Failed")
        
    def get_resource(self):
        try:
            bucket = storage.bucket(app=self.firebase_app)  # Make sure to pass the initialized app
            blob = bucket.blob(self.resource_path)
            resources = blob.download_as_string()
            resources = json.loads(resources.decode('utf-8'))
            return resources
        except:
            return None
        
    def get_resource_path(self):
        return self.resource_file_path
    
    def upload_migration(self, is_migration, migration_progress, is_learning, region, region_full): # True or False
        resources = json.dumps({'migration' : is_migration, 'migration_progress' : migration_progress, 'is_learning' : is_learning, 'region' : region, 'region_full' : region_full})
        bucket = storage.bucket(app=self.firebase_app)
        blob = bucket.blob(self.migration_file_path)
        blob.upload_from_string(resources, content_type='application/json')
        print(f"File Uploade to {self.migration_file_path}")
    
    def download_migration(self):
        bucket = storage.bucket(app=self.firebase_app)  # Make sure to pass the initialized app
        blob = bucket.blob(self.migration_file_path)
        blob.download_to_filename(self.migration_dest_file_path)
        print(f"File downloaded to {self.migration_dest_file_path}")

    def upload_parser(self, parser):
        resources = json.dumps(parser)
        bucket = storage.bucket(app=self.firebase_app)
        blob = bucket.blob(self.parser_file_path)
        blob.upload_from_string(resources, content_type='application/json')
        print(f"File Uploade to {self.parser_file_path}")
    
    def get_parser(self):
        bucket = storage.bucket(app=self.firebase_app)
        blob = bucket.blob(self.parser_file_path)
        parser = blob.download_as_string()
        parser = json.loads(parser.decode('utf-8'))
        return parser 
    
    def get_data(self):
        bucket = storage.bucket(app=self.firebase_app)
        blob = bucket.blob(self.migration_file_path)
        file_contents = blob.download_as_string()
        file_contents = json.loads(file_contents.decode('utf-8'))
        return file_contents
    