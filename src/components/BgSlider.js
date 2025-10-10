'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const slidesData = [
  {
    icon: '/assets/relocate-wifi.png',
  title: 'Wi-Fi Relocation',
    price: 'Free',
    description: 'Shift your broadband to your new home effortlessly, with no reconnection delays.',
    link: '/internet/move-wifi/',
  },
  {
    icon: '/assets/expert-setup-help.png',
    title: 'Installation Support',
    price: 'Included',
    description: 'Our experts assist you on-site or remotely to ensure a smooth, working setup.',
    link: '/internet/setup-assistance/',
  },
  {
    icon: '/assets/skyplay-control-help.png',
    title: 'Smart App Control',
    price: 'Free',
    description: 'Manage relocation, track appointments, and access support from the Skylink app.',
    link: '/internet/skyplay-app/',
  },
  {
    icon: '/assets/new-home-offers.png',
    title: 'Priority Assistance',
    price: 'Fast Response',
    description: 'Moving? Get priority access to customer support for faster issue resolution.',
    link: '/internet/new-home-offers/',
  },
];



const SLIDES_TO_SHOW = 3;

export default function BgSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const visibleSlides = [];
  for (let i = 0; i < SLIDES_TO_SHOW; i++) {
    visibleSlides.push(slidesData[(activeIndex + i) % slidesData.length]);
  }

  return (
    <>
      <div className="row inline-block text-center">
        <h2 className="mar-b-xs heading-xxl">Apps & add-ons for your home internet plan</h2>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="jsx-640618752 jsx-1371232659 carousel-v2 container pad-b-md">
            <div className="jsx-640618752 jsx-1371232659 row-nowrap flex-items-center carousel-overflow">

              {/* LEFT ARROW */}
              <div className="jsx-640618752 jsx-1371232659 grid-col-1 carousel-nav-container text-center">
                <div className="carousel-navigation carousel-nav">
                  <button onClick={handlePrev} aria-label="Scroll Left" className="carousel-control btn-reset touch-space">
                    <span className="inline-flex flex-centered round width-xl-all height-xl-all rotate180">
                      <svg aria-label="scroll left" height="32" width="32" viewBox="0 0 32 32">
                        <path className="svg-base" d="M12.27 26.71l-1.41-1.42L20.15 16l-9.29-9.29 1.41-1.42L23 16z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* SLIDER TRACK */}
              <div className="jsx-640618752 jsx-1371232659 grid-col-10 devicePadding carousel-track-container pad-t-xs true overflow-hidden">
                <motion.div
                  className="jsx-640618752 jsx-1371232659 row-nowrap carousel-track"
                  style={{ display: 'flex', gap: '1rem' }}
                  animate={{ x: 0 }}
                  transition={{ type: 'tween', duration: 0.5 }}
                >
                  {visibleSlides.map((slide, i) => (
                    <div
                      key={`${slide.title}-${i}`}
                      className="jsx-640618752 jsx-1371232659 grid-col-4 carousel-item"
                      style={{ minWidth: 'calc(100% / 3)', transition: 'transform 0.5s ease' }}
                    >
                      <div className="jsx-2200991819 card height-full rel z0 pad-sm-lg pad-md-md bg-att-blue-000 bgcolor theme-base-bg pad-xs-sm radius-lg">
                        <div className="row-nowrap justify-center mar-t-xs">
                          <img src={slide.icon} alt="icon" height="96" width="96" />
                        </div>
                        <div className="row inline-block text-center mar-t-xs">
                          <h2 className="mar-b-xs heading-md">{slide.title}</h2>
                        </div>
                        <div className="row flex-wrap justify-center text-center">
                          <div className="type-lg font-bold mar-b-xs color-green-600 rte-styles">{slide.price}</div>
                        </div>
                        <div className="row-nowrap justify-center text-center">
                          <div className="type-base rte-styles">{slide.description}</div>
                        </div>
                        <div className="row-nowrap justify-center mar-t-xs">
                          <a className="solo type-base primary-cta" target="_blank" href={slide.link} rel="noopener noreferrer">
                            Download the app
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT ARROW */}
              <div className="jsx-640618752 jsx-1371232659 grid-col-1 carousel-nav-container text-center">
                <div className="carousel-navigation carousel-nav">
                  <button onClick={handleNext} aria-label="Scroll Right" className="carousel-control btn-reset touch-space">
                    <span className="inline-flex flex-centered round width-xl-all height-xl-all">
                      <svg aria-label="scroll right" height="32" width="32" viewBox="0 0 32 32">
                        <path className="svg-base" d="M12.27 26.71l-1.41-1.42L20.15 16l-9.29-9.29 1.41-1.42L23 16z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
