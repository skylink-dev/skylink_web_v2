"use client";
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
    await new Promise((r) => setTimeout(r, 1500));

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
        <div className="fixed top-4 right-4 left-4 bg-green-600 text-white rounded-xl shadow-lg flex items-center p-4 gap-3 animate-fade-in z-50 sm:left-auto sm:right-6 sm:max-w-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 flex-shrink-0"
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
          <div className="flex-1">
            <h4 className="font-semibold text-sm">Registration Successful!</h4>
            <p className="text-xs opacity-90">We'll reach out soon.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-2 text-lg font-bold hover:opacity-70 transition-opacity"
          >
            ×
          </button>
        </div>
      )}

      {/* ✅ Popup Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-3 py-4 sm:px-4 sm:py-6">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto p-4 animate-fade-in max-h-[95vh] overflow-y-auto sm:max-w-lg sm:p-6">
          {/* Close Button - Fixed positioning */}
          <button
            className="absolute top-2 right-2 z-50 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg border border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all text-xl font-light sm:top-3 sm:right-3"
            onClick={onClose}
          >
            ×
          </button>

          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 pt-1">
            <h2 className="text-lg font-bold text-gray-800 mb-1 sm:text-xl">
              Register for Premium Network
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              Experience lightning-fast connectivity with trusted support.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1 - Phone */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-base"
                    maxLength="10"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠</span>
                      {errors.phone}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-base"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2 - Name */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-base"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠</span>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Email & Captcha */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-base"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span>⚠</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Captcha */}
                <div className={`border-2 rounded-lg p-3 transition-all ${
                  captchaLoading ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                }`}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={formData.captcha}
                        onChange={handleCaptchaChange}
                        disabled={captchaLoading}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                        formData.captcha 
                          ? 'bg-red-600 border-red-600' 
                          : 'bg-white border-gray-400'
                      }`}>
                        {formData.captcha && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      I'm not a robot *
                    </span>
                    {captchaLoading && (
                      <div className="ml-auto w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    )}
                  </label>
                </div>

                {errors.captcha && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <span>⚠</span>
                    {errors.captcha}
                  </p>
                )}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-70 transition-colors font-semibold text-sm flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Registering...
                      </>
                    ) : (
                      "Register for FREE"
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentStep === step ? "bg-red-600" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </form>

          {/* ✅ Contact Info Section - Full width items */}
          <div className="mt-4 border-t pt-4">
            <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-600"
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
            <p className="text-gray-500 text-xs mb-3">
              Our team is ready to assist you
            </p>

            <div className="space-y-3">
              {/* Phone Button - Full width */}
              <button
                onClick={() => window.open("tel:+919944199445")}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all group text-left"
              >
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
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
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1 truncate">
                    CALL US
                  </p>
                  <p className="text-gray-800 font-bold text-sm truncate">
                    +91 99441-99445
                  </p>
                </div>
              </button>

              {/* Email Button - Full width */}
              <button
                onClick={() => window.open("mailto:info@skylink.net.in")}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all group text-left"
              >
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
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
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1 truncate">
                    EMAIL US
                  </p>
                  <p className="text-gray-800 font-bold text-sm break-all">
                    info@skylink.net.in
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}