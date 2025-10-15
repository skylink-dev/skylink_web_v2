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

  const homeServices = ["Sales/Support", "Tech Support"];
  const businessServices = [
    "Sales/Support",
    "New Connection",
    "Tech Support",
    "Business Plans",
    "Enterprise Plan",
  ];

  const services = activeTab === "home" ? homeServices : businessServices;

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
      setFormData(prev => ({ ...prev, captcha: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
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

  const handleSubmit = (e) => {
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
      apiService.submitContactForm(formData).then((resp)=>{
        alert("Thank You we will Reach out Soon");
        setFormData({
          name: "",
          email: "",
          phone: "",
          captcha: false,
        });
        setShowSubmit(false);
        setCaptchaChecked(false);
      }).catch((err)=>{
        alert("Unknown error expected please submit again");
        console.log(err);
      }).finally(()=>{
        setIsLoading(false);
      });
      console.log("Form submitted:", formData);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimatePopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-form-modern">
      {/* Gradient background */}
      <div className="contact-form-bg-overlay"></div>

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
                              {captchaChecked && !captchaLoading && (
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
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@skylink.net.in</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>9944199447</p>
                </div>
              </div>
              
              <div className="contact-item">
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

      <style jsx>{`
        .contact-section-split {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
          max-width: 1200px;
        }

        /* Mobile: Form first, contact info second */
        .contact-section-split.mobile-reverse {
          flex-direction: column;
        }

        .contact-section-split.mobile-reverse .contact-form-side {
          order: 1;
        }

        .contact-section-split.mobile-reverse .contact-info-side {
          order: 2;
        }

        /* Desktop: Normal order (contact info left, form right) */
        @media (min-width: 1024px) {
          .contact-section-split {
            flex-direction: row;
            gap: 60px;
          }
          
          .contact-section-split.mobile-reverse {
            flex-direction: row;
          }
          
          .contact-section-split.mobile-reverse .contact-form-side {
            order: 2;
          }
          
          .contact-section-split.mobile-reverse .contact-info-side {
            order: 1;
          }
        }

        .contact-info-side {
          flex: 1;
          color: white;
          padding: 20px;
        }

        .contact-form-side {
          flex: 1;
        }

        .contact-main-headline {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          line-height: 1.2;
          color: white;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 768px) {
          .contact-main-headline {
            font-size: 3rem;
          }
        }

        .highlight-text {
          color: #FFB8B8;
          background: linear-gradient(135deg, #FFB8B8, #FF6B6B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .contact-icon {
          font-size: 1.5rem;
          margin-top: 2px;
        }

        .contact-text h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: #FFB8B8;
        }

        .contact-text p {
          font-size: 1rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* Update existing styles for red theme */
        .contact-form-modern {
          background: #E62639;
          position: relative;
          width: 100%;
          min-height: 60vh;
          overflow: hidden;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }

        .contact-form-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
        }

        .contact-form-popup-container {
          background: linear-gradient(135deg, #E62639 0%, #FF6B6B 100%);
        }

        .contact-form-submit {
          background: linear-gradient(135deg, #B91D23 0%, #8B0000 100%);
        }

        .contact-form-submit:hover {
          background: linear-gradient(135deg, #CC1F26 0%, #9A0000 100%);
        }

        .contact-form-input:focus {
          box-shadow: 0 0 0 3px rgba(230, 38, 57, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #E62639;
        }

        .contact-form-captcha-checkbox:checked {
          accent-color: #E62639;
        }

        .captcha-loading-spinner {
          border-top: 2px solid #E62639;
        }

        .captcha-checkmark {
          color: #E62639;
        }
      `}</style>
    </div>
  );
}