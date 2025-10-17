"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./ContactForm.css";
import { apiService } from "@/backend/apiservice";

export default function ContactFormModern() {
  const [animatePopup, setAnimatePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    captcha: false,
  });

  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  // Advertisement slider state (only ad1 and ad2)
  const [currentAd, setCurrentAd] = useState(0);
  const adImages = [
    "/assets/ad1.jpg",
    "/assets/ad2.jpg",
  ];

  // Handle phone click
  const handlePhoneClick = () => {
    window.location.href = "tel:+919944199445";
  };

  // Handle email click
  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmTWccqhmdnZPqNGFcWTJMDvrsnKcssBFLfkzrbbMPsgQlMzFjzClhsKJLXjBcxHXdwScQ`;
    window.open(gmailUrl, "_blank");
  };

  // Slider controls
  const nextAd = () => setCurrentAd((prev) => (prev + 1) % adImages.length);
  const prevAd = () => setCurrentAd((prev) => (prev - 1 + adImages.length) % adImages.length);
  const goToAd = (index) => setCurrentAd(index);

  // Auto-rotate ads
  useEffect(() => {
    const interval = setInterval(nextAd, 5000);
    return () => clearInterval(interval);
  }, []);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateName = (name) => name.trim().length > 0;

  const handleCaptchaChange = (e) => {
    const { checked } = e.target;
    if (checked && !captchaChecked) {
      setCaptchaLoading(true);
      setCaptchaChecked(true);
      setTimeout(() => {
        setCaptchaLoading(false);
        setShowSubmit(true);
        setFormData((prev) => ({ ...prev, captcha: true }));
        setCaptchaError("");
      }, 800);
    } else if (!checked) {
      setShowSubmit(false);
      setCaptchaChecked(false);
      setCaptchaLoading(false);
      setFormData((prev) => ({ ...prev, captcha: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "captcha") return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phone") {
      if (!value || !validatePhone(value)) {
        setPhoneError("Please enter a valid 10-digit phone number");
      } else {
        setPhoneError("");
      }
    }

    if (name === "name") {
      if (!value || !validateName(value)) {
        setNameError("Please enter your name");
      } else {
        setNameError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!formData.name || !validateName(formData.name)) {
      setNameError("Please enter your name");
      hasError = true;
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      hasError = true;
    }
    if (!formData.captcha) {
      setCaptchaError("Please verify that you are not a robot");
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);
    try {
      const response = await apiService.submitContactForm(formData);
      if (response.status === 200 || response.status === 201) {
        alert("Thank You! We will reach out soon.");
        setFormData({ name: "", email: "", phone: "", captcha: false });
        setShowSubmit(false);
        setCaptchaChecked(false);
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

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-form-modern">
      {/* Background Video */}
      <video
        className="contact-form-video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/contact-form-bg.mp4" type="video/mp4" />
        <source src="/assets/video/contact-form-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Main Layout */}
      <div className="contact-form-container">
        <div className="contact-section-split mobile-reverse">
          {/* Form Section */}
          <div className="contact-form-side">
            <div className="contact-form-subtitle-container mobile-only">
              <h2 className="contact-form-subtitle animate-slideInUp jumping-text">
                {"Linking Possibilities With Seamless Connections!"
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} style={{ display: "inline-block", marginRight: "4px" }}>
                      {word}
                    </span>
                  ))}
              </h2>
            </div>

            <div className="contact-form-section">
              <div className="contact-form-main">
                <form className="contact-form-content" onSubmit={handleSubmit}>
                  <div className="contact-form-vertical">
                    <div className="phone-input-container">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-form-input"
                        pattern="[0-9]{10}"
                        maxLength="10"
                      />
                      {phoneError && <div className="phone-error-message">{phoneError}</div>}
                    </div>

                    <div className="name-input-container">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-form-input"
                      />
                      {nameError && <div className="name-error-message">{nameError}</div>}
                    </div>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-form-input"
                    />

                    <div className="captcha-container">
                      {!showSubmit ? (
                        <div className={`contact-form-captcha ${captchaLoading ? "captcha-loading" : ""}`}>
                          <label className="contact-form-captcha-label">
                            <div className="captcha-checkbox-container">
                              <input
                                type="checkbox"
                                name="captcha"
                                checked={formData.captcha}
                                onChange={handleCaptchaChange}
                                className="contact-form-captcha-checkbox"
                                disabled={captchaLoading}
                              />
                              {captchaLoading && <div className="captcha-loading-spinner"></div>}
                              {!captchaLoading && formData.captcha && <div className="captcha-checkmark">✓</div>}
                            </div>
                            <span className="contact-form-captcha-text">I'm not a robot *</span>
                          </label>
                          <div className="contact-form-captcha-brand">
                            <span>reCAPTCHA</span>
                            <span>Privacy • Terms</span>
                          </div>
                        </div>
                      ) : (
                        <div className="contact-form-submit-container submit-appear">
                          <button type="submit" className="contact-form-submit" disabled={isLoading}>
                            {isLoading ? (
                              <>
                                <span className="submit-loading-spinner"></span> Sending...
                              </>
                            ) : (
                              "Send message"
                            )}
                          </button>
                        </div>
                      )}
                      {captchaError && <div className="captcha-error-message">{captchaError}</div>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info + Ads */}
          <div className="contact-info-side">
            <div className="contact-form-subtitle-container desktop-only">
              <h2 className="contact-form-subtitle animate-slideInUp jumping-text">
                {"Linking Possibilities With Seamless Connections!"
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} style={{ display: "inline-block", marginRight: "4px" }}>
                      {word}
                    </span>
                  ))}
              </h2>
            </div>

            {/* Advertisement Slider */}
            <div className="advertisement-slider">
              <div className="slider-container relative">
                <Image
                  src={adImages[currentAd]}
                  alt={`Advertisement ${currentAd + 1}`}
                  width={600}
                  height={400}
                  className="slider-image"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />

                <button className="slider-nav prev" onClick={prevAd}>
                  ‹
                </button>
                <button className="slider-nav next" onClick={nextAd}>
                  ›
                </button>

                <div className="slider-controls">
                  {adImages.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot ${index === currentAd ? "active" : ""}`}
                      onClick={() => goToAd(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            
            <div className="contact-details">
              <div className="contact-info-combined" style={{ cursor: "pointer" }}>
                <div className="contact-item" onClick={handlePhoneClick}>
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+91 99441-99445</p>
                  </div>
                </div>

                <div className="contact-item" onClick={handleEmailClick}>
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@skylink.net.in</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
