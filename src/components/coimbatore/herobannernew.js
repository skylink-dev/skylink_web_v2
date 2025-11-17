"use client";
import { useState } from "react";
import ContactForm from "../contact/ContactForm";

/**
 * @typedef {Object} HeroBannerProps
 * @property {string} [city="Coimbatore"] - The name of the city
 */

/**
 * HeroBanner component for showcasing high-speed fibernet in a specific city
 * @param {HeroBannerProps} props - Component props
 * @returns {JSX.Element}
 */
export default function HeroBanner({ city = "Coimbatore" }) {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <section className="relative bg-gradient-to-br from-red-50 to-red-200 text-slate-800 pt-32 pb-32 overflow-hidden text-center font-sans mt-8">
            {/* Background Elements */}
            <div className="absolute top-10 left-5 w-24 h-24 bg-gradient-to-br from-red-200 to-red-400 rounded-full opacity-60 animate-float" />
            <div className="absolute bottom-20 right-8 w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-40 animate-float-reverse" />

            <div className="relative max-w-6xl mx-auto px-8">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-slate-900 tracking-tight leading-tight">
                    {city}&apos;s Premium{" "}
                    <span className="inline-block animate-pulse-text bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent">
            High-Speed Fibernet
          </span>{" "}
                    Broadband
                </h1>

                <p className="text-slate-600 mb-12 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                    Experience lightning-fast, reliable, and unlimited internet for homes
                    and businesses in {city}. Stay connected with seamless performance
                    and unmatched support.
                </p>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                    {[
                        { number: "1Gbps", label: "Max Speed" },
                        { number: "99.9%", label: "Uptime" },
                        { number: "24/7", label: "Support" },
                        { number: "0", label: "Hidden Costs" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-red-200/30"
                        >
                            <div className="text-2xl font-bold text-red-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-500 font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <button
                    className="bg-red-600 text-white font-bold rounded-full px-8 py-4 border-none cursor-pointer shadow-lg shadow-red-500/30 transition-all duration-300 relative overflow-hidden hover:bg-red-700 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40"
                    onClick={() => setShowContactForm(true)}
                >
                    Request a Free Callback
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transition-all duration-300" />
                </button>
            </div>

            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes pulseText {
                    0%,
                    100% {
                        transform: scale(1);
                        text-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
                    }
                    50% {
                        transform: scale(1.02);
                        text-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
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
            `}</style>

            {showContactForm && (
                <ContactForm onClose={() => setShowContactForm(false)} />
            )}
        </section>
    );
}