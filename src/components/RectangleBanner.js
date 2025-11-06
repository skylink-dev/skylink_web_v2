"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RectangleBanner({
  backgroundImage,
  eyebrow,
  heading,
  description,
  buttonText,
  buttonLink,
  darkTheme = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className={`relative overflow-hidden rounded-2xl shadow-lg my-10 mx-4 sm:mx-8 md:mx-16 ${
        darkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      ></div>

      {/* Overlay for better contrast */}
      <div
        className={`absolute inset-0 ${
          darkTheme ? "bg-black/50" : "bg-white/30"
        }`}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between min-h-[280px] md:min-h-[320px] px-4 sm:px-8 md:px-12 py-8 md:py-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex-1 max-w-xl text-center md:text-left"
        >
          {/* Eyebrow Text */}
          <p className="text-sm uppercase tracking-wide font-semibold text-blue-400 mb-2">
            {eyebrow}
          </p>

          {/* Heading */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>

          {/* Description */}
          <div
            className="text-sm sm:text-base leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>

          {/* CTA Button */}
          {buttonText && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href={buttonLink}
                className={`inline-block px-5 py-2.5 rounded-lg font-medium shadow-md transition ${
                  darkTheme
                    ? "bg-white text-gray-900 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                aria-label={buttonText}
              >
                {buttonText}
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Right Empty Space (for layout balance) */}
        <div className="hidden md:block flex-1"></div>
      </div>
    </motion.div>
  );
}
