const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

// Routes
const authRoutes = require("./routes/authRoutes");

// Middleware
const protect = require("./middleware/authMiddleware");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Auth routes
app.use("/api/auth", authRoutes);

// Protected route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed protected data 🔐",
    user: req.user
  });
});

// MongoDB connect + server start
console.log("Connecting MongoDB...");

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000
})
.then(() => {
  console.log("✅ MongoDB connected");

  app.listen(process.env.PORT || 5000, () => {
    console.log("🚀 Server running on port 5000");
  });
})
.catch((err) => {
  console.log("❌ MongoDB ERROR:");
  console.log(err.message);
});