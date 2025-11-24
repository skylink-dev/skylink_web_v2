"use client";
import {useState} from "react";
import {motion} from "framer-motion";

export default function AboutHero() {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <section className="relative bg-white text-slate-800 pt-24 pb-24 overflow-hidden font-sans">
            {/* Professional geometric accent patterns */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Diagonal line pattern */}
                <svg className="absolute -top-24 -right-24 w-96 h-96 text-red-50" fill="currentColor"
                     viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 100,0 100,100" opacity="0.5"></polygon>
                </svg>
                <svg className="absolute -bottom-24 -left-24 w-96 h-96 text-red-50" fill="currentColor"
                     viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,100 100,0 0,0" opacity="0.5"></polygon>
                </svg>

                {/* Dotted grid pattern */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

                {/* Subtle horizontal lines */}
                <div
                    className="absolute inset-x-0 h-px top-1/4 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div
                    className="absolute inset-x-0 h-px top-2/4 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div
                    className="absolute inset-x-0 h-px top-3/4 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side with company introduction */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="text-left"
                    >
                        {/* Company name with subtle highlight */}
                        <div className="mb-6 relative">
                            <div className="inline-block">
                                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-none">
                                    About
                                    <span className="relative ml-3 text-red-600">
                                        Skylink
                                        <span
                                            className="absolute -bottom-1 left-0 w-full h-1 bg-red-600 rounded-full transform origin-left"></span>
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Description with professional styling */}
                        <div className="mb-8 relative">
                            <div
                                className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-500 rounded-full"></div>
                            <p className="text-slate-700 text-lg leading-relaxed mb-4">
                                Skylink was started with a simple idea. Good internet should not be a luxury. It should
                                just work.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Whether you run a business, study from home, stream after a long day, or manage a
                                factory
                                floor, your connection should stay steady without making you think about it.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side with design elements */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="relative"
                    >
                        {/* Abstract network illustration */}
                        <div
                            className="relative h-80 w-full flex items-center justify-center bg-white rounded-lg p-4 border border-gray-100 shadow-xl overflow-hidden">
                            {/* Network nodes */}
                            <div
                                className="absolute w-4 h-4 bg-red-500 rounded-full top-1/4 left-1/4 shadow-md shadow-red-200 animate-pulse-slow"></div>
                            <div
                                className="absolute w-5 h-5 bg-red-600 rounded-full bottom-1/3 right-1/3 shadow-md shadow-red-200 animate-pulse-slow"></div>
                            <div
                                className="absolute w-3 h-3 bg-red-400 rounded-full top-1/3 right-1/4 shadow-md shadow-red-200 animate-pulse-slow"></div>
                            <div
                                className="absolute w-6 h-6 bg-red-500 rounded-full bottom-1/4 left-1/3 shadow-md shadow-red-200 animate-pulse-slow"></div>

                            {/* Connection lines with animation */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320"
                                 xmlns="http://www.w3.org/2000/svg">
                                {/* Animated line path for connections */}
                                <path
                                    d="M100,80 L300,240 M100,240 L300,80 M180,40 L220,280 M40,160 L360,160"
                                    stroke="url(#red-gradient)"
                                    strokeWidth="1.5"
                                    strokeDasharray="6,3"
                                    strokeLinecap="round"
                                    className="animate-dash-slow"
                                />
                                <defs>
                                    <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ef4444"/>
                                        <stop offset="100%" stopColor="#dc2626"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Central logo element */}
                            <div
                                className="relative z-10 w-24 h-24 bg-white rounded-full border-4 border-red-500 flex items-center justify-center shadow-lg">
                                <span className="text-red-600 font-bold text-xl">Skylink</span>
                            </div>

                            {/* Subtle background pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80"></div>
                        </div>

                        {/* Stats in modern card layout */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-md text-center">
                                <div className="text-red-600 font-bold text-2xl">99.9%</div>
                                <div className="text-gray-600 text-sm font-medium">Network Uptime</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-md text-center">
                                <div className="text-red-600 font-bold text-2xl">24/7</div>
                                <div className="text-gray-600 text-sm font-medium">Customer Support</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.2); opacity: 1; }
                }
                
                @keyframes dash-slow {
                    to { stroke-dashoffset: 24; }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s infinite ease-in-out;
                }
                
                .animate-dash-slow {
                    animation: dash-slow 15s linear infinite;
                }
            `}</style>
        </section>
    );
}