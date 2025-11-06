"use client";
import { useState, useEffect, useCallback } from "react";

export default function Slider({ slides = [] }) {
  if (!slides.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNextSlide, 8000);
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (isMobile) return 1;
    return 3;
  };

  const getSlideWidth = () => {
    const visibleSlides = getVisibleSlides();
    return `calc(${100 / visibleSlides}% - ${isMobile ? '8px' : '12px'})`;
  };

  const getTransformValue = () => {
    const visibleSlides = getVisibleSlides();
    return `translateX(-${activeIndex * (100 / visibleSlides)}%)`;
  };

  return (
    <div
      className="flex justify-center items-center w-full py-4 md:py-8 lg:py-10 px-3 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Rounded Container */}
      <div className="relative max-w-7xl w-full bg-[#ffeeec] rounded-2xl md:rounded-3xl shadow-md p-3 md:p-6 overflow-hidden">
        {/* Slides Container */}
        <div
          className="flex gap-3 md:gap-5 lg:gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: getTransformValue(),
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl md:rounded-2xl shadow-sm p-3 md:p-4 lg:p-6 flex flex-col justify-between transition-all duration-700 hover:shadow-md"
              style={{
                width: getSlideWidth(),
              }}
            >
              {/* Text Section */}
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                  {slide.eyebrow}
                </p>
                <h3
                  className="text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-tight"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {slide.description}
                </p>
                {slide.legal && (
                  <p className="text-xs text-gray-400 mt-1">{slide.legal}</p>
                )}
              </div>

              {/* Landscape Image */}
              <div className="mt-3 md:mt-4 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Button */}
              <a
                href={slide.ctaHref}
                className="inline-block mt-3 md:mt-4 bg-[#e60000] text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-semibold text-xs hover:bg-red-700 transition-all duration-300 self-start w-full text-center"
              >
                {slide.ctaLabel || "Shop now"}
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-4 md:mt-5 space-x-2 md:space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 ${
                i === activeIndex 
                  ? "bg-[#e60000] scale-110" 
                  : "bg-gray-400/60 hover:bg-gray-500"
              } ${
                isMobile ? "h-1.5 w-6 rounded-full" : "h-2 w-2 rounded-full"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        {isMobile && slides.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(prev => (prev + 1) % slides.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}