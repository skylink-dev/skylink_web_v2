"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Slider({ slides = [] }) {
  const router = useRouter();

  if (!slides || slides.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleExploreOTT = () => router.push("/ott");
  const handleGetPlan = () => router.push("/plans");

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const handleDotClick = (index) => setActiveIndex(index);

  const visibleSlidesCount = isMobile ? 1 : 3;
  const slideWidth = isMobile ? "100%" : `calc(28% - 16px)`; // narrower sub-containers
  const transformValue = `translateX(-${activeIndex * (100 / visibleSlidesCount)}%)`;
  const showArrows = slides.length > visibleSlidesCount;

  return (
    <div
      className="flex justify-center items-center w-full py-8 px-2 sm:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container */}
      <div className="relative w-full max-w-7xl bg-[#ffeeec] rounded-2xl shadow-sm p-4 sm:p-6 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 px-2 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 ">
            Accessories you love. Deals you want.
          </h2>
         
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300 top-1/2 -translate-y-1/2 left-2 sm:left-4"
            >
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              className="absolute bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300 top-1/2 -translate-y-1/2 right-2 sm:right-4"
            >
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slides */}
        <div
           className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: transformValue,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-2xl shadow-md relative flex flex-col justify-between p-5 sm:p-6 hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{
                width: slideWidth,
                height: isMobile ? "auto" : "420px",
              }}
            >
              {/* Text & Button (Top Left) */}
              <div className="z-10 text-left w-[65%] sm:w-[60%]">
                <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  {slide.eyebrow}
                </p>
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h3>
                <p className="text-sm text-gray-600 mb-4 leading-snug">
                  {slide.description}
                </p>
                <button
                  onClick={handleGetPlan}
                  className="bg-[#e60000] text-white py-2 px-5 rounded-full font-semibold text-sm hover:bg-red-700 transition-all duration-200"
                >
                  Shop now
                </button>
              </div>

              {/* Image (Bottom Right) */}
              <div className="absolute bottom-0 right-0 flex justify-end items-end w-[45%] h-[55%]">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-full object-contain"
                  style={{
                    maxHeight: isMobile ? "160px" : "200px",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#e60000] scale-110"
                  : "bg-gray-400/60 hover:bg-gray-500"
              } h-2 w-8 rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
