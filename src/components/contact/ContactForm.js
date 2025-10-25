"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./ContactForm.css";
import { apiService } from "@/backend/apiservice";

export default function ContactFormModern() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    captcha: false,
  });

  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  // Show popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateName = (name) => name.trim().length > 0;
  const validateEmail = (email) => {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCaptchaChange = (e) => {
    const { checked } = e.target;
    if (checked && !captchaChecked) {
      setCaptchaLoading(true);
      setCaptchaChecked(true);
      setTimeout(() => {
        setCaptchaLoading(false);
        setFormData((prev) => ({ ...prev, captcha: true }));
      }, 800);
    } else if (!checked) {
      setCaptchaChecked(false);
      setCaptchaLoading(false);
      setFormData((prev) => ({ ...prev, captcha: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when user starts typing
    if (name === "phone") {
      setPhoneError("");
    } else if (name === "name") {
      setNameError("");
    } else if (name === "email") {
      setEmailError("");
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.phone || !validatePhone(formData.phone)) {
        setPhoneError("Please enter a valid 10-digit phone number");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.name || !validateName(formData.name)) {
        setNameError("Please enter your name");
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!formData.captcha) {
      alert("Please verify that you are not a robot");
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiService.submitContactForm(formData);
      if (response.status === 200 || response.status === 201) {
        alert("Thank You! We will reach out soon.");
        setFormData({ name: "", email: "", phone: "", captcha: false });
        setCurrentStep(1);
        setCaptchaChecked(false);
        setShowPopup(false); // Close popup after successful submission
      } else {
        throw new Error(`Unexpected status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div className="popup-overlay" onClick={closePopup}></div>
      
      {/* Popup Container */}
      <div className="contact-popup-container">
        {/* Close Button */}
        <button className="popup-close-btn" onClick={closePopup}>
          ×
        </button>

        {/* Popup Content */}
        <div className="popup-content">
          {/* Header */}
          <div className="popup-header">
            <h2 className="popup-title">Get In Touch</h2>
            <p className="popup-subtitle">We'll get back to you shortly</p>
          </div>

          {/* Form */}
          <form className="contact-popup-form" onSubmit={handleSubmit}>
            {/* Step 1: Phone Number */}
            {currentStep >= 1 && (
              <div className={`form-step ${currentStep === 1 ? 'active-step' : 'completed-step'}`}>
                <div className="input-container">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="popup-input"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    disabled={currentStep > 1}
                  />
                  {phoneError && <div className="error-message">{phoneError}</div>}
                </div>
                {currentStep === 1 && (
                  <button type="button" className="popup-next-btn" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            )}

            {/* Step 2: Name */}
            {currentStep >= 2 && (
              <div className={`form-step ${currentStep === 2 ? 'active-step' : 'completed-step'}`}>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="popup-input"
                    disabled={currentStep > 2}
                  />
                  {nameError && <div className="error-message">{nameError}</div>}
                </div>
                <div className="step-buttons">
                  <button type="button" className="popup-back-btn" onClick={handleBack}>
                    Back
                  </button>
                  <button type="button" className="popup-next-btn" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Email & Captcha */}
            {currentStep >= 3 && (
              <div className={`form-step ${currentStep === 3 ? 'active-step' : 'completed-step'}`}>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    value={formData.email}
                    onChange={handleChange}
                    className="popup-input"
                  />
                  {emailError && <div className="error-message">{emailError}</div>}
                </div>

                <div className="captcha-container">
                  <div className={`popup-captcha ${captchaLoading ? "captcha-loading" : ""}`}>
                    <label className="captcha-label">
                      <div className="captcha-checkbox-container">
                        <input
                          type="checkbox"
                          name="captcha"
                          checked={formData.captcha}
                          onChange={handleCaptchaChange}
                          className="captcha-checkbox"
                          disabled={captchaLoading}
                        />
                        {captchaLoading && <div className="captcha-loading-spinner"></div>}
                        {!captchaLoading && formData.captcha && <div className="captcha-checkmark">✓</div>}
                      </div>
                      <span className="captcha-text">I'm not a robot *</span>
                    </label>
                    <div className="captcha-brand">
                      <span>reCAPTCHA</span>
                      <span>Privacy • Terms</span>
                    </div>
                  </div>
                </div>

                <div className="step-buttons">
                  <button type="button" className="popup-back-btn" onClick={handleBack}>
                    Back
                  </button>
                  <button type="submit" className="popup-submit-btn" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="submit-loading-spinner"></span> Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Progress Indicator */}
            <div className="popup-progress">
              <div className="progress-steps">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`progress-step ${currentStep >= step ? 'active' : ''}`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </form>

          {/* Contact Info */}
          <div className="popup-contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 99441-99445</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>info@skylink.net.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}