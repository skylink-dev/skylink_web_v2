import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import ZohoLeadForm from './ZohoForm';

export default function Drawer({ isOpen, onClose, planData }) {
    const drawerRef = useRef(null);
    const total = planData?.price + planData?.installationFee;
    const GST = Math.round(total * 0.18);
    const MRP = total + GST;
    const [isFormOpen, setIsFormOpen] = useState(false);
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
    const getStarted = (e) => {
        e.preventDefault();
        setIsFormOpen(true);
    }
    console.log(planData)
    if (!isOpen) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="background-light">
                <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.3 }} className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl z-50 p-6 overflow-auto" id="drawyer-01" >
                        <div className="container" ref={drawerRef}>
                            <div className="popup-section-wrap">
                                <div className="left-wrap-section flex">
                                    <div className="contact-section"><PhoneIcon></PhoneIcon><div className="contact-details-wrap">
                                        <a href="tel:+919944199445">+919944199445</a>
                                        <span>or <a href="#" className="form-popup">let us call you</a></span>
                                    </div></div>
                                    <div className="pricing-section">₹{planData?.price}<span className="star">*</span></div>
                                </div>
                                <div className="right-wrap-section">
                                    <div className="button-section"><a href="get-started-button" onClick={getStarted}>Get Started</a></div>
                                </div>
                            </div>
                            {isFormOpen ?
                                <div className={`popup-form ${isFormOpen ? "box-shadow" : ""}`}>
                                    <ZohoLeadForm formClose={setIsFormOpen}></ZohoLeadForm>
                                </div> : " "}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
