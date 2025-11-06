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
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap lg:flex-nowrap justify-center items-stretch gap-8">
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
            className="bg-white border border-gray-100 hover:border-red-400 rounded-2xl shadow-sm p-8 
                       flex flex-col items-center text-center
                       w-full sm:w-[45%] md:w-[30%] lg:w-[300px] xl:w-[320px]
                       transition-all duration-500"
          >
            {/* Icon */}
            <div className="text-red-600 text-5xl mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            {/* CTA Button */}
            <Link
              href="/deals/cell-phone-deals/"
              aria-label={item.cta}
              className="relative inline-block px-6 py-2.5 font-medium text-white bg-red-600 rounded-lg overflow-hidden transition-all duration-500 group"
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
