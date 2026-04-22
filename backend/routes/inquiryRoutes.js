// routes/inquiryRoutes.js
// Defines the POST /api/register-inquiry endpoint

const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

// @route   POST /api/register-inquiry
// @desc    Register a new student inquiry
// @access  Public
router.post("/register-inquiry", async (req, res) => {
  const { studentName, email, phoneNumber, courseOfInterest } = req.body;

  // --- Basic Input Validation ---
  if (!studentName || !phoneNumber || !courseOfInterest) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, phone number, and course of interest.",
    });
  }

  try {
    // Create a new Inquiry document and save to MongoDB
    const newInquiry = await Inquiry.create({
      studentName,
      email,
      phoneNumber,
      courseOfInterest,
    });

    // Respond with success and the created document
    return res.status(201).json({
      success: true,
      message: "Inquiry registered successfully! We will contact you soon.",
      data: newInquiry,
    });
  } catch (error) {
    // Handle Mongoose validation errors specifically
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(". ") });
    }
    console.error("Server error:", error);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

module.exports = router;