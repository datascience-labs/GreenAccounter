import time
import pandas as pd
import os

class Timer:
    def timer(func):
        def wrapper(*args, **kwargs):
            start_time = time.time() 
            func(*args, **kwargs)
            end_time = time.time() - start_time
            print(f"{func.__name__}함수의 excution time: {(end_time)}s")
        return wrapper
    

def get_thresholds():
    csv_path = os.getcwd() + "/ssh_data.csv"
    df = pd.read_csv(csv_path).values.tolist()
    thresholds = [data[6] for data in df]
    return thresholds

if __name__ == "__main__":
    thrs = get_thresholds()
    print(type(thrs[0]))