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
      className={`relative overflow-hidden rounded-2xl shadow-lg mx-3 sm:mx-6 md:mx-8 lg:mx-auto ${
        darkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } max-w-[97%] lg:max-w-[95rem]`}
    >
      {/* Background Image (clean, no overlay) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="max-w-3xl text-left"
        >
          {/* Eyebrow */}
          {eyebrow && (
            <p className="text-xs sm:text-sm uppercase tracking-wide font-semibold text-blue-400 mb-1.5">
              {eyebrow}
            </p>
          )}

          {/* Heading */}
          {heading && (
            <h2
              className="text-xl sm:text-2xl lg:text-2xl font-bold leading-snug mb-2 drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h2>
          )}

          {/* Description */}
          {description && (
            <div
              className="text-sm sm:text-base leading-relaxed mb-4 break-words opacity-90"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}

          {/* CTA Button */}
          {buttonText && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href={buttonLink}
                className={`inline-block px-5 py-2.5 rounded-md font-medium shadow-md transition ${
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
      </div>
    </motion.div>
  );
}
