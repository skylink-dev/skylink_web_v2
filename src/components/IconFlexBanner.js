"use client";
import Link from "next/link";
import React from "react";

export default function IconFlexBanner() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Want to know how fast you are going?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Use this internet speed test to check the download and upload speeds of the internet connection you’re currently using.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Device Speed Test Card */}
          <div className="bg-red-50 rounded-2xl p-10 border border-red-100 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                      {/* Icon: black stroke + red accent */}
                      <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="24" stroke="#111827" strokeWidth="2"/>
                        <path d="M33 19L26 26" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="33" cy="19" r="3.5" fill="#ef4444" stroke="#111827" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Check device speed
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Check the speed between your device and the internet. You can run the test through a cellular (mobile) network, a wired connection, or your local Wi-Fi.
                    </p>

                    {/* Speedtest Label */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-sm text-gray-500 font-medium">
                        Powered by
                      </span>
                      <span className="text-sm font-semibold text-gray-700">Speedtest</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button with black-gradient sweep */}
              <div className="mt-4">
                <Link
                  href="https://skylinkfiber.speedtestcustom.com/"
                  target="_blank"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-red-500 px-8 py-3 text-white font-semibold transition-all duration-300"
                >
                  {/* black gradient overlay that slides in L->R on hover and reverses on unhover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  {/* keep text on top */}
                  <span className="relative z-10 flex items-center gap-2">
                    Start speed test
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Gateway Speed Test Card */}
          <div className="bg-red-50 rounded-2xl p-10 border border-red-100 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                      {/* Gateway icon: black stroke + red signal */}
                      <svg width="40" height="40" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="20" width="44" height="16" rx="3" stroke="#111827" strokeWidth="2" fill="none"/>
                        <circle cx="14" cy="28" r="2" fill="#111827"/>
                        <path d="M28 12c2.5-3 6-5 10-5" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M28 16c1.8-2.2 4.5-3.8 7.5-3.8" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M28 20c1.2-1.6 3-2.8 5-2.8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Check your Skylink<br/>Wi-Fi Gateway speed
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Already an Skylink customer? Sign in to test the speed between your Skylink Wi-Fi Gateway and the Skylink network. Explore faster internet options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button with black-gradient sweep */}
              <div className="mt-4">
                <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-red-500 px-8 py-3 text-white font-semibold transition-all duration-300">
                  <span className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Sign in
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
