"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewIconMenu({ content = [], onSelect, activeId }) {
  if (!Array.isArray(content) || content.length === 0) {
    return (
      <div className="w-full py-8 text-center text-gray-500">
        No menu items available
      </div>
    );
  }

  const mobileItems = content.slice(0, 4);

  return (
    <div className="w-full py-2">
      <div className="container mx-auto px-3 sm:px-6">
        {/* 🌟 Mobile Layout */}
        <ul className="flex sm:hidden justify-between gap-3">
          {mobileItems.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={`w-1/4 p-3 flex flex-col items-center
                transition-all duration-300 cursor-pointer hover:-translate-y-1
                ${activeId === item.id ? "text-red-600" : "text-gray-700"}
              `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center"
              >
                {/* ⭐ ONLY IMAGE HAS DEPTH BACKGROUND */}
                <div
                  className="w-14 h-14 p-1 flex items-center justify-center 
                  bg-white/60 backdrop-blur-md 
                  shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                  rounded-2xl border border-gray-200
                "
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={52}
                    height={52}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <span className="text-[11px] mt-2 font-medium text-center">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* 🖥 Desktop Layout */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-6 mt-4">
          {content.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={`w-32 lg:w-36 p-3 flex flex-col items-center text-center cursor-pointer
                transition-all duration-300 hover:-translate-y-1
                ${activeId === item.id ? "text-red-600" : "text-gray-800"}
              `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center"
              >
                {/* ⭐ ONLY IMAGE BACKGROUND WITH DEPTH */}
                <div
                  className="w-14 h-14 flex items-center justify-center
               bg-white/80 backdrop-blur-lg
               shadow-[0_6px_20px_rgba(0,0,0,0.1)]
               rounded-2xl 
               border border-gray-200
               border-t-white/90 border-l-white/90
               transition-all duration-300
               hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
               hover:-translate-y-1"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="mt-2 text-sm font-medium truncate">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
