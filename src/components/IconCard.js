"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function IconCard({ titleData, cardData }) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {titleData.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {titleData.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {titleData.links.map((listItem, index) => (
              <Link
                key={index}
                href="/plans"
                className="relative overflow-hidden inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-full group transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative z-10">{listItem.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardData.map((card, index) => {
            const { icon, title, description, legal } = card;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 flex items-start gap-6 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 bg-red-100 p-4 rounded-2xl group-hover:bg-red-200 transition-all duration-300"
                >
                  <Image
                    src={icon}
                    width={45}
                    height={45}
                    alt={title}
                    className="object-contain"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {description}
                  </p>
                  {legal && (
                    <p className="text-sm text-gray-500 italic">{legal}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
