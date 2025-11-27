'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function SimpleColumnSection({ title, columns }) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 text-center relative overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-14 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
        <div className="mt-4 h-1 w-24 mx-auto bg-red-600 rounded-full" />
      </motion.div>

      {/* Single Row for Large Screens, Responsive Wrap Below */}
        <div
            className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex flex-wrap lg:flex-nowrap justify-center items-stretch gap-3 sm:gap-4 lg:gap-6">
        {columns.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            }}
            className="bg-white border border-gray-100 hover:border-red-400 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 
                       flex flex-col items-center justify-between text-center
                       w-full sm:w-[45%] md:w-[30%] lg:flex-1
                       min-h-[280px] sm:min-h-[320px] lg:min-h-[350px]
                       transition-all duration-500"
          >
            {/* Icon */}
              <div className="text-red-600 text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>

              <div className="flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {item.title}
                  </h3>

                {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/"
              aria-label={item.cta}
              className="relative inline-block px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:font-medium text-white bg-red-600 rounded-lg overflow-hidden transition-all duration-500 group mt-3 sm:mt-4"
            >
              <span className="absolute inset-0 bg-red-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-white">
                {item.cta}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
