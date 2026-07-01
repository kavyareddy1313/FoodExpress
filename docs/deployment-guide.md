# 📘 FoodExpress — Deployment Guide

## Table of Contents
1. [Local Development](#local-development)
2. [Docker Deployment](#docker-deployment)
3. [Serverless & PaaS Deployment (Render + Vercel)](#serverless--paas-deployment)
4. [Kubernetes Deployment](#kubernetes-deployment)
5. [Monitoring Setup](#monitoring-setup)
6. [CI/CD Pipeline Setup (AWS EC2)](#cicd-pipeline-setup-aws-ec2)

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
curl http://localhost

# Backend health
curl http://localhost:5000/health

# Prometheus metrics
curl http://localhost:5000/metrics
```

## Serverless & PaaS Deployment

This project uses a modern Infrastructure as Code (IaC) setup for deploying to Render (Backend) and Vercel (Frontend).

### 1. Backend (Render)
The backend is deployed automatically using the `render.yaml` Blueprint in the root directory.

**Steps:**
1. Create a free account on [Render.com](https://render.com).
2. Go to **Blueprints** and click **New Blueprint Instance**.
3. Connect your GitHub repository.
4. Render will automatically read the `render.yaml` file and create a Web Service using the `backend/Dockerfile`.
5. In the Render Dashboard, add the required environment variables: `MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_*`.

### 2. Frontend (Vercel)
**Steps:**
1. Create a free account on [Vercel.com](https://vercel.com).
2. Click **Add New Project** and import your GitHub repository.
3. Set the **Framework Preset** to Vite.
4. Set the **Root Directory** to `frontend`.
5. In the **Environment Variables** section, add:
   - `VITE_API_URL`: Set this to your Render backend URL (e.g., `https://foodexpress-backend.onrender.com`).
6. Click **Deploy**.

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

## CI/CD Pipeline Setup (AWS EC2)

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
