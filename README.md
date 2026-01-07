# Full Stack Note Taking Application – DevOps Implementation

## 👨‍💻 Developers
- Application Development: **Sayan Mukherjee**
- DevOps Implementation: **Samarth Funde**

---

## 📌 Project Overview
This is a **Full Stack Note Taking Application** deployed using **DevOps and Kubernetes** practices.

The project includes:
- React Frontend
- Node.js + Express Backend
- MongoDB Database
- Docker for containerization
- Kubernetes (Minikube) for orchestration

The goal of this project is to demonstrate **real-world DevOps implementation** from source code to deployment.

---

## 🧱 Architecture
- Frontend communicates with Backend using REST APIs
- Backend connects to MongoDB using Kubernetes Service
- Each component runs inside its own Docker container
- Kubernetes manages pods, services, deployments, and secrets

---

## ⚙️ Tech Stack
### Frontend
- React.js
- Nginx (for serving production build)

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MongoDB

### DevOps Tools
- Docker
- Docker Hub
- Kubernetes (Minikube)
- kubectl
- GitHub

---

## 🐳 Docker Implementation
- Separate Dockerfiles for Frontend and Backend
- Multi-stage Docker build used for frontend
- Images pushed to Docker Hub
- Kubernetes pulls images from Docker Hub

---

## ☸️ Kubernetes Implementation
- Namespace: `note-app`
- Deployments:
  - frontend-deployment
  - backend-deployment
  - mongodb-deployment
- Services:
  - frontend-service
  - backend-service
  - mongodb-service
- Secrets used for sensitive values (JWT, DB credentials)

---

## 🚀 Deployment Flow
1. Code pushed to GitHub
2. Docker images built locally
3. Images pushed to Docker Hub
4. Kubernetes manifests applied
5. Pods created and services exposed
6. Application accessible via NodePort

---

## ✅ Project Status
✔ Backend running  
✔ MongoDB running  
✔ Frontend running  
✔ End-to-end connectivity verified  

---

## 📌 Learning Outcome
- Real-world DevOps workflow
- Docker image optimization
- Kubernetes debugging (ImagePullBackOff, CrashLoopBackOff)
- Secrets & environment variables
- Production-ready deployment mindset

---

## 📎 Author
**Samarth Funde**  
DevOps Engineer (Fresher)  
