'use client'
import React, { useRef } from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from "next/image"
import Link from 'next/link'

export default function SpeedBanner({ mainImage, content }) {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="mt-3">
        <ul className="!m-0 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-red-600 transition-all duration-300 cursor-pointer"></div>
    ),
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-2xl lg:rounded-3xl max-w-[100rem] mx-auto mt-6 lg:mt-10 shadow-xl bg-white">
      {/* Background with Overlay for Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl lg:rounded-3xl"
        style={{ 
          backgroundImage: `url(${mainImage})`,
        }}
      >
        {/* Black Overlay for Mobile */}
        <div className="absolute inset-0 bg-black/96 lg:bg-black/0"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch w-full min-h-[400px] lg:min-h-[500px]">
        
        {/* Left Side - Text Content */}
        <div className="text-white px-6 sm:px-8 lg:px-16 py-8 lg:py-12 flex flex-col justify-center">
          <p className="text-sm font-medium text-red-400 mb-1 lg:mb-2">{content.headingTop}</p>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 lg:mb-4"
            dangerouslySetInnerHTML={{ __html: content.headingMain }}
          />
          <p className="text-xs sm:text-sm text-gray-200 mb-2 lg:mb-3 max-w-md leading-relaxed">
            {content.description}
          </p>
          <p className="text-xs text-gray-300 mb-4 lg:mb-6 max-w-md">
            {content.subDescription}
          </p>
          <Link
            href={content.ctaLink}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-red-500/25 w-fit text-sm sm:text-base"
          >
            <span>{content.ctaText}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Right Side - Carousel Card with Liquid Glass Effect */}
        <div className="flex flex-col justify-center items-center lg:items-end px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          {/* Liquid Glass Container */}
          <div className="relative rounded-xl lg:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/30"></div>
            
            {/* Liquid Reflection Effects */}
            <div className="absolute inset-0 overflow-hidden rounded-xl lg:rounded-2xl">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-xl lg:rounded-2xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"></div>

            {/* Carousel Content */}
            <div className="relative z-10 p-4 sm:p-5 lg:p-6">
              <Slider ref={sliderRef} {...settings}>
                {content.slides.map((item, index) => (
                  <div key={index} className="outline-none focus:outline-none">
                    <div className="text-center space-y-3 lg:space-y-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2">
                        {item.title}
                      </h3>
                      
                      {/* Portrait Image Container */}
                      <div className="flex justify-center">
                        <div className="w-40 h-52 sm:w-48 sm:h-64 lg:w-56 lg:h-72 relative rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white/50 shadow-lg bg-white/50 backdrop-blur-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-700 leading-relaxed px-1 sm:px-2 bg-white/50 backdrop-blur-sm rounded-lg py-2">
                        Includes up to 5 Wi-Fi extenders, if needed, at sole discretion of Skylink.
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Slide to Explore - Glass Buttons */}
          <div className="flex items-center justify-between mt-4 lg:mt-6 max-w-xs sm:max-w-sm w-full">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-red-600 text-gray-600 hover:text-white rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/30"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-xs lg:text-sm text-white font-medium bg-black/40 backdrop-blur-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg border border-white/10">
              Slide to explore
            </div>

            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-red-600 text-gray-600 hover:text-white rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/30"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}