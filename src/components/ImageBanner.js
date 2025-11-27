import Link from "next/link";
import React from "react";

export default function ImageBanner() {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden mx-auto my-6 border border-gray-200 max-w-6xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('/assets/banner-skyplay-deals.jpg')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[400px] flex items-center justify-end">
        <div className="w-full lg:w-5/12 p-5 lg:p-7">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-7 shadow-2xl border border-gray-100 aspect-square flex flex-col justify-center">
            {/* Header */}
            <div className="mb-4">
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Skylink Smart Deals
                <sup className="text-xs ml-1">SM</sup>
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Premium Broadband and IPTV with no credit check.
              </h2>
            </div>

            {/* Description */}
            <div className="mb-3">
              <p className="text-gray-600 text-base leading-relaxed">
                  Enjoy fast internet and top TV with zero down payment. Pay on time for six months to unlock extra benefits.
              </p>
              <sup className="text-xs text-gray-500">Postpaid plan.</sup>
            </div>

            {/* Legal Text */}
            <div className="mb-5">
              <p className="text-gray-500 text-xs leading-relaxed">
                  After 1000 GB, speeds may slow during peak hours. IPTV needs an active subscription. Terms apply.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/plans"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop now
              </Link>
              <Link
                href="/"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg text-center border border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
