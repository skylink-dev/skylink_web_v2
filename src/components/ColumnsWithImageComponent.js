"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const slidesData = [
  {
    title: "Skylink Business Fiber",
    subtitle: "Get up to 3 months* free",
    description:
      "Plus, we will cover your early termination fee up to ₹750** when switching from another provider.",
    legal:
      "*1 month with 300M; 2 months with 500M; 3 months with 1 GIG+. Fees extra. **Card redemption & proof of eligibility required. Ltd availability/areas.",
    imgSrc: "/assets/skyplay-business-fiber-connection-1.jpg",
    link: "/plans?customer_type=smallbusiness",
  },
  {
    title: "₹699 Skylink Red Bundle",
    subtitle: "IPTV + OTT + Internet + WiFi",
    description:
      "Enjoy uninterrupted entertainment and connectivity with Skylink's ₹699 combo plan. Includes high-speed internet, IPTV with HD channels, premium OTT apps, and easy home WiFi setup.",
    legal:
      "Offer valid in select cities only. Internet speed and OTT availability may vary by location and network conditions. Installation charges may apply.",
    imgSrc: "/assets/skyplay-business-fiber-connection-2.jpg",
    link: "/plans?customer_type=smallbusiness",
  },
];

export default function ColumnsWithImageComponent() {
  const [carouselItems] = useState(slidesData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div className="mt-6 block md:hidden">
        {" "}
        {/* visible only on mobile */}
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),

    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"></div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false, // hide dots on tablet & desktop
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // show dots only on mobile
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 lg:py-16">
      <style jsx global>{`
        /* ✅ Hide slick dots completely for md and up */
        @media (min-width: 768px) {
          .slick-dots {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Tools, Exceptional Savings
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] h-[620px] w-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-56 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-7 flex flex-col min-h-0">
                    <div className="flex-1 min-h-0 overflow-hidden">
                      <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">
                        {item.title}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-4">
                        {item.legal}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0 pt-4 mt-auto">
                      <Link
                        href="/internet#availability"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg block"
                        aria-label={`See if ${item.title} is available in your area.`}
                      >
                        Check availability
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
