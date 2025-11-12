"use client";
import {apiService} from "@/backend/apiservice";
import {useState, useEffect} from "react";

export default function ContactForm({onClose}) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        captcha: false,
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [captchaLoading, setCaptchaLoading] = useState(false);
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // ✅ Validation Helpers
    const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
    const validateName = (name) => name.trim().length > 0;
    const validateEmail = (email) =>
        !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const showToastNotification = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const handleCaptchaChange = (e) => {
        const {checked} = e.target;
        if (checked) {
            setCaptchaLoading(true);
            setCaptchaChecked(true);
            setTimeout(() => {
                setCaptchaLoading(false);
                setFormData((prev) => ({...prev, captcha: true}));
            }, 800);
        } else {
            setCaptchaChecked(false);
            setCaptchaLoading(false);
            setFormData((prev) => ({...prev, captcha: false}));
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setErrors((prev) => ({...prev, [name]: ""}));
    };

    const handleNext = () => {
        if (currentStep === 1 && !validatePhone(formData.phone))
            return setErrors({phone: "Please enter a valid 10-digit phone number"});
        if (currentStep === 2 && !validateName(formData.name))
            return setErrors({name: "Please enter your name"});
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => setCurrentStep(currentStep - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email))
            return setErrors({email: "Please enter a valid email address"});
        if (!formData.captcha)
            return setErrors({captcha: "Please verify that you are not a robot"});

        setIsLoading(true);
        await apiService
            .submitContactForm(formData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        showToastNotification();
        setFormData({name: "", email: "", phone: "", captcha: false});
        setCaptchaChecked(false);
        setCurrentStep(1);
        setIsLoading(false);
        setTimeout(() => onClose(), 4000);
    };

    // ✅ Escape key closes modal
    useEffect(() => {
        const handleEscape = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={onClose}
            ></div>

            {/* Toast */}
            {showToast && (
                <div
                    className="absolute top-1/4 right-10 mx-auto w-11/12 max-w-sm bg-green-600 text-white rounded-xl shadow-lg p-4 z-[60] flex items-center gap-3 animate-fade-in">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <div className="flex-1">
                        <h4 className="font-semibold text-sm">Registration Successful!</h4>
                        <p className="text-xs opacity-90">We&apos;ll reach out soon.</p>
                    </div>
                    <button
                        onClick={() => setShowToast(false)}
                        className="ml-2 text-lg font-bold hover:opacity-70 transition-opacity"
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Popup */}
            <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
                <div
                    className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto p-6 text-center animate-fade-in">
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
                    >
                        ×
                    </button>

                    {/* Header */}
                    <h2 className="text-xl font-bold text-red-600 mb-1">
                        Register for Premium Network
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                        Experience the highest-quality connectivity with our premium support
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {currentStep === 1 && (
                            <>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Mobile Number *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength="10"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-base"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
                                )}
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="w-full bg-gradient-to-b from-red-500 to-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition-all"
                                >
                                    Continue
                                </button>
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-base"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-2">{errors.name}</p>
                                )}
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="flex-1 bg-gradient-to-b from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-base"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                                )}

                                {/* Captcha */}
                                <div
                                    className="mt-3 border border-gray-300 rounded-lg p-3 bg-gray-50 flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={formData.captcha}
                                        onChange={handleCaptchaChange}
                                        disabled={captchaLoading}
                                        className="w-5 h-5 accent-red-600"
                                    />
                                    <span className="text-gray-700 text-sm font-medium">
                    I&apos;m not a robot *
                  </span>
                                    {captchaLoading && (
                                        <div
                                            className="ml-auto w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                    )}
                                </div>
                                {errors.captcha && (
                                    <p className="text-red-500 text-xs mt-2">{errors.captcha}</p>
                                )}

                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 bg-gradient-to-b from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-70 transition-all flex items-center justify-center"
                                    >

                                        {isLoading ? (
                                            <>
                                                <div
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Registering...
                                            </>
                                        ) : (
                                            "Register for FREE"
                                        )}
                                    </button>
                                </div>
                            </>
                        )}
                    </form>

                    {/* Step Indicators */}
                    <div className="flex justify-center items-center mt-6 gap-2">
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                                    currentStep === step
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-200 text-gray-500"
                                }`}
                            >
                                {step}
                            </div>
                        ))}
                    </div>

                    {/* ✅ Get Immediate Support Section — Styled Exactly Like Image */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-base font-semibold text-gray-800 flex items-center justify-center gap-2 mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2 5.5C2 4.12 3.12 3 4.5 3h2A1.5 1.5 0 018 4.5v2A1.5 1.5 0 016.5 8H5a11 11 0 0011 11v-1.5A1.5 1.5 0 0117.5 16h2a1.5 1.5 0 011.5 1.5v2A1.5 1.5 0 0119.5 21C10.94 21 3 13.06 3 4.5 3 3.12 4.12 2 5.5 2H8"
                                />
                            </svg>
                            Get Immediate Support
                        </h3>
                        <p className="text-gray-500 text-xs text-center mb-4">
                            Our team is ready to assist you
                        </p>

                        {/* Two Contact Boxes Side by Side */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Phone Box */}
                            <div
                                onClick={() => window.open('tel:+919944199445')}
                                className="cursor-pointer bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-4 hover:border-red-300"
                            >
                                <div
                                    className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-2 shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2 5.5C2 4.12 3.12 3 4.5 3h2A1.5 1.5 0 018 4.5v2A1.5 1.5 0 016.5 8H5a11 11 0 0011 11v-1.5A1.5 1.5 0 0117.5 16h2a1.5 1.5 0 011.5 1.5v2A1.5 1.5 0 0119.5 21C10.94 21 3 13.06 3 4.5 3 3.12 4.12 2 5.5 2H8"
                                        />
                                    </svg>
                                </div>
                                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
                                    Phone
                                </p>
                                <p className="text-sm font-bold text-gray-800">
                                    +91 99441-99445
                                </p>
                            </div>

                            {/* Email Box */}
                            <div
                                onClick={() => window.open('mailto:info@skylink.net.in')}
                                className="cursor-pointer bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-4 hover:border-red-300"
                            >
                                <div
                                    className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-2 shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l9 6 9-6m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
                                    Email
                                </p>
                                <p className="text-sm font-bold text-gray-800 break-all">
                                    info@skylink.net.in
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
