// InquiryForm.jsx — Lead capture form wired to the backend API
import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/register-inquiry`
  : "http://localhost:5000/api/register-inquiry";

const INITIAL_FORM = {
  studentName: "",
  phoneNumber: "",
  email: "",
  courseOfInterest: "",
};

const InquiryForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [apiMessage, setApiMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Name is required.";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit Indian mobile number.";
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.courseOfInterest) newErrors.courseOfInterest = "Please select a course.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    setApiMessage("");
    try {
      const response = await axios.post(API_URL, formData);
      setStatus("success");
      setApiMessage(response.data.message);
      setFormData(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setApiMessage(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border ${
      errors[field] ? "border-rose-500" : "border-white/20"
    } rounded-xl px-4 py-3.5 text-white placeholder-slate-500 font-body text-sm focus:outline-none focus:border-teal-500 transition-colors duration-200`;

  return (
    <div className="bg-navy-900 hero-pattern py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <span className="font-body text-teal-400 font-semibold text-sm tracking-widest uppercase">
            Start Your Journey
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Book a Free{" "}
            <span className="gradient-text">Counseling</span>{" "}
            Session
          </h2>
          <p className="font-body text-slate-400 text-lg leading-relaxed max-w-md">
            Speak directly with <span className="text-white font-semibold">Abhay Varma Sir</span>,
            our lead faculty and MLT practitioner from Safdarjung Hospital. Get a
            personalized roadmap to your target rank.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "100% Free — No hidden charges",
              "Personalized study plan in 30 minutes",
              "Guided by Abhay Varma Sir",
              "Limited seats — Register now",
            ].map((perk) => (
              <li key={perk} className="flex items-center gap-3 font-body text-slate-300 text-sm">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 text-xs flex-shrink-0">
                  ✓
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-navy-800/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h3 className="font-display text-2xl font-bold text-white mb-6">
            Register Your Interest
          </h3>
          {status === "success" && (
            <div className="mb-6 bg-teal-500/10 border border-teal-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-teal-400 text-lg">✅</span>
              <p className="font-body text-teal-300 text-sm">{apiMessage}</p>
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-rose-400 text-lg">❌</span>
              <p className="font-body text-rose-300 text-sm">{apiMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block font-body text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input type="text" name="studentName" value={formData.studentName}
                onChange={handleChange} placeholder="e.g. Rahul Sharma"
                className={inputClass("studentName")} />
              {errors.studentName && <p className="font-body text-rose-400 text-xs mt-1">{errors.studentName}</p>}
            </div>
            <div>
              <label className="block font-body text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                Mobile Number <span className="text-rose-400">*</span>
              </label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber}
                onChange={handleChange} placeholder="10-digit mobile number"
                maxLength={10} className={inputClass("phoneNumber")} />
              {errors.phoneNumber && <p className="font-body text-rose-400 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block font-body text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                Email Address <span className="text-slate-600">(Optional)</span>
              </label>
              <input type="email" name="email" value={formData.email}
                onChange={handleChange} placeholder="your@email.com"
                className={inputClass("email")} />
              {errors.email && <p className="font-body text-rose-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-body text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                Course of Interest <span className="text-rose-400">*</span>
              </label>
              <select name="courseOfInterest" value={formData.courseOfInterest}
                onChange={handleChange} className={`${inputClass("courseOfInterest")} cursor-pointer`}>
                <option value="" disabled className="bg-navy-900">— Select a program —</option>
                <option value="JEE" className="bg-navy-900">JEE (Main & Advanced)</option>
                <option value="NEET" className="bg-navy-900">NEET (UG & PG)</option>
                <option value="Banking Exams" className="bg-navy-900">Banking & Finance</option>
                <option value="SSC/UPSC" className="bg-navy-900">SSC / UPSC</option>
                <option value="Other" className="bg-navy-900">Other</option>
              </select>
              {errors.courseOfInterest && <p className="font-body text-rose-400 text-xs mt-1">{errors.courseOfInterest}</p>}
            </div>
            <button type="submit" disabled={status === "loading"}
              className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-teal-700 disabled:cursor-not-allowed text-white font-body font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 mt-2 text-base tracking-wide">
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Submitting...
                </span>
              ) : "Book My Free Session →"}
            </button>
            <p className="font-body text-slate-600 text-xs text-center">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;