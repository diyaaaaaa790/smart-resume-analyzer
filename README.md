# 📄 Smart Resume Analyzer

A full-stack web application that helps users **create, manage, and analyze resumes** and receive useful feedback based on resume content.

The project is built using the **MERN stack** and includes authentication, resume management, job information, and an AI-style resume analysis module.

---

## 🚀 Features

### 🔐 User Authentication
- User registration
- User login
- JWT-based authentication
- Protected routes
- Logout functionality
- User-specific data

### 📄 Resume Management
- Create a new resume
- View all saved resumes
- View individual resume details
- Delete resumes
- Store:
  - Resume title
  - Resume text
  - Skills
  - Education
  - Experience

### 🤖 Resume Analysis
The application analyzes a resume and generates:

- Resume score
- Skills score
- Education evaluation
- Experience evaluation
- Resume content/length evaluation
- Improvement suggestions
- Recommended job roles

### 💼 Job Section
- View available job information
- Explore job opportunities
- Connect resume skills with potential job roles

### 👤 Profile
- View user profile
- Manage user information

### 🗄️ Database
- MongoDB database
- Mongoose models
- User-specific resume storage
- Secure data access

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Vite
- CSS

### Backend

- Node.js
- Express.js
- JWT Authentication
- REST API

### Database

- MongoDB
- Mongoose

### Security & Middleware

- Helmet
- CORS
- Morgan
- Compression
- JWT

---

## 📁 Project Structure

```text
smart-resume-analyzer/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Resumes.jsx
│   │   │   ├── ResumeDetails.jsx
│   │   │   ├── Analysis.jsx
│   │   │   ├── Jobs.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── resumeService.js
│   │   │   └── ...
│   │   │
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   └── dashboard.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── resumeController.js
│   │   ├── aiController.js
│   │   └── ...
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Resume.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── resumeRoutes.js
│   │   ├── aiRoutes.js
│   │   └── ...
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   ├── authService.js
│   │   ├── jobService.js
│   │   └── nlpService.js
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
 # Architecture diagram

                   USER
                    │
                    ▼
            React Frontend
                    │
                 Axios
                    │
                    ▼
             Express REST API
                    │
       ┌────────────┼────────────┐
       │            │            │
       ▼            ▼            ▼
 Authentication   Resume       Jobs
   Middleware    Controller   Controller
       │            │            │
       └────────────┼────────────┘
                    │
                    ▼
                MongoDB
                    │
                    ▼
             AI Analysis API

DSA Support:
Java Trie → Skill Search
Java Graph → Job Matching

#ER diagram

USER
----
_id PK
name
email
password
createdAt


RESUME
------
_id PK
user FK
title
resumeText
skills[]
education
experience
createdAt


JOB
---
_id PK
title
company
description
skills[]
location