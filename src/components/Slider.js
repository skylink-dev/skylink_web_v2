"use client";
import { useState, useEffect, useCallback } from "react";

export default function Slider({ slides = [] }) {
  // if (!slides.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
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
    const interval = setInterval(goToNextSlide, 8000);
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const handleDotClick = (index) => setActiveIndex(index);

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
      className="flex justify-center items-center w-full py-6 px-3 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Rounded Container */}
      <div className="relative max-w-7xl w-full bg-[#ffeeec] rounded-2xl md:rounded-3xl shadow-md p-3 md:p-4 overflow-hidden">
        
        {/* Desktop Navigation Arrows - Always visible on desktop */}
        {!isMobile && slides.length > 1 && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10 hover:scale-110 active:scale-95"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10 hover:scale-110 active:scale-95"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slides Container */}
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: getTransformValue() }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl md:rounded-2xl shadow-sm p-3 md:p-3 flex flex-col transition-all duration-700 hover:shadow-md"
              style={{
                width: getSlideWidth(),
                height: isMobile ? '480px' : '420px'
              }}
            >
              {/* Text content - Fixed space */}
              <div className="space-y-2 mb-4 flex-shrink-0 z-10 relative"> {/* Added z-10 and relative */}
                <p className="text-sm font-medium text-gray-600">
                  {slide.eyebrow}
                </p>
                <h3
                  className="text-xl font-bold text-gray-900 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {slide.description}
                </p>
                {slide.legal && (
                  <p className="text-xs text-gray-400">{slide.legal}</p>
                )}
              </div>

              {/* Image Section - Takes maximum space */}
              <div className="flex-1 flex justify-center items-center min-h-0 p-1">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="w-full h-full object-contain max-w-full max-h-full"
                    loading="lazy"
                    style={{
                      minWidth: '100%',
                      minHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>

              {/* Button - Fixed at bottom */}
              <div className="flex-shrink-0 z-10 relative"> {/* Added z-10 and relative */}
                <a
                  href={slide.ctaHref}
                  className="block bg-[#e60000] text-white py-3 rounded-full font-semibold text-sm text-center hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  {slide.ctaLabel || "Shop now"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 ${
                i === activeIndex 
                  ? "bg-[#e60000] scale-110" 
                  : "bg-gray-400/60 hover:bg-gray-500"
              } ${
                isMobile ? "h-2 w-8 rounded-full" : "h-2 w-8 rounded-full"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows - Desktop */}
        {!isMobile && slides.length > getVisibleSlides() && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-gray-700"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-gray-700"
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

        {/* Arrows - Mobile */}
        {isMobile && slides.length > 1 && (
          <>
            <button
              onClick={goToPrevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-gray-700"
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
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md z-10 hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-gray-700"
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
      </div>
    </div>
  );
}
