# Use an official NVIDIA CUDA runtime with cuDNN as a parent image
FROM nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul
# Set the working directory in the container
WORKDIR /app

# Install system dependencies and Python 3.11
RUN apt-get update && \
    apt-get install -y software-properties-common sudo gcc && \
    add-apt-repository ppa:deadsnakes/ppa --yes && \
    apt-get update && \
    apt-get install -y python3.11 python3.11-dev python3.11-distutils python3-pip && \
    update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1 && \
    update-alternatives --set python3 /usr/bin/python3.11 && \
    pip3 install --upgrade pip && \
    rm -rf /var/lib/apt/lists/*

# Copy the requirements file and install Python dependencies
COPY requirements.txt .
RUN pip3 install --no-cache-dir --ignore-installed -r requirements.txt --verbose

# Copy the rest of the application
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Set NVIDIA environment variables
ENV NVIDIA_VISIBLE_DEVICES all
ENV NVIDIA_DRIVER_CAPABILITIES compute,utility

# Run train.py when the container launches
CMD ["python3", "train.py"]