'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'How we can help you?',
    'Services Needed',
    'Business Plans',
    'Enterprise Plan',
    'Lease Line',
    'AWS',
    'Azure',
    'Google',
    'Broadband Connection',
    'DTH / IPTV / Digital TV',
    'Wi-Fi 6',
    'Plan Upgraded / Downgraded',
    'Cloud Surveillance',
    'Parental Control',
    'Enable IOT',
    'CCTV',
    'Home Automation'
  ];

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.service || formData.service === 'How we can help you?') {
      newErrors.service = 'Please select a service';
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        service: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Container Styles
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #e0e7ff 100%)',
    padding: '48px 16px'
  };

  const innerContainerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px'
  };

  // Header Styles
  const headerContainerStyle = {
    marginBottom: '32px'
  };

 const badgeStyle = {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#dc2626',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: '#fee2e2',
    padding: '8px 16px',
    borderRadius: '9999px',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1f2937',
    lineHeight: '1.2',
    marginBottom: '16px'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #dc2626, #b91c1c, #991b1b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const redTextStyle = {
    color: '#dc2626'
  };

  const descriptionStyle = {
    fontSize: '18px',
    color: '#6b7280',
    lineHeight: '1.6'
  };

  // Contact Card Styles
  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer'
  };

  const cardHoverStyle = {
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transform: 'translateY(-4px)'
  };

  const cardContentStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px'
  };

  const iconContainerStyle = {
    flexShrink: 0,
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease-in-out'
  };

  const iconHoverStyle = {
    transform: 'scale(1.1)'
  };

  const cardTextStyle = {
    flex: '1'
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const cardDescriptionStyle = {
    color: '#6b7280',
    lineHeight: '1.6'
  };

  const linkStyle = {
    color: '#dc2626',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out'
  };

  const linkHoverStyle = {
    color: '#b91c1c'
  };

  // Form Styles
  const formContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '24px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '32px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  // Input Styles
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#f9fafb',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#1f2937',
    transition: 'all 0.2s ease-in-out',
    minHeight: '48px',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  };

  const focusStyle = {
    borderColor: '#dc2626',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.1)',
    outline: 'none'
  };

  const errorStyle = {
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const selectStyle = {
    ...inputStyle,
    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
    backgroundPosition: 'right 12px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '16px',
    paddingRight: '40px'
  };

  const grid2ColStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  };

  const errorTextStyle = {
    color: '#dc2626',
    fontSize: '14px',
    marginTop: '4px'
  };

  // Button Styles
  const buttonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    minHeight: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
    transform: 'translateY(-1px)',
    boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.4)'
  };

  const buttonDisabledStyle = {
    opacity: 0.7,
    cursor: 'not-allowed'
  };

  // Status Message Styles
  const statusSuccessStyle = {
    padding: '16px',
    backgroundColor: '#dcfce7',
    border: '1px solid #bbf7d0',
    color: '#166534',
    borderRadius: '8px'
  };

  const statusErrorStyle = {
    padding: '16px',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#dc2626',
    borderRadius: '8px'
  };

  // Loading Animation
  const spinnerStyle = {
    width: '20px',
    height: '20px',
    border: '2px solid white',
    borderTop: '2px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @media (min-width: 1024px) {
            .contact-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .name-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .contact-grid-2 {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (min-width: 640px) {
            .name-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .contact-grid-2 {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}
      </style>
      
      <div style={innerContainerStyle}>
        <div style={{...gridStyle, gridTemplateColumns: '1fr'}} className="contact-grid">
          {/* Left Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Header */}
            <div style={headerContainerStyle}>
              <div style={badgeStyle}>
                Secure Connections
              </div>
              <h1 style={titleStyle}>
                We Offer The{' '}
                <span style={gradientTextStyle}>
                  Highest-Quality
                </span>{' '}
                <span style={redTextStyle}>Network Connections</span>
              </h1>
              <p style={descriptionStyle}>
                Our network connections are designed to provide unmatched reliability and speed, 
                ensuring seamless online experiences for both personal and business use.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div style={cardsContainerStyle}>
              {/* Address Card */}
              <div 
                style={cardStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
              >
                <div style={cardContentStyle}>
                  <div 
                    style={{
                      ...iconContainerStyle,
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
                    }}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, iconHoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'scale(1)' })}
                  >
                    <FaMapMarkerAlt style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div style={cardTextStyle}>
                    <h3 style={cardTitleStyle}>Our Location</h3>
                    <p style={cardDescriptionStyle}>
                      Skylink Fibernet Private Limited,<br />
                      B6, II Floor, Vue Grande,<br />
                      339 Chinnaswamy Road, Siddha Pudhur,<br />
                      Coimbatore - 641044
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div 
                style={cardStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
              >
                <div style={cardContentStyle}>
                  <div 
                    style={{
                      ...iconContainerStyle,
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                    }}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, iconHoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'scale(1)' })}
                  >
                    <FaEnvelope style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div style={cardTextStyle}>
                    <h3 style={cardTitleStyle}>Email Us</h3>
                    <a 
                      href="mailto:info@skylink.net.in" 
                      style={linkStyle}
                      onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                      onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
                    >
                      info@skylink.net.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div 
                style={cardStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
              >
                <div style={cardContentStyle}>
                  <div 
                    style={{
                      ...iconContainerStyle,
                      background: 'linear-gradient(135deg, #10b981, #059669)'
                    }}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, iconHoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'scale(1)' })}
                  >
                    <FaPhoneAlt style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div style={cardTextStyle}>
                    <h3 style={cardTitleStyle}>Call Us</h3>
                    <a 
                      href="tel:+919944199445" 
                      style={linkStyle}
                      onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                      onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
                    >
                      (+91) 99441 99445
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <div style={formContainerStyle}>
              <form onSubmit={handleSubmit} style={formStyle}>
                {/* Service Dropdown */}
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      ...selectStyle,
                      ...(errors.service ? errorStyle : {}),
                    }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, selectStyle)}
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p style={errorTextStyle}>
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Name Fields */}
                <div style={{...grid2ColStyle}} className="name-grid">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      style={{
                        ...inputStyle,
                        ...(errors.firstName ? errorStyle : {}),
                      }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                    {errors.firstName && (
                      <p style={errorTextStyle}>
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      style={{
                        ...inputStyle,
                        ...(errors.lastName ? errorStyle : {}),
                      }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                    {errors.lastName && (
                      <p style={errorTextStyle}>
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Mobile */}
                <div style={{...grid2ColStyle}} className="contact-grid-2">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      style={{
                        ...inputStyle,
                        ...(errors.email ? errorStyle : {}),
                      }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                    {errors.email && (
                      <p style={errorTextStyle}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      maxLength="10"
                      style={{
                        ...inputStyle,
                        ...(errors.mobile ? errorStyle : {}),
                      }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                    />
                    {errors.mobile && (
                      <p style={errorTextStyle}>
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your Address"
                    style={{
                      ...inputStyle,
                      ...(errors.address ? errorStyle : {}),
                    }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  />
                  {errors.address && (
                    <p style={errorTextStyle}>
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    style={{
                      ...textareaStyle,
                      ...(errors.message ? errorStyle : {}),
                    }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, textareaStyle)}
                  />
                  {errors.message && (
                    <p style={errorTextStyle}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...buttonStyle,
                    ...(isSubmitting ? buttonDisabledStyle : {})
                  }}
                  onMouseEnter={(e) => !isSubmitting && Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
                >
                  {isSubmitting ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={spinnerStyle} />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit</span>
                      <FaPaperPlane style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={statusSuccessStyle}>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={statusErrorStyle}>
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}