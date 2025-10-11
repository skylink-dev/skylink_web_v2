import axiosApi from '@/axios/api';
import { useEffect, useState } from 'react';
import { FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


export default function ContactPopup({isOpen,setIsOpen,activeMbps,activePrice,activeCycle,isMobile}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91 ',
    subject: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });
  const [currselectedPlan,setSelectedPlan]=useState({})
  
  useEffect(()=>{
    setFormData({name:'',phone:'+91 ', subject:`${activeMbps} - ${activeCycle} ( ₹ ${activePrice}/- +GST applicable)`})
    setErrors({name: '', phone: ''})
  },[activeMbps,activePrice,activeCycle])
 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name should only contain letters and spaces';
    }
    return '';
  };

  const validatePhone = (phone) => {
    // Remove +91 and spaces to check the number
    const phoneNumber = phone.replace(/^\+91\s*/, '').replace(/\s/g, '');
    
    if (!phoneNumber) {
      return 'Phone number is required';
    }
    if (!/^\d+$/.test(phoneNumber)) {
      return 'Phone number should only contain digits';
    }
    if (phoneNumber.length !== 10) {
      return 'Phone number must be 10 digits';
    }
    if (!/^[6-9]/.test(phoneNumber)) {
      return 'Phone number must start with 6, 7, 8, or 9';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Ensure +91 prefix is always present
      if (!value.startsWith('+91 ')) {
        setFormData({
          ...formData,
          phone: '+91 '
        });
        return;
      }
      
      // Only allow digits after +91
      const phoneNumber = value.slice(4); // Remove '+91 '
      if (phoneNumber && !/^\d*$/.test(phoneNumber)) {
        return; // Don't update if non-digit characters are entered
      }
      
      // Limit to 10 digits after +91
      if (phoneNumber.length > 10) {
        return;
      }
    }
    
    if (name === 'name') {
      // Limit name to 50 characters
      if (value.length > 50) {
        return;
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    if (nameError || phoneError) {
      setErrors({
        name: nameError,
        phone: phoneError
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    axiosApi.post("contacts/",{
        "first_name": formData.name,
        "last_name": "",
        "phone": formData.phone ,
        "email": "",
        "message": "",
        "service": formData.subject,
    }).then(()=>{
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you soon.');
    }).catch(err=>{
      console.log(err);
      alert("Unexpected Error Occured")
    })
    
    
    
    setFormData({ name: '', phone: '+91 ', subject: '' });
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
    <div style={overlayStyle}>
      <div style={popupStyle}>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          style={closeButtonStyle}
          aria-label="Close"
        >
          <FaTimes size={24} />
        </button>

        <div style={gridContainerStyle}>
          {/* Left Side - Form */}
          <div style={formContainerStyle}>
            <div style={headerStyle} className='sm:flex'>
              <p style={greetingStyle}>Hello There!</p>
              <h2 style={titleStyle}>
                Stay Updated! Share Your{' '}
                <span style={waveTextStyle}>Details</span>{' '}
              {
                isMobile?(<></>):(
                <>
                <span style={blueTextStyle}>to</span> Connect.
                </>
              )
              }
              </h2>
            </div>

            <div style={formWrapperStyle}>
              <div style={inputContainerStyle}>
                <div style={{width: '100%'}}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name (e.g., John Doe)"
                    style={{
                      ...inputStyle,
                      borderColor: errors.name ? '#ef4444' : '#d1d5db'
                    }}
                  />
                  {errors.name && (
                    <p style={errorTextStyle}>{errors.name}</p>
                  )}
                </div>

                <div style={{width: '100%'}}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    style={{
                      ...inputStyle,
                      borderColor: errors.phone ? '#ef4444' : '#d1d5db'
                    }}
                  />
                  {errors.phone && (
                    <p style={errorTextStyle}>{errors.phone}</p>
                  )}
                </div>
                <div style={{width: '100%'}}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      borderColor: errors.phone ? '#ef4444' : '#d1d5db'
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.phone || !formData.subject || formData.phone === '+91 '}
                  style={{
                    ...submitButtonStyle,
                    backgroundColor: isSubmitting || !formData.name || !formData.phone || !formData.subject || formData.phone === '+91 '
                      ? '#9ca3af' 
                      : '#2563eb',
                    cursor: isSubmitting || !formData.name || !formData.phone || !formData.subject || formData.phone === '+91 '
                      ? 'not-allowed' 
                      : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={spinnerStyle}>⏳</span>
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image and Social Links */}
          <div style={imageContainerStyle}>
            <div style={imageBackgroundStyle}>
              <div style={imageOverlayStyle}></div>
            </div>

            {/* Social Links */}
            <div style={socialLinksContainerStyle}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={socialLinkStyle}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            transform: translateY(50px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .wave {
          animation: wave 2s ease-in-out infinite;
        }
        .spin {
          animation: spin 1s linear infinite;
        }

        @media (max-width: 640px) {
          input::placeholder {
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          input, button {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

// All styles as JavaScript objects
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  zIndex: 50,
  animation: 'fadeIn 0.3s ease-out',
  overflowY: 'auto'
};

const popupStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  maxWidth: '500px',
  width: '100%',
  overflow: 'hidden',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  animation: 'slideUp 0.4s ease-out',
  margin: '20px auto',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  zIndex: 10,
  color: '#4b5563',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s',
  padding: '4px'
};

const gridContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  overflowY: 'auto',
  flex: 1
};

const formContainerStyle = {
  padding: '48px 24px 24px 24px',
  overflowY: 'auto'
};

const headerStyle = {
  marginBottom: '20px'
};

const greetingStyle = {
  color: '#2563eb',
  fontSize: '14px',
  fontWeight: '500',
  marginBottom: '8px',
  margin: '0'
};

const titleStyle = {
  fontSize: 'clamp(20px, 5vw, 28px)',
  fontWeight: 'bold',
  color: '#111827',
  margin: '0',
  lineHeight: '1.3'
};

const blueTextStyle = {
  color: '#2563eb'
};

const waveTextStyle = {
  color: '#2563eb',
  display: 'inline-block',
  animation: 'wave 2s ease-in-out infinite'
};

const formWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
};

const inputContainerStyle = {
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px'
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  backgroundColor: 'white',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  outline: 'none',
  fontSize: '16px',
  transition: 'all 0.2s',
  boxSizing: 'border-box',
  WebkitAppearance: 'none',
  minHeight: '44px'
};

const submitButtonStyle = {
  width: '100%',
  color: 'white',
  fontWeight: '600',
  padding: '14px 24px',
  borderRadius: '6px',
  border: 'none',
  fontSize: '16px',
  transition: 'background-color 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minHeight: '48px',
  touchAction: 'manipulation'
};

const spinnerStyle = {
  display: 'inline-block',
  animation: 'spin 1s linear infinite',
  marginRight: '8px'
};

const imageContainerStyle = {
  position: 'relative',
  display: 'none'
};

const imageBackgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'url(https://www.skylink.net.in/wp-content/uploads/2025/04/couple-watch-skylink.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '6px'
};

const imageOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
  borderRadius: '8px'
};

const socialLinksContainerStyle = {
  position: 'absolute',
  bottom: '32px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '12px',
  zIndex: 10
};

const socialLinkStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#2563eb',
  padding: '12px',
  borderRadius: '50%',
  transition: 'all 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  textDecoration: 'none'
};

const errorTextStyle = {
  color: '#ef4444',
  fontSize: '13px',
  marginTop: '4px',
  marginLeft: '4px'
};