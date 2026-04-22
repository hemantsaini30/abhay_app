// server.js
// Main entry point — sets up Express, middleware, routes, and DB connection

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const inquiryRoutes = require("./routes/inquiryRoutes");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// --- Middleware ---
// Enable CORS so the React frontend (on a different port) can call this API
app.use(cors({
  origin: "http://localhost:5173", // Vite's default dev port
  methods: ["GET", "POST"],
  credentials: true, // Allow cookies if needed
}));

// Parse incoming JSON request bodies
app.use(express.json());

// --- Routes ---
app.use("/api", inquiryRoutes);

// Health check root route
app.get("/", (req, res) => {
  res.send("Coaching Institute API is running ✅");
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});