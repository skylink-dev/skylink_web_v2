import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function LookForSomething() {
  return (
    <div className="w-full px-4 py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Looking for something?
        </h2>

        {/* Search Bar Container */}
        <div className="relative">
          <input
            id="search-field"
            type="search"
            placeholder="Search our site..."
            autoComplete="off"
            className="
              w-full px-6 py-4 pr-14 
              rounded-2xl shadow-md
              focus:outline-none
              bg-white/90 backdrop-blur
              border border-gray-200
              text-gray-800 
              placeholder:text-gray-400
              text-lg
              focus:ring-2 focus:ring-blue-500
              transition-all
            "
          />

          {/* Search Button / Icon */}
          <button
            type="button"
            className="
              absolute top-1/2 -translate-y-1/2 right-4
              text-gray-500 hover:text-gray-700
              transition
            "
          >
            <Search size={24} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
