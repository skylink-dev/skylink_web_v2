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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="theme-accent-bg bgcolor max-width-background mar-b-xxs"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <div className="row">
          <div className="flex centered flex-items-top justify-center grid- microbanner pad-t-xs pad-b-xs">
            <motion.div
              className="text-center type-base mar-b-none microbanner-pad"
              variants={containerVariants}
            >
              {/* Subtitle + Title + First CTA */}
              <motion.div className="type-base rte-styles" variants={itemVariants}>
                <p>
                  <strong>{content.subtitle}</strong>
                  <br />
                  {content.title}{" "}
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#1D4ED8" }}
                    transition={{ type: "keyframes", stiffness: 300 }}
                  >
                    <Link href="/" className="underline">
                      {content.firstcta}
                    </Link>
                  </motion.span>
                </p>
              </motion.div>

              {/* Offer details */}
              <motion.div className="type-legal mar-b-none" variants={itemVariants}>
                <span>{content.offercontent}</span>
                <motion.button
                  className="btn-reset nowrap ml-2"
                  whileHover={{ scale: 1.05, backgroundColor: "#E0F2FE" }}
                  transition={{ type: "keyframes", stiffness: 300 }}
                  aria-label="See offer details"
                >
                  {content.offercta}
                </motion.button>
              </motion.div>

              {/* Second CTA */}
              <motion.div variants={itemVariants} className="mt-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                  transition={{ type: "keyframes", stiffness: 250 }}
                >
                  <Link href={content.href} className="btn-reset nowrap link-text3">
                    {content.secondcta}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
