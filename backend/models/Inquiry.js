// models/Inquiry.js
// Mongoose schema and model for student inquiries

const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  // Student's full name — required field
  studentName: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
    maxlength: [100, "Name cannot exceed 100 characters"],
  },

  // Email address — optional
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },

  // Phone number — required
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    match: [/^[6-9]\d{9}$/, "Please provide a valid 10-digit Indian mobile number"],
  },

  // Course the student is interested in — required
  courseOfInterest: {
    type: String,
    required: [true, "Course of interest is required"],
    enum: {
      values: ["JEE", "NEET", "Banking Exams", "SSC/UPSC", "Other"],
      message: "{VALUE} is not a supported course",
    },
  },

  // Auto-set timestamp when inquiry is created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Inquiry", inquirySchema);