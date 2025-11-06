'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function IconDetails({ iconslist, title }) {
  // Animation variants
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // animate children one by one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 text-center relative overflow-hidden">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-10 md:mb-14 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
        <div className="mt-3 md:mt-4 h-1 w-20 md:w-24 mx-auto bg-red-600 rounded-full"></div>
      </div>

      {/* Icon Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-4 md:px-6"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {iconslist.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
            className="group bg-white border border-gray-100 hover:border-red-400 transition-all duration-300 rounded-2xl p-6 sm:p-8 w-[42%] sm:w-40 md:w-44 lg:w-48 flex flex-col items-center justify-center"
          >
            <div className="text-red-600 text-3xl sm:text-4xl mb-3">{item.icon}</div>
            <Link
              href="/support/"
              aria-label={item.cta}
              className="relative font-semibold text-gray-800 text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300 text-center"
            >
              <span className="relative z-10">{item.cta}</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
