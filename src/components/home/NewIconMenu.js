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

  // Show only 4 icons on mobile
  const mobileItems = content.slice(0, 4);

  return (
    <div className="w-full bg-white" style={{ marginBottom: "-1px" }}>
      <div className="container mx-auto px-3 sm:px-4 sm:pt-6 md:pt-8">
        {/* 🌟 Mobile Layout */}
        <ul className="grid sm:hidden grid-cols-4 gap-2 py-3 border-b-0">
          {mobileItems.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={`flex flex-col items-center justify-center p-1
                    transition-all duration-300 cursor-pointer
                    ${activeId === item.id ? "text-red-600" : "text-gray-700"}
                `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center w-full"
              >
                {/* ⭐ ONLY IMAGE HAS DEPTH BACKGROUND */}
                <div
                  className="w-12 h-12 p-1.5 flex items-center justify-center
                                bg-white 
                                rounded-xl shadow-sm
                            "
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <span className="text-[10px] mt-1.5 font-medium text-center w-full truncate">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* 🖥 Desktop Layout */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-6 mt-0 mb-0 pb-2">
          {content.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={`group w-32 lg:w-36 p-3 flex flex-col items-center text-center cursor-pointer
                transition-all duration-300 hover:-translate-y-2
                ${activeId === item.id ? "text-red-600" : "text-gray-800"}
              `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center"
              >
                {/* ⭐ ONLY IMAGE BACKGROUND WITH DEPTH */}
                <div
                  className="w-25 h-25 flex items-center justify-center
  bg-white/90 backdrop-blur-md
  rounded-2xl p-0
  border border-white/60
  shadow-[0_0_0_1px_rgba(255,255,255,0.8),0_4px_20px_rgba(0,0,0,0.1)]
  group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_8px_40px_rgba(0,0,0,0.15),0_0_40px_rgba(59,130,246,0.1)]
  hover:-translate-y-1
  transition-all duration-500 ease-out
  group"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-fill"
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
