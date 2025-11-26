import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ThreeColumnLayout({ content, columnCount }) {
  return (
    <section className="bg-gray-50 py-8 md:py-16 px-4 md:px-6 w-full block">
        {/* Desktop View */}
        <div className="max-w-7xl mx-auto hidden sm:flex sm:flex-row gap-6 justify-center items-stretch">
            {content &&
                content.slice(0, columnCount || 3).map((item, index) => (
                    <div
                        key={`desktop-${index}`}
                        className="relative rounded-2xl overflow-hidden shadow-lg group h-[480px] w-1/3 flex-1"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

                        {/* Content on top */}
                        <div className="absolute top-0 left-0 p-6 z-10 text-white">
                            <p className="text-sm uppercase tracking-wide opacity-90">
                                {item.subtitle}
                            </p>
                            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm leading-relaxed opacity-95 mb-4">
                                {item.description}
                            </p>
                            <p className="text-xs opacity-80 mb-3">{item.subdescription}</p>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3 md:flex-row md:gap-2 md:flex-wrap">
                                {/* CTA button */}
                                <Link
                                    href="/plans"
                                    className="relative overflow-hidden bg-red-600 text-white text-sm px-5 py-2 rounded-md font-medium w-fit transition-all duration-300 group/link"
                                >
                                    <span className="relative z-10">{item.cta}</span>
                                    <span
                                        className="absolute inset-0 bg-red-400 translate-x-[-100%] group-hover/link:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

        {/* Mobile View - Completely separate implementation */}
        <div className="block sm:hidden">
            {content &&
                content.slice(0, columnCount || 3).map((item, index) => (
                    <div
                        key={`mobile-${index}`}
                        className="relative rounded-xl overflow-hidden shadow-md mb-4 flex flex-col h-[320px]"
                    >
                        <div
                            className="w-full h-full absolute inset-0 z-0"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-1"></div>

                        <div className="relative z-10 p-4 text-white">
                            <p className="text-sm uppercase tracking-wide opacity-90">
                                {item.subtitle}
                            </p>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-xs leading-relaxed opacity-95 mb-2">
                                {item.description}
                            </p>
                            <p className="text-xs opacity-80 mb-2">{item.subdescription}</p>

                            <div className="mt-3">
                                <Link
                                    href="/plans"
                                    className="inline-block bg-red-600 text-white text-sm px-4 py-2 rounded-md font-medium"
                                >
                                    {item.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </section>
  );
}
