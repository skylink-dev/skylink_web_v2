'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SingleFaq({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(prev => !prev);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <button
          onClick={toggleFaq}
          aria-expanded={isOpen}
          className="w-full flex items-start justify-between p-6 sm:p-8 lg:p-10 text-left hover:bg-gray-50/50 transition-colors duration-200"
        >
          <div className="flex-1 pr-6">
            <span className="font-bold text-gray-900">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                Stay connected with high-quality internet and TV services from Skylink
              </h2>
            </span>
            <p className="text-gray-600 text-sm sm:text-base mt-2 hidden sm:block">
              Click to explore our comprehensive services and solutions
            </p>
          </div>
          
          {/* Animated Chevron Icon */}
          <div className="flex-shrink-0 mt-1">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-sm"
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
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-gray-50/50 to-red-50/30">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                  {/* First 4 items in 4 columns on desktop, 2 columns on tablet, 1 column on mobile */}
                  {content.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group hover:border-red-200"
                    >
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {item.content}
                        </div>
                      </div>
                      
                      {/* Learn More Link */}
                      <button className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2">
                        Learn more
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
                
                {/* Full width items for remaining content */}
                {content.length > 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="mt-8 sm:mt-12 pt-8 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {content.slice(4).map((item, index) => (
                        <motion.div
                          key={index + 4}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                          className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group hover:border-red-200"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-200 flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            {item.title}
                          </h3>
                          <div className="text-gray-600 leading-relaxed text-base">
                            {item.content}
                          </div>
                          
                          {/* Contact CTA for full-width items */}
                          <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95">
                              Get Started
                            </button>
                            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95">
                              Contact Sales
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Bottom CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mt-8 sm:mt-12 text-center"
                >
                  <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Ready to experience better connectivity?
                    </h3>
                    <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
                      Join thousands of satisfied customers who trust Skylink for their internet and TV needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95">
                        Sign Up Now
                      </button>
                      <button className="border border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95">
                        Call Us Today
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}