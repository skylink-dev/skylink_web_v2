"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function RightImageLeftContent({ title, Content, order }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    setIsMounted(true);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if ((isMobile || isTablet) && sliderRef.current) {
      setTimeout(() => sliderRef.current.slickGoTo(0), 100);
    }
  }, [isMobile, isTablet]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: index => setCurrentImage(index),
    dotsClass: "slick-dots !bottom-2 sm:!bottom-4",
    appendDots: dots => (
      <div className="bg-white/90 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 inline-flex shadow-sm mx-auto">
        <ul className="!m-0 !p-0 flex gap-1 sm:gap-2 justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`transition-all duration-300 ${
          i === currentImage
            ? "bg-red-600 w-4 sm:w-6 h-2 sm:h-2 rounded-full"
            : "bg-gray-400 w-2 h-2 rounded-full"
        }`}
      />
    ),
  };

  if (!isMounted) return null;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50/30 py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {!isMobile && !isTablet ? (
          // Desktop Layout
          <div
            className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 ${order}`}
          >
            {/* Content Section */}
            <motion.div
              className="w-full lg:w-2/5 space-y-4 lg:space-y-6"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              {Content.map((item, index) => (
                <motion.div
                  key={index}
                  className={`group relative rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-500 cursor-pointer border-2 ${
                    currentImage === index
                      ? 'bg-white border-red-200 shadow-lg lg:shadow-xl scale-105'
                      : 'bg-white/80 border-transparent hover:border-red-100 hover:shadow-md lg:hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active Indicator */}
                  {currentImage === index && (
                    <motion.div 
                      className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-12 lg:h-16 bg-red-600 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}

                  <div className="flex items-start gap-3 lg:gap-5">
                    <motion.div
                      className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl transition-all duration-300 flex-shrink-0 ${
                        currentImage === index
                          ? 'bg-red-100 shadow-inner'
                          : 'bg-gray-100 group-hover:bg-red-50'
                      }`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Image
                        src={item.icon}
                        width={40}
                        height={40}
                        alt={item.title}
                        className={`w-8 h-8 lg:w-12 lg:h-12 object-contain transition-all duration-300 ${
                          currentImage === index ? 'filter brightness-0 invert' : ''
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg lg:text-xl font-bold mb-1 lg:mb-2 transition-colors duration-300 ${
                        currentImage === index ? 'text-red-700' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`leading-relaxed text-sm lg:text-base transition-colors duration-300 ${
                        currentImage === index ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image Section */}
            <div className="w-full lg:w-3/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Image
                    src={
                      Content[currentImage]?.img || "/assets/default-image.webp"
                    }
                    alt={Content[currentImage]?.title || "Content image"}
                    fill
                    className="object-cover rounded-2xl lg:rounded-3xl transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl" />

                  {/* Image Indicator */}
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white/90 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1 lg:py-2">
                    <span className="text-xs lg:text-sm font-semibold text-gray-700">
                      {currentImage + 1} / {Content.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          // Mobile & Tablet Version - Fixed Dots Positioning
          <div className="px-1 sm:px-2">
            <Slider {...sliderSettings} ref={sliderRef}>
              {Content.map((item, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="px-1 sm:px-2 pb-6 sm:pb-8"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-100">
                    {/* Image Section */}
                    <div className="relative w-full h-48 sm:h-64 md:h-80">
                      <Image
                        src={item.img || '/assets/default-image.webp'}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      
                      {/* Mobile Image Indicator */}
                      <div className="absolute top-4 right-4 bg-black/60 text-white rounded-full px-3 py-1">
                        <span className="text-xs font-medium">
                          {index + 1} / {Content.length}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="bg-red-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0">
                          <Image
                            src={item.icon}
                            width={32}
                            height={32}
                            alt={item.title}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                            sizes="32px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-4">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Mobile CTA Button */}
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl sm:rounded-2xl transition-all duration-300 active:scale-95 mt-2 sm:mt-4">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      {/* Custom CSS for dots positioning */}
      <style jsx>{`
        :global(.custom-dots-container) {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 1rem !important;
        }
        :global(.slick-dots) {
          position: relative !important;
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}
