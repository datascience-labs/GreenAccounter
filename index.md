---
layout: project
title: GreenAccounter/
project: GreenAccounter
repo: datascience-labs/GreenAccounter
permalink: /:path/:basename:output_ext
---

<div id="top" markdown="1">

<div align="center" markdown="1">

# GREENACCOUNTER

*Empowering Sustainable Innovation Through Intelligent Monitoring*

<br>

<img src="https://img.shields.io/github/last-commit/jhparkland/GreenAccounter?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/jhparkland/GreenAccounter?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/jhparkland/GreenAccounter?style=flat&color=0080ff" alt="repo-language-count">
<a href="https://doi.org/10.5281/zenodo.18067275"><img src="https://zenodo.org/badge/1048178606.svg" alt="DOI"></a>

<br>

*Built with the tools and technologies:*

<img src="https://img.shields.io/badge/Flask-000000.svg?style=flat&logo=Flask&logoColor=white" alt="Flask">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/GeoPandas-139C5A.svg?style=flat&logo=GeoPandas&logoColor=white" alt="GeoPandas">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/NumPy-013243.svg?style=flat&logo=NumPy&logoColor=white" alt="NumPy">
<br>
<img src="https://img.shields.io/badge/jQuery-0769AD.svg?style=flat&logo=jQuery&logoColor=white" alt="jQuery">
<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
<img src="https://img.shields.io/badge/Formik-2563EB.svg?style=flat&logo=Formik&logoColor=white" alt="Formik">
<img src="https://img.shields.io/badge/pandas-150458.svg?style=flat&logo=pandas&logoColor=white" alt="pandas">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat&logo=styled-components&logoColor=white" alt="styledcomponents">
<img src="https://img.shields.io/badge/Chart.js-FF6384.svg?style=flat&logo=chartdotjs&logoColor=white" alt="Chart.js">
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">

</div>

<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Roadmap](#roadmap)

---

## Overview

GreenAccounter is an all-in-one developer toolset for energy and carbon footprint monitoring within distributed systems. It integrates backend services, deep learning models, and frontend interfaces to deliver real-time environmental insights.

**Why GreenAccounter?**

This project aims to facilitate energy-efficient and environmentally conscious system management. The core features include:

- **🌐 Globe:** Multi-region electricity data collection and analysis for comprehensive environmental insights.
- **🛠️ Gear:** Automated deployment pipelines using Docker and Kubernetes for reliable, scalable infrastructure.
- **🔒 Lock:** Secure remote server management via SSH, ensuring trusted operations across cloud environments.
- **📈 Chart:** Real-time visualization of resource utilization and carbon emissions to support proactive decision-making.
- **Performance:** Utilities for monitoring and optimizing system performance and responsiveness.

---

## Features

| | Component | Details |
| :--- | :-------------- | :------------------------------------------------------------------------------------------ |
| ⚙️ | **Architecture** | <ul><li>Microservices-oriented backend with separate modules for connection, orchestrator, monitor server, and monitor carbon</li><li>React-based frontend with modular component structure</li></ul> |
| 🔩 | **Code Quality** | <ul><li>Consistent use of Python (Flask, asyncio, firebase-admin) for backend services</li><li>Frontend built with React, utilizing modern hooks and component patterns</li><li>Adheres to standard coding practices; uses requirements.txt and package.json</li></ul> |
| 📄 | **Documentation** | <ul><li>Includes README files, YAML configs, and JSON schemas</li><li>Code comments and modular README snippets inferred from project structure</li></ul> |
| 🔌 | **Integrations** | <ul><li>Firebase Admin SDK for authentication and data sync</li><li>GeoJSON and JSON files for geographic data</li><li>Dockerfile for containerization</li><li>Multiple npm packages for React UI components and charts</li><li>Python dependencies (geopandas, pandas, numpy)</li></ul> |
| 🧩 | **Modularity** | <ul><li>Backend split into distinct services: connection, orchestrator, monitor server, monitor carbon</li><li>Frontend component-based with React, supporting dynamic UI updates</li><li>Configuration files (YAML, JSON) for environment settings</li></ul> |
| 🧪 | **Testing** | <ul><li>Uses @testing-library/react, jest-dom for frontend testing</li><li>Backend testing likely via pytest (implied by requirements.txt)</li></ul> |
| ⚡️ | **Performance** | <ul><li>Asyncio and aioelectricitymaps for asynchronous data fetching</li><li>React memoization and chart libraries (recharts, nivo) for efficient rendering</li></ul> |
| 🛡️ | **Security** | <ul><li>Firebase SDK for secure auth</li><li>RSA keys for encryption/authentication</li><li>Potential use of environment variables (.env) for sensitive configs</li></ul> |

---

## Project Structure

```sh
└── GreenAccounter/
    ├── GreenAccounter-backend-connection
    ├── GreenAccounter-backend-monitor-carbon
    ├── GreenAccounter-backend-monitor-server
    ├── GreenAccounter-backend-orchestrator
    ├── GreenAccounter-frontend-gateway
    ├── LICENSE
    ├── README.md
    ├── config.py
    ├── firebase-adminsdk-fbsvc.json
    ├── make_file.bash
    ├── .env
    └── ssh_data.csv

```

---

## Project Index

<details open markdown="1">
<summary><b><code>GREENACCOUNTER/</code></b></summary>

<details markdown="1">
<summary><b>root</b></summary>

<blockquote markdown="1">

<div class='directory-path' style='padding: 8px 0; color: #666;' markdown="1">
<code><b>root</b></code>
</div>

| File Name | Summary |
| --- | --- |
| **[LICENSE]** | Provides the licensing terms for the project, establishing legal permissions and restrictions for software use, distribution, and modification. |
| **[README.md]** | Provides the foundational setup and deployment orchestration for GreenAccounter, enabling seamless integration of backend services and frontend gateway. |
| **[make_file.bash]** | Automates environment setup, configuration management, and deployment processes for the entire GreenAccounter project architecture. |
| **[firebase-adminsdk-fbsvc.json]** | Provides Firebase Admin SDK configuration essential for authenticating and managing backend interactions with Firebase services. |
| **[config.py]** | Defines configuration parameters essential for integrating Firebase services, including authentication and storage identifiers. |

</blockquote>
</details>

<details markdown="1">
<summary><b>GreenAccounter-backend-connection</b></summary>

<blockquote markdown="1">

<div class='directory-path' style='padding: 8px 0; color: #666;' markdown="1">
<code><b>⦿ GreenAccounter-backend-connection</b></code>
</div>

| File Name | Summary |
| --- | --- |
| **[utils.py]** | Provides a utility for measuring execution time of functions within the backend connection layer. |
| **[LICENSE]** | Defines licensing terms and legal usage guidelines for the backend connection components. |
| **[README.md]** | Establishes the integration layer between cloud servers and the platform, enabling seamless data exchange. |
| **[app.py]** | Provides a Flask-based API to manage remote server interactions across multiple regions via SSH. |
| **[ssh_connect.py]** | Facilitates secure remote server management by establishing SSH connections using password or private key. |
| **[DB_Module.py]** | Provides core functionalities for managing Firebase storage interactions, including model file sync. |
| **[requirements.txt]** | Manages dependencies essential for data processing, async operations, and web server functionality. |
| **[eletricmaps.py]** | Provides asynchronous access to electricity carbon intensity data from the Electricity Maps API. |
| **[dockerfile]** | Defines the Docker environment for deploying the backend application. |
| **[back.yaml]** | Defines deployment and service configurations for the Flask API backend in Kubernetes. |

<details markdown="1">
<summary><b>rsa_keys</b></summary>
<blockquote markdown="1">
| File Name | Summary |
| :--- | :--- |
| **[rsa_keys]** | Provides SSH connection keys for secure communication with cloud servers, enabling encrypted access. |
</blockquote>
</details>

</blockquote>
</details>

<details markdown="1">
<summary><b>GreenAccounter-frontend-gateway</b></summary>

<blockquote markdown="1">

<div class='directory-path' style='padding: 8px 0; color: #666;' markdown="1">
<code><b>⦿ GreenAccounter-frontend-gateway</b></code>
</div>

| File Name | Summary |
| --- | --- |
| **[nginx.conf]** | Configures Nginx as a reverse proxy and static file server for routing client requests. |
| **[README.md]** | Facilitates internal communication among microservices and manages user access through K8s load balancing. |
| **[front.yaml]** | Defines deployment, service, and ingress configurations for the React frontend within Kubernetes. |
| **[package.json]** | Defines the frontend gateway, orchestration of data visualization, and responsive user experience. |
| **[dockerfile]** | Defines a Docker build process that compiles React and deploys optimized files using Nginx. |

<details markdown="1">
<summary><b>src</b></summary>
<blockquote markdown="1">
| File Name | Summary |
| :--- | :--- |
| **[theme.js]** | Defines and manages the application's theming system, enabling dynamic mode switching. |
| **[App.js]** | Defines the main application structure and routing logic for the frontend dashboard. |
</blockquote>
</details>

</blockquote>
</details>

<details markdown="1">
<summary><b>GreenAccounter-backend-orchestrator</b></summary>

<blockquote markdown="1">

<div class='directory-path' style='padding: 8px 0; color: #666;' markdown="1">
<code><b>⦿ GreenAccounter-backend-orchestrator</b></code>
</div>

| File Name | Summary |
| --- | --- |
| **[app.py]** | Provides a Flask-based backend orchestrator managing energy-efficient ML workflows across multiple regions. |
| **[DB_Module.py]** | Interface for managing cloud storage interactions with Firebase for model and state sync. |
| **[eletricmaps.py]** | Asynchronous retrieval of current and historical carbon footprint metrics for orchestrating migrations. |

</blockquote>
</details>

</details>

---

## Getting Started

### Prerequisites

Before deploying GreenAccounter, ensure you have the following installed and configured:

* **Kubernetes Cluster**: v1.20 or higher
* **Docker**: For building and managing container images

### Installation

1. **Clone the repository:**
```sh
git clone [https://github.com/jhparkland/GreenAccounter](https://github.com/jhparkland/GreenAccounter)

```


2. **Navigate to the project directory:**
```sh
cd GreenAccounter

```



### Configuration

#### 1. Firebase Configuration

`config.py` 파일에 Firebase AUTH 키와 Storage Bucket 정보를 입력하세요. `firebase-adminsdk-fbsvc.json` 파일을 루트 디렉토리에 배치해야 합니다.

#### 2. ElectricityMaps API Key

`.env` 파일을 생성하고 API 키를 추가하세요:

```python
ELECTRICITYMAPS_API_KEY=<YOUR_KEY>

```

#### 3. SSH Configuration

`ssh_data.csv` 파일에 원격 서버 접속을 위한 자격 증명을 설정하세요. RSA 비공개 키는 각 백엔드 모듈의 `rsa_keys/` 디렉토리에 위치해야 합니다.

---

## Deployment

### Automated Kubernetes Deployment

```bash
bash make_file.bash

```

이 스크립트는 설정 파일 복사, Docker 이미지 빌드 및 푸시, Kubernetes 서비스 배포, NGINX 인글레스 설정을 자동으로 처리합니다.

---

## Deep Learning Model Setup

### 1. Docker Deployment for Models

VGGNet 모델은 클라우드 환경에 컨테이너로 배포됩니다.

```bash
cd VGGNET
docker build -t vggnet .
# 지역별 배포 예시
$ user@kr-server "docker run --gpus all --name KR -it vggnet"

```

### 2. Starting Training

원격 서버 터미널에서 다음 명령어로 학습을 시작합니다:

```bash
$ docker run -it --gpus all vggnet --epoch 100 --lr 0.001 --batch 8 --vgg_model VGG16 --cuda 0 --resumption 0

```

---

### 🎥 Demo Video

<div align="left" markdown="1">

**Watch the demo in action!**

**[Check out the demo!](https://github.com/datascience-labs/GreenAccounter/raw/refs/heads/main/GreenAccounter%20Demo%20Video.mp4)**

</div>

<div align="left"><a href="#top">⬆ Return to Top</a></div>

</div>