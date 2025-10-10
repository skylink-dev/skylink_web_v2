// components/Drawer.jsx
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Drawyer({ isOpen, onClose, planData }) {
    console.log(planData)
    const drawerRef = useRef(null);
    const total = planData?.price + planData?.installationFee;
    const GST = Math.round(total * 0.18);
    const MRP = total + GST;
      useEffect(() => {
        function handleClickOutside(event) {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);
    return (

                        <div className="container" ref={drawerRef}>
                            <div className="popup-section-wrap">
                                <div className="left-wrap-section flex">
                                <div className="contact-section"><PhoneIcon></PhoneIcon><div className="contact-details-wrap">
                                    <a href="tel:(+91) 99441 99445">(+91) 99441 99445</a>
                                    <span>or <a href="#" className="form-popup">let us call you</a></span>
                                </div></div>
                                <div className="pricing-section">₹{planData}<span className="star">*</span></div>
                                </div>
                                <div className="right-wrap-section">
                                <div className="button-section"><a href="#" className="getstarted">Get Started</a></div>
                                </div>
                            </div>
                        </div>
                 
    );
}
