"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Banner({ content }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-red-300 text-black py-10 px-8 sm:px-12 rounded-2xl shadow-lg max-w-7xl mx-auto mt-8 mb-8 text-center"
    >
      <motion.div variants={itemVariants}>
        {/* Subtitle & Title */}
        <p className="text-lg sm:text-xl font-medium leading-relaxed">
          <strong className="text-black">{content.subtitle}</strong>
          <br />
          {content.title}{" "}
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="underline underline-offset-4 decoration-black hover:text-gray-800 transition"
            >
              {content.firstcta}
            </Link>
          </motion.span>
        </p>
      </motion.div>

      {/* Offer details */}
      <motion.div
        variants={itemVariants}
        className="mt-4 text-sm sm:text-base font-light"
      >
        <span>{content.offercontent}</span>
        {content.offercta && (
          <motion.button
            className="ml-3 px-3 py-1 text-sm rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {content.offercta}
          </motion.button>
        )}
      </motion.div>

      {/* Second CTA */}
      {content.secondcta && (
        <motion.div
          variants={itemVariants}
          className="mt-6 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={content.href || "#"}
              className="inline-block px-6 py-2 text-base font-semibold bg-white text-black rounded-full shadow hover:bg-gray-100 transition"
            >
              {content.secondcta}
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
