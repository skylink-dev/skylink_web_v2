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
    className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 hover:bg-gray-100 shadow-md p-2 rounded-full transition"
  >
    <ArrowLeft className="w-5 h-5" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 hover:bg-gray-100 shadow-md p-2 rounded-full transition"
  >
    <ArrowRight className="w-5 h-5" />
  </button>
);

export default function DynamicCarousel({ title, slidesData = [] }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5s
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
    autoplay: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul className="flex justify-center gap-2 mt-6">
        {dots.map((dot, index) => (
          <li key={index}>
            <button
              onClick={() => sliderRef.current.slickGoTo(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              } transition`}
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
    <section className="relative py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {title}
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider ref={sliderRef} {...settings}>
          {slidesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="px-3"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-xl min-h-[500px]">
                {/* Image */}
                <div className="relative w-full overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 p-6 text-left">
                  <div>
                    <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
                      {item.title}
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.normaltext && (
                      <p className="text-xs text-gray-500 mb-1">
                        <strong>{item.normaltext}</strong>
                      </p>
                    )}
                    {item.legalText && (
                      <p className="text-xs text-gray-400">{item.legalText}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <Link
                      href={item.link}
                      className="inline-block px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
