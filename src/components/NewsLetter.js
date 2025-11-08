"use client";
import { apiService } from "@/backend/apiservice";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NewsLetter({ content }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e?.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMessage({ text: "Please enter your email address", type: "error" });
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      return;
    }

    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await apiService.submitSubscribe({ email });
      console.log("Subscription successful:", response);
      setMessage({
        text: "Thank you for subscribing!",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage({
        text: "Failed to subscribe. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Landscape Container */}
        <div className="bg-gray-100 rounded-3xl shadow-md px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 border border-gray-200">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {content.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {content.description}
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-3xl">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full">
                  {/* Email Input */}
                  <div className="flex-1 min-w-0">
                    <div className="relative">
                      <input
                        type="email"
                        aria-label="Enter your email here"
                        autoComplete="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (message.text) setMessage({ text: "", type: "" });
                        }}
                        onKeyPress={handleKeyPress}
                        disabled={isLoading}
                        className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex-shrink-0">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto px-8 sm:px-10 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-base rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <span>Sign me up!</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Message Display */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-3 p-3 rounded-lg border text-center font-medium ${
                    message.type === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 text-sm">
                    {message.type === "success" ? (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {message.text}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No spam ever</span>
              </div>

              <div className="hidden sm:block w-px h-3 bg-gray-300"></div>

              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>

              <div className="hidden sm:block w-px h-3 bg-gray-300"></div>

              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Weekly updates</span>
              </div>
            </div>

            <p className="mt-2 text-xs text-gray-400 max-w-md mx-auto">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from Skylink.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
