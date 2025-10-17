import { useState, useEffect } from "react";
import "./ContactForm.css";
import { apiService } from "@/backend/apiservice";

export default function ContactFormModern() {
  const [activeTab, setActiveTab] = useState("home");
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

  // Function to handle phone click - redirect to phone app
  const handlePhoneClick = () => {
    const phoneNumber = "+919944199445";
    window.location.href = `tel:${phoneNumber}`;
  };

  // Function to handle email click - redirect to Gmail
  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmTWccqhmdnZPqNGFcWTJMDvrsnKcssBFLfkzrbbMPsgQlMzFjzClhsKJLXjBcxHXdwScQ`;
    window.open(gmailUrl, "_blank");
  };

  // Function to handle address click - redirect to maps
  const handleAddressClick = () => {
    const address = "Skylink Fibernet Private Limited, B6, II Floor, Vue Grande, 339 Chinnaswamy Road, Siddha Pudhur, Coimbatore – 641044";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const handleCaptchaChange = (e) => {
    const { checked } = e.target;
    
    if (checked && !captchaChecked) {
      setCaptchaLoading(true);
      setCaptchaChecked(true);
      
      // Simulate loading animation for captcha
      setTimeout(() => {
        setCaptchaLoading(false);
        setShowSubmit(true);
        setFormData(prev => ({ ...prev, captcha: true }));
        setCaptchaError("");
      }, 800);
    } else if (!checked) {
      setShowSubmit(false);
      setCaptchaChecked(false);
      setCaptchaLoading(false);
      setFormData(prev => ({ ...prev, captcha: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Don't handle captcha change here if it's being handled separately
    if (name === "captcha") return;
  
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData);
  
    if (name === "phone") {
      if (value === "") {
        setPhoneError("Please enter a valid 10-digit phone number");
      } else if (validatePhone(value)) {
        setPhoneError("");
      } else {
        setPhoneError("Please enter a valid 10-digit phone number");
      }
    }

    if (name === "name") {
      if (value === "") {
        setNameError("Please enter your name");
      } else if (validateName(value)) {
        setNameError("");
      } else {
        setNameError("Please enter your name");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let hasError = false;

    // Validate name
    if (!formData.name) {
      setNameError("Please enter your name");
      hasError = true;
    } else if (!validateName(formData.name)) {
      setNameError("Please enter your name");
      hasError = true;
    } else {
      setNameError("");
    }

    // Validate phone number
    if (!formData.phone) {
      setPhoneError("Please enter a valid 10-digit phone number");
      hasError = true;
    } else if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      hasError = true;
    } else {
      setPhoneError("");
    }

    // Validate captcha
    if (!formData.captcha) {
      setCaptchaError("Please verify that you are not a robot");
      hasError = true;
    } else {
      setCaptchaError("");
    }

    if (!hasError) {
      setIsLoading(true);
      try {
        console.log("Submitting form data:", formData);
        const response = await apiService.submitContactForm(formData);
        console.log("API Response:", response);
        
        if (response.status === 200 || response.status === 201) {
          alert("Thank You! We will reach out soon.");
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            captcha: false,
          });
          setShowSubmit(false);
          setCaptchaChecked(false);
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      } catch (error) {
        console.error("API Error Details:", error);
        
        // More specific error messages
        if (error.response) {
          // Server responded with error status
          console.error("Error Response Data:", error.response.data);
          console.error("Error Response Status:", error.response.status);
          console.error("Error Response Headers:", error.response.headers);
          
          if (error.response.status === 400) {
            alert("Please check your input data and try again.");
          } else if (error.response.status === 500) {
            alert("Server error. Please try again later.");
          } else {
            alert(`Error: ${error.response.status} - ${error.response.data?.message || 'Please try again'}`);
          }
        } else if (error.request) {
          // Request was made but no response received
          console.error("No response received:", error.request);
          alert("Network error. Please check your connection and try again.");
        } else {
          // Something else happened
          console.error("Error:", error.message);
          alert("An unexpected error occurred. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-form-modern">
      {/* Video Background */}
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

      {/* Main content */}
      <div className="contact-form-container">
        {/* Contact Section - Split Layout with mobile reverse order */}
        <div className="contact-section-split mobile-reverse">
          {/* Form Side - Will appear FIRST on mobile, SECOND on desktop */}
          <div className="contact-form-side">
            {/* Subtitle - Mobile only: above form */}
            <div className="contact-form-subtitle-container mobile-only">
              <h2
                className="contact-form-subtitle animate-slideInUp jumping-text"
              >
                {"Linking Possibilities With Seamless Connections!".split(' ').map((word, index) => (
                  <span key={index} style={{ display: 'inline-block', marginRight: '4px' }}>
                    {word}
                  </span>
                ))}
              </h2>
            </div>

            {/* Form Section */}
            <div className="contact-form-section">
              {/* Professional Form Container */}
              <div className="contact-form-main">
                <form className="contact-form-content" onSubmit={handleSubmit}>
                  {/* Vertical Layout - Single Column */}
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
                      {phoneError && (
                        <div className="phone-error-message">
                          {phoneError}
                        </div>
                      )}
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
                      {nameError && (
                        <div className="name-error-message">
                          {nameError}
                        </div>
                      )}
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
                        <div className={`contact-form-captcha ${captchaLoading ? 'captcha-loading' : ''}`}>
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
                              {captchaLoading && (
                                <div className="captcha-loading-spinner"></div>
                              )}
                              {!captchaLoading && formData.captcha && (
                                <div className="captcha-checkmark">✓</div>
                              )}
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
                          <button
                            type="submit"
                            className="contact-form-submit"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <span className="submit-loading-spinner"></span>
                                Sending...
                              </>
                            ) : (
                              "Send message"
                            )}
                          </button>
                        </div>
                      )}
                      {captchaError && (
                        <div className="captcha-error-message">
                          {captchaError}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Side - Will appear SECOND on mobile, FIRST on desktop */}
          <div className="contact-info-side">
            {/* Subtitle - Desktop only: above contact section */}
            <div className="contact-form-subtitle-container desktop-only">
              <h2
                className="contact-form-subtitle animate-slideInUp jumping-text"
              >
                {"Linking Possibilities With Seamless Connections!".split(' ').map((word, index) => (
                  <span key={index} style={{ display: 'inline-block', marginRight: '4px' }}>
                    {word}
                  </span>
                ))}
              </h2>
            </div>
            
            <div className="contact-details">
              {/* Phone item - always red by default */}
              <div 
                className="contact-item phone-item"
                onClick={handlePhoneClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+91 99441-99445</p>
                </div>
              </div>
              
              {/* Email item */}
              <div 
                className="contact-item"
                onClick={handleEmailClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@skylink.net.in</p>
                </div>
              </div>
              
              {/* Address item */}
              <div 
                className="contact-item"
                onClick={handleAddressClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>
                    Skylink Fibernet Private Limited<br />
                    B6, II Floor, Vue Grande,<br />
                    339 Chinnaswamy Road, Siddha Pudhur,<br />
                    Coimbatore – 641044.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}