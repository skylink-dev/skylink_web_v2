"use client";
import React, { useState, useEffect } from "react";

const slidesData = [
  {
    icon: "/assets/relocate-wifi.png",
    title: "Wi-Fi Relocation",
    price: "Free",
    description:
      "Shift your broadband to your new home effortlessly, with no reconnection delays.",
    link: "/internet/move-wifi/",
  },
  {
    icon: "/assets/expert-setup-help.png",
    title: "Installation Support",
    price: "Included",
    description:
      "Our experts assist you on-site or remotely to ensure a smooth, working setup.",
    link: "/internet/setup-assistance/",
  },
  {
    icon: "/assets/skyplay-control-help.png",
    title: "Smart App Control",
    price: "Free",
    description:
      "Manage relocation, track appointments, and access support from the Skylink app.",
    link: "/internet/skyplay-app/",
  },
  {
    icon: "/assets/new-home-offers.png",
    title: "Priority Assistance",
    price: "Fast Response",
    description:
      "Moving? Get priority access to customer support for faster issue resolution.",
    link: "/internet/new-home-offers/",
  },
];

const SLIDES_TO_SHOW = 3;

export default function BgSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const visibleSlides = [];
  for (let i = 0; i < slidesToShow; i++) {
    visibleSlides.push(slidesData[(activeIndex + i) % slidesData.length]);
  }

  return (
    <div className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Apps & add-ons for your home internet plan
          </h2>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 md:mb-8 max-w-4xl mx-auto px-8">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Previous slide"
            className="bg-white rounded-full shadow-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-gray-50 hover:scale-110 flex-shrink-0"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
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

          {/* Dots */}
          <div className="flex space-x-2">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-gray-800 w-6 md:w-8" 
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Next slide"
            className="bg-white rounded-full shadow-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-gray-50 hover:scale-110 flex-shrink-0"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
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
        </div>

        {/* Slides */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="flex gap-4 md:gap-6 lg:gap-8 justify-center">
              {visibleSlides.map((slide, i) => (
                <div
                  key={`${slide.title}-${i}`}
                  className="flex-shrink-0 transition-all duration-300"
                  style={{ width: `calc((100% - ${(slidesToShow - 1) * 2}rem) / ${slidesToShow})` }}
                >
                  {/* Portrait Card - Equal Height on Small Screens */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center p-6 md:p-8 hover:shadow-xl transition-all mx-auto w-full max-w-xs h-full min-h-[380px] sm:min-h-[420px] md:min-h-0">
                    {/* Icon */}
                    <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                      <img
                        src={slide.icon}
                        alt={slide.title}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {slide.title}
                    </h3>

                    {/* Price */}
                    <div className="text-base md:text-lg font-medium text-green-600 mb-3">
                      {slide.price}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                      {slide.description}
                    </p>

                    {/* CTA */}
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm md:text-base font-medium rounded-lg overflow-hidden group w-full transition-all duration-300 mt-auto"
                    >
                      <span className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Download the app
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}