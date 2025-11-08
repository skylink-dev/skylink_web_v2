'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function StepByStepComponent({ steps }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-red-50 to-red-50/30 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Simple to set up and use
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Activate your device, add a line, or upgrade to a new wire plan with our easy step-by-step process.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-red-200 via-red-500 to-red-200 z-0" />
          
          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 relative z-10">
            {steps.map(({ id, title, description, link, svg }, index) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center border border-gray-100 hover:border-red-200/50 group-hover:scale-105 group-hover:bg-white/95">
                  
                  {/* Step Number with Animation */}
                  <div className="relative mb-6 md:mb-8 lg:mb-6 xl:mb-8">
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-gradient-to-br from-red-600 to-red-600 text-white flex items-center justify-center font-bold relative z-10 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-lg md:text-xl lg:text-lg xl:text-xl">
                        {id}
                      </span>
                    </motion.div>
                    
                    {/* Connecting Dots - Mobile */}
                    <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-red-300 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-3 xl:mb-4 group-hover:text-red-700 transition-colors duration-300">
                      {title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 lg:mb-4 xl:mb-6 flex-1 text-sm md:text-base lg:text-sm xl:text-base">
                      {description}
                    </p>

                    {/* Optional Link */}
                    {link && (
                      <Link 
                        href={link}
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-all duration-300 group/link"
                      >
                        <span className="text-sm md:text-base">Learn more</span>
                        <svg 
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}

                
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Progress Indicator - REMOVED */}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 md:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-lg">
              Join thousands of satisfied customers enjoying seamless connectivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-red-700">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-500 hover:text-red-600 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}