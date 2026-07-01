#!/bin/bash
set -e

# ============================================
# FoodExpress EC2 User Data Script
# Installs Docker, pulls images, runs the app
# ============================================

echo ">>> Updating system packages..."
yum update -y

echo ">>> Installing Docker..."
yum install -y docker
systemctl enable docker
systemctl start docker

echo ">>> Installing Docker Compose..."
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -o '"tag_name": "v[^"]*' | cut -d'"' -f4)
curl -L "https://github.com/docker/compose/releases/download/$${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

echo ">>> Creating application directory..."
mkdir -p /opt/foodexpress
cd /opt/foodexpress

echo ">>> Creating docker-compose.yml..."
cat <<EOF > docker-compose.yml
version: '3.8'

services:
  backend:
    image: ${docker_username}/food-express-backend:latest
    container_name: foodexpress-backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - PORT=5000
      - MONGODB_URI=${mongodb_uri}
      - JWT_SECRET=${jwt_secret}
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  frontend:
    image: ${docker_username}/food-express-frontend:latest
    container_name: foodexpress-frontend
    ports:
      - "80:80"
    depends_on:
      backend:
        condition: service_healthy
    restart: always

  redis:
    image: redis:7-alpine
    container_name: foodexpress-redis
    ports:
      - "6379:6379"
    restart: always
    volumes:
      - redis-data:/data

volumes:
  redis-data:
EOF

echo ">>> Pulling and starting containers..."
docker-compose pull
docker-compose up -d

echo ">>> Cleaning up old images..."
docker image prune -f

echo ">>> FoodExpress deployment complete!"
