// ContactForm.jsx
import { useState, useEffect } from "react";
import "./ContactForm.css";

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

  const homeServices = ["Sales/Support", "Tech Support"];
  const businessServices = [
    "Sales/Support",
    "New Connection",
    "Tech Support",
    "Business Plans",
    "Enterprise Plan",
  ];

  const services = activeTab === "home" ? homeServices : businessServices;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.captcha) {
      alert("Please verify that you're not a robot");
      return;
    }
    console.log("Form submitted:", formData);
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
          <h1 className="contact-form-title">
            GET CONNECTED... STAY CONNECTED
          </h1>
          <div className="contact-form-subtitle-container">
            <p className="contact-form-subtitle">
              Linking Possibilities With Seamless Connections!
            </p>
            {/* <span className="contact-form-brand">
              Skylink
            </span> */}
          </div>
        </div>

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
            <div className="contact-form-content">
              {/* Row 1 */}
              <div className="contact-form-grid">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="contact-form-input" 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Id" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="contact-form-input" 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="contact-form-input" 
                />
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
                  required 
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
                <div className="contact-form-captcha">
                  <label className="contact-form-captcha-label">
                    <input 
                      type="checkbox" 
                      name="captcha" 
                      checked={formData.captcha} 
                      onChange={handleChange} 
                      className="contact-form-captcha-checkbox" 
                    />
                    <span className="contact-form-captcha-text">I'm not a robot</span>
                  </label>
                  <div className="contact-form-captcha-brand">
                    <span>reCAPTCHA</span>
                    <span>Privacy • Terms</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={handleSubmit} 
                  className="contact-form-submit"
                  disabled={!formData.captcha}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="contact-form-footer">
              <p className="contact-form-footer-text">
                By submitting this form, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}