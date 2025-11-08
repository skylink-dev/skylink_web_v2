import Link from 'next/link'
import React from 'react'
import Image from "next/image"

export default function DualBannerSection() {
    return (
        <>
            {/* Main Banner Section */}
            <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-xl overflow-hidden mx-auto mt-4 max-w-7xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-900">
                    <div 
                        className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: `url('/assets/dual-banner-bg.jpg')` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content */}
                <div className="relative mx-auto px-4 py-10 lg:py-12 min-h-[360px] flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full">
                        {/* Text Content */}
                        <div className="text-white space-y-4 lg:space-y-5 order-2 lg:order-1">
                            <p className="text-red-400 font-semibold text-xs uppercase tracking-wide">
                                Wireless + home internet
                            </p>
                            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                                Save 20% every month
                            </h2>
                            <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                                When you bundle internet service with unlimited wire from Skylink.
                            </p>
                            
                            {/* Legal Text */}
                            <div className="text-gray-300 text-xs space-y-1">
                                <p>
                                    <b>Skylink Wireless<sup>SM</sup>: Skylink may temporarily slow data speeds if the network is busy.</b>
                                </p>
                                <p>Savings applied to one service based on eligibility and service(s) purchased/added.</p>
                                <button className="text-red-400 hover:text-red-300 font-medium underline transition-colors text-xs">
                                    See offer details
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-3">
                                <Link 
                                    href="/bundles/connectivity/" 
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                                >
                                    New customers
                                </Link>
                                <Link 
                                    href="/bundles/internet-wireless/" 
                                    className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                                >
                                    Current customers
                                </Link>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="order-1 lg:order-2"></div>
                    </div>
                </div>
            </div>

            {/* Gap between sections */}
            <div className="h-4"></div>

            {/* Bottom Reward Section */}
            <div className="relative mx-auto max-w-7xl">
                <div className="bg-gray-300 rounded-xl shadow-lg text-black">
                    <div className="mx-auto px-4 py-6 lg:py-7">
                        <div className="text-center lg:text-left">
                            <div className="max-w-3xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                                    {/* Text Content */}
                                    <div className="lg:col-span-2 space-y-3">
                                        <h2 className="text-xl lg:text-2xl font-bold text-black">
                                            Get up to a ₹150 reward card
                                        </h2>
                                        <p className="text-gray-600 text-base">
                                            When you buy both Skylink Fiber and an eligible wire plan.
                                        </p>
                                        
                                        {/* Legal Text */}
                                        <div className="text-gray-600 text-xs space-y-1">
                                            <p>
                                                ₹50 with 300Mbps; ₹100 with 500Mpbs; ₹150 with 1 GIG+. 
                                                Redemption reqd. Skylink Fiber: Limited availability in select areas.
                                            </p>
                                            <button className="text-gray-600 hover:text-red-600 font-medium underline transition-colors text-xs">
                                                See offer details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Reward Image - Hidden on mobile as per original */}
                                    <div className="hidden lg:flex justify-center">
                                        <div className="relative w-24 h-24">
                                            <Image 
                                                src="/assets/at-t-absolute-image.webp" 
                                                alt="Reward card offer"
                                                fill
                                                className="object-contain transform hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}