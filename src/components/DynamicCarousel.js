"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 hover:bg-gray-100 shadow-md p-2 rounded-full transition"
  >
    <ArrowLeft className="w-5 h-5" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 hover:bg-gray-100 shadow-md p-2 rounded-full transition"
  >
    <ArrowRight className="w-5 h-5" />
  </button>
);

export default function DynamicCarousel({ title, slidesData = [] }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) sliderRef.current.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul className="flex justify-center gap-2 mt-6">
        {dots.map((dot, index) => (
          <li key={index}>
            <button
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentSlide === index
                  ? "bg-red-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              } transition-all duration-300`}
            />
          </li>
        ))}
      </ul>
    ),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-2 bg-white">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
        <div className="mt-3 h-1 w-20 mx-auto bg-red-600 rounded-full" />
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider ref={sliderRef} {...settings}>
          {slidesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="px-3"
            >
              {/* Card Container */}
              <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-[490px]">
                {/* Fixed Image Section */}
                <div className="relative w-full h-[180px] flex-shrink-0 overflow-hidden">
                  <motion.img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-1 p-5 text-left">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-red-600 uppercase mb-1">
                      {item.title}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                      {item.description}
                    </p>

                    {item.normaltext && (
                      <p className="text-xs text-gray-500 mb-1">
                        <strong>{item.normaltext}</strong>
                      </p>
                    )}
                    {item.legalText && (
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {item.legalText}
                      </p>
                    )}
                  </div>

                  {item.link && (
                    <Link
                      href={item.link}
                      className="mt-4 inline-block px-5 py-2 text-sm font-medium rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
