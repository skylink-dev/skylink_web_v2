import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function IconMenu({ content = [], onSelect, activeId }) {
  if (!Array.isArray(content) || content.length === 0) {
    return (
      <div className="w-full py-8 text-center text-gray-500">
        No menu items available
      </div>
    );
  }

  return (
    <div className="bg-gray-50 w-full">
      <div className="container mx-auto px-2 sm:px-4">
        <ul
          className="
            flex flex-wrap justify-center 
            gap-4 sm:gap-6 md:gap-10 
            mt-4 mb-6 lg:mt-6 lg:mb-8
          "
        >
          {content.map((item, index) => (
            <li
              key={index}
              onClick={() => onSelect && onSelect(item.id)}
              className={`
                flex flex-col items-center justify-center text-center
                transform transition-all duration-300 ease-in-out 
                hover:-translate-y-1 hover:scale-110 hover:text-blue-600 cursor-pointer
                ${
                  activeId === item.id
                    ? "text-blue-600 font-bold"
                    : "text-gray-700"
                }
                w-1/4 sm:w-1/5 md:w-32 lg:w-36
              `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center justify-center w-full"
              >
                <Image
                  width={32}
                  height={32}
                  src={item.icon}
                  alt={item.title || "icon"}
                  className="mb-1 transition-transform duration-300 ease-in-out object-contain"
                />
                <span className="text-[11px] sm:text-sm md:text-base leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {item.title}
                </span>
              </Link>

              {/* Animated underline */}
              <span
                className={`block h-0.5 md:h-1 bg-blue-600 transition-all duration-300 ease-in-out mt-1 mx-2 ${
                  activeId === item.id ? "w-full" : "w-0 hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
