'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function CustomSearch({ data }) {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-gradient-to-br from-white via-red-50 to-red-100 rounded-3xl shadow-lg border border-red-100 p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <svg
            aria-label="AI Icon"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="text-red-600"
          >
            <g clipPath="url(#clip0_9363_8781)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0.772522H18.72C19.0725 4.76252 19.2375 4.93502 23.2275 5.28002V6.00002C19.2375 6.35252 19.065 6.51752 18.72 10.5075H18C17.6475 6.51752 17.4825 6.34502 13.4925 6.00002V5.28002C17.4825 4.92752 17.655 4.76252 18 0.772522ZM9.74249 4.48499H10.5C11.1825 12.375 11.61 12.795 19.5 13.485V14.2425C11.61 14.925 11.19 15.3525 10.5 23.2425H9.74249C9.05999 15.3525 8.63249 14.9325 0.742493 14.2425V13.485C8.63249 12.8025 9.05249 12.375 9.74249 4.48499Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_9363_8781">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Ask me about <span className="text-red-600">Skylink Support</span>
          </h2>
        </div>

        {/* Input Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="genai-text-field"
            value={data}
            placeholder="Try to make your question specific — it’ll help me give you a better answer."
            className="w-full text-gray-800 text-base sm:text-lg px-5 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-red-400 focus:outline-none shadow-sm transition-all duration-300 placeholder-gray-400"
          />
        </div>

        {/* Quick Questions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            type="button"
            className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300 text-sm sm:text-base"
          >
            How do I make a payment?
          </button>
          <button
            type="button"
            className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300 text-sm sm:text-base"
          >
            How do I request a Number Transfer PIN?
          </button>
        </div>

        {/* Submit Button with animation */}
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Submit button"
            className="relative overflow-hidden group bg-red-600 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300"
          >
            <span className="relative z-10">Get my answer</span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
