"use client";
import { useState, useEffect } from "react";

export default function LocationMap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3/4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Visit Our Office
          </h1>
          <p className="text-gray-500 text-base sm:text-lg">
            Skylink Fibernet Private Limited
          </p>
        </div>

        {/* Map Section */}
        <div className="relative w-full overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-2xl pb-[75%] sm:pb-[50%]">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Skylink%20Fibernet%20Private%20Limited+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Skylink Fibernet Private Limited Location"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Directions Button */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com/maps?q=Skylink%20Fibernet%20Private%20Limited"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
