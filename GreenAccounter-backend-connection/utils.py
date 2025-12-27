import time

class Timer:
    def timer(func):
        def wrapper(*args, **kwargs):
            start_time = time.time() 
            func(*args, **kwargs)
            end_time = time.time() - start_time
            print(f"{func.__name__}함수의 excution time: {(end_time)}s")
        return wrapper