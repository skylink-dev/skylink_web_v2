import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function IconMenu({ content, onSelect, activeId }) {
  return (
    <div className="max-width-background bgcolor theme-base-bg">
      <div className="container pad-l-none pad-r-none">
        <div className="row nopad">
          <div className="grid-col-12">
            {/* Fixed with inline styles */}
            <div 
              className="overflow-x-auto scrollbar-hidden"
              style={{
                marginTop: '16px',
                marginBottom: '16px'
              }}
            >
              <ul className="flex w-full gap-0 md:gap-10 md:justify-center">
                {content.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onSelect(item.id)}
                    className={`
                      text-center transform transition-all duration-300 ease-in-out
                      hover:-translate-y-1 hover:scale-110 hover:text-blue-600 cursor-pointer
                      ${activeId === item.id ? 'text-blue-600 font-bold' : 'text-gray-800'}
                      flex-shrink-0 w-1/4 flex flex-col items-center justify-center
                      md:flex-shrink-0 md:w-32
                    `}
                  >
                    <Link
                      href={item.linkdata}
                      className="flex flex-col items-center justify-center w-full p-0 md:px-2"
                    >
                      <Image
                        width={28}
                        height={28}
                        src={item.icon}
                        alt={item.title}
                        className="mb-1 transition-transform duration-300 ease-in-out object-contain"
                      />
                      <span className="text-[10px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full md:text-base">
                        {item.title}
                      </span>
                    </Link>

                    <span
                      className={`block h-0.5 bg-blue-600 transition-all duration-300 ease-in-out mt-1 mx-1 ${
                        activeId === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      } md:h-1`}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile and Tablet */
        @media (max-width: 1023px) {
          .scrollbar-hidden {
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .scrollbar-hidden {
            margin-top: 20px !important;
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}