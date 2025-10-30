"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "./ThreeBannerImage.css";

// Dynamically import ContactForm with ssr: false
const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => null
});

const ThreeBannerModern = () => {
  const router = useRouter();
  const [showContactForm, setShowContactForm] = useState(false);
  
  const slides = [
    {
      id: 1,
      title: "Entertainment reimagined with Skylink OTT",
      description: "Stream blockbuster shows, exclusive movies & live sports with Skylink OTT Premium plans.",
      buttonText: "Check Available OTTs",
      buttonLink: "/ott",
      imageLandscape: "/assets/banner1.jpg",
      imagePortrait: "/assets/banner1mv.jpg",
    },
    {
      id: 2,
      title: "We Offer The Highest-Quality Network Connections",
      description: "Choose us for the highest-quality connections that support your digital lifestyle.",
      buttonText: "Register for FREE",
      buttonLink: "#register",
      imageLandscape: "/assets/banner2.png",
      imagePortrait: "/assets/banner2mv.png",
    },
    {
      id: 3,
      title: "Unlock the Ultimate Broadband Experience ",
      description: "Enjoy fast, reliable connectivity for all your streaming, gaming, browsing, and work-from-home needs.",
      buttonText: "Explore Plans",
      buttonLink: "/plans",
      imageLandscape: "/assets/banner3.jpg",
      imagePortrait: "/assets/banner3mv.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentSlide((prev) => {
      const nextSlideIndex = prev + 1;
      
      if (nextSlideIndex >= slides.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 800);
        return slides.length - 1;
      }
      
      setTimeout(() => setIsTransitioning(false), 800);
      return nextSlideIndex;
    });
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentSlide((prev) => {
      const prevSlideIndex = prev - 1;
      
      if (prevSlideIndex < 0) {
        setTimeout(() => setIsTransitioning(false), 800);
        return slides.length - 1;
      }
      
      setTimeout(() => setIsTransitioning(false), 800);
      return prevSlideIndex;
    });
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, currentSlide]);

  // Handle button click
  const handleButtonClick = useCallback((slide) => {
    if (slide.buttonLink === "/plans") {
      router.push("/plans");
    } else if (slide.buttonLink === "#register") {
      // Only set showContactForm to true - this triggers the dynamic import and rendering
      setShowContactForm(true);
    } else if (slide.buttonLink.startsWith("#")) {
      const element = document.querySelector(slide.buttonLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = slide.buttonLink;
    }
  }, [router]);

  // Auto-play with continuous forward scrolling only
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key >= '1' && e.key <= '3') goToSlide(parseInt(e.key) - 1);
  }, [prevSlide, nextSlide, goToSlide]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <div 
        className="skylink-slider-container"
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Featured offers slider"
      >
        <div className="skylink-slider-wrapper">
          <div
            className="skylink-slider-track"
            style={{
              transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
              transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`skylink-slide ${index === currentSlide ? "active" : ""}`}
                role="group"
                aria-label={`Slide ${index + 1} of ${slides.length}`}
                aria-hidden={index !== currentSlide}
              >
                {/* Landscape Image for Desktop/Tablet */}
                <div className="slide-image-wrapper landscape">
                  <Image
                    src={slide.imageLandscape}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="slide-bg"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
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
                    quality={95}
                    sizes="100vw"
                  />
                </div>

                {/* ===== Enhanced Overlay Content ===== */}
                <div className="skylink-slide-overlay">
                  <div className="skylink-slide-content">
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                    <button 
                      onClick={() => handleButtonClick(slide)}
                      className="skylink-btn"
                      aria-label={`Learn more about ${slide.title}`}
                    >
                      <span>{slide.buttonText}</span>
                      <svg
                        className="btn-arrow"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
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
        </div>

        {/* Navigation Arrows */}
        <button
          className="nav-btn left"
          onClick={prevSlide}
          aria-label="Previous Slide"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        <div 
          className="skylink-slider-dots"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              disabled={isTransitioning}
              role="tab"
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
              animationPlayState: isAutoPlaying && !isTransitioning ? 'running' : 'paused',
            }}
          ></div>
        </div>

        {/* Screen Reader Status */}
        <div 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
        >
          {`Slide ${currentSlide + 1} of ${slides.length}: ${slides[currentSlide].title}`}
        </div>
      </div>

      {/* Contact Form Popup - Only loads and renders when showContactForm is true */}
      {showContactForm && (
        <ContactForm 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
};

export default ThreeBannerModern;