import React from "react";
import { MdSpeed, MdRouter, MdTv, MdMovie, MdHeadset } from "react-icons/md";

/**
 * @typedef {Object} WhyProductProps
 * @property {string} [city="Coimbatore"] - The name of the city
 */

/**
 * WhyProduct component highlighting benefits of Skylink in a specific city
 * @param {WhyProductProps} props - Component props
 * @returns {JSX.Element}
 */
export default function WhyProduct({city = "Coimbatore"}) {
  const features = [
    { icon: <MdSpeed size={28} />, text: "Upto 1Gbps Speed & Unlimited data" },
    { icon: <MdRouter size={28} />, text: "Free router & installation" },
    { icon: <MdTv size={28} />, text: "950+ Live TV Channels" },
    { icon: <MdMovie size={28} />, text: "30+ OTT Platforms" },
    { icon: <MdHeadset size={28} />, text: "24/7 Customer Support" },
  ];

  return (
    <section className="pt-24 pb-24 bg-white text-slate-800 text-center relative font-sans">
      {/* Background Circle Design */}
      <div className="absolute top-10 right-10 w-36 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-60" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-40" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="bg-slate-50 rounded-3xl p-6 md:p-12 shadow-2xl shadow-gray-200 border border-slate-200">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight tracking-tight">
            Why Skylink Broadband in{" "}
            <span className="inline-block">
              {city.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block font-bold ${
                      index >= 0 && index < city.length ? "text-red-600 animate-jump" : "text-slate-900"
                  }`}
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First 3 items - normal grid flow */}
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md shrink-0">
                  {feature.icon}
                </div>
                <span className="text-lg md:text-xl leading-relaxed text-left font-semibold text-gray-700 flex-1">
                  {feature.text}
                </span>
              </div>
            ))}

              {/* Last 2 items - stacked on mobile, side by side on larger screens */}
              <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-6">
              {features.slice(3, 5).map((feature, index) => (
                <div
                  key={index + 3}
                  className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 h-full w-full max-w-md"
                >
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-lg md:text-xl leading-relaxed text-left font-semibold text-gray-700 flex-1">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes jump {
          0%,
          100% {
            transform: translateY(0);
            color: #dc2626;
          }
          25% {
            transform: translateY(-6px);
            color: #ef4444;
          }
          50% {
            transform: translateY(0);
            color: #dc2626;
          }
          75% {
            transform: translateY(-3px);
            color: #f87171;
          }
        }

        .animate-jump {
          animation: jump 2s infinite;
        }
      `}</style>
    </section>
  );
}