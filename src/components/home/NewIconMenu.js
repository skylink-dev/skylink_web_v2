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

    // Show all icons on mobile in a scrollable container
    const mobileItems = content;

  return (
    <div className="w-full py-2">
      <div className="container mx-auto px-2 sm:px-6">
        {/* 🌟 Mobile Layout */}
        <ul className="flex sm:hidden justify-start overflow-x-auto gap-2 pb-2">
            {mobileItems.map((item) => (
                <li
                    key={item.id}
                    onClick={() => onSelect?.(item.id)}
                    className={`min-w-[22%] xs:min-w-[80px] p-2 flex flex-col items-center
                transition-all duration-300 cursor-pointer hover:-translate-y-1
                ${activeId === item.id ? "text-red-600" : "text-gray-700"}
              `}
                >
                    <Link
                        href={item.linkdata || "#"}
                        className="flex flex-col items-center w-full"
                    >
                        {/* ⭐ ONLY IMAGE HAS DEPTH BACKGROUND */}
                        <div
                            className="w-14 h-14 xs:w-16 xs:h-16 p-2 flex items-center justify-center
                  bg-white/60 
                  rounded-2xl border border-gray-200
                "
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={46}
                                height={46}
                                className="object-contain"
                                unoptimized
                            />
                        </div>

                        <span className="text-[10px] xs:text-[11px] mt-1 xs:mt-2 font-medium text-center w-full truncate">
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
                  className="w-14 h-14 flex items-center justify-center
  bg-white/90 backdrop-blur-md
  rounded-2xl
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
