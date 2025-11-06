"use client";
import { apiService } from "@/backend/apiservice";
import { useState, useEffect } from "react";

export default function ContactForm({ onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    captcha: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // ✅ Validation Helpers
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateName = (name) => name.trim().length > 0;
  const validateEmail = (email) =>
    !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const showToastNotification = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleCaptchaChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCaptchaLoading(true);
      setCaptchaChecked(true);
      setTimeout(() => {
        setCaptchaLoading(false);
        setFormData((prev) => ({ ...prev, captcha: true }));
      }, 800);
    } else {
      setCaptchaChecked(false);
      setCaptchaLoading(false);
      setFormData((prev) => ({ ...prev, captcha: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleNext = () => {
    if (currentStep === 1 && !validatePhone(formData.phone))
      return setErrors({ phone: "Please enter a valid 10-digit phone number" });
    if (currentStep === 2 && !validateName(formData.name))
      return setErrors({ name: "Please enter your name" });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email))
      return setErrors({ email: "Please enter a valid email address" });
    if (!formData.captcha)
      return setErrors({ captcha: "Please verify that you are not a robot" });

    setIsLoading(true);
    await apiService
      .submitContactForm(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(res);
      });

    showToastNotification();
    setFormData({ name: "", email: "", phone: "", captcha: false });
    setCaptchaChecked(false);
    setCurrentStep(1);
    setIsLoading(false);
    setTimeout(() => onClose(), 4000);
  };

  // ✅ Escape key closes modal
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* ✅ Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-600 text-white rounded-lg shadow-lg flex items-center p-4 gap-3 animate-fade-in z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div>
            <h4 className="font-semibold">Registration Successful!</h4>
            <p className="text-sm">We’ll reach out soon.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-auto text-xl font-bold hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}

      {/* ✅ Popup Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fade-in">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            ×
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Register for Premium Network
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Experience lightning-fast connectivity with trusted support.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  maxLength="10"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}

                {/* Fake Captcha */}
                <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
                  <input
                    type="checkbox"
                    checked={formData.captcha}
                    onChange={handleCaptchaChange}
                    disabled={captchaLoading}
                    className="w-5 h-5 accent-red-600"
                  />
                  <span className="text-gray-700 text-sm">
                    I’m not a robot *
                  </span>
                  {captchaLoading && (
                    <div className="ml-auto w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-70"
                  >
                    {isLoading ? "Registering..." : "Register for FREE"}
                  </button>
                </div>
              </div>
            )}

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    currentStep === step ? "bg-red-600" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </form>

          {/* ✅ Contact Info Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              {/* 📞 SVG Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 5.5C2 4.12 3.12 3 4.5 3h2A1.5 1.5 0 018 4.5v2A1.5 1.5 0 016.5 8H5a11 11 0 0011 11v-1.5A1.5 1.5 0 0117.5 16h2a1.5 1.5 0 011.5 1.5v2A1.5 1.5 0 0119.5 21C10.94 21 3 13.06 3 4.5 3 3.12 4.12 2 5.5 2H8"
                />
              </svg>
              Get Immediate Support
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Our team is ready to assist you
            </p>

            <div className="space-y-3">
              <button
                onClick={() => window.open("tel:+919944199445")}
                className="flex items-center gap-3 text-red-600 hover:underline"
              >
                {/* SVG Phone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 5.5C2 4.12 3.12 3 4.5 3h2A1.5 1.5 0 018 4.5v2A1.5 1.5 0 016.5 8H5a11 11 0 0011 11v-1.5A1.5 1.5 0 0117.5 16h2a1.5 1.5 0 011.5 1.5v2A1.5 1.5 0 0119.5 21C10.94 21 3 13.06 3 4.5 3 3.12 4.12 2 5.5 2H8"
                  />
                </svg>
                +91 99441-99445
              </button>

              <button
                onClick={() => window.open("mailto:info@skylink.net.in")}
                className="flex items-center gap-3 text-red-600 hover:underline"
              >
                {/* ✉️ SVG Mail */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                info@skylink.net.in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
