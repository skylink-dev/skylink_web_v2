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
    const interval = setInterval(goToNextSlide, 3000); // auto-slide every 3s
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const handleDotClick = (index) => setActiveIndex(index);

  const visibleSlidesCount = isMobile ? 1 : 3;
  const slideWidth = `calc(${100 / visibleSlidesCount}% - ${isMobile ? "8px" : "16px"})`;
  const transformValue = `translateX(-${activeIndex * (100 / visibleSlidesCount)}%)`;
  const showArrows = slides.length > visibleSlidesCount;

  return (
    <div
      className="flex justify-center items-center w-full py-8 px-3 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative max-w-5xl w-full bg-[#ffeeec] rounded-2xl md:rounded-3xl shadow-md p-4 md:p-6 overflow-hidden">

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goToPrevSlide}
              className={`absolute bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300 ${
                isMobile ? "top-[40%]" : "top-1/2"
              } -translate-y-1/2 left-3 sm:left-4`}
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              className={`absolute bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300 ${
                isMobile ? "top-[40%]" : "top-1/2"
              } -translate-y-1/2 right-3 sm:right-4`}
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-gray-700"
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
          className="flex gap-4 md:gap-5 transition-transform duration-700 ease-in-out"
          style={{ transform: transformValue }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-5 flex flex-col transition-all duration-700 hover:shadow-md overflow-hidden"
              style={{
                height: isMobile ? "auto" : "420px",
                width: slideWidth,
              }}
            >
              {/* Text */}
              <div className="space-y-1 flex-shrink-0 h-[60px] overflow-visible z-10">
                <p className="text-xs font-medium text-gray-600 leading-tight">{slide.eyebrow}</p>
                <h3
                  className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 leading-tight"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h3>
                <p className="text-gray-600 text-xs leading-snug line-clamp-2">{slide.description}</p>
                {slide.legal && (
                  <p className="text-[10px] text-gray-400 line-clamp-1 leading-tight">{slide.legal}</p>
                )}
              </div>

              {/* Image - Adjusted for mobile to prevent overlap */}
              <div className="flex-shrink-0 flex justify-center items-center mt-4 mb-5">
                <div
                  className="w-full flex items-center justify-center"
                  style={{
                    height: isMobile ? "180px" : "220px",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="max-w-full max-h-full object-contain transition-all duration-500"
                    style={{
                      transform: isMobile ? "scale(1.35)" : "scale(1.35)",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* CTA Button - below content in mobile */}
              <div className={`${isMobile ? "mt-3" : "mt-auto"}`}>
                <a
                  href={slide.ctaHref}
                  className="block bg-[#e60000] text-white py-2.5 md:py-3 rounded-full font-semibold text-sm text-center hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  {slide.ctaLabel || "Shop now"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-5 space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 ${
                i === activeIndex ? "bg-[#e60000] scale-110" : "bg-gray-400/60 hover:bg-gray-500"
              } h-2 w-8 rounded-full`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
