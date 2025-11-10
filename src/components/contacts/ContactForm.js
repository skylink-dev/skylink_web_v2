"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { apiService } from "@/backend/apiservice";
import LocationMap from "./LocationMap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "How we can help you?",
    "Services Needed",
    "Business Plans",
    "Enterprise Plan",
    "Lease Line",
    "AWS",
    "Azure",
    "Google",
    "Broadband Connection",
    "DTH / IPTV / Digital TV",
    "Wi-Fi 6",
    "Plan Upgraded / Downgraded",
    "Cloud Surveillance",
    "Parental Control",
    "Enable IOT",
    "CCTV",
    "Home Automation",
  ];

  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.submitContactForm(formData);
      setSubmitStatus("success");
      setFormData({
        service: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 px-4 py-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        {/* LEFT COLUMN */}
        <motion.div
          className="space-y-4 relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div>
            <div className="inline-block bg-red-100 text-red-600 font-semibold text-xs uppercase tracking-wider px-4 py-1 rounded-full mb-3">
              Secure Connections
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We Offer The{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Highest-Quality
              </span>{" "}
              <span className="text-red-600">Network Connections</span>
            </h1>
            <p className="text-gray-600 mt-3">
              Experience blazing speeds and unmatched reliability for both home
              and business connections — we ensure you’re always connected.
            </p>
          </div>

          {/* Map Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LocationMap />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - Contact Form */}
        <motion.div
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-100"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl text-center 
            bg-gradient-to-tl from-purple-600 via-red-600 to-red-300 bg-clip-text font-bold text-transparent mb-2"
          >
            Contact Us
          </h2>

          {/* Contact Cards */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {/* Email Card */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="mailto:info@skylink.net.in"
              className="flex min-w-[150px] items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex-1  cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 text-white text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  Email Us
                </h3>
                <p className="text-blue-600 text-sm font-medium break-all">
                  info@skylink.net.in
                </p>
              </div>
            </motion.a>

            {/* Call Card */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="tel:+919944199445"
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex-1 min-w-[250px] cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-green-600 text-white text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Call Us</h3>
                <p className="text-blue-600 text-sm font-medium">
                  (+91) 99441 99445
                </p>
              </div>
            </motion.a>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            Let Us Contact You
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Dropdown */}
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                  errors.service
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200"
                }`}
              >
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-600 text-sm mt-1">{errors.service}</p>
              )}
            </div>

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                    errors.firstName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-200 transition"
              />
            </div>

            {/* Email and Mobile */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-200 transition"
              />
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  maxLength="10"
                  className={`w-full px-4 py-3 border-2 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                    errors.mobile
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-200 transition"
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.03 } : {}}
              whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              className={`w-full py-3 rounded-lg font-semibold text-white text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                isSubmitting
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-600 to-red-800 shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit <FaPaperPlane />
                </>
              )}
            </motion.button>

            {/* Status */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-md"
              >
                ✅ Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md"
              >
                ❌ Oops! Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
