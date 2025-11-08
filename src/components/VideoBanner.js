'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoBanner() {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);
  
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowContent(true);
  };

  return (
    <div 
      className="relative w-full min-h-[400px] md:min-h-[600px] lg:min-h-[900px] bg-gradient-to-br from-gray-900 to-black overflow-hidden mb-15"
      id="videobanner"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-black/40 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/amazon-firestick-banner.jpg')",
          }}
        >
          {/* Video Container */}
          <div className="relative w-full h-full">
            <div className="w-full h-full">
              <div className="w-full h-full">
                <div className="h-full">
                  {!showContent && (
                    <video
                      key="unique-video"
                      ref={videoRef}
                      id="videoPlayer_a100359"
                      className="w-full h-full object-cover"
                      playsInline
                      autoPlay
                      muted
                      onEnded={() => setShowContent(true)}
                    >
                      <source 
                        type="video/mp4" 
                        src="https://skyplay.in/assets/video/skyplay-firetv-video.mp4" 
                      />
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      {!showContent && (
        <button
          id="closeVideo"
          title="Close Video"
          aria-label="Close Video"
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white transition-all duration-300 border-none rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:scale-110"
        >
          <svg 
            height="20" 
            width="20" 
            viewBox="0 0 24 24" 
            fill="black" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}

      {/* Content Overlay */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
                  <motion.p 
                    className="text-sm md:text-base lg:text-lg font-semibold text-red-400 uppercase tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Introducing the Skylink Fire TV{' '}
                    <span className="whitespace-nowrap">Guarantee</span>
                  </motion.p>
                  
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Connectivity you depend on.{' '}
                    <span className="block mt-2 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                      Deals you want.
                    </span>{' '}
                    <span className="block mt-2">Service you deserve.</span>
                  </motion.h1>
                  
                  <motion.div 
                    className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="mb-4">
                      Skylink is the first and only carrier that offers a guarantee for wire and fiber networks.
                    </p>
                    <p>
                      New and existing eligible customers are covered by the Skylink Guarantee at no extra charge.
                    </p>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Get Started Today
                    </button>
                    <button className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white transition-all duration-300">
                      Learn More
                    </button>
                  </motion.div>
                </div>

                {/* Optional Image/Graphic */}
                <motion.div 
                  className="flex-1 flex justify-center lg:justify-end"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    <div className="aspect-square bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl backdrop-blur-sm border border-white/10 p-8">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-white/80">
                          <div className="text-6xl mb-4">📱</div>
                          <p className="text-lg font-semibold">Premium Streaming Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-5 pointer-events-none" />
      
      {/* Scroll Indicator */}
      {!showContent && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </div>
      )}
    </div>
  );
}