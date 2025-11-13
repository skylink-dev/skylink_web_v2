"use client";

import { apiService } from "@/backend/apiservice";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import LocationMap from "./LocationMap";
import AlertModal from "../alert/AlertModal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    title: "",
    message: "",
    type: "success",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "How can we help you?",
    "Technical",
    "Billing",
    "New Connection / Installation",
    "OTT / IPTV",
    "Others",
  ];

  const validateMobile = (phone) => /^[6-9]\d{9}$/.test(phone);

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
    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required";
    else if (!validateMobile(formData.phone))
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.submitContactForm(formData);
      setIsAlertOpen(true);
      setSubmitStatus("success");
      setAlertInfo({
        title: "Success!",
        message: "Your request has been submitted successfully.",
        type: "success",
      });
      setFormData({
        service: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (error) {
      setAlertInfo({
        title: "Error!",
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-100 to-indigo-100 py-12 px-4">
      <AlertModal
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        title={alertInfo.title}
        message={alertInfo.message}
        type={alertInfo.type}
      />
      <div className="max-w-4/5 mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-red-600 bg-red-100 px-4 py-2 rounded-full mb-4">
              Secure Connections
            </span>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              We Offer The{" "}
              <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Highest-Quality
              </span>{" "}
              <span className="text-red-600">Network Connections</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Our network connections are designed to provide unmatched
              reliability and speed, ensuring seamless online experiences for
              both personal and business use.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaPhoneAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Call Us
                    </h3>
                    <a
                      href="tel:+919944199445"
                      className="text-blue-600 font-medium hover:text-green-600 transition"
                    >
                      (+91) 99441 99445
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@skylink.net.in"
                      className="text-blue-600 font-medium hover:text-green-600 transition"
                    >
                      info@skylink.net.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Icon + Address */}
                <div className="flex flex-col sm:flex-row items-start gap-4 lg:w-1/2">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Our Location
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Skylink Fibernet Private Limited,
                      <br />
                      B6, II Floor, Vue Grande,
                      <br />
                      339 Chinnaswamy Road,
                      <br />
                      Siddha Pudhur,
                      <br />
                      Coimbatore - 641044
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden rounded-xl shadow-lg h-64 sm:h-72">
                    <iframe
                      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Skylink%20Fibernet%20Private%20Limited+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                      title="Skylink Fibernet Private Limited Location"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white rounded-3xl shadow-2xl pb-21 p-8">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Service */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border-2 ${
                errors.service ? "border-red-500 bg-red-50" : "border-gray-200"
              } focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition`}
            >
              {services.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service}</p>
            )}

            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border-2 ${
                    errors.firstName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200"
                  } focus:border-red-500 focus:ring-2 focus:ring-red-100 transition outline-none`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 transition outline-none"
                />
              </div>
            </div>

            {/* Email & Mobile */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 transition outline-none"
              />
              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border-2 ${
                    errors.phone
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200"
                  } focus:border-red-500 focus:ring-2 focus:ring-red-100 transition outline-none`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <input
              name="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 transition outline-none"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 transition outline-none"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center gap-3 text-white font-semibold py-3 rounded-lg text-lg transition-all ${
                isSubmitting
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </>
              ) : (
                <>
                  Submit <FaPaperPlane />
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-center">
                ❌ Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
