'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SliderBanner() {
  const sliderMessages = [
    {
      text: `Prompt, friendly service you deserve backed by the Skylink Guarantee. Speak to a tech expert within five minutes or schedule a callback at a time you prefer.`,
      linkText: 'Learn more about the Skylink Guarantee',
      link: '#',
    },
    {
      text: `Avoid scams: Skylink will never call you for a one-time PIN.`,
      linkText: 'Learn safety tips',
      link: '#',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderMessages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === sliderMessages.length - 1 ? 0 : prev + 1
    );
  };

  const { text, linkText, link } = sliderMessages[currentIndex];

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="bg-red-400 text-black w-full max-w-5xl rounded-3xl shadow-lg px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-500">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-300"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Message Content */}
        <div className="text-center sm:text-left sm:max-w-3xl px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-medium leading-relaxed">
                {text}{' '}
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-white hover:text-red-200 transition-all"
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
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition duration-300"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
