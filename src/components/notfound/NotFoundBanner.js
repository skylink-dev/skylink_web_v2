"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFoundBanner() {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* ========= LEFT TEXT SECTION ========= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1"
        >
          <span className="text-blue-600 text-sm md:text-base font-semibold uppercase tracking-wide">
            Page Not Found
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900 leading-tight">
            Hmm... we couldn't find that page.
          </h1>

          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-md">
            The page you're looking for may have moved or no longer exists.
            Let’s get you back on track.
          </p>

          {/* Home Button */}
          <Link
            href="/"
            className="
              inline-flex items-center gap-2
              mt-8 px-6 py-3 rounded-xl
              bg-blue-600 hover:bg-blue-700
              text-white text-lg font-semibold
              shadow-md hover:shadow-lg
              transition-all
            "
          >
            <Home size={22} />
            Go Back Home
          </Link>
        </motion.div>

        {/* ========= RIGHT IMAGE SECTION ========= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/assets/error-stroy.webp"
            alt="Not Found Illustration"
            className="w-80 md:w-[420px] rounded-2xl drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
