'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"

export default function SkyplayTestimonialCarousel({ slidesData }) {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? slidesData.length - 1 : prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex(prev => prev === slidesData.length - 1 ? 0 : prev + 1)
  }

  const primaryRed = '#c90000'
  const lighterRed = '#e60000'

  return (
    <div className="mx-4 md:mx-6 lg:mx-8 xl:mx-12">
      <section 
        className="relative py-12 md:py-14 lg:py-16 overflow-hidden rounded-3xl" 
        style={{ backgroundColor: primaryRed }}
      > 
        
        {/* Curved Red Background Overlay */}
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute top-0 left-0 w-full h-[300px] md:h-[400px]"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,160 Q360,60 720,160 T1440,160 L1440,0 L0,0 Z"
              fill={lighterRed}
            />
          </svg>
        </div>

        {/* Main Content Area */}
        <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 md:px-10 lg:px-12 gap-12 md:gap-16 lg:gap-20 z-10">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-[42%] text-white z-10 space-y-4 lg:pr-8">
            <div
              key={currentIndex} 
              className="transition-all duration-700 ease-in-out"
            >
              <p className="text-sm md:text-base font-medium mb-3 opacity-90">
                What our customers are saying
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                {slidesData[currentIndex].title}
              </h2>
              <p className="text-white/90 leading-relaxed text-base md:text-lg mb-6 max-w-lg">
                {slidesData[currentIndex].description}
              </p>
              <div className="text-sm text-white/80 mb-8">
                <p className="font-semibold text-base">{slidesData[currentIndex].customer}</p>
                <p className="text-white/60 text-sm">Verified customer</p>
              </div>
              <Link
                href="/new_plans"
                className="inline-block bg-white font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-base"
                style={{ color: primaryRed }}
              >
                {slidesData[currentIndex].cta}
              </Link>
            </div>
          </div>

          {/* Right Image Section - 3-card stack */}
          <div className="w-full lg:w-[58%] relative flex justify-center lg:justify-end items-center z-10 min-h-[350px] md:min-h-[420px]">

            {/* Prev Button - Desktop */}
            <button
              onClick={handlePrev}
              className="absolute left-0 lg:-left-12 xl:-left-16 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-2 border-white/40 rounded-full p-3 hover:bg-white/25 hover:scale-110 transition-all duration-300 z-30 hidden lg:flex items-center justify-center shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#fff" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* 3-Card Stack Container */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] aspect-[3/4]">
              {slidesData.map((item, index) => {
                let position = ''
                let zIndex = ''
                let opacity = ''
                
                if (index === currentIndex) {
                  position = 'translate-x-0 translate-y-0 rotate-0 scale-100'
                  zIndex = 'z-20'
                  opacity = 'opacity-100'
                }
                else if (index === (currentIndex - 1 + slidesData.length) % slidesData.length) {
                  position = 'translate-x-[-55%] md:translate-x-[-65%] translate-y-[8%] rotate-[-6deg] scale-[0.92]'
                  zIndex = 'z-10'
                  opacity = 'opacity-75'
                }
                else if (index === (currentIndex + 1) % slidesData.length) {
                  position = 'translate-x-[55%] md:translate-x-[65%] translate-y-[8%] rotate-[6deg] scale-[0.92]'
                  zIndex = 'z-10'
                  opacity = 'opacity-75'
                }
                else {
                  position = 'translate-x-0 translate-y-0 rotate-0 scale-100'
                  zIndex = 'z-0'
                  opacity = 'opacity-0'
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${position} ${zIndex} ${opacity}`}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white ring-4 ring-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index === currentIndex}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Next Button - Desktop */}
            <button
              onClick={handleNext}
              className="absolute right-0 lg:-right-12 xl:-right-16 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-2 border-white/40 rounded-full p-3 hover:bg-white/25 hover:scale-110 transition-all duration-300 z-30 hidden lg:flex items-center justify-center shadow-lg"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#fff" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="relative mt-8 flex justify-center space-x-6 lg:hidden z-20">
          <button
            onClick={handlePrev}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/40 rounded-full p-3 hover:bg-white/25 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path fill="#fff" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/40 rounded-full p-3 hover:bg-white/25 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path fill="#fff" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

      </section>
    </div>
  )
}