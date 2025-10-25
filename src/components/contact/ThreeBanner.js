"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "./ThreeBannerImage.css";

const ThreeBannerModern = () => {
  const slides = [
    {
      id: 1,
      title: "Mobile recharges just got festive",
      description:
        "With a ₹349+ plan, enjoy unlimited 5G, Hotstar, 2% extra on Skylink Gold & a 2-month Skylink Home trial.",
      buttonText: "Check eligible plans",
      buttonLink: "#",
      imageLandscape: "/assets/banner1.jpg",
      imagePortrait: "/assets/banner1mv.jpg",
    },
    {
      id: 2,
      title: "Get your child AI-ready in 4 weeks",
      description:
        "Enroll in the AI Foundation Course on SkylinkPC today.",
      buttonText: "Register for FREE",
      buttonLink: "#",
      imageLandscape: "/assets/banner2.png",
      imagePortrait: "/assets/banner2mv.png",
    },
    {
      id: 3,
      title: "Entertainment reimagined with Skylink OTT",
      description:
        "Enjoy blockbuster shows and movies with Skylink's latest OTT plans.",
      buttonText: "Explore Plans",
      buttonLink: "#",
      imageLandscape: "/assets/banner3.jpg",
      imagePortrait: "/assets/banner3mv.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="skylink-slider-container">
      <div className="skylink-slider-wrapper">
        <div
          className={`skylink-slider-track ${direction}`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`skylink-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              {/* Landscape Image for Desktop/Tablet */}
              <div className="slide-image-wrapper landscape">
                <Image
                  src={slide.imageLandscape}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="slide-bg"
                  quality={90}
                />
              </div>

              {/* Portrait Image for Mobile */}
              <div className="slide-image-wrapper portrait">
                <Image
                  src={slide.imagePortrait}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="slide-bg"
                  quality={90}
                />
              </div>

              <div className="skylink-slide-overlay">
                <div className="skylink-slide-content">
                  <a href={slide.buttonLink} className="skylink-btn">
                    <span>{slide.buttonText}</span>
                    <svg
                      className="btn-arrow"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="nav-btn left"
        onClick={prevSlide}
        aria-label="Previous Slide"
        disabled={isTransitioning}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
        className="nav-btn right"
        onClick={nextSlide}
        aria-label="Next Slide"
        disabled={isTransitioning}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Progress Dots */}
      <div className="skylink-slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            animation: `progressBar 6s linear infinite`,
            animationPlayState: isTransitioning ? "paused" : "running",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ThreeBannerModern;