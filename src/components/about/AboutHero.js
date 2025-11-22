"use client";
import {useState} from "react";
import {motion} from "framer-motion";

export default function AboutHero() {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <section
            className="relative bg-gradient-to-br from-red-50 to-red-100 text-slate-800 pt-24 pb-24 overflow-hidden text-center font-sans">
            {/* Enhanced Background Elements */}
            <div
                className="absolute top-10 left-5 w-24 h-24 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-60 animate-float shadow-lg"/>
            <div
                className="absolute bottom-20 right-8 w-20 h-20 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-40 animate-float-reverse shadow-lg"/>
            <div
                className="absolute top-1/4 right-12 w-16 h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-50 animate-float-slow"/>
            <div
                className="absolute bottom-1/3 left-12 w-12 h-12 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-30 animate-float-reverse-slow"/>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"/>

            {/* Animated Border Gradient */}
            <div
                className="absolute inset-0 rounded-none bg-gradient-to-r from-transparent via-red-100/20 to-transparent animate-shimmer"/>

            <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    {/* Main Heading with Animation */}
                    <div className="relative inline-block mb-8">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight relative z-10">
                            About{" "}
                            <span
                                className="inline-block animate-pulse-text bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-transparent relative">
                                Skylink
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-underline"/>
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="relative mb-12 max-w-3xl mx-auto">
                        <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed relative z-10 bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-red-100/50 shadow-sm">
                            Skylink was started with a simple idea. Good internet should not be a luxury. It should just
                            work.
                            Whether you run a business, study from home, stream after a long day, or manage a factory
                            floor, your connection should stay steady without making you think about it.
                        </p>
                    </div>
                </motion.div>
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
            `}</style>
        </section>
    );
}