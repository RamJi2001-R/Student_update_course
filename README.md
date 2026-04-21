# Student Management System

A full-stack web application for managing student information with authentication, built with modern technologies and best practices.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Architecture](#project-architecture)

## ✨ Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Password Security**: Passwords are hashed using bcrypt
- **Student Management**: Create, read, update, and delete student records
- **Dashboard**: View and manage student information from an intuitive interface
- **Responsive UI**: Modern, responsive design with React and Vite
- **CORS Support**: Secure cross-origin requests

## 🛠 Tech Stack

### Backend
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing, CORS
- **Environment Management**: dotenv
- **Development**: Nodemon for auto-reloading

### Frontend
- **Framework**: React 19.x
- **Build Tool**: Vite 8.x
- **Routing**: React Router DOM 7.x
- **HTTP Client**: Axios
- **Styling**: CSS

## 📁 Project Structure

```
Student_MS_Pro/
├── backend/
│   ├── server.js                 # Main server entry point
│   ├── package.json              # Backend dependencies
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   └── studentController.js  # Student business logic
│   ├── middleware/
│   │   └── authMiddleware.js     # Authentication middleware
│   ├── models/
│   │   └── Student.js            # Student database schema
│   └── routes/
│       └── studentRoutes.js      # Student API routes
│
├── frontend/
│   ├── index.html                # HTML entry point
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.js            # Vite configuration
│   ├── eslint.config.js          # ESLint rules
│   ├── src/
│   │   ├── main.jsx              # React entry point
│   │   ├── App.jsx               # Root component
│   │   ├── App.css               # App styles
│   │   ├── index.css             # Global styles
│   │   ├── api/
│   │   │   └── axios.js          # Axios instance configuration
│   │   ├── components/
│   │   │   └── Navbar.js         # Navigation component
│   │   ├── pages/
│   │   │   ├── Login.jsx         # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   ├── Dashboard.jsx     # Student dashboard
│   │   │   ├── Auth.css          # Auth pages styles
│   │   │   └── Dashboard.css     # Dashboard styles
│   │   └── assets/               # Static assets
│   ├── public/                   # Public static files
│   └── README.md                 # Frontend documentation
│
└── README.md                     # This file
```

## 📦 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance like MongoDB Atlas)

## 🚀 Installation

### 1. Clone or Extract the Project

```bash
cd Student_MS_Pro
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/student_ms
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student_ms

# Server Configuration
PORT=5000

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

## ▶️ Running the Application

### Option 1: Run Both Services Separately (Recommended for Development)

**Terminal 1 - Start Backend Server:**

```bash
cd backend
npm start
# or with nodemon for development:
npx nodemon server.js
```

The backend server will run on `http://localhost:5000`

**Terminal 2 - Start Frontend Development Server:**

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Option 2: Build Frontend for Production

```bash
cd frontend
npm run build
```

The build output will be in the `frontend/dist` directory, which can be served by the backend.

## 🔌 API Endpoints

### Authentication Routes
- **POST** `/api/students/register` - Register a new user
- **POST** `/api/students/login` - Login user

### Student Routes (Protected with JWT)
- **GET** `/api/students` - Get all students
- **GET** `/api/students/:id` - Get student by ID
- **POST** `/api/students` - Create new student
- **PUT** `/api/students/:id` - Update student
- **DELETE** `/api/students/:id` - Delete student

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Pages: Login, Register, Dashboard              │  │
│  │  Components: Navbar, Forms, Student List        │  │
│  │  State Management & API Integration             │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┬─────┘
                           │ HTTP/CORS
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Backend (Express.js)                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Routes Layer     │ Controllers  │ Middleware           │  │
│  │  studentRoutes.js │ Logic Layer  │ authMiddleware.js    │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Models Layer: Student Schema (Mongoose)               │  │
│  └──────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┬──────────┘
                           │ Mongoose
                           ▼
                    MongoDB Database
```

## 🔐 Security Features

- **JWT Authentication**: Token-based authentication for stateless API
- **Password Hashing**: Bcrypt for secure password storage
- **CORS**: Configured to allow requests from frontend
- **Authorization Middleware**: Protected routes require valid JWT tokens

## 📝 Development Guidelines

### Backend Development

1. Add new routes in `routes/studentRoutes.js`
2. Implement logic in `controllers/studentController.js`
3. Create schemas in `models/`
4. Use middleware for cross-cutting concerns

### Frontend Development

1. Create pages in `src/pages/`
2. Create reusable components in `src/components/`
3. Use `src/api/axios.js` for API calls
4. Style components with CSS or CSS modules

## 🧪 Testing

Currently, tests are not configured. To add tests:

- Backend: Install Jest or Mocha
- Frontend: Install Vitest or React Testing Library

Update `package.json` scripts accordingly.

## 📄 License

This project is licensed under the ISC License. See package.json for details.

## 👤 Author

Created for student management system demonstration.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Happy Coding!** 🎉
