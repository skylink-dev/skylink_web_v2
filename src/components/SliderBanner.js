"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SliderBanner() {
    const sliderMessages = [
        {
            text: `Prompt, friendly service you deserve backed by the Skylink Guarantee. Speak to a tech expert within five minutes or schedule a callback at a time you prefer.`,
            linkText: "Learn more about the Skylink Guarantee",
            link: "#",
        },
        {
            text: `Avoid scams: Skylink will never call you for a one-time PIN.`,
            linkText: "Learn safety tips",
            link: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? sliderMessages.length - 1 : prev - 1
        );
    const handleNext = () =>
        setCurrentIndex((prev) =>
            prev === sliderMessages.length - 1 ? 0 : prev + 1
        );

    const { text, linkText, link } = sliderMessages[currentIndex];

    return (
        <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 py-10">
            <div className="relative bg-[#FEA2A2] text-black w-full max-w-6xl rounded-3xl shadow-xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 transition-all duration-500">
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 sm:left-6 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 backdrop-blur-sm"
                    aria-label="Previous Slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Message Content */}
                <div className="text-center sm:text-left w-full sm:w-[85%] px-8 sm:px-14 md:px-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide">
                                {text}{" "}
                                <Link
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-semibold text-red-500 hover:text-gray-50 transition-all"
                                >
                                    {linkText}
                                </Link>
                            </h3>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 sm:right-6 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 backdrop-blur-sm"
                    aria-label="Next Slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
