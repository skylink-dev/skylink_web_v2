// ContactForm.jsx
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
    date: "",
    service: "",
    address: "",
    info: "",
    captcha: false,
  });

  const [phoneError, setPhoneError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
   
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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

    if (name === "captcha" && checked) {
      setCaptchaError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let hasError = false;

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
          date: "",
          service: "",
          address: "",
          info: "",
          captcha: false,
        });
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
        {/* Heading Content */}
        <div className="contact-form-heading animate-fadeInUp">
          <h1 className="contact-form-title animate-slideInDown" style={{
            background: 'linear-gradient(135deg, #ff0000, #cc0000, #ff3333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientShift 3s ease infinite'
          }}>
            GET CONNECTED... STAY CONNECTED
          </h1>
          <div className="contact-form-subtitle-container">
            <p className="contact-form-subtitle animate-slideInUp" style={{
              color: '#ff4444',
              animation: 'fadeInPulse 2s ease-in-out infinite'
            }}>
              Linking Possibilities With Seamless Connections!
            </p>
          </div>
        </div>
        <style>{`
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          @keyframes fadeInPulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.02);
            }
          }
          
          .contact-form-title {
            background-size: 200% auto;
          }
        `}</style>

        {/* Form Section */}
        <div className="contact-form-section">
          {/* Pop-up tab bar */}
          <div
            className={`contact-form-popup ${animatePopup ? "animate-emerge" : "opacity-0"}`}
            style={{ transform: animatePopup ? "translate(-50%, 0)" : "translate(-50%, 60px)" }}
          >
            <div className="contact-form-popup-container">
              <div className="contact-form-tab-container">
                <div
                  className={`contact-form-tab-slider ${activeTab === "home" ? "home" : "business"}`}
                ></div>

                <button
                  onClick={() => setActiveTab("home")}
                  className={`contact-form-tab ${activeTab === "home" ? "active" : "inactive"}`}
                >
                  HOME
                </button>
                <button
                  onClick={() => setActiveTab("business")}
                  className={`contact-form-tab ${activeTab === "business" ? "active" : "inactive"}`}
                >
                  BUSINESS
                </button>
              </div>
            </div>
          </div>

          {/* Professional Form Container */}
          <div className="contact-form-main">
            <form className="contact-form-content" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="contact-form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                />
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
              </div>

              {/* Row 2 */}
              <div className="contact-form-grid">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="contact-form-input"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-form-input"
                >
                  <option value="">Select Service</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>{service}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="contact-form-input"
                />
              </div>

              {/* Row 3 */}
              <div className="contact-form-grid">
                <input
                  type="text"
                  name="info"
                  placeholder="Additional Information"
                  value={formData.info}
                  onChange={handleChange}
                  className="contact-form-input"
                />
                <div className="captcha-container">
                  <div className="contact-form-captcha">
                    <label className="contact-form-captcha-label">
                      <input
                        type="checkbox"
                        name="captcha"
                        checked={formData.captcha}
                        onChange={handleChange}
                        className="contact-form-captcha-checkbox"
                      />
                      <span className="contact-form-captcha-text">I'm not a robot *</span>
                    </label>
                    <div className="contact-form-captcha-brand">
                      <span>reCAPTCHA</span>
                      <span>Privacy • Terms</span>
                    </div>
                  </div>
                  {captchaError && (
                    <div className="captcha-error-message">
                      {captchaError}
                    </div>
                  )}
                </div>
                <div className="contact-form-submit-container">
                  <button
                    type="submit"
                    className="contact-form-submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>

            {/* Footer - Removed terms and conditions text */}
            <div className="contact-form-footer">
              <p className="contact-form-footer-text">
                {/* Text removed as requested */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}