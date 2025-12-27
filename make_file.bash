# 

## Server File csv Settings, electricmaps_api, Firebase Settings
FIREBASE_KEY=$(python3 -c "from config import Config; print(Config.FIREBASE_AUTH_KEY)")

SOURCE_CONFIG="config.py"
SSH_DATA_CONFIG="ssh_data.csv"
ELECTRICMAPS=".env"
FOLDERS=("GreenAccounter-backend-connection" "GreenAccounter-backend-monitor-carbon" "GreenAccounter-backend-monitor-server" "GreenAccounter-backend-orchestrator")

for folder in "${FOLDERS[@]}"; do
    cp "$SOURCE_CONFIG" "$folder/config.py"
    cp "$FIREBASE_KEY" "$folder/$FIREBASE_KEY"
    cp "$SSH_DATA_CONFIG" "$folder/$SSH_DATA_CONFIG"
    cp "$ELECTRICMAPS" "$folder/$ELECTRICMAPS"
done


## Docker build
docker build -t front ./GreenAccounter-frontend-gateway
docker build -t back ./GreenAccounter-backend-connection
docker build -t back1 ./GreenAccounter-backend-monitor-server
docker build -t back2 ./GreenAccounter-backend-monitor-carbon
docker build -t back3 ./GreenAccounter-backend-orchestrator

## Kubernetes apply
kubectl apply -f GreenAccounter-backend-connection/back.yaml # back
kubectl apply -f GreenAccounter-backend-monitor-server/back.yaml # back1
kubectl apply -f GreenAccounter-backend-monitor-carbon/back.yaml # back2
kubectl apply -f GreenAccounter-backend-orchestrator/back.yaml # back3
kubectl apply -f GreenAccounter-frontend-gateway/front.yaml # front

## Ingress NGINX Install
kubectl create namespace ingress-nginx
kubectl apply -n ingress-nginx -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.11.1/deploy/static/provider/cloud/deploy.yaml
