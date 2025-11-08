'use client'
import Link from 'next/link'
import React from 'react'

export default function ButtonGroupSection({ content }) {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-10 lg:py-12 rounded-2xl mx-auto w-[95%] max-w-4xl shadow-md">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
            {content.title}
          </h2>

          {/* Button Group - No Scroll */}
          <div className="flex flex-wrap justify-center items-center gap-3 py-3">
            {content.buttons.map((item, index) => (
              <React.Fragment key={index}>
                <Link 
                  href={item.buttonurl}
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md text-sm sm:text-base text-center"
                >
                  {item.buttontitle}
                </Link>

                {/* Divider */}
                {index < content.buttons.length - 1 && (
                  <div className="w-px h-6 bg-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
