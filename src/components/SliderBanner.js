'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function SliderBanner() {
    const sliderMessages = [
        {
          text: `Prompt, friendly service you deserve backed by the Skylink Guarante. Speak to a tech expert within five minutes or schedule a callback at a time you prefer.`,
          linkText: 'Learn more about the Skylink Guarantee',
          link: '#',
        },
        {
          text: `Avoid scams: Skylink will never call you for a one-time PIN.`,
          linkText: 'Learn safety tips',
          link: '#',
        },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

      const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? sliderMessages.length - 1 : prev - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prev) => (prev === sliderMessages.length - 1 ? 0 : prev + 1));
      };
    
      const { text, linkText, link } = sliderMessages[currentIndex]; 
    return (
        <div className="bg-cobalt max-width-background color-white">
        <div className="container">
          <div className="row-nowrap justify-center flex-items-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="btn-reset inline-flex flex-centered mar-r-xs mar-r-none-sm color-white"
              aria-label="Scroll Left"
            >
              <div className="width-md-all height-md-all hide-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="svg-base" d="M16 31A15 15 0 101 16a15 15 0 0015 15zm0-28A13 13 0 113 16 13 13 0 0116 3zm1.71 19.71L11 16l6.7-6.71 1.42 1.42L13.83 16l5.3 5.29z" />
                </svg>
              </div>
              <span className="width-sm-all height-sm-all hide-lg hide-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="svg-base" d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z" />
                </svg>
              </span>
            </button>
  
            {/* Message Content */}
            <div className="grid-col-8 grid-col-10-md grid-col-11-sm nopad">
              <div className="row-nowrap justify-center flex-items-center">
                <div className="overflow-hidden">
                  <div className="flex flex-items-center">
                    <div className="scrollable-panel grid-col-12 overflow-hidden pad-t-none pad-b-none flex justify-center flex-items-center text-center mar-t-sm-lg mar-t-xxs-md mar-t-xxs-sm mar-b-sm-lg mar-b-xxs-md mar-b-xxs-sm">
                      <div className="color-white">
                        <div className="type-base rte-styles">
                          <h3>
                            <span className="color-white">{text}</span>{' '}
                            <strong>
                              <u>
                                <Link href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                  <span className="nowrap color-white">{linkText}</span>
                                </Link>
                              </u>
                            </strong>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="btn-reset inline-flex flex-centered mar-l-xs mar-l-none-sm color-white"
              aria-label="Scroll Right"
            >
              <span className="width-md-all height-md-all hide-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="svg-base" d="M16 1a15 15 0 1015 15A15 15 0 0016 1zm0 28a13 13 0 1113-13 13 13 0 01-13 13zM14.29 9.29L21 16l-6.7 6.71-1.42-1.42L18.17 16l-5.3-5.29z" />
                </svg>
              </span>
              <span className="width-sm-all height-sm-all hide-lg hide-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="svg-base" d="M12.27 26.71l-1.41-1.42L20.15 16l-9.29-9.29 1.41-1.42L23 16z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    )
}
