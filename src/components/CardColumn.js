import Link from 'next/link'
import React from 'react'
import Image from "next/image"

export default function CardColumn({ title, repeatcontent }) {
  return (
    <div className="max-width-background py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Card Row */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
          {repeatcontent.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full sm:w-[45%] lg:w-[25%]"
            >
              {/* Image */}
              <div className="relative w-full h-60 overflow-hidden rounded-t-2xl flex justify-center items-center bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-contain ${index === 3 ? 'scale-95' : 'scale-100'}`}
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{item.content}</p>
              </div>

              {/* Button */}
              <div className="p-5 pt-0">
                <Link
                  href={item.href}
                  className="inline-block relative overflow-hidden bg-red-600 text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-500 group"
                >
                  <span className="absolute inset-0 bg-red-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10">{item.cta}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
