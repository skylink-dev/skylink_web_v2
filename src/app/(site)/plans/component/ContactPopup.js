import { useEffect, useState } from 'react';
import { FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function ContactPopup({isOpen, setIsOpen, activeMbps, activePrice, activeCycle, isMobile}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91 ',
    subject: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (isMobile) {
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = '0';
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    }
    
    setFormData({
      name:'',
      phone:'+91 ', 
      subject:`${activeMbps} - ${activeCycle} ( ₹ ${activePrice}/- +GST applicable)`
    })
    setErrors({name: '', phone: ''})
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  },[activeMbps, activePrice, activeCycle, isOpen, isMobile])
 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name should only contain letters and spaces';
    return '';
  };

  const validatePhone = (phone) => {
    const phoneNumber = phone.replace(/^\+91\s*/, '').replace(/\s/g, '');
    if (!phoneNumber) return 'Phone number is required';
    if (!/^\d+$/.test(phoneNumber)) return 'Phone number should only contain digits';
    if (phoneNumber.length !== 10) return 'Phone number must be 10 digits';
    if (!/^[6-9]/.test(phoneNumber)) return 'Phone number must start with 6, 7, 8, or 9';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      if (!value.startsWith('+91 ')) {
        setFormData({...formData, phone: '+91 '});
        return;
      }
      const phoneNumber = value.slice(4);
      if (phoneNumber && !/^\d*$/.test(phoneNumber)) return;
      if (phoneNumber.length > 10) return;
    }
    
    if (name === 'name' && value.length > 50) return;
    
    setFormData({...formData, [name]: value});
    setErrors({...errors, [name]: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    if (nameError || phoneError) {
      setErrors({name: nameError, phone: phoneError});
      return;
    }
    
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you soon.');
    } catch (err) {
      console.log(err);
      alert("Unexpected Error Occurred");
    }
    setErrors({ name: '', phone: '' });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/skylinkfibernetindia', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/skylinkfibernet', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://www.youtube.com/channel/UCwXOws8BUyPAxFO0Ni-ALaQ', label: 'YouTube' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/skylink-fibernet', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/skylinkfiber', label: 'Twitter' }
  ];

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .contact-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 20px;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .contact-popup-container {
          background-color: white;
          border-radius: 20px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          display: flex;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .contact-popup-content {
          display: flex;
          width: 100%;
          height: 100%;
          overflow-y: auto;
        }

        .contact-popup-form-section {
          padding: 60px 40px 40px;
          flex: 1;
          width: 60%;
          overflow-y: auto;
        }

        .contact-popup-image-section {
          position: relative;
          width: 40%;
          min-height: 500px;
          background-image: url(https://www.skylink.net.in/wp-content/uploads/2025/04/couple-watch-skylink.jpg);
          background-size: cover;
          background-position: center;
        }

        .contact-popup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1000000;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s;
        }

        .contact-popup-close:hover {
          background: #f3f4f6;
          color: #374151;
          transform: scale(1.1);
        }

        @keyframes slideInDesktop {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInMobile {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .contact-popup-container {
          animation: slideInDesktop 0.3s ease-out;
        }

        /* MOBILE STYLES */
        @media (max-width: 768px) {
          .contact-popup-overlay {
            align-items: center;
            justify-content: center;
            padding: 15px;
          }

          .contact-popup-container {
            width: 95%;
            max-width: 95%;
            max-height: 85vh;
            border-radius: 16px;
            animation: slideInMobile 0.3s ease-out;
          }

          .contact-popup-content {
            flex-direction: column;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .contact-popup-form-section {
            width: 100%;
            padding: 45px 16px 20px;
            overflow-y: visible;
          }

          .contact-popup-image-section {
            display: none;
          }

          .contact-popup-close {
            top: 12px;
            right: 12px;
            width: 36px;
            height: 36px;
          }

          .contact-popup-header {
            text-align: center;
            margin-bottom: 20px;
          }

          .contact-popup-title {
            font-size: 20px;
          }
        }

        .contact-popup-header {
          margin-bottom: 28px;
        }

        .contact-popup-greeting {
          color: #2563eb;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 10px 0;
        }

        .contact-popup-title {
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        .contact-popup-highlight {
          color: #2563eb;
        }

        .contact-popup-form {
          background: #f8fafc;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .contact-popup-form {
            padding: 16px;
            gap: 14px;
          }
        }

        .contact-popup-input-group {
          width: 100%;
        }

        .contact-popup-input {
          width: 100%;
          padding: 14px 16px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          outline: none;
          font-size: 16px;
          transition: all 0.3s;
          box-sizing: border-box;
          font-family: inherit;
        }

        @media (max-width: 768px) {
          .contact-popup-input {
            padding: 12px 14px;
            font-size: 15px;
          }
        }

        .contact-popup-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .contact-popup-input.error {
          border-color: #ef4444;
        }

        .contact-popup-input:disabled {
          background: #f9f9f9;
          color: #666;
          cursor: not-allowed;
        }

        .contact-popup-error {
          color: #ef4444;
          font-size: 12px;
          margin: 4px 0 0 4px;
          font-weight: 500;
        }

        .contact-popup-submit {
          width: 100%;
          padding: 15px 24px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          font-family: inherit;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .contact-popup-submit {
            padding: 13px 20px;
            font-size: 15px;
          }
        }

        .contact-popup-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
        }

        .contact-popup-submit:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }

        .contact-popup-social {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 16px;
          z-index: 10;
        }

        .contact-popup-social-link {
          background: rgba(255, 255, 255, 0.95);
          color: #2563eb;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s;
        }

        .contact-popup-social-link:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }

        .contact-popup-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.3) 100%);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .contact-popup-spinner {
          display: inline-block;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
      `}</style>
      
      <div 
        className="contact-popup-overlay"
        onClick={() => setIsOpen(false)}
      >
        <div 
          className="contact-popup-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="contact-popup-close"
            aria-label="Close"
          >
            <FaTimes size={isMobile ? 16 : 24} />
          </button>

          <div className="contact-popup-content">
            <div className="contact-popup-form-section">
              <div className="contact-popup-header">
                <p className="contact-popup-greeting">Hello There!</p>
                <h2 className="contact-popup-title">
                  Stay Updated! Share Your{' '}
                  <span className="contact-popup-highlight">Details</span>
                  {!isMobile && (
                    <> <span className="contact-popup-highlight">to</span> Connect.</>
                  )}
                </h2>
              </div>

              <div className="contact-popup-form">
                <div className="contact-popup-input-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name (e.g., John Doe)"
                    className={`contact-popup-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && (
                    <p className="contact-popup-error">{errors.name}</p>
                  )}
                </div>

                <div className="contact-popup-input-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className={`contact-popup-input ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && (
                    <p className="contact-popup-error">{errors.phone}</p>
                  )}
                </div>
                
                <div className="contact-popup-input-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    disabled={true}
                    className="contact-popup-input"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.phone || !formData.subject || formData.phone === '+91 '}
                  className="contact-popup-submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact-popup-spinner">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>

            {!isMobile && (
              <div className="contact-popup-image-section">
                <div className="contact-popup-overlay-bg"></div>
                <div className="contact-popup-social">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="contact-popup-social-link"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}