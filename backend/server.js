// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const inquiryRoutes = require("./routes/inquiryRoutes");

dotenv.config();
connectDB();

const app = express();

// --- CORS: allow frontend origin from environment variable ---
// In production: FRONTEND_URL = https://your-app.vercel.app
// In development: FRONTEND_URL = http://localhost:5173
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173", // always allow local dev
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy blocked origin: ${origin}`));
    }
  },
  methods: ["GET", "POST"],
}));

app.use(express.json());

// --- Routes ---
app.use("/api", inquiryRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Jai Shree Shyaam API is running ✅" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} [${process.env.NODE_ENV || "development"}]`);
});