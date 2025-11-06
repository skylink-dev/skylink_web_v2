'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function SupportSection({ title, subtitle, cta, supports }) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            {title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-6">
            {subtitle}
          </p>

          {/* Red button with hover animation */}
          <button
            type="button"
            data-testid="signInButton"
            className="relative overflow-hidden group bg-red-600 text-white px-8 py-3 rounded-3xl font-medium shadow-md transition-all duration-300"
          >
            <span className="relative z-10">{cta}</span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </motion.div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {supports?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.01,
                boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
              }}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-6 flex flex-col justify-between text-left transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-red-600 text-3xl">{item.icon}</div>
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
              </div>

              {/* Card Links */}
              <div className="space-y-3 mb-6">
                {item.links.map((linkitem, linkindex) => (
                  <Link
                    key={linkindex}
                    href={linkitem.href}
                    className="block text-base font-medium text-red-600 hover:text-red-700 transition-colors duration-200"
                  >
                    {linkitem.label}
                  </Link>
                ))}
              </div>

              {/* CTA Button with hover sweep */}
              {item.ctabutton && (
                <Link
                  href="/support/wireless/"
                  aria-label={item.ctabutton}
                  className="relative overflow-hidden group inline-block text-center bg-red-600 text-white py-2.5 px-5 rounded-3xl font-medium hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">{item.ctabutton}</span>
                  <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
