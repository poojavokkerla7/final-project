# Backend Authentication System (Node.js + Express + MongoDB + JWT)

## Project Overview
This project is a backend authentication system built using Node.js, Express.js, and MongoDB Atlas. It provides secure user registration, login functionality, and protected routes using JWT (JSON Web Token) authentication.

---

## Features
- User Registration API
- User Login API
- Password hashing using bcrypt
- JWT token-based authentication
- Protected routes using middleware
- MongoDB Atlas cloud database integration
- RESTful API architecture
- Postman-tested endpoints

---

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- Postman (for testing)

---

## Project Structure
backend/
│── server.js
│── routes/
│   └── authRoutes.js
│── middleware/
│   └── authMiddleware.js
│── models/
│   └── User.js
│── .env
│── package.json

---

## API Endpoints

### 1. Register User
POST /api/auth/register

Request Body:
{
  "name": "Pooja",
  "email": "pooja@test.com",
  "password": "123456"
}

---

### 2. Login User
POST /api/auth/login

Request Body:
{
  "email": "pooja@test.com",
  "password": "123456"
}

Response:
{
  "token": "JWT_TOKEN"
}

---

### 3. Protected Route
GET /api/protected

Headers:
Authorization: Bearer <JWT_TOKEN>

Response:
{
  "message": "You accessed protected data",
  "user": {
    "id": "userId"
  }
}

---

## Environment Variables
Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

---

## How to Run Project

1. Install dependencies:
npm install

2. Start server:
npm run dev

3. Server runs on:
http://localhost:5000

---

## Testing
All APIs tested using Postman for:
- Registration flow
- Login flow
- JWT authentication
- Protected route access

---

## Author
Pooja Vokkerla

---

## GitHub Repository
https://github.com/poojavokkerla7/final-project
