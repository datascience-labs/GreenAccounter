# Green Accounting Platform

Green Accounting Platform is a web carbon management system on a multi-cloud environment. The Green Accounting Platform moves the deep learning training workloads from the location with high carbon intensity to the location with low carbon intensity. Our platform reduces carbon emissions of the deep learning training workloads in geo-distributed clouds while providing fault-tolerant controls.

![Migration](images/migration.png)


Green Accounting Platform works in a mini-batch manner and has the following main components:

•	**Carbon Monitoring**: It monitors the carbon intensity of the location where the user trains DL by mini-batches. 

•	**Migration Controller**: Based on the current carbon intensity, the migration controller decides whether to resume the DL training or to stop the training and upload the current learning progress for the migration. When the carbon intensity violates the threshold, the training stops, and the migration starts. Our platform migrates the DL training job to the location that has a lower carbon intensity than the threshold. As the migration controller saved the learning progress beforehand, the user can train DL with the same learning progress. 


---    

![Architecture](images/architecture.png)

Tools and libraries used on Modules:  

Service Mesh  
- Manage the communication between microservices
- Monitor and visualize the service mesh

Remote Connection  
- Integrate the management of multiple clouds

Carbon Intensity  
- Trace the worldwide carbon intensity

CI/CD Pipeline
- Protect the source code with a private repository & control the version & configure the automated workflow
- Build the pipeline using cloud service & manage the deployment process

Database
- Save and synchronize a large amount of real-time data safely

Container Orchestration
- Containerize the service to deploy and run independently

Monitoring
- Trace the flow of service demand 
- Monitor system performance
- Manage the overall server status

Dashboard Configuration
- Build an interactive dashboard

Data Processing
- Analyze & calculate the data
- Monitor the system performance & preprocess the data

---


![Dashboard](images/dashboard.png)

This is the dashboard of our platform. The dashboard contains the following components:
1. Real-time carbon intensity
    - Real-time carbon intensity trends are displayed as time-series graphs for each connected cloud region
   
2. Carbon intensity map
    -  A global map visualizes regional carbon intensity through color-coded distribution

3. Training information
    -  Training status, progress, cumulative training time, and migration event logs are provided for workload monitoring

4. Carbon & Power impact
    - Cumulative carbon emissions and total power consumption are reported as numerical indicators
    - Their corresponding environmental impact is also provided

5. Hardware usage in each cloud
    - Resource utilization of CPU, GPU, and memory is visualized along with hardware specifications for each cloud

6. Carbon emissions
    - Real-time carbon emissions of connected clouds are presented as time-series graphs

7. Terminal
    - A terminal connection button enables remote control of each cloud instance from the dashboard

8. Navigation panel
    -  A navigation panel provides access to reports on cloud status, carbon emissions, and resource usage

---

## Installation and Setup
--- 
### Prerequisities: Connect the github to the cloud services that can build the pipeline and deploy the service with docker and kubernetes
For the cloud service, we have utilized the naver cloud to connect our code to the CI/CD process. You can use any cloud service, as long as it can get the code input as a trigger and use yaml file for the CI/CD process with the docker and kubernetes. Please check our workflow files from each git branches and git actions. The deployment of four backend branches should be preceded before the frontend branch in the cloud service. Once you build the deployment pipeline in that order, the rest of process will be automated with the yaml file in `.github/workflows`. 

### ssh data file for the test in cloud environment
To test our platform in the cloud environment, you need `ssh_data.csv` file as the following format:

|IP Address of Cloud Server|Username|Password|Port|Country Code|Country Name|
|-----------------|----------|--------|----|------|---|
|x.x.x.x|GreenAccountingPlatform|1234|10002|KR|Korea|

### Training the deep learning in the docker container
Once you deploy our platform in the cloud service, you can access to the terminal and start training.  
User can monitor the training process from the dashboard. Our platform will automatically migrate the training once it violates the threshold. Our platform will find the appropriate candidates from the registered cloud services.

### Role of each branch
1. main
    - Synchronize all branches for the deployment on the cloud service
    - Trigger the git action whenever the commit command happens in any branch  
2. backend-connection
    - Connect the cloud servers to our platform with ssh service
    - Register the cloud servers for the migration
3. backend-monitor-server
    - Monitor the cloud server resources
4. backend-monitor-carbon
    - Monitor the carbon intensity
5. backend-orchestrator
    - Orchestrate the migration process
6. frontend-gateway
    - Manage the communication among the micro services from all four backend branches internally
    - Manage the access from the user to our platform through kubernetes load balancer and NGINX-Ingress Service

---
## License

MIT License

Copyright (c) 2025 Data science labs at Dong-A University

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  

---
## Contact
E-mail: jeonghyeon.park@datasciencelabs.org	



   

