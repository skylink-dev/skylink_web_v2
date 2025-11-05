import Link from "next/link";
import React from "react";

export default function ThreeColumnLayout({ content }) {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content &&
          content.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-[480px]"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

              {/* Content on top */}
              <div className="absolute top-0 left-0 p-6 z-10 text-white">
                <p className="text-sm uppercase tracking-wide opacity-90">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-95 mb-4">
                  {item.description}
                </p>
                <p className="text-xs opacity-80 mb-3">{item.subdescription}</p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">

                  {/* CTA button */}
                  <Link
                    href="/buy/phones/apple-iphone-16-pro.html"
                    className="relative overflow-hidden bg-red-600 text-white text-sm px-5 py-2 rounded-md font-medium w-fit transition-all duration-300 group/link"
                  >
                    <span className="relative z-10">{item.cta}</span>
                    <span className="absolute inset-0 bg-red-400 translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
