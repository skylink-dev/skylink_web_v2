import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function IconMenu({ content, onSelect, activeId }) {
  return (
    <>
      <div className="max-width-background bgcolor theme-base-bg">
        <div className="container pad-l-none pad-r-none">
          <div className="row nopad">
            <div className="grid-col-12">
              <div className="jsx-2592051375 category-nav-list overflow-hidden overflow-x-scroll overflow-y-hidden scrollbar-hidden flex rel">
                <ul className="jsx-2592051375 centered nowrap flex gap-4">
                  {content.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => onSelect(item.id)}
                      className={`inline-block text-center mar-t-xxs mar-b-xxs transform transition-all duration-300 ease-in-out
                        hover:-translate-y-1 hover:scale-110 hover:text-blue-600
                        ${activeId === item.id ? 'text-blue-600 font-bold' : 'text-gray-800'}`}
                    >
                      <Link
                        href={item.linkdata}
                        className="flex flex-col items-center type-xs font-bold wrap"
                      >
                        <Image
                          style={{ marginBottom: '5px' }}
                          width={28}
                          height={28}
                          src={item.icon}
                          alt={item.title}
                          className="transition-transform duration-300 ease-in-out"
                        />
                        {item.title}
                      </Link>
                      {/* Optional animated underline */}
                      <span
                        className={`block h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-in-out mt-1 ${
                          activeId === item.id ? 'w-full' : 'hover:w-full'
                        }`}
                      ></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
