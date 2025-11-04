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
      imageLandscape: "/assets/banner2.png",
      imagePortrait: "/assets/banner2mv.png",
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
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, slides.length]);

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
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <>
      {/* ===== Slider Container ===== */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="relative mx-10 w-full max-w-[1600px] mx-auto my-10 md:my-16 overflow-hidden rounded-2xl md:rounded-3xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
      >
        {/* ===== Slider Track ===== */}
        <div
          className="flex h-[420px] sm:h-[520px] md:h-[600px] transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative min-w-full h-full overflow-hidden ${
                index === currentSlide ? "z-10" : "z-0"
              }`}
            >
              {/* Landscape Image */}
              <div className="absolute inset-0 hidden sm:block">
                <Image
                  src={slide.imageLandscape}
                  alt={slide.title}
                  fill
                  className="object-fit object-center scale-110 transition-transform duration-[1200ms]"
                />
              </div>

              {/* Portrait Image */}
              <div className="absolute inset-0 sm:hidden">
                <Image
                  src={slide.imagePortrait}
                  alt={slide.title}
                  fill
                  className="object-cover object-bottom "
                />
              </div>

              {/* ===== Overlay Content ===== */}
              <div className="absolute inset-0 flex items-center justify-center sm:justify-start z-10 px-5 sm:px-12 md:px-24 bg-gradient-to-b sm:bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                <div className="max-w-lg sm:max-w-2xl text-white text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-6 leading-tight animate-fadeInUp">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 font-light opacity-90 animate-fadeInUp delay-200">
                    {slide.description}
                  </p>
                  <button
                    onClick={() => handleButtonClick(slide)}
                    className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#e50914] via-[#ff2a35] to-[#e50914] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-2xl font-bold shadow-[0_6px_25px_rgba(229,9,20,0.5)] hover:scale-105 hover:shadow-[0_10px_35px_rgba(229,9,20,0.7)] transition-all duration-500"
                  >
                    {slide.buttonText}
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Navigation Buttons ===== */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:bg-[#e50914] hover:text-white transition-all duration-300"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
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
          className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:bg-[#e50914] hover:text-white transition-all duration-300"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
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

        {/* ===== Dots ===== */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`relative w-8 sm:w-12 h-[4px] sm:h-[6px] rounded-md overflow-hidden transition-all duration-300 ${
                i === currentSlide ? "bg-white/30 scale-y-125" : "bg-white/20"
              }`}
            >
              <span
                className={`absolute inset-0 bg-gradient-to-r from-[#e50914] to-[#ff2a35] transition-transform duration-[600ms] origin-left ${
                  i === currentSlide ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* ===== Progress Bar ===== */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-white/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#e50914] via-[#ff2a35] to-[#e50914] animate-progressBar origin-left"
            style={{
              animationPlayState:
                isAutoPlaying && !isTransitioning ? "running" : "paused",
            }}
          ></div>
        </div>
      </div>

      {/* ===== Contact Form ===== */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
}
