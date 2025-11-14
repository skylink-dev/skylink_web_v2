import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function BGImageRightContent({ image, content }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('${image || "/assets/bg-image.jpg"}')`,
              backgroundPosition: "center center",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content Card */}
          <div className="relative z-10 min-h-[400px] flex items-center justify-end">
            <div className="w-full lg:w-5/12 p-6 lg:p-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
                {/* Subtitle */}
                <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">
                  {content.subtitle}
                  <sup className="text-xs">SM</sup>
                </p>

                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {content.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                  {content.description}
                </p>

                {/* Legal/Sub CTA */}
                <div className="mb-6">
                  <button className="text-red-600 hover:text-red-700 font-medium text-sm underline transition-colors">
                    {content.subcta}
                  </button>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/internet/"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {content.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
