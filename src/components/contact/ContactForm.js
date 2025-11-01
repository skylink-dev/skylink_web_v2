"use client";
import { useState, useEffect } from "react";
import "./ContactForm.css";

export default function ContactForm({ onClose }) {
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
  const [showToast, setShowToast] = useState(false);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validateName = (name) => name.trim().length > 0;
  const validateEmail = (email) => {
    if (!email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showToastNotification = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
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
      setEmailError("Please verify that you are not a robot");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showToastNotification();
      setFormData({ name: "", email: "", phone: "", captcha: false });
      setCurrentStep(1);
      setCaptchaChecked(false);
      setTimeout(() => {
        onClose();
      }, 4000);
    } catch (error) {
      console.error("Error:", error);
      setEmailError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    onClose();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <div className="popup-overlay" onClick={closePopup}></div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <button className="toast-close" onClick={() => setShowToast(false)}>×</button>
          <div className="toast-icon">✓</div>
          <div className="toast-content">
            <h4>Registration Successful!</h4>
            <p>Thank you for contacting us. We'll reach out soon.</p>
          </div>
        </div>
      )}

      <div className="contact-popup-container">
        <button className="popup-close-btn" onClick={closePopup}>
          ×
        </button>

        <div className="popup-content">
          <div className="popup-header">
            <h2 className="popup-title">Register for Premium Network</h2>
            <p className="popup-subtitle">Experience the highest-quality connectivity with our premium support</p>
          </div>

          <form className="contact-popup-form" onSubmit={handleSubmit}>
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
                    Continue
                  </button>
                )}
              </div>
            )}

            {currentStep >= 2 && (
              <div className={`form-step ${currentStep === 2 ? 'active-step' : 'completed-step'}`}>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
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
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep >= 3 && (
              <div className={`form-step ${currentStep === 3 ? 'active-step' : 'completed-step'}`}>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
                        <div className="captcha-checkbox-visual"></div>
                        {captchaLoading && <div className="captcha-loading-spinner"></div>}
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
                        <span className="submit-loading-spinner"></span> Registering...
                      </>
                    ) : (
                      "Register for FREE"
                    )}
                  </button>
                </div>
              </div>
            )}

            <div className="popup-progress">
              <div className="progress-steps">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`progress-step ${currentStep === step ? 'active' : currentStep > step ? 'completed' : ''}`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </form>

          {/* Side by Side Contact Info */}
          <div className="popup-contact-info">
            <div className="contact-info-header">
              <h3 className="contact-info-title">📞 Get Immediate Support</h3>
              <p className="contact-info-subtitle">Our team is ready to assist you</p>
            </div>
            <div className="contact-items-container">
              <div className="contact-item" onClick={() => window.open('tel:+919944199445')}>
                <div className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>
</div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+91 99441-99445</p>
                </div>
              </div>
              <div className="contact-item" onClick={() => window.open('mailto:info@skylink.net.in')}>
                <div className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>
</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@skylink.net.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}