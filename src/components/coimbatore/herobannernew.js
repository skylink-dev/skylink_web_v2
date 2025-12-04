"use client";
import { useState } from "react";
import ContactForm from "../contact/ContactForm";

// Import location-specific data
import CoimbatoreData from "../../data/Coimbatore";
import TiruppurData from "../../data/Tiruppur";
import ErodeData from "../../data/Erode";

/**
 * @typedef {Object} HeroBannerProps
 * @property {string} [city="Coimbatore"] - The name of the city
 */

/**
 * HeroBanner component for showcasing high-speed fibernet in a specific city
 * @param {HeroBannerProps} props - Component props
 * @returns {JSX.Element}
 */
export default function HeroBanner({city = "Coimbatore"}) {
    const [showContactForm, setShowContactForm] = useState(false);

    // Select the appropriate data based on city
    const getLocationData = () => {
        switch (city) {
            case "Tiruppur":
                return TiruppurData.heroBanner;
            case "Erode":
                return ErodeData.heroBanner;
            case "Coimbatore":
            default:
                return CoimbatoreData.heroBanner;
        }
    };

    const locationData = getLocationData();

    // Function to render the title with animated city name
    const renderTitle = () => {
        // Special case for Erode with line break
        if (city === "Erode") {
            const parts = locationData.title.split("\n");
            return (
                <>
                    {parts[0]}<br/>
                    <span
                        className="inline-block animate-pulse-text bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent relative">
                        Erode
                        <span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-underline"/>
                    </span>
                    {"?"}
                </>
            );
        }
        // Handle different title formats for each location
        else if (locationData.title.includes(city)) {
            const parts = locationData.title.split(city);
            return (
                <>
                    {parts[0]}
                    <span
                        className="inline-block animate-pulse-text bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent relative">
                        {city}
                        <span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-underline"/>
                    </span>
                    {parts[1]}
                </>
            );
        }
        // For titles that don't contain the exact city name
        return locationData.title;
    };

    return (
        <section className="relative bg-gradient-to-br from-red-50 to-red-200 text-slate-800 pt-32 pb-32 overflow-hidden text-center font-sans mt-8">
            {/* Enhanced Background Elements */}
            <div className="absolute top-10 left-5 w-24 h-24 bg-gradient-to-br from-red-200 to-red-400 rounded-full opacity-60 animate-float shadow-lg" />
            <div className="absolute bottom-20 right-8 w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-40 animate-float-reverse shadow-lg" />
            <div className="absolute top-1/4 right-12 w-16 h-16 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-50 animate-float-slow" />
            <div className="absolute bottom-1/3 left-12 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-30 animate-float-reverse-slow" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Animated Border Gradient */}
            <div className="absolute inset-0 rounded-none bg-gradient-to-r from-transparent via-red-100/20 to-transparent animate-shimmer" />

            <div className="relative max-w-6xl mx-auto px-8">
                {/* Enhanced Main Heading */}
                <div className="relative inline-block mb-8">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight relative z-10">
                        {renderTitle()}
                    </h1>
                    {/* Text shadow for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent blur-xl rounded-full transform scale-110 -z-10"/>
                </div>

                {/* Enhanced Description */}
                <div className="relative mb-12 max-w-3xl mx-auto">
                    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed relative z-10 bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-red-100/50 shadow-sm">
                        {locationData.description}
                    </p>
                    {/* Description background glow */}
                    <div className="absolute inset-0 bg-red-100/20 rounded-2xl blur-md -z-10 transform scale-105" />
                </div>

                {/* Enhanced Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                    {locationData.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-red-200/30 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="text-2xl font-bold text-red-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-slate-500 font-semibold group-hover:text-slate-700 transition-colors duration-300">
                                    {stat.label}
                                </div>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-300/50 rounded-tl-lg" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-300/50 rounded-tr-lg" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-300/50 rounded-bl-lg" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-300/50 rounded-br-lg" />
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Button */}
                <div className="relative">
                    <button
                        className="bg-red-600 text-white font-bold rounded-full px-8 py-4 border-none cursor-pointer shadow-lg shadow-red-500/30 transition-all duration-300 relative overflow-hidden hover:bg-red-700 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/50 group"
                        onClick={() => setShowContactForm(true)}
                    >
                        {/* Main button content */}
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Request a Free Callback
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>

                        {/* Enhanced shine effect */}
                        <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000" />

                        {/* Pulse ring effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping-slow" />
                    </button>

                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-red-400 rounded-full blur-xl opacity-30 -z-10 animate-pulse-slow" />
                </div>
            </div>

            {/* Enhanced Custom styles for animations */}
            <style jsx>{`
                @keyframes pulseText {
                    0%,
                    100% {
                        transform: scale(1);
                        text-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
                    }
                    50% {
                        transform: scale(1.02);
                        text-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(5deg);
                    }
                }

                @keyframes float-slow {
                    0%,
                    100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(-8px) scale(1.05);
                    }
                }

                @keyframes float-reverse-slow {
                    0%,
                    100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(8px) scale(0.95);
                    }
                }

                @keyframes underline {
                    0%,
                    100% {
                        transform: scaleX(0);
                        opacity: 0;
                    }
                    50% {
                        transform: scaleX(1);
                        opacity: 1;
                    }
                }

                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes ping-slow {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    75%,
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes pulse-slow {
                    0%,
                    100% {
                        opacity: 0.3;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .animate-pulse-text {
                    animation: pulseText 2.5s infinite;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-reverse {
                    animation: float 4s ease-in-out infinite reverse;
                }

                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }

                .animate-float-reverse-slow {
                    animation: float-reverse-slow 7s ease-in-out infinite;
                }

                .animate-underline {
                    animation: underline 3s ease-in-out infinite;
                }

                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>

            {showContactForm && (
                <ContactForm onClose={() => setShowContactForm(false)} />
            )}
        </section>
    );
}