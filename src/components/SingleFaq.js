"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SingleFaq({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFaq = () => setIsOpen((prev) => !prev);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 overflow-hidden">
        <button
          onClick={toggleFaq}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between p-6 sm:p-8 lg:p-10 text-left hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex-1 pr-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
              Stay connected with high-quality internet and TV services from Skylink
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 hidden sm:block">
              Click to explore our comprehensive services and solutions
            </p>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center shadow-sm"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10 bg-gray-50">
                {/* First 4 items - grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                  {content.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Last section - full width */}
                {content.length > 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="mt-10 border-t border-gray-200 pt-8"
                  >
                    {content.slice(4).map((item, index) => (
                      <motion.div
                        key={index + 4}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                        className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 transition-all duration-200"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
