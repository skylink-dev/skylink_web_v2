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

  const mobileItems = content.slice(0, 4);
  const desktopItems = content;

  return (
    <div className="bg-gray-50 w-full">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Mobile view */}
        <ul className="flex justify-between sm:hidden gap-2 mt-6 mb-6">
          {mobileItems.map((item, index) => (
            <li
              key={index}
              onClick={() => onSelect && onSelect(item.id)}
              className={`
                flex flex-col items-center justify-center text-center
                transform transition-all duration-300 ease-in-out 
                hover:-translate-y-1 hover:scale-110 hover:text-red-600 cursor-pointer
                ${activeId === item.id ? "text-red-600 font-bold" : "text-gray-700"}
                w-1/4
              `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center justify-center w-full mt-2" // added top margin
              >
                <Image
                  width={38} // reduced from 45
                  height={38}
                  src={item.icon}
                  alt={item.title || "icon"}
                  className="mb-2 object-contain transition-transform duration-300 ease-in-out"
                />
                <span className="text-[11px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {item.title}
                </span>
              </Link>
              <span
                className={`block h-0.5 bg-red-600 transition-all duration-300 ease-in-out mt-1 mx-2 ${
                  activeId === item.id ? "w-full" : "w-0 hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Desktop view */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-6 md:gap-10 mt-6 mb-8">
          {desktopItems.map((item, index) => (
            <li
              key={index}
              onClick={() => onSelect && onSelect(item.id)}
              className={`
                flex flex-col items-center justify-center text-center
                transform transition-all duration-300 ease-in-out 
                hover:-translate-y-1 hover:scale-110 hover:text-red-600 cursor-pointer
                ${activeId === item.id ? "text-red-600 font-bold" : "text-gray-700"}
                w-1/5 md:w-32 lg:w-36
              `}
            >
              <Link
                href={item.linkdata || "#"}
                className="flex flex-col items-center justify-center w-full mt-3" // added top margin
              >
                <Image
                  width={44} // reduced from 50
                  height={44}
                  src={item.icon}
                  alt={item.title || "icon"}
                  className="mb-2 object-contain transition-transform duration-300 ease-in-out"
                />
                <span className="text-sm md:text-base leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {item.title}
                </span>
              </Link>
              <span
                className={`block h-0.5 md:h-1 bg-red-600 transition-all duration-300 ease-in-out mt-1 mx-2 ${
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
