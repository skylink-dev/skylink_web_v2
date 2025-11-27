"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ButtonGroupSection({ content }) {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-8 lg:py-12 rounded-2xl mx-auto w-[92%] sm:w-[95%] max-w-4xl shadow-md my-6 sm:my-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
            {content.title}
          </h2>

          {/* Button Group - Responsive for Mobile */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center items-center gap-4 py-3">
                {content.buttons.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link
                            href={item.buttonurl}
                            className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md text-sm sm:text-base text-center w-full sm:w-auto"
                        >
                            {item.buttontitle}
                        </Link>

                        {/* Divider - Only visible on desktop */}
                        {index < content.buttons.length - 1 && (
                            <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
