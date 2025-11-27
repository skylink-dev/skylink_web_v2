"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Slider({ slides = [] }) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Create infinite slides for seamless rotation
  const infiniteSlides = [...slides, ...slides, ...slides];

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= slides.length) {
        setTimeout(() => setActiveIndex(0), 50);
        return 0;
      }
      return nextIndex;
    });
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        setTimeout(() => setActiveIndex(slides.length - 1), 50);
        return slides.length - 1;
      }
      return prevIndex;
    });
  }, [slides.length]);

  const handleGetPlan = () => router.push("/plans");

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const handleDotClick = (index) => setActiveIndex(index);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="flex justify-center items-center w-full py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container - Increased padding */}
      <div className="relative w-full max-w-7xl bg-[#ffeeec] rounded-xl sm:rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 w-full">
            Accessories you love. Deals you want.
          </h2>
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute -left-1 sm:left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 shadow-md hover:scale-110 transition-all duration-300"
              style={{ marginTop: "-20px" }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 shadow-md hover:scale-110 transition-all duration-300"
              style={{ marginTop: "-20px" }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Infinite Slider Container */}
        <div className="relative overflow-hidden py-2">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${
                activeIndex * (isMobile ? 100 : 100 / 3)
              }%)`,
            }}
          >
            {infiniteSlides.map((slide, index) => {
              const relativeIndex = index % slides.length;
              const isActive = relativeIndex === activeIndex;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 px-1 sm:px-2 transition-all duration-500 ${
                    isActive ? "scale-105" : "scale-95 opacity-80"
                  }`}
                  style={{ width: isMobile ? "100%" : `calc(100% / 3)` }}
                >
                  <div
                    className={`bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                      isActive ? "ring-1 ring-red-300" : ""
                    }`}
                    style={{
                      height: isMobile ? "230px" : "380px",
                      marginRight: "4px",
                    }}
                  >
                    <div className="h-full flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 relative">
                      {/* Text Content */}
                      <div className="flex-1 z-10">
                        <p className="text-[10px] sm:text-xs font-medium text-gray-500 mb-0.5 sm:mb-1">
                          {slide.eyebrow}
                        </p>
                        <h3
                          className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight sm:leading-snug"
                          dangerouslySetInnerHTML={{ __html: slide.heading }}
                        />
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-snug line-clamp-2 sm:line-clamp-3">
                          {slide.description}
                        </p>
                        <button
                          onClick={handleGetPlan}
                          className="bg-[#e60000] text-white py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 rounded-full font-semibold text-[10px] sm:text-xs md:text-sm hover:bg-red-700 transition-all duration-200 hover:scale-105"
                        >
                          Shop now
                        </button>
                      </div>

                      {/* Image */}
                      <div
                        className={`absolute bottom-0 right-0 ${
                          isMobile
                            ? "w-[50%] h-[60%]"
                            : "w-[45%] sm:w-[50%] h-[50%] sm:h-[55%]"
                        } flex justify-end items-end`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.heading}
                          className="w-full h-full object-contain"
                          style={{
                            maxHeight: isMobile ? "120px" : "180px",
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#e60000] scale-110"
                  : "bg-gray-400/60 hover:bg-gray-500"
              } h-1.5 sm:h-2 w-6 sm:w-8 rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
