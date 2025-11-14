"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpeedTestBanner() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => {
    setShowPopup(true);
    
    // Calculate center position
    const width = 1000;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    // Open with minimal browser chrome - this hides as much as possible
    const popup = window.open(
      "https://skylinkfiber.speedtestcustom.com/result/edef1540-f364-11eb-a95f-853cd1c871f8",
      "SpeedTest",
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    );
    
    if (!popup) {
      alert("Please allow popups for this site to run the speed test");
    }
  };

  const handleClose = () => setShowPopup(false);

  const currentDate = new Date().toString();
  const [ip] = useState("103.130.90.103");

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white text-gray-800 rounded-3xl overflow-hidden flex items-center justify-between px-8 sm:px-16 h-[480px] relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 z-0 rounded-3xl"></div>

        {/* Text Section */}
        <div className="max-w-2xl z-10 relative">
          <p className="uppercase tracking-[4px] text-sm text-gray-600 mb-3">
            Speed Test
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900">
              Check Your Connection in a Minute
          </h1>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Run a quick test to measure your current download and upload speeds with our tool. See if your connection can handle streaming, gaming, and video calls smoothly. Accurate result in seconds, no login needed
          </p>

          <p className="text-xs text-gray-600 mb-1">
            {currentDate.toUpperCase()}
          </p>
          <p className="text-xs text-gray-600">Your IP: {ip}</p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col items-center justify-center z-10 relative">
          <button
            onClick={handleOpen}
            className="flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
          >
            <div className="bg-[#ff0033] rounded-full w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center border-8 border-white/20 shadow-lg">
              <span className="text-4xl">⚡</span>
            </div>
            <p className="mt-4 text-sm sm:text-base">
              Click here to check your internet speed instantly
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}