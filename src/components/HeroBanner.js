import Link from "next/link";
import React from "react";

export default function HeroBanner({ content }) {
  return (
    <section className="relative overflow-hidden rounded-2xl max-w-7xl mx-auto mt-8 shadow-lg">
      {/* Image Container */}
      <div
        className="relative flex items-center justify-start rounded-2xl overflow-hidden h-[520px] md:h-[580px] lg:h-[620px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${content?.image || "/herobanner.png"})`,
          backgroundPosition: "center center", // ensures balanced fit
          backgroundSize: "cover", // full container coverage (no zoom-in/out)
        }}
      >
        {/* Text Card */}
        <div className="relative z-10 max-w-xl ml-6 md:ml-14 bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-md">
            Internet for the entire household
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-3 drop-shadow-sm">
            Enjoy consistent speeds, reliability, guaranteed simple,
            straightforward pricing, and complete Wi-Fi coverage.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Limited availability/areas. Based on wired connection to the
            gateway.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/plans"
              className="relative overflow-hidden rounded-full text-white font-semibold py-3 px-7 text-center transition-all duration-300 shadow-md
  before:absolute before:inset-0 before:bg-red-600 before:translate-x-[-100%] before:transition-transform before:duration-500
  hover:before:translate-x-0 hover:text-white"
            >
              <span className="relative z-10 text-black hover:text-white">
                Shop SkyLink Fiber
              </span>
            </Link>

            <Link
              href="tel:+919944199448"
              className="relative overflow-hidden rounded-full text-white font-semibold py-3 px-7 text-center transition-all duration-300 shadow-md
  before:absolute before:inset-0 before:bg-red-600 before:translate-x-[100%] before:transition-transform before:duration-500
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
