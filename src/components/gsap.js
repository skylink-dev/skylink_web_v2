import { useEffect } from 'react';
import gsap from 'gsap';

const useGSAPSlider = (slides) => {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    
    slides.forEach((_, i) => {
      const nextIndex = (i + 1) % slides.length;

      timeline
        .to(`.slide[data-index="${i}"]`, { autoAlpha: 1, duration: 1 })
        .to(`.slide[data-index="${i}"] .text-layer`, { y: 0, opacity: 1, duration: 1 }, "<")
        .to(`.slide[data-index="${i}"] .progress-bar`, { width: "100%", duration: 4 }, "<")
        .to(`.slide[data-index="${i}"]`, { autoAlpha: 0, duration: 1 }, "+=4");
    });
  }, [slides]);
};