# 📘 FoodExpress — Deployment Guide

## Table of Contents
1. [Local Development](#local-development)
2. [Docker Deployment](#docker-deployment)
3. [Terraform Infrastructure Setup](#terraform-infrastructure-setup)
4. [Kubernetes Deployment](#kubernetes-deployment)
5. [Monitoring Setup](#monitoring-setup)
6. [CI/CD Pipeline Setup](#cicd-pipeline-setup)

---

## Local Development

### Prerequisites
- Node.js v22+
- npm v9+
- MongoDB Atlas account
- Cloudinary account

### Steps
```bash
# Clone the repository
git clone https://github.com/kavyareddy1313/FoodExpress.git
cd FoodExpress

# Backend
cd backend
cp .env.example .env    # Fill in your values
npm install
npm run dev

# Frontend (in another terminal)
cd frontend
cp .env.example .env
npm install
npm run dev
```

---

## Docker Deployment

### Build and run locally
```bash
docker-compose up --build -d
```

### Verify
```bash
# Frontend
curl http://localhost:5173

# Backend health
curl http://localhost:5000/health

# Prometheus metrics
curl http://localhost:5000/metrics
```

---

## Kubernetes Deployment

### Prerequisites
- kubectl configured with cluster access
- Helm v3+ (optional)

### Steps
```bash
cd k8s

# Create namespace
kubectl apply -f namespace.yaml

# Create secrets (replace values)
kubectl create secret generic backend-secrets \
  --namespace=foodexpress \
  --from-literal=MONGODB_URI="your-mongodb-uri" \
  --from-literal=JWT_SECRET="your-jwt-secret"

# Deploy all resources
kubectl apply -f backend/
kubectl apply -f frontend/
kubectl apply -f ingress/

# Verify
kubectl get pods -n foodexpress
kubectl get svc -n foodexpress
kubectl get ingress -n foodexpress
```

---

## Monitoring Setup

### Start the monitoring stack
```bash
cd monitoring
docker-compose -f docker-compose.monitoring.yml up -d
```

### Access dashboards
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3000 (admin / admin123)
- **Alertmanager**: http://localhost:9093

---

## CI/CD Pipeline Setup

### GitHub Secrets Required
| Secret | Description |
|--------|-------------|
| `DOCKER_USERNAME` | DockerHub username |
| `DOCKER_PASSWORD` | DockerHub access token |
| `EC2_PUBLICIP` | EC2 instance public IP |
| `EC2_KEY` | SSH private key for EC2 |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT signing secret |

### GitHub Environments
1. **staging** — Auto-deploy after CI passes
2. **production** — Requires manual approval before deploy

### Pipeline Flow
1. Push to `main` → CI runs (lint, test, scan, build, push)
2. CI passes → CD deploys to staging
3. Smoke test passes → Manual approval required
4. Approved → Deploy to production
5. Health check fails → Automatic rollback
