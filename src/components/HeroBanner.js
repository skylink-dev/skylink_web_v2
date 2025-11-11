import Link from "next/link";
import React from "react";

export default function HeroBanner({ content }) {
  const mobileImage = "/newassets/internet/Broadband-family.jpg";
  const desktopImage = content?.image || "/herobanner.png";

  return (
    <section className="relative overflow-hidden rounded-2xl mx-0 sm:mx-4 mt-6 shadow-lg sm:max-w-7xl sm:mx-auto">
      {/* Image Container */}
      <div
        className="relative rounded-2xl overflow-hidden 
                   h-[480px] sm:h-[320px] md:h-[400px] lg:h-[480px] 
                   w-full flex items-start justify-start"
      >
        {/* Responsive Image */}
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <img
            src={desktopImage}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content - Top Left */}
        <div className="relative z-10 text-white w-full max-w-md p-4 sm:p-6 md:p-10 mt-2 sm:mt-6">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 leading-snug drop-shadow-lg">
            Internet for the entire household
          </h1>

          <p className="text-xs sm:text-sm md:text-base mb-2 opacity-90 leading-relaxed drop-shadow-md">
            Enjoy consistent speeds, reliability, simple pricing, and complete
            Wi-Fi coverage across your home.
          </p>

          <p className="text-[10px] sm:text-xs text-gray-200 mb-3">
            Limited availability. Based on wired connection to the gateway.
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap items-center gap-2">
            <Link
              href="/new_plans"
              className="relative overflow-hidden rounded-full text-black font-semibold py-1.5 px-3 sm:py-2 sm:px-4 text-center text-xs sm:text-sm
                transition-all duration-300 shadow-md
                before:absolute before:inset-0 before:bg-red-600 before:-translate-x-full before:transition-transform before:duration-500
                hover:before:translate-x-0 hover:text-white bg-white"
            >
              <span className="relative z-10 text-black hover:text-white">
                Shop SkyLink Fiber
              </span>
            </Link>

            <Link
              href="tel:+919944199448"
              className="relative overflow-hidden rounded-full text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 text-center text-xs sm:text-sm
                transition-all duration-300 shadow-md
                before:absolute before:inset-0 before:bg-red-600 before:translate-x-full before:transition-transform before:duration-500
                hover:before:translate-x-0 hover:text-white bg-gray-800"
            >
              <span className="relative z-10">Call (+91) 99441 99445</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
