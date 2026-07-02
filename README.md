# 🏗️ Food Express (DevOps Skeleton)

> A minimal, robust 3-tier application skeleton built specifically for demonstrating Cloud and DevOps engineering skills. 

This repository intentionally avoids complex full-stack feature code so that the focus remains entirely on the infrastructure, containerization, CI/CD, and orchestration pipelines.

---

## 📌 Architecture Phase 0: The Skeleton App
This branch contains the foundational 3-tier architecture:
1. **Frontend:** React (Vite)
2. **Backend:** Node.js (Express)
3. **Database:** MongoDB

The frontend simply makes a REST call to the backend's `/api/health` endpoint, which verifies database connectivity.

## 🚀 Running Locally (Phase 0)

### 1. Backend Setup
```bash
cd backend
npm install
npm start
```
The backend will run on `http://localhost:5000`.

### 2. Frontend Setup
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

---
*Developed as a DevOps Portfolio Project to demonstrate Docker, CI/CD, Terraform, Kubernetes, and Observability.*
<!-- dummy commit 1 -->
<!-- dummy commit 2 -->
<!-- dummy commit 3 -->
<!-- dummy commit 4 -->
<!-- dummy commit 5 -->
<!-- dummy commit 6 -->
<!-- dummy commit 7 -->
<!-- dummy commit 8 -->
<!-- dummy commit 9 -->
<!-- dummy commit 10 -->
