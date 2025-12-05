"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";
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

export default function DynamicCarousel({
  title = "Featured Content",
  slidesData = [],
}) {
  const MotionImage = motion(Image);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slide data
  const defaultSlides = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      title: "Business Solutions",
      subtitle: "Transform Your Business Strategy",
      description:
        "Discover innovative solutions that drive growth and efficiency in your organization.",
      normaltext: "Special Offer: Get 20% off",
      legalText: "Terms and conditions apply. Limited time offer.",
      link: "#",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Analytics",
      subtitle: "Data-Driven Insights",
      description:
        "Harness the power of data to make informed decisions and optimize performance.",
      normaltext: "Free Trial Available",
      legalText: "No credit card required.",
      link: "#",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      title: "Collaboration",
      subtitle: "Enhanced Team Productivity",
      description:
        "Work smarter with tools designed for seamless collaboration across teams.",
      normaltext: "Starting at $29/month",
      legalText: "Billed annually. Cancel anytime.",
      link: "#",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      title: "Innovation",
      subtitle: "Future-Ready Technology",
      description:
        "Stay ahead of the curve with cutting-edge technology solutions.",
      normaltext: "Request a Demo",
      legalText: "Available for enterprise customers.",
      link: "#",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      title: "Growth",
      subtitle: "Scale Your Operations",
      description:
        "Expand your reach and capabilities with our scalable platform.",
      normaltext: "30-Day Money Back Guarantee",
      legalText: "See terms for details.",
      link: "#",
    },
  ];

  const slides = slidesData.length > 0 ? slidesData : defaultSlides;

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
    <section className="relative py-12 bg-gradient-to-b from-gray-50 to-white">
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
          {slides.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="px-3"
            >
              {/* Card Container - Fixed Equal Height */}
              <div className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[480px]">
                {/* Image Section */}
                <div className="relative w-full h-[220px] flex-shrink-0 overflow-hidden">
                  <MotionImage
                    src={item.imgSrc}
                    alt={item.title}
                    width={500}
                    height={300}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-1 p-6 overflow-hidden">
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                      {item.title}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    {item.normaltext && (
                      <p className="text-sm text-gray-700 font-medium mb-2 line-clamp-2">
                        {item.normaltext}
                      </p>
                    )}
                    {item.legalText && (
                      <p className="text-xs text-gray-500 italic line-clamp-2">
                        {item.legalText}
                      </p>
                    )}
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
