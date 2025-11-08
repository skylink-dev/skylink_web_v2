"use client";
import { useState, useEffect, useCallback } from "react";

export default function Slider({ slides = [] }) {
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

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNextSlide, 3500);
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const handleDotClick = (index) => setActiveIndex(index);

  const visibleSlidesCount = isMobile ? 1 : 3;
  const slideWidth = `calc(${100 / visibleSlidesCount}% - ${isMobile ? "10px" : "20px"})`;
  const transformValue = `translateX(-${activeIndex * (100 / visibleSlidesCount)}%)`;
  const showArrows = slides.length > visibleSlidesCount;

  return (
    <div
      className="flex justify-center items-center w-full py-10 px-4 sm:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative max-w-[90rem] w-full bg-[#ffeeec] rounded-3xl shadow-lg p-6 md:p-10 overflow-hidden">
        {/* Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute bg-white/90 hover:bg-white rounded-full p-3 shadow-lg z-10 hover:scale-110 transition-all duration-300 top-1/2 -translate-y-1/2 left-3 sm:left-6"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              className="absolute bg-white/90 hover:bg-white rounded-full p-3 shadow-lg z-10 hover:scale-110 transition-all duration-300 top-1/2 -translate-y-1/2 right-3 sm:right-6"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-gray-700"
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
          className="flex gap-6 md:gap-8 transition-transform duration-700 ease-in-out"
          style={{ transform: transformValue }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col justify-between relative transition-all duration-700 hover:shadow-lg overflow-hidden"
              style={{
                height: isMobile ? "auto" : "480px",
                width: slideWidth,
              }}
            >
              {/* ✅ Text section */}
              <div
                className={`${
                  isMobile
                    ? "relative flex flex-col items-center text-center gap-2"
                    : "absolute top-10 left-8 right-1/2 text-left"
                } z-10`}
              >
                <p className="text-sm font-medium text-gray-600 leading-tight">{slide.eyebrow}</p>
                <h3
                  className="text-lg md:text-xl font-bold text-gray-900 leading-tight"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h3>
                <p className="text-gray-600 text-sm leading-relaxed">{slide.description}</p>
                {slide.legal && (
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{slide.legal}</p>
                )}
                <a
                  href={slide.ctaHref}
                  className="mt-4 inline-block bg-[#e60000] text-white py-2.5 px-6 rounded-full font-semibold text-sm text-center hover:bg-red-700 transition-all duration-300 hover:scale-105 w-fit"
                >
                  {slide.ctaLabel || "Shop now"}
                </a>
              </div>

              {/* ✅ Image section */}
              <div
                className={`${
                  isMobile
                    ? "mt-6 flex justify-center items-center"
                    : "absolute bottom-4 right-4 flex justify-end items-end w-[55%] h-[60%]"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="max-w-full max-h-full object-contain transition-all duration-500"
                  style={{
                    transform: isMobile ? "scale(0.9)" : "scale(1.1)", // 🔽 reduced slightly
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-6 space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 ${
                i === activeIndex ? "bg-[#e60000] scale-110" : "bg-gray-400/60 hover:bg-gray-500"
              } h-2.5 w-10 rounded-full`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
