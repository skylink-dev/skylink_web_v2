import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ContentBaseBanner({ content, color }) {
  return (
    <div
      className={`w-full bg-gray-50 text-black py-14 px-6 sm:px-12 ${color}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-base sm:text-lg font-semibold tracking-wide uppercase text-gray-600 mb-2">
          {content?.subtitle}
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {content?.title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-5">
          {content?.description}
        </p>

        {/* Policy + Sub CTA */}
        {content?.policy && (
          <div className="text-sm sm:text-base text-gray-600 mb-4">
            <span>{content?.policy}</span>
            {content?.subcta && (
              <button
                className="ml-2 px-3 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-all duration-200"
                aria-label="See offer details"
              >
                {content?.subcta}
              </button>
            )}
          </div>
        )}

        {/* CTA Button */}
        {content?.cta && (
          <div className="mt-6 flex justify-center">
            <Link
              href={content.href || "#"}
              className="relative inline-block px-8 py-3 text-base font-semibold text-white bg-red-600 rounded-full overflow-hidden group"
            >
              {/* Background animation layer */}
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              {/* Reverse animation on unhover */}
              <span className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out [transition-delay:0.5s] opacity-0 group-hover:opacity-0"></span>

              {/* Button text */}
              <span className="relative z-10 group-hover:text-white transition duration-200">
                {content?.cta}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
