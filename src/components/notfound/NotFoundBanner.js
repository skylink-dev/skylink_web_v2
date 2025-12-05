"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from 'next/image'

export default function NotFoundBanner() {
    const [windowWidth, setWindowWidth] = useState(0); // Initialized to 0 for SSR safety

    const desktopBanner = "/assets/error-image.jpg";
    const mobileBanner = "/assets/error-image-mobile.jpg";
    const mobileBreakpoint = 767;

    useEffect(() => {
        // Set the initial windowWidth when the component mounts
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures this runs once after initial render

    // This logic correctly determines the banner based on windowWidth
    const currentBanner =
        windowWidth <= mobileBreakpoint && windowWidth !== 0
            ? mobileBanner
            : desktopBanner;

    return (
        <div className="w-full bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
                {/* Hero Banner */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${currentBanner}')`,
                            height: "100%",
                        }}
                    ></div>

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                    {/* Content Container */}
                    <div className="relative flex flex-col md:flex-row items-center py-12 px-6 md:px-12 lg:px-16">
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 text-white z-10 mb-8 md:mb-0">
                            <div
                                className="inline-block bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded-full mb-4">
                                Page not found
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Hmm, we couldn&apos;t find that
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100 mb-6">
                                Try searching for what you need or check out helpful links in the
                                next section.
                            </p>
                            <Link
                                href="/"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                            >
                                Return to Home
                            </Link>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
                            <Image
                                src="/assets/error-stroy.webp"
                                className="w-auto h-auto max-w-full max-h-[300px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                                alt="Page not found illustration"
                            />
                        </div>
                    </div>
                </div>

                {/* Helpful Links Section */}
                <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Links</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Link Card 1 */}
                        <Link href="/"
                              className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-300 transition-colors duration-200">
                            <div className="mr-4 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Home Page</h3>
                                <p className="text-sm text-gray-600">Return to our homepage</p>
                            </div>
                        </Link>

                        {/* Link Card 2 */}
                        <Link href="/contact"
                              className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-300 transition-colors duration-200">
                            <div className="mr-4 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Contact Us</h3>
                                <p className="text-sm text-gray-600">Get in touch with our support team</p>
                            </div>
                        </Link>

                        {/* Link Card 3 */}
                        <Link href="/plans"
                              className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-300 transition-colors duration-200">
                            <div className="mr-4 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Our Plans</h3>
                                <p className="text-sm text-gray-600">Explore our service plans</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}