MERN Stack Task Manager

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, and securely manage their personal tasks.

It features a complete authentication system using JSON Web Tokens (JWT) and a protected API for all task-related (CRUD) operations. The frontend is built with React and React-Bootstrap, offering a responsive, split-screen layout to add and view tasks side-by-side.

✨ Features

User Authentication: Secure user registration and login system.

JWT Security: Protected backend API routes using JWT and custom middleware.

Password Hashing: User passwords are securely hashed using bcryptjs.

Full CRUD Functionality:

Create: Add new tasks.

Read: Get all tasks for the logged-in user.

Update: Edit existing tasks.

Delete: Remove completed or unwanted tasks.

Responsive UI: A clean, modern interface built with React-Bootstrap.

Real-time Updates: The frontend state is updated immediately after successful API calls.

🛠️ Tech Stack

Frontend

React (with Vite)

React Router (react-router-dom) for page navigation

React-Bootstrap for UI components

Axios for making API requests

Backend

Node.js

Express for the server framework

MongoDB (with Mongoose) as the database

JSON Web Token (JWT) for authentication

bcryptjs for password hashing

dotenv for environment variable management

CORS for cross-origin requests

🚀 Getting Started

To run this project locally, you will need to set up both the backend and frontend.

Prerequisites

Node.js

A MongoDB database (local or a free MongoDB Atlas URI)

1. Backend Setup

Navigate to the backend folder:

cd backend


Install the dependencies:

npm install


Create an environment file (e.g., mong.env) in the backend root.

Add your database connection string and JWT secret:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key_123


Start the backend server:

node index.js


(The server will run on http://localhost:5000)

2. Frontend Setup

Open a new terminal and navigate to the frontend folder:

cd frontend


Install the dependencies:

npm install


Start the frontend development server:

npm run dev


(The app will open on http://localhost:5173 or a similar port)

📂 Project Structure

TASK_MANAGER/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authmiddleware.js
│   ├── models/
│   │   ├── task.js
│   │   └── user.js
│   ├── node_modules/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── task.jsx
    │   │   └── taskList.jsx
    │   ├── pages/
    │   │   ├── login.jsx
    │   │   └── register.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── vite.config.js


🔮 Future Features

This project is a solid foundation. Here are some features that could be added next:

Password Reset: Implement a "Forgot Password" flow that sends a secure email link.

Email Verification: Require users to verify their email address upon registration.

OAuth 2.0: Add "Login with Google" / "Login with GitHub" functionality.

Task Enhancements:

Add priorities (e.g., Low, Medium, High).

Add due dates with a date picker.

Add categories or tags.

Profile Page: A secure page where users can update their email or password.

Advanced UI/UX:

Implement drag-and-drop to reorder tasks.

Add animations for a more "modern" feel.

Add a dark mode toggle.