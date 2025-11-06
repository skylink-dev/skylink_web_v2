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
      <div className="mt-4">
        <ul className="!m-0 flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-red-600 transition-all duration-300 cursor-pointer"></div>
    ),
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-3xl max-w-[100rem] mx-auto mt-10 shadow-xl bg-white">
      {/* Background with Full Width Coverage - No Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{ 
          backgroundImage: `url(${mainImage})`,
        }}
      >
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch w-full min-h-[500px]">
        
        {/* Left Side - Text Content */}
        <div className="text-white px-8 md:px-12 lg:px-16 py-12 flex flex-col justify-center">
          <p className="text-base font-medium text-red-400 mb-2">{content.headingTop}</p>
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: content.headingMain }}
          />
          <p className="text-sm text-gray-200 mb-3 max-w-md leading-relaxed">
            {content.description}
          </p>
          <p className="text-xs text-gray-300 mb-6 max-w-md">
            {content.subDescription}
          </p>

          <Link
            href={content.ctaLink}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-7 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            <span>{content.ctaText}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Right Side - Carousel Card */}
        <div className="flex flex-col justify-center items-end px-6 md:px-8 py-10">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm border border-gray-100">
            {/* Carousel Content */}
            <div className="p-5 md:p-6">
              <Slider ref={sliderRef} {...settings}>
                {content.slides.map((item, index) => (
                  <div key={index} className="outline-none focus:outline-none">
                    <div className="text-center space-y-4">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      {/* Portrait Image Container */}
                      <div className="flex justify-center">
                        <div className="w-48 h-64 md:w-52 md:h-72 lg:w-56 lg:h-80 relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-600 leading-relaxed px-2">
                        Includes up to 5 Wi-Fi extenders, if needed, at sole discretion of Skylink.
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Slide to Explore - Separate Below Card */}
          <div className="flex items-center justify-between mt-6 max-w-sm w-full">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-10 h-10 flex items-center justify-center bg-white hover:bg-red-600 text-gray-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-md"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-sm text-white font-medium bg-black/50 px-4 py-2 rounded-lg">
              Slide to explore
            </div>

            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-10 h-10 flex items-center justify-center bg-white hover:bg-red-600 text-gray-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 shadow-md"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}