import Link from "next/link";
import React from "react";

export default function ThreeDIconMenu({ content, onSelect, activeId }) {
  return (
    <div className="max-width-background bgcolor theme-base-bg">
      <div className="container pad-l-none pad-r-none">
        <div className="row nopad">
          <div className="grid-col-12">
            <div
              className="overflow-x-auto scrollbar-hidden"
              style={{
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              <ul className="flex w-full gap-3 md:gap-10 md:justify-center">
                {content.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeId === item.id;

                  return (
                    <li
                      key={item.id}
                      onClick={() => onSelect(item.id)}
                      className={`
                        group text-center cursor-pointer
                        ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-800"
                        }
                        flex-shrink-0 w-[80px] md:w-32 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                      `}
                    >
                      <Link
                        href={item.linkdata}
                        className="flex flex-col items-center justify-center w-full"
                      >
                        {/* 3D effect container */}
                        <div
                          className={`
                            relative flex items-center justify-center mb-1 rounded-full
                            bg-gradient-to-b from-white to-gray-100
                            shadow-[0_2px_6px_rgba(0,0,0,0.15)] 
                            transition-all duration-300 ease-in-out
                            group-hover:scale-110
                            group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                            ${
                              isActive
                                ? "shadow-[0_4px_12px_rgba(37,99,235,0.4)] scale-110"
                                : ""
                            }
                            w-12 h-12 md:w-14 md:h-14
                          `}
                        >
                          <IconComponent
                            className={`transition-all duration-300 ease-in-out ${
                              isActive
                                ? "text-blue-600"
                                : "text-gray-700 group-hover:text-blue-500"
                            }`}
                            size={26}
                          />
                        </div>

                        <span className="text-[10px] md:text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                          {item.title}
                        </span>
                      </Link>

                      {/* Active underline */}
                      <span
                        className={`block h-0.5 bg-blue-600 transition-all duration-300 ease-in-out mt-1 mx-auto ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        } md:h-1`}
                      ></span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .scrollbar-hidden {
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
        }
        @media (min-width: 1024px) {
          .scrollbar-hidden {
            margin-top: 20px !important;
            margin-bottom: 24px !important;
          }
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
