import Image from "next/image";
import React from "react";

export default function HeroTitleBanner() {
    return (
        <div className="w-full">
            {/* Hero Section with Bold Text */}
            <section
                className="relative w-full bg-gradient-to-r from-blue-900 to-red-900 py-20 md:py-28 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="w-full relative z-10 flex justify-center items-center min-h-[30vh] px-4 sm:px-6 md:px-8">
                    <div className="w-full max-w-5xl text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                            <span className="block mb-2">Speed You Need.</span>
                            <span className="block mb-2">Connection You Trust.</span>
                            <span className="block">Entertainment You Love</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Mission Section with Image Grid */}
            <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20 overflow-hidden">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Grid Layout */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-screen-2xl mx-auto">
                        {/* Main Text Block - Full width on mobile, span all columns on larger screens */}
                        <div className="sm:col-span-2 lg:col-span-3 mb-8 md:mb-12 order-first">
                            <div
                                className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    By 2030, Skylink empowered team and channel partners will connect
                                    1 million Indians with next‑gen IPTV, broadband, and OTT—powered by
                                    5G, fiber, AI, and edge—to enrich lives, empower businesses, and
                                    inspire communities.
                                </p>
                            </div>
                        </div>

                        {/* Image Tiles */}
                        <div
                            className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/assets/about-company-image-1.JPG"
                                width={1024}
                                height={768}
                                alt="Skylink company image 1"
                                className="w-full h-60 sm:h-64 md:h-72 object-cover"
                            />
                        </div>

                        <div
                            className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/assets/about-company-image-2.JPG"
                                width={1024}
                                height={768}
                                alt="Skylink company image 2"
                                className="w-full h-60 sm:h-64 md:h-72 object-cover"
                            />
                        </div>

                        <div
                            className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/assets/about-company-image-3.JPG"
                                width={1024}
                                height={768}
                                alt="Skylink company image 3"
                                className="w-full h-60 sm:h-64 md:h-72 object-cover"
                            />
                        </div>

                        <div
                            className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl sm:col-span-2 lg:col-span-3">
                            <Image
                                src="/assets/about-company-image-4.JPG"
                                width={1024}
                                height={768}
                                alt="Skylink company image 4"
                                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}