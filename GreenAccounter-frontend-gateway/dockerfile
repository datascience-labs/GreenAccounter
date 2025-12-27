# 1단계: Node 환경에서 React 애플리케이션 빌드
# 가져올 이미지를 정의
FROM node:16 AS build

# 경로 설정하기
WORKDIR /app

# package.json 워킹 디렉토리에 복사
COPY package.json ./

# 의존성 설치
RUN npm install

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY . .

# React 애플리케이션을 빌드
RUN npm run build

# 2단계: Nginx를 사용하여 빌드된 파일 서빙
FROM nginx:alpine

# Nginx의 기본 설정을 덮어씌우기 위한 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# React 애플리케이션의 빌드 결과물을 Nginx HTML 폴더로 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx가 80 포트에서 동작
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
