import Link from "next/link";
import React from "react";
import { Check, X } from "lucide-react";

export default function ImageAndContent({ image, content, row = "row" }) {
  return (
    <section className="bg-white py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4">
        {/* Mobile View - Content Over Image */}
        <div className="md:hidden relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt="content"
            className="object-cover w-full h-full"
          />
          
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white space-y-3">
            {content.titleBox && (
              <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold self-start mb-2">
                {content.titleBox}
              </div>
            )}
            
            <p className="uppercase tracking-widest text-xs font-semibold text-red-400">
              {content.subtitle}
            </p>

            <h2 className="text-2xl font-extrabold leading-tight">
              {content.title}
            </h2>

            <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
              {content.description}
            </p>

            <ul className="space-y-1.5">
              {content.contentlists.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="text-red-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white/95">{item}</span>
                </li>
              ))}
            </ul>

            {content.crossList && (
              <ul className="space-y-1.5">
                {content.crossList.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <X className="text-red-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-white/95">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-2">
              <Link
                href="/plans"
                className="inline-block bg-red-500 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-sm font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet View - Side by Side */}
        <div className="hidden md:flex items-center justify-between gap-6 lg:gap-10 xl:gap-12">
          {/* Content Section */}
          <div
            className={`flex-1 ${row === "row" ? "order-1" : "order-2"} space-y-3 lg:space-y-4`}
          >
            <p className="text-red-500 uppercase tracking-widest text-xs lg:text-sm font-semibold">
              {content.subtitle}
            </p>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black leading-tight">
              {content.title}
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm lg:text-base max-w-xl">
              {content.description}
            </p>

            <ul className="space-y-2 lg:space-y-2.5">
              {content.contentlists.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-gray-800">
                  <Check className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {content.crossList && (
              <ul className="space-y-2 lg:space-y-2.5">
                {content.crossList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-800">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-2">
              <Link
                href="/plans"
                className="inline-block bg-red-500 text-white px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300 text-sm lg:text-base font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`flex-1 ${row === "row" ? "order-2" : "order-1"} flex justify-center`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-[90%] lg:w-[80%] aspect-[3/3.2]">
              <img
                src={image}
                alt="content"
                className="object-cover w-full h-full transform hover:scale-105 transition duration-500 ease-in-out"
              />
              {content.titleBox && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
                  {content.titleBox}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}