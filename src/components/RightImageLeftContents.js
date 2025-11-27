"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LeftImageRightContent({ title, Content, order }) {
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
    if (isMobile || isTablet) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0);
        }
      }, 100);
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
    afterChange: (index) => setCurrentImage(index),
    dotsClass: "slick-dots custom-dots-container",
    appendDots: (dots) => (
      <div className="bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 inline-flex shadow-sm mx-auto mt-4 sm:mt-6">
        <ul className="!m-0 !p-0 flex gap-2 sm:gap-3 justify-center">{dots}</ul>
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50/30 py-8 sm:py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
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
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-12">
            {/* Image Section - Now on LEFT with equal height */}
            <div className="w-full lg:w-1/2 flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="relative w-full h-full min-h-[600px] overflow-hidden rounded-xl lg:rounded-2xl shadow-lg"
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
                    className="object-cover rounded-xl lg:rounded-2xl transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl lg:rounded-2xl" />

                  {/* Image Indicator */}
                  <div className="absolute bottom-4 lg:bottom-5 left-4 lg:left-5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">
                      {currentImage + 1} / {Content.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Section - Now on RIGHT with equal height */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col space-y-3 lg:space-y-5 min-h-[600px] justify-center"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              {Content.map((item, index) => (
                <motion.div
                  key={index}
                  className={`group relative rounded-lg lg:rounded-xl p-4 lg:p-7 transition-all duration-500 cursor-pointer border-2 flex-1 ${
                    currentImage === index
                      ? "bg-red-600 border-red-600 shadow-lg scale-105 text-white"
                      : "bg-white/80 border-transparent hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md"
                  }`}
                  onMouseEnter={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active Indicator - Moved to right side */}
                  {currentImage === index && (
                    <motion.div
                      className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-10 lg:h-12 bg-white rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}

                  <div className="flex items-start gap-3 lg:gap-4 h-full">
                    <motion.div
                      className={`p-2 lg:p-2 rounded-lg lg:rounded-xl transition-all duration-300 flex-shrink-0 ${
                        currentImage === index
                          ? "bg-white/20 shadow-inner"
                          : "bg-gray-100 group-hover:bg-white/20"
                      }`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Image
                        src={item.icon}
                        width={32}
                        height={32}
                        alt={item.title}
                        className={`w-6 h-6 lg:w-10 lg:h-10 object-contain transition-all duration-300 ${
                          currentImage === index
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3
                        className={`text-base lg:text-xl font-bold mb-1 lg:mb-2 transition-colors duration-300 ${
                          currentImage === index
                            ? "text-white"
                            : "text-gray-900 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`leading-relaxed text-sm lg:text-base transition-colors duration-300 ${
                          currentImage === index
                            ? "text-white/90"
                            : "text-gray-600 group-hover:text-white/90"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Mobile & Tablet Version
          <div className="px-1 sm:px-2">
            <div className="relative">
              <Slider {...sliderSettings} ref={sliderRef}>
                {Content.map((item, index) => (
                  <motion.div
                    key={`mobile-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="px-1 sm:px-2 pb-2"
                  >
                    {/* Consistent container for all slides */}
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[550px] sm:h-[450px] flex flex-col">
                      {/* Image Section - Fixed height that fits container */}
                      <div className="relative w-full h-[380px] sm:h-60 flex-shrink-0">
                        <Image
                          src={item.img || "/assets/default-image.webp"}
                          alt={item.title}
                          fill
                          className="object-cover w-full h-full object-center"
                          priority
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
                          quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        {/* Mobile Image Indicator */}
                        <div className="absolute top-3 right-3 bg-black/60 text-white rounded-full px-2 py-1">
                          <span className="text-xs font-medium">
                            {index + 1} / {Content.length}
                          </span>
                        </div>
                      </div>

                      {/* Content Section - Fixed height for consistency */}
                      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 flex-1">
                          <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                            <Image
                              src={item.icon}
                              width={28}
                              height={28}
                              alt={item.title}
                              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                              sizes="28px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm line-clamp-4">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Mobile CTA Button - Fixed at bottom */}
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 active:scale-95 mt-auto text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
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
