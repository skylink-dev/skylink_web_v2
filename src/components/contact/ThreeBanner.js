"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import ContactForm (no SSR)
const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => null,
});

export default function ThreeBannerModern() {
  const router = useRouter();
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const [displaySlides, setDisplaySlides] = useState([]);

  const slides = [
    {
      id: 1,
      title: "Entertainment reimagined with Skylink OTT",
      description:
        "Stream blockbuster shows, exclusive movies & live sports with Skylink OTT Premium plans.",
      buttonText: "Check Available OTTs",
      buttonLink: "/ott",
      imageLandscape: "/assets/banner1.jpg",
      imagePortrait: "/assets/banner1mv.jpg",
    },
    {
      id: 2,
      title: "We Offer The Highest-Quality Network Connections",
      description:
        "Choose us for the highest-quality connections that support your digital lifestyle.",
      buttonText: "Register for FREE",
      buttonLink: "#register",
      imageLandscape: "/assets/banner2.jpg",
      imagePortrait: "/assets/banner2mv.jpg",
    },
    {
      id: 3,
      title: "Unlock the Ultimate Broadband Experience",
      description:
        "Enjoy fast, reliable connectivity for all your streaming, gaming, browsing, and work-from-home needs.",
      buttonText: "Explore Plans",
      buttonLink: "/plans",
      imageLandscape: "/assets/banner3.jpg",
      imagePortrait: "/assets/banner3mv.jpg",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleButtonClick = (slide) => {
    if (slide.buttonLink === "/plans") router.push("/plans");
    else if (slide.buttonLink === "#register") setShowContactForm(true);
    else if (slide.buttonLink.startsWith("#")) {
      document
        .querySelector(slide.buttonLink)
        ?.scrollIntoView({ behavior: "smooth" });
    } else window.location.href = slide.buttonLink;
  };

  useEffect(() => {
    // Create infinite loop array: [...slides, first slide]
    setDisplaySlides([...slides, slides[0]]);
  }, []);

  useEffect(() => {
    // Reset position instantly when reaching the clone
    if (currentSlide === slides.length) {
      setTimeout(() => {
        setCurrentSlide(0);
      }, 800);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <>
      {/* ===== Main Slider Container ===== */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="relative w-full max-w-[1400px] mx-auto px-0 sm:px-3 md:px-6 my-2 xs:my-3 sm:my-6 md:my-8"
      >
        {/* ===== Slider Track - Fit to content ===== */}
        <div className="relative w-full h-[400px] xs:h-[450px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-none sm:rounded-2xl bg-black shadow-lg sm:shadow-xl shadow-black/40">
          <div
            className="absolute inset-0 flex h-full transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transitionDuration:
                currentSlide === 0 && !isTransitioning ? "0ms" : "700ms",
            }}
          >
            {displaySlides.map((slide, index) => (
              <div
                key={slide.id}
                className="relative w-full h-full flex-shrink-0"
                style={{ minWidth: "100%", maxWidth: "100%" }}
              >
                {/* Landscape Image Container - Desktop */}
                <div className="absolute inset-0 hidden sm:block">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.imageLandscape}
                      alt={slide.title}
                      fill
                      className="object-cover" 
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                {/* Portrait Image Container - Mobile (Fill container) */}
                <div className="absolute inset-0 sm:hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.imagePortrait}
                      alt={slide.title}
                      fill
                      className="object-cover" 
                      priority={index === 0}
                      sizes="100vw"
                    />
                  </div>
                  {/* Stronger gradient overlay for mobile */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/20" />
                </div>

                {/* ===== Content - Moved to top ===== */}
                <div className="absolute inset-0 flex items-start z-10 px-3 xs:px-4 sm:px-8 md:px-12 lg:px-16 pt-4 xs:pt-6 sm:pt-8">
                  <div className="w-full max-w-2xl text-white text-left">
                    {/* Title */}
                    <h1
                      className={`text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 xs:mb-2.5 sm:mb-5 leading-tight ${
                        index === currentSlide ||
                        index === currentSlide % slides.length
                          ? "animate-fade-in-up"
                          : "opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-xs xs:text-xs sm:text-lg md:text-xl mb-2.5 xs:mb-3 sm:mb-6 font-normal opacity-90 leading-snug sm:leading-relaxed max-w-lg ${
                        index === currentSlide ||
                        index === currentSlide % slides.length
                          ? "animate-fade-in-up animation-delay-150"
                          : "opacity-0"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <div
                      className={`${
                        index === currentSlide ||
                        index === currentSlide % slides.length
                          ? "animate-fade-in-up animation-delay-300"
                          : "opacity-0"
                      }`}
                    >
                      <button
                        onClick={() => handleButtonClick(slide)}
                        className="group inline-flex items-center gap-2 xs:gap-2.5 sm:gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full text-xs xs:text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative overflow-hidden"
                      >
                        <span className="relative z-10 whitespace-nowrap">
                          {slide.buttonText}
                        </span>
                        <svg
                          className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 ease-out" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Progress Bar - INSIDE CONTAINER ===== */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden z-30 rounded-b-none sm:rounded-b-2xl">
            <div
              className={`h-full bg-gradient-to-r from-red-600 to-red-700 transition-transform duration-100 ease-linear ${
                isAutoPlaying && !isTransitioning
                  ? "animate-progress"
                  : "animation-paused"
              }`}
              style={{
                transform: `scaleX(${
                  isAutoPlaying && !isTransitioning ? 1 : 0
                })`,
                transformOrigin: "left",
              }}
            />
          </div>
        </div>

        {/* ===== Navigation Arrows ===== */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 xs:left-3 sm:left-8 transform -translate-y-1/2 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 z-20"
          aria-label="Previous slide"
        >
          <svg
            className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 xs:right-3 sm:right-8 transform -translate-y-1/2 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 z-20"
          aria-label="Next slide"
        >
          <svg
            className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* ===== Progress Dots ===== */}
        <div className="absolute bottom-4 xs:bottom-5 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 xs:gap-2 sm:gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`relative w-5 xs:w-6 sm:w-6 h-1.5 xs:h-1.5 rounded-full transition-all duration-300 ${
                currentSlide % slides.length === i
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80 hover:scale-105"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="sr-only">Slide {i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Contact Form ===== */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {/* ===== Custom Styles ===== */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out both;
        }

        .animation-delay-150 {
          animation-delay: 0.15s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animate-progress {
          animation: progress 6s linear forwards;
        }

        .animation-paused {
          animation-play-state: paused;
        }

        /* Performance and reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-progress {
            animation: none;
          }

          .transition-all,
          .transition-transform {
            transition: none;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-105:hover,
          .hover\\:shadow-xl:hover {
            transform: none;
            box-shadow: none;
          }
        }
      `}</style>
    </>
  );
}