<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# GREENACCOUNTER

<em>Empowering Sustainable Innovation Through Intelligent Monitoring</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/jhparkland/GreenAccounter?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/jhparkland/GreenAccounter?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/jhparkland/GreenAccounter?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

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

|      | Component       | Details                                                                                     |
| :--- | :-------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>Microservices-oriented backend with separate modules for connection, orchestrator, monitor server, and monitor carbon</li><li>React-based frontend with modular component structure</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent use of Python (Flask, asyncio, firebase-admin) for backend services</li><li>Frontend built with React, utilizing modern hooks and component patterns</li><li>Adheres to standard coding practices; uses requirements.txt and package.json for dependency management</li></ul> |
| 📄 | **Documentation** | <ul><li>Includes README files, YAML configs, and JSON schemas</li><li>Code comments and modular README snippets inferred from project structure</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Firebase Admin SDK for authentication and data sync</li><li>GeoJSON and JSON files for geographic data</li><li>Dockerfile for containerization</li><li>Multiple npm packages for React UI components and charts</li><li>Python dependencies for data processing (geopandas, pandas, numpy)</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Backend split into distinct services: connection, orchestrator, monitor server, monitor carbon</li><li>Frontend component-based with React, supporting dynamic UI updates</li><li>Configuration files (YAML, JSON) for environment and deployment settings</li></ul> |
| 🧪 | **Testing**       | <ul><li>Uses @testing-library/react, jest-dom for frontend testing</li><li>Backend testing likely via pytest (implied by requirements.txt)</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Asyncio and aioelectricitymaps for asynchronous data fetching</li><li>React memoization and chart libraries (recharts, nivo) for efficient rendering</li></ul> |
| 🛡️ | **Security**      | <ul><li>Firebase SDK for secure auth</li><li>RSA keys for encryption/authentication</li><li>Potential use of environment variables (.env) for sensitive configs</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Backend: Python packages (flask, firebase-admin, geopandas, pandas, numpy, asyncio)</li><li>Frontend: React, react-router, react-spring, chart.js, various MUI and icon libraries</li><li>Build tools: pip, npm, makefile</li></ul> |

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

### Project Index

<details open>
	<summary><b><code>GREENACCOUNTER/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>- Provides the licensing terms for the project, establishing legal permissions and restrictions for software use, distribution, and modification<br>- It ensures users understand their rights and responsibilities, supporting open-source collaboration and safeguarding intellectual property within the overall architecture<br>- This foundational document underpins the projects open-source ecosystem by clarifying legal boundaries.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides the foundational setup and deployment orchestration for GreenAccounter, enabling seamless integration of backend services, frontend gateway, and deep learning models<br>- Coordinates configuration, API keys, SSH credentials, and Kubernetes deployment to facilitate region-specific electricity data processing and carbon monitoring within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/make_file.bash'>make_file.bash</a></b></td>
					<td style='padding: 8px;'>- Automates environment setup, configuration management, and deployment processes for the entire GreenAccounter project architecture<br>- It ensures consistent configuration distribution across multiple backend services, builds Docker images for frontend and backend components, and orchestrates deployment on Kubernetes, including ingress setup<br>- This file streamlines the deployment pipeline, enabling efficient and reliable release of the applications microservices ecosystem.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/firebase-adminsdk-fbsvc.json'>firebase-adminsdk-fbsvc.json</a></b></td>
					<td style='padding: 8px;'>- Provides Firebase Admin SDK configuration essential for authenticating and managing backend interactions with Firebase services<br>- It enables secure server-side operations such as user management, data synchronization, and cloud functions integration within the overall architecture, ensuring seamless and authorized communication between the backend and Firebase platform.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/config.py'>config.py</a></b></td>
					<td style='padding: 8px;'>- Defines configuration parameters essential for integrating Firebase services, including authentication and storage<br>- Serves as a centralized setup point to manage sensitive credentials and resource identifiers, ensuring secure and consistent access across the application<br>- Facilitates seamless communication with Firebase, supporting features like user authentication and file storage within the overall system architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- GreenAccounter-backend-connection Submodule -->
	<details>
		<summary><b>GreenAccounter-backend-connection</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ GreenAccounter-backend-connection</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/utils.py'>utils.py</a></b></td>
					<td style='padding: 8px;'>- Provides a utility for measuring execution time of functions within the backend connection layer of GreenAccounter<br>- It facilitates performance monitoring by enabling developers to easily track and optimize the runtime of critical processes, supporting overall system efficiency and responsiveness in the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>- Defines licensing terms and legal usage guidelines for the project, ensuring proper attribution and distribution compliance within the overall architecture<br>- It safeguards intellectual property rights while facilitating open-source collaboration and reuse across the backend connection components of GreenAccounter.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Establishes the integration layer between cloud servers and the platform, enabling seamless data exchange and communication<br>- Facilitates secure and reliable connectivity within the overall architecture, ensuring that backend services can interact efficiently with cloud infrastructure to support platform functionalities and scalability.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/app.py'>app.py</a></b></td>
					<td style='padding: 8px;'>- Provides a Flask-based API to manage remote server interactions across multiple regions via SSH, enabling command execution, resource monitoring, and migration status updates<br>- Integrates with a Firebase database for state management and supports containerized training workflows, facilitating coordinated operations within a distributed, multi-region architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/ssh_connect.py'>ssh_connect.py</a></b></td>
					<td style='padding: 8px;'>- Facilitates secure remote server management by establishing SSH connections using password or private key authentication<br>- Enables execution of commands on remote machines, supporting automation and monitoring tasks within the overall system architecture<br>- Integrates seamlessly with backend workflows to ensure reliable communication with external servers, enhancing operational efficiency and system robustness.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/DB_Module.py'>DB_Module.py</a></b></td>
					<td style='padding: 8px;'>- Provides core functionalities for managing Firebase storage interactions within the project, including uploading and downloading model files, resources, migration states, and parser configurations<br>- Facilitates seamless data exchange and resource monitoring essential for distributed model training and deployment workflows, ensuring efficient synchronization and state management across the system architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/requirements.txt'>requirements.txt</a></b></td>
					<td style='padding: 8px;'>- Facilitates backend connectivity by managing dependencies essential for data processing, asynchronous operations, web server functionality, and external API integrations<br>- Supports the overall architecture by enabling efficient data handling, real-time communication, and secure external service interactions, thereby ensuring a robust foundation for the applications backend services and seamless integration within the larger system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/eletricmaps.py'>eletricmaps.py</a></b></td>
					<td style='padding: 8px;'>- Provides asynchronous access to electricity carbon intensity data from the Electricity Maps API, enabling retrieval of current and historical carbon footprint metrics for specified regions<br>- Integrates data processing to adjust timestamps and organize intensity trends over time, supporting environmental impact analysis within the broader energy management system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/dockerfile'>dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the Docker environment for deploying the backend application, ensuring consistent setup and dependencies<br>- It facilitates containerized execution of the Python-based service, enabling seamless development, testing, and deployment within the overall architecture<br>- This setup supports scalable and isolated backend operations, integrating smoothly with other components of the GreenAccounter system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/back.yaml'>back.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines deployment and service configurations for the Flask API backend, enabling containerized operation within the Kubernetes cluster<br>- Facilitates scalable, reliable access to backend functionalities by orchestrating container deployment and network exposure, integral to the overall architectures backend service layer<br>- Ensures seamless integration and communication between the backend and other system components.</td>
				</tr>
			</table>
			<!-- rsa_keys Submodule -->
			<details>
				<summary><b>rsa_keys</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ GreenAccounter-backend-connection.rsa_keys</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-connection/rsa_keys/rsa_keys'>rsa_keys</a></b></td>
							<td style='padding: 8px;'>- Provides SSH connection keys for secure communication with cloud servers, enabling authenticated and encrypted access within the backend infrastructure<br>- Integral to establishing trusted connections in the overall architecture, it supports seamless and secure server management, ensuring reliable deployment and operational workflows across the GreenAccounter backend environment.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- GreenAccounter-frontend-gateway Submodule -->
	<details>
		<summary><b>GreenAccounter-frontend-gateway</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ GreenAccounter-frontend-gateway</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>- Defines licensing terms for the project, ensuring proper usage, distribution, and modification rights<br>- It clarifies legal boundaries and obligations for contributors and users, supporting the projects open-source architecture by safeguarding intellectual property while facilitating collaboration and reuse across the entire codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/nginx.conf'>nginx.conf</a></b></td>
					<td style='padding: 8px;'>- Configures Nginx as a reverse proxy and static file server for the frontend gateway, routing client requests to appropriate backend services and serving static assets<br>- It ensures seamless integration between the user interface and backend APIs, facilitating efficient request handling and resource delivery within the overall application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Facilitates internal communication among microservices across all backend branches and manages user access through Kubernetes load balancing and NGINX Ingress<br>- Ensures seamless integration and secure platform entry, supporting the overall architectures modularity and scalability<br>- This setup is essential for orchestrating service interactions and maintaining reliable user authentication within the distributed system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/front.yaml'>front.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines deployment, service, and ingress configurations for the React frontend within the Kubernetes architecture<br>- Facilitates routing of user requests to the React application and backend Flask services, enabling seamless integration and scalable access to the web interface and API endpoints across the entire system<br>- Ensures proper traffic management and service discovery in the microservices environment.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the frontend gateway for the GreenAccounter project, enabling seamless interaction between the user interface and backend services<br>- It orchestrates data visualization, user interactions, and real-time updates, forming the core layer that delivers an intuitive and responsive user experience within the overall architecture<br>- This setup supports efficient data management and dynamic rendering across the applications features.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/dockerfile'>dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines a Docker build process that compiles the React frontend application in a Node environment, then deploys the optimized static files using Nginx for efficient serving<br>- Facilitates containerized deployment, ensuring a streamlined, consistent, and scalable delivery of the frontend interface within the overall architecture.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ GreenAccounter-frontend-gateway.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/theme.js'>theme.js</a></b></td>
							<td style='padding: 8px;'>- Defines and manages the applications theming system, enabling dynamic light and dark mode switching<br>- It provides consistent color tokens, palette configurations, and typography styles aligned with the selected mode<br>- Facilitates seamless theme toggling through context, ensuring a cohesive visual experience across the entire frontend architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/testtheme.js'>testtheme.js</a></b></td>
							<td style='padding: 8px;'>- Defines a dynamic theming system for the application, enabling seamless switching between light and dark modes<br>- It manages color tokens, theme configurations, and typography styles, ensuring consistent visual design across the interface<br>- Additionally, it provides context for toggling color modes, supporting a responsive and customizable user experience within the overall architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/index.js'>index.js</a></b></td>
							<td style='padding: 8px;'>- Initialize the React application by rendering the main App component within a strict mode and routing context<br>- This setup establishes the foundational entry point for the frontend gateway, enabling client-side navigation and ensuring a robust, maintainable user interface structure aligned with the overall architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/App.js'>App.js</a></b></td>
							<td style='padding: 8px;'>- Defines the main application structure and routing logic for the frontend dashboard, managing user authentication state, theme customization, and layout components such as sidebar, topbar, and footer<br>- Facilitates navigation across various feature pages like analytics, reports, and data visualizations, ensuring a cohesive user experience within the overall architecture.</td>
						</tr>
					</table>
					<!-- components Submodule -->
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ GreenAccounter-frontend-gateway.src.components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/LineChart.jsx'>LineChart.jsx</a></b></td>
									<td style='padding: 8px;'>- Render a responsive line chart visualizing real-time carbon intensity data across multiple regions<br>- Fetches data asynchronously, transforms it into a suitable format, and displays it with customizable themes and legends<br>- Supports dashboard integration with simplified axis labels and styling, providing an intuitive overview of energy consumption patterns over time within the overall architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/MainGeography.jsx'>MainGeography.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a comprehensive dashboard component visualizing regional migration, training status, and resource metrics related to AI model deployment<br>- It integrates real-time data fetching, migration simulation, and progress indicators, enabling users to monitor and manage AI training and migration processes across different geographic regions within the overall system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/CloudUsageChart.jsx'>CloudUsageChart.jsx</a></b></td>
									<td style='padding: 8px;'>- Visualizes regional CO2 emission data over time through interactive line charts, enabling users to monitor environmental impact metrics for US, UK, and KR regions<br>- Incorporates dynamic data selection, thematic styling, and a terminal connection feature for detailed insights, supporting environmental analysis and operational management within the broader application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/BarChart.jsx'>BarChart.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a responsive, visually appealing bar chart component visualizing CO2 emissions data across US, UK, and Korea over time<br>- It aggregates individual country data to display total emissions, supporting environmental monitoring and comparative analysis within the broader dashboard architecture<br>- The component enhances data comprehension through clear labeling, color coding, and interactive elements.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/Training.jsx'>Training.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user interaction with backend training endpoints by providing a terminal-like interface for submitting commands and displaying responses<br>- Manages real-time command input, fetches dynamic password data, and renders output or error messages, integrating seamlessly into the frontend architecture to enable interactive training or command execution workflows within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/StatBox.jsx'>StatBox.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a reusable UI component for displaying key statistical metrics within the applications dashboard<br>- It visually summarizes data points such as titles, subtitles, icons, progress indicators, and percentage increases, facilitating quick insights and enhancing user experience across the platform<br>- This component integrates seamlessly into the overall architecture to support consistent, dynamic data presentation.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/PieChart.jsx'>PieChart.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a reusable pie chart component utilizing the @nivo/pie library to visualize categorical data within the applications frontend<br>- It integrates with the overall theme for consistent styling and supports customization of visual elements like legends, labels, and patterns<br>- This component enhances data comprehension by presenting interactive, visually appealing pie charts aligned with the applications design system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/MapProgressCircle.jsx'>MapProgressCircle.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides real-time visual monitoring of key system resources such as CPU, GPU, Memory, and Epoch progress within a map interface<br>- Fetches dynamic data at regular intervals, rendering intuitive circular progress indicators with tooltips for enhanced clarity<br>- Integrates seamlessly into the overall architecture to facilitate efficient resource tracking and performance assessment across locations.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/GeographyChart.jsx'>GeographyChart.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive geographical visualization of carbon intensity and resource data across regions, integrating real-time updates and migration status indicators<br>- Facilitates monitoring environmental impact and resource utilization globally, supporting decision-making and operational adjustments within the broader system architecture<br>- Enhances user engagement through dynamic tooltips and responsive map features.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/ProgressCircle.jsx'>ProgressCircle.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides real-time visualization of key resource metrics such as CPU, GPU, and memory usage within the applications monitoring dashboard<br>- Facilitates quick assessment of system health and resource consumption at specific locations, supporting proactive management and troubleshooting in the overall architecture<br>- Ensures users receive dynamic, intuitive feedback on resource utilization through animated progress indicators.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/Header.jsx'>Header.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a flexible header component for the frontend gateway, enabling consistent display of page titles, subtitles, and subsubtitles<br>- It enhances the overall user interface by offering a reusable, styled header section that aligns with the applications theme, contributing to a cohesive and visually appealing architecture across different pages.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/Footer.jsx'>Footer.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a footer component that displays branding and attribution for the GreenAccounter frontend application<br>- It visually separates the footer section with a divider and presents a right-aligned message indicating that carbon intensity data is powered by Electricity Maps<br>- This component enhances the applications overall layout by delivering consistent branding and informational context across pages.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/TrainSection.jsx'>TrainSection.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive interface for monitoring and managing training resources within the application<br>- It displays real-time resource utilization metrics through visual charts and enables execution of remote commands via SSH, facilitating efficient resource oversight and control during training processes in the overall system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/components/CircleChart.jsx'>CircleChart.jsx</a></b></td>
									<td style='padding: 8px;'>- Render visual representations of resource utilization through animated pie charts, enabling users to quickly interpret proportional data<br>- Facilitates intuitive understanding of multiple resource metrics simultaneously, supporting data-driven decision-making within the broader application architecture<br>- Enhances user experience by providing clear, interactive insights into resource distribution across various categories.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- scenes Submodule -->
					<details>
						<summary><b>scenes</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes</b></code>
							<!-- team Submodule -->
							<details>
								<summary><b>team</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.team</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/team/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- This code file defines the Team scene within the frontend gateway of the GreenAccounter project<br>- Its primary purpose is to present a comprehensive overview of team-related data, including visual summaries and detailed tabular information<br>- The component leverages Material-UI for a responsive and visually consistent interface, incorporating icons, charts, and data tables to facilitate user understanding and interaction<br>- Overall, it serves as a centralized view for managing and analyzing team metrics, integrating seamlessly into the application's broader architecture to support data-driven decision-making and user engagement.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- pie Submodule -->
							<details>
								<summary><b>pie</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.pie</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/pie/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Render a visual representation of cloud resource usage through a pie chart, providing users with an intuitive overview of cloud consumption patterns<br>- Integrates header and chart components within the frontend gateway, supporting the overall architecture by facilitating clear, accessible data visualization for cloud monitoring and analysis.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- bar Submodule -->
							<details>
								<summary><b>bar</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.bar</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/bar/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays a bar chart visualizing daily CO2 emission levels for the US, UK, and Korea, supporting environmental monitoring within the application<br>- It integrates header information and chart components to provide users with an intuitive overview of carbon emission data, contributing to the platforms focus on environmental impact analysis and data-driven insights.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- contacts Submodule -->
							<details>
								<summary><b>contacts</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.contacts</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/contacts/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user interface for viewing and managing contact information within the application<br>- It displays a data grid populated with mock contact data, enabling users to browse, search, and interact with contact details efficiently<br>- Integrates seamlessly into the overall architecture by supporting data visualization and user interaction in the contacts management module.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- calendar Submodule -->
							<details>
								<summary><b>calendar</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.calendar</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/calendar/calendar.jsx'>calendar.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides an interactive calendar interface enabling users to view, add, and delete events within the application<br>- Integrates full calendar functionalities with a sidebar listing current events, supporting dynamic event management and visualization to enhance scheduling capabilities across the platform.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- form Submodule -->
							<details>
								<summary><b>form</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.form</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/form/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Facilitates user authentication by providing a login interface with validation, including CSV file upload for bulk data verification<br>- Manages user interactions, error handling, and navigation within the application, while also offering a contact dialog for support<br>- Integrates form management and responsive design to ensure seamless user experience across devices.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- faq Submodule -->
							<details>
								<summary><b>faq</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.faq</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/faq/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides a user-friendly FAQ interface within the application, enabling users to access common questions and answers efficiently<br>- It enhances the overall user experience by organizing information into expandable sections, supporting quick navigation and clarity<br>- This component integrates seamlessly into the frontend architecture, contributing to the applications informational and support features.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- geography Submodule -->
							<details>
								<summary><b>geography</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.geography</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/geography/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Render a geographical visualization of carbon usage data within the applications mapping interface<br>- It integrates header and chart components to display environmental metrics, supporting the overall architecture by providing an interactive, visual representation of geographic data relevant to sustainability tracking<br>- This enhances user understanding of spatial carbon impact across regions.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- line Submodule -->
							<details>
								<summary><b>line</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.line</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/line/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Defines the layout and presentation of the carbon intensity line chart within the frontend gateway<br>- It orchestrates the display of a header and a responsive chart component, integrating visual elements to facilitate user understanding of carbon intensity trends<br>- This component serves as a key visual interface for monitoring environmental data in the overall application architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- invoices Submodule -->
							<details>
								<summary><b>invoices</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.invoices</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/invoices/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- Displays a comprehensive invoice management interface within the application, presenting a list of invoice balances in a structured data grid<br>- Integrates thematic styling for visual consistency and user interaction, enabling users to view, select, and analyze invoice details efficiently as part of the overall financial overview and reporting architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- global Submodule -->
							<details>
								<summary><b>global</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.global</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/global/Topbar.jsx'>Topbar.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides the top navigation bar for the applications user interface, enabling theme toggling between light and dark modes and offering quick access to user profile options<br>- Integrates visual icons and layout structure to support consistent, accessible navigation across the platform, contributing to a cohesive and user-friendly experience within the overall frontend architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/global/Sidebar.jsx'>Sidebar.jsx</a></b></td>
											<td style='padding: 8px;'>- Defines a responsive, fixed sidebar navigation component for the Green Accounting Platform, enabling users to seamlessly access key sections such as Dashboard, Clouds, and Charts<br>- It manages layout, theme-based styling, and collapsible functionality, ensuring consistent navigation experience across the applications main interface<br>- The component integrates visual elements and routing to facilitate intuitive user interaction within the overall architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- dashboard Submodule -->
							<details>
								<summary><b>dashboard</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.dashboard</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/dashboard/index.jsx'>index.jsx</a></b></td>
											<td style='padding: 8px;'>- The <code>index.jsx</code> file within the dashboard scene serves as the central hub for rendering the main overview dashboard of the application<br>- It orchestrates the layout and presentation of key performance metrics, visualizations, and interactive elements, providing users with a comprehensive snapshot of system activity and business insights<br>- This component integrates various chart types, statistical summaries, and UI controls to facilitate data-driven decision-making, aligning with the overall architectures goal of delivering a user-friendly, data-rich interface for monitoring and analyzing operational data within the GreenAccounter platform.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- resourceInfo Submodule -->
							<details>
								<summary><b>resourceInfo</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ GreenAccounter-frontend-gateway.src.scenes.resourceInfo</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-frontend-gateway/src/scenes/resourceInfo/resourceInfo.jsx'>resourceInfo.jsx</a></b></td>
											<td style='padding: 8px;'>- Provides real-time visualization of hardware resource utilization and environmental metrics within a specific location<br>- Fetches and displays CPU, GPU, memory usage, and environmental impact data, updating periodically to support monitoring and decision-making in the overall system architecture<br>- Enhances situational awareness of resource status across distributed components.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- GreenAccounter-backend-orchestrator Submodule -->
	<details>
		<summary><b>GreenAccounter-backend-orchestrator</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ GreenAccounter-backend-orchestrator</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/utils.py'>utils.py</a></b></td>
					<td style='padding: 8px;'>- Provides a utility for measuring and logging the execution time of functions within the backend orchestrator<br>- Enhances performance monitoring by enabling developers to identify bottlenecks and optimize processing efficiency across the system<br>- This timing utility supports overall system reliability and performance tuning in the GreenAccounter architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>- Defines licensing terms for the project, ensuring proper legal use, distribution, and modification<br>- It clarifies rights and responsibilities for contributors and users, supporting open-source collaboration within the overall architecture<br>- The license underpins the projects commitment to open, compliant, and sustainable development practices.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Coordinates the overall migration process within the backend architecture, ensuring seamless transition and integration across system components<br>- Serves as the central orchestrator that manages migration workflows, maintains process consistency, and facilitates communication between different modules, thereby supporting the projects goal of efficient and reliable system updates.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/app.py'>app.py</a></b></td>
					<td style='padding: 8px;'>- Provides a Flask-based backend orchestrator managing energy-efficient machine learning workflows across multiple regions<br>- It monitors carbon intensity, controls migration and training states, and interfaces with remote servers via SSH<br>- Integrating database updates and external electric maps data, it ensures dynamic resource allocation and migration coordination within a distributed, energy-aware architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/ssh_connect.py'>ssh_connect.py</a></b></td>
					<td style='padding: 8px;'>- Facilitates secure remote server management by establishing SSH connections using password or private key authentication<br>- Enables execution of administrative commands on remote machines, supporting automation and monitoring tasks within the backend architecture<br>- Integrates seamlessly with the overall system to ensure reliable remote interactions essential for orchestrating distributed operations.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/DB_Module.py'>DB_Module.py</a></b></td>
					<td style='padding: 8px;'>- Provides an interface for managing cloud storage interactions with Firebase, enabling seamless upload, download, and synchronization of model files, resources, migration states, and parsing configurations<br>- Facilitates efficient resource tracking and model management within the overall architecture, supporting distributed training workflows and ensuring data consistency across the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/requirements.txt'>requirements.txt</a></b></td>
					<td style='padding: 8px;'>- Manages project dependencies essential for data processing, API interactions, and asynchronous operations within the backend orchestrator<br>- Ensures the environment is equipped with libraries for handling data analysis, cloud communication, and system monitoring, supporting seamless integration and execution of distributed services across the GreenAccounter architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/eletricmaps.py'>eletricmaps.py</a></b></td>
					<td style='padding: 8px;'>- Provides asynchronous access to electricity carbon intensity data from the Electricity Maps API, enabling retrieval of current and historical carbon footprint metrics for specified regions<br>- Integrates with the broader system to support environmental impact analysis and energy consumption monitoring within the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/dockerfile'>dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the Docker environment for the GreenAccounter-backend-orchestrator, enabling consistent deployment of the backend service<br>- It sets up the Python 3.11 runtime, installs dependencies, and prepares the application for execution within a containerized infrastructure<br>- This configuration ensures reliable, repeatable deployment and integration within the overall microservices architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/back.yaml'>back.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines deployment and service configurations for the Flask management application within the backend orchestrator<br>- Facilitates containerized deployment, ensuring the Flask app is accessible via a stable network endpoint in the Kubernetes cluster<br>- Supports scalable, reliable operation of the backend management service as part of the overall system architecture.</td>
				</tr>
			</table>
			<!-- rsa_keys Submodule -->
			<details>
				<summary><b>rsa_keys</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ GreenAccounter-backend-orchestrator.rsa_keys</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-orchestrator/rsa_keys/rsa keys'>rsa keys</a></b></td>
							<td style='padding: 8px;'>- Provides RSA key pairs for cloud server authentication within the backend orchestrator, ensuring secure communication and data integrity across the system<br>- Integral to the overall architecture, it supports encrypted interactions and trusted identity verification, facilitating secure operations and safeguarding sensitive information in the GreenAccounter project.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- GreenAccounter-backend-monitor-server Submodule -->
	<details>
		<summary><b>GreenAccounter-backend-monitor-server</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ GreenAccounter-backend-monitor-server</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/utils.py'>utils.py</a></b></td>
					<td style='padding: 8px;'>- Provides a utility for measuring and logging the execution time of functions within the backend monitoring server<br>- Facilitates performance tracking and optimization by enabling developers to easily benchmark specific operations, supporting overall system efficiency and responsiveness in the GreenAccounter architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>- Defines licensing terms for the project, ensuring legal clarity on usage, distribution, and modification rights<br>- It establishes the framework under which the entire codebase can be shared and reused, promoting open-source collaboration while protecting contributor rights and clarifying liabilities<br>- This license underpins the projects open-source architecture by facilitating broad accessibility and legal compliance.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the monitoring system for user-registered cloud servers within the platform<br>- It ensures continuous oversight of server health and performance, enabling proactive management and alerting<br>- This component integrates seamlessly into the overall architecture to maintain reliable cloud infrastructure operations and support user account stability.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/app.py'>app.py</a></b></td>
					<td style='padding: 8px;'>- Provides RESTful API endpoints to monitor and retrieve real-time resource utilization metrics—CPU, GPU, memory, and carbon intensity—across multiple regions<br>- Facilitates integration with cloud infrastructure and hardware monitoring systems, supporting dynamic resource management and environmental impact assessment within the broader architecture of the backend monitoring server.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/ssh_connect.py'>ssh_connect.py</a></b></td>
					<td style='padding: 8px;'>- Facilitates secure remote server management by establishing SSH connections, executing commands, and retrieving hardware specifications such as CPU, memory, and GPU details<br>- Integrates with the overall architecture to enable automated monitoring and diagnostics of backend infrastructure, ensuring efficient hardware utilization and system health assessment within the monitoring server ecosystem.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/DB_Module.py'>DB_Module.py</a></b></td>
					<td style='padding: 8px;'>- Provides core functionalities for managing Firebase storage interactions within the project, including uploading and downloading model files, resources, migration states, and parser configurations<br>- Facilitates seamless data exchange and resource monitoring essential for model deployment, updates, and migration processes, thereby supporting the overall architectures focus on scalable, cloud-based model management and operational tracking.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/requirements.txt'>requirements.txt</a></b></td>
					<td style='padding: 8px;'>- Facilitates backend monitoring and management for the GreenAccounter project by integrating data collection, real-time analytics, and remote server interactions<br>- It supports efficient resource tracking, external API communication, and secure environment handling, ensuring seamless operation within the overall architecture<br>- This component enhances system observability, stability, and responsiveness across the distributed infrastructure.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/eletricmaps.py'>eletricmaps.py</a></b></td>
					<td style='padding: 8px;'>- Provides asynchronous access to electricity carbon intensity data from the Electricity Maps API, enabling retrieval of current and historical emissions for specified regions<br>- Integrates with external data sources to support environmental monitoring and analysis within the broader system architecture, facilitating insights into regional carbon footprints and supporting sustainability initiatives.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/dockerfile'>dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the Docker environment for the backend monitor server, ensuring consistent deployment of the Python-based application<br>- It manages dependencies, sets up the working directory, and specifies how to run the server, facilitating reliable containerized execution within the overall architecture of the GreenAccounter project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/back.yaml'>back.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines deployment and service configurations for the Flask-based resource management component within the backend monitoring system<br>- Facilitates containerized deployment and network access, ensuring the Flask application is reliably hosted and reachable within the Kubernetes cluster<br>- Integrates seamlessly into the overall architecture by supporting scalable, isolated service instances essential for backend monitoring functionalities.</td>
				</tr>
			</table>
			<!-- rsa_keys Submodule -->
			<details>
				<summary><b>rsa_keys</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ GreenAccounter-backend-monitor-server.rsa_keys</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-server/rsa_keys/rsa_key'>rsa_key</a></b></td>
							<td style='padding: 8px;'>- Provides RSA key pairs essential for securing communication between cloud servers within the backend monitor system<br>- These keys facilitate encrypted data exchange and authentication, ensuring the integrity and confidentiality of interactions across the distributed architecture of the GreenAccounter project.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- GreenAccounter-backend-monitor-carbon Submodule -->
	<details>
		<summary><b>GreenAccounter-backend-monitor-carbon</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ GreenAccounter-backend-monitor-carbon</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/utils.py'>utils.py</a></b></td>
					<td style='padding: 8px;'>- Provides a utility for measuring execution time of functions within the backend monitoring system<br>- It facilitates performance tracking and optimization by enabling developers to easily benchmark specific processes, supporting overall system efficiency and responsiveness in the GreenAccounter architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the carbon intensity monitoring system within the GreenAccounter backend architecture<br>- It facilitates tracking and analyzing real-time carbon emissions, supporting sustainability efforts by integrating environmental data into the overall platform<br>- This component ensures continuous oversight of carbon impact, enabling informed decision-making and promoting eco-friendly practices across the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/geo_data.json'>geo_data.json</a></b></td>
					<td style='padding: 8px;'>- Provides a comprehensive mapping of country codes to their full names and identifiers, supporting geographic data referencing within the project<br>- Facilitates accurate country identification and integration across various modules, enhancing the systems ability to handle international data consistently and reliably within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/app.py'>app.py</a></b></td>
					<td style='padding: 8px;'>- Provides RESTful API endpoints for monitoring and managing energy consumption, carbon intensity, and resource utilization across multiple regions<br>- Facilitates real-time data retrieval, historical analysis, and control of server operations via SSH and Docker commands, integrating electric grid data and Firebase for centralized tracking within the overall system architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/ssh_connect.py'>ssh_connect.py</a></b></td>
					<td style='padding: 8px;'>- Facilitates secure remote server management by establishing SSH connections using password or private key authentication<br>- Enables execution of administrative commands on remote hosts, supporting monitoring and maintenance tasks within the overall system architecture<br>- Integrates seamlessly with the backend to automate server interactions, ensuring reliable access for system monitoring and operational workflows.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/countries.geojson'>countries.geojson</a></b></td>
					<td style='padding: 8px;'>- Countries.geojsonThis file defines the geographic boundaries and attributes of countries used within the GreenAccounter-backend-monitor-carbon project<br>- Serving as a foundational data source, it enables spatial analysis and visualization of country-specific carbon metrics, supporting features such as country selection, mapping, and regional aggregations across the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/DB_Module.py'>DB_Module.py</a></b></td>
					<td style='padding: 8px;'>- Provides an interface for managing and synchronizing model artifacts, resource metrics, migration states, and configuration data with Firebase storage<br>- Facilitates seamless uploading, downloading, and updating of essential files and JSON-based resources, supporting efficient monitoring and coordination of machine learning workflows within the overall system architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/requirements.txt'>requirements.txt</a></b></td>
					<td style='padding: 8px;'>- Manages dependencies essential for backend operations, including data processing, API interactions, and environment configuration<br>- Facilitates integration with external services such as Firebase and electricity maps, supporting real-time monitoring and analysis of carbon emissions<br>- Ensures the project’s core functionalities are supported by necessary libraries, enabling seamless data handling, communication, and environmental data management within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/eletricmaps.py'>eletricmaps.py</a></b></td>
					<td style='padding: 8px;'>- Provides asynchronous access to electricity carbon intensity data from the Electricity Maps API, enabling retrieval of current and historical carbon footprint metrics for specified regions<br>- Integrates with the broader system to support monitoring and analysis of regional carbon emissions, facilitating data-driven decisions for sustainability and energy management within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/dockerfile'>dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the Docker environment for deploying the backend monitoring service within the GreenAccounter project<br>- It ensures consistent setup by installing dependencies and configuring the application container, enabling reliable execution of the monitoring component responsible for tracking and managing carbon-related data<br>- This setup supports the overall architecture by facilitating scalable and reproducible deployment of the backend monitoring functionality.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/zones.json'>zones.json</a></b></td>
					<td style='padding: 8px;'>- The <code>zones.json</code> file serves as a foundational data resource within the GreenAccounter-backend-monitor-carbon project, providing a comprehensive mapping of country and regional codes to their respective zone names<br>- Its primary purpose is to facilitate accurate identification and categorization of geographic regions, supporting the systems ability to monitor and analyze carbon emissions across different locations<br>- By standardizing zone information, this file underpins the architectures geographic segmentation, enabling precise data aggregation, reporting, and analysis at both country and regional levels throughout the application's ecosystem.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/back.yaml'>back.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines deployment and service configurations for the Flask-based CI application within the backend monitoring architecture<br>- Facilitates containerized deployment, ensuring the CI process runs reliably in a Kubernetes environment, and exposes the application for internal communication<br>- Supports the overall systems continuous integration and monitoring workflows by maintaining a consistent deployment setup.</td>
				</tr>
			</table>
			<!-- rsa_keys Submodule -->
			<details>
				<summary><b>rsa_keys</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ GreenAccounter-backend-monitor-carbon.rsa_keys</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/jhparkland/GreenAccounter/blob/master/GreenAccounter-backend-monitor-carbon/rsa_keys/rsa keys'>rsa keys</a></b></td>
							<td style='padding: 8px;'>- Provides RSA key pairs for cloud server authentication within the GreenAccounter backend monitoring system<br>- These keys facilitate secure communication and data encryption, ensuring integrity and confidentiality across distributed components<br>- Integral to the security architecture, this setup supports trusted interactions between the monitoring services and cloud infrastructure.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before deploying GreenAccounter, ensure you have the following installed and configured:

- **Kubernetes Cluster**: v1.20 or higher
- **Docker**: For building and managing container images
  
### Installation

Build GreenAccounter from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/jhparkland/GreenAccounter
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd GreenAccounter
    ```

### Configuration

#### 1. Firebase Configuration

Edit a file named `config.py` in the project root directory and add the following information:

- Firebase AUTH key(JSON file name)
- Firebase Storage Bucket

Download the Firebase Admin SDK JSON key file from the Firebase Console and place it in the project root directory as `firebase-adminsdk-fbsvc.json`.


### 2. ElectricityMaps API Key

Create a file named `.env` and add your [ElectricityMaps API key](https://app.electricitymaps.com/dashboard):

```python
ELECTRICITYMAPS_API_KEY=<YOUR_ELECTRICMAPS_API_KEY>
```

#### 3. SSH Configuration

Configure SSH credentials in `ssh_data.csv` for remote server access:

[Example: `ssh_data.csv`]<br>
|cloud_ip_addr|user_name|Password|Port|country|country_full|region_threshold|rsa_key_path|
|-----------------|----------|--------|----|------|------------|-----------------|------------|
|x.x.x.x|cctv|1234|10002|KR|Korea|150|/rsa_keys/id_rsa|

Place your RSA private keys in the respective `rsa_keys/` directories within each backend module.


### Deployment

#### Automated Kubernetes Deployment

After completing all configuration steps, deploy the entire project to Kubernetes:

```bash
bash make_file.bash
```

This script will:
- Copy configuration files to all backend services
- Build Docker images for frontend and backend components
- Push images to your container registry
- Deploy all services to your Kubernetes cluster
- Configure NGINX Ingress for routing

#### Manual Deployment (Optional)

If you prefer manual deployment, follow these steps:

1. **Build Docker images:**
   ```bash
   # Frontend
   cd GreenAccounter-frontend-gateway
   docker build -t greenaccounter-frontend:latest .
   
   # Backend services
   cd ../GreenAccounter-backend-connection
   docker build -t greenaccounter-connection:latest .
   
   cd ../GreenAccounter-backend-orchestrator
   docker build -t greenaccounter-orchestrator:latest .
   
   cd ../GreenAccounter-backend-monitor-server
   docker build -t greenaccounter-monitor-server:latest .
   
   cd ../GreenAccounter-backend-monitor-carbon
   docker build -t greenaccounter-monitor-carbon:latest .
   ```

2. **Deploy to Kubernetes:**
   ```bash
   # Deploy backend services
   kubectl apply -f GreenAccounter-backend-connection/back.yaml
   kubectl apply -f GreenAccounter-backend-orchestrator/back.yaml
   kubectl apply -f GreenAccounter-backend-monitor-server/back.yaml
   kubectl apply -f GreenAccounter-backend-monitor-carbon/back.yaml
   
   # Deploy frontend and ingress
   kubectl apply -f GreenAccounter-frontend-gateway/front.yaml
   ```

3. **Verify deployment:**
   ```bash
   kubectl get pods
   kubectl get services
   kubectl get ingress
   ```

---

### Deep Learning Model Setup

#### Configuration

Before deploying the deep learning model, configure the following files in the `VGGNET/` directory:

##### 1. Firebase Configuration

Edit a file named `config.py` in the project root directory and add the following information:

- Firebase AUTH key(JSON file name)
- Firebase Storage Bucket

Download the Firebase Admin SDK JSON key file from the Firebase Console and place it in the project root directory as `firebase-adminsdk-fbsvc.json`.


### 2. ElectricityMaps API Key

Create a file named `.env` and add your [ElectricityMaps API key](https://app.electricitymaps.com/dashboard):

```python
ELECTRICITYMAPS_API_KEY=<YOUR_ELECTRICMAPS_API_KEY>
```

### 3. Carbon Configuration

Configure carbon thresholds in the `carbon_config.csv` file for carbon-aware learning:

[Example: `carbon_config.csv`]<br>
|country|country_full|region_threshold|
------|------------|-----------------|
|KR|Korea|150|

*Note: In this demo version, regions are pre-configured for testing purposes.*


#### Docker Deployment for Deep Learning Models

The VGGNet deep learning model is containerized and deployed in cloud environments.

*Note: This demo version uses VGGNet as a sample model for testing purposes.*

**Deployment Process:**

1. **Build the Docker image locally:**
   ```bash
   cd VGGNET
   docker build -t vggnet .
   ```

2. **Deploy to each region:**
   ```bash
   # Run containers image to KR server
   $ user@kr-server "docker run --gpus all --name KR -it vggnet"
   
   # Run containers image to US server
   $ user@us-server "docker run --gpus all --name US -it vggnet"
   
   # Run containers image to IT-CSO server
   $ user@it-server " docker run --gpus all --name IT-CSO -it vggnet"
   ```

   **Important Notes:**
   - Container names must match the region codes (KR, US, IT-CSO)
   - `--gpus all` flag enables GPU access for model training
   - Ensure NVIDIA Docker runtime is installed on each server
   - Images are deployed locally without using a container registry


Each regional instance operates independently, processing region-specific electricity data and carbon intensity metrics.


### 4. Starting Training

**Launch deep learning training in the terminal of your desired cloud server.**

For example, to train the VGGNet model, use the following command:

```bash
$ docker run -it --gpus all vggnet --epoch 100 --lr 0.001 --batch 8 --vgg_model VGG16 --cuda 0 --step_size 30 --gamma 0.1 --resumption 0 --ssh_server 0
```

**Command Options:**

- `--epoch`: Number of training epochs
- `--lr`: Learning rate
- `--batch`: Batch size
- `--vgg_model`: VGGNet model variant to use
- `--cuda`: GPU device number
- `--step_size`: Step size for learning rate decay
- `--gamma`: Learning rate decay factor
- `--resumption`: Migration resumption flag (0: new training, 1: resume)
- `--ssh_server`: Current training SSH server 

Each option can be modified according to your deep learning model requirements.

Each regional instance operates independently, processing region-specific electricity data and carbon intensity metrics.


### Accessing the Application

Once deployed, access the GreenAccounter dashboard:

```
http://localhost/
```

### Troubleshooting

**Common Issues:**

- **Pods not starting:** Check logs with `kubectl logs <pod-name>`
- **Connection errors:** Verify SSH credentials in `ssh_data.csv`
- **API errors:** Ensure ElectricityMaps API key is valid
- **Firebase errors:** Verify Firebase configuration and credentials

---
### 🎥 Demo Video
**[Check out the demo!](https://github.com/datascience-labs/GreenAccounter/raw/refs/heads/main/GreenAccounter%20Demo%20Video.mp4)**  
Watch the video below to see GreenAccounter in action.   


**This repository is intended for demonstration purposes only.**

<div align="left"><a href="#top">⬆ Return</a></div>

---
