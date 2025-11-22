import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function NetworkPresence() {
    const cities = [
        {name: "Coimbatore", highlight: true, url: "/coimbatore"},
        {name: "Tiruppur", highlight: true, url: "/tiruppur"},
        {name: "Erode", highlight: true, url: "/erode"}
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
                    {/* Network Visual with Company Image - Taking 3 columns */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="relative h-full flex flex-col lg:col-span-3"
                    >
                        <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden h-full flex-grow">
                            {/* Using the company image from management section instead of map */}
                            <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/about-company-image-4.JPG"
                                    alt="Skylink Network Presence"
                                    fill
                                    className="object-cover"
                                />

                                {/* Semi-transparent overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-red-900/30"></div>

                                {/* City badges - positioned over the image - Now clickable */}
                                <Link href="/coimbatore" className="cursor-pointer">
                                    <div
                                        className="absolute top-6 left-6 bg-white/90 rounded-xl shadow-lg px-4 py-2 flex items-center hover:bg-red-50/90 transition-colors duration-300 hover:shadow-xl">
                                        <span className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                                        <span className="font-bold text-gray-800">Coimbatore</span>
                                    </div>
                                </Link>

                                <Link href="/tiruppur" className="cursor-pointer">
                                    <div
                                        className="absolute top-6 right-6 bg-white/90 rounded-xl shadow-lg px-4 py-2 flex items-center hover:bg-red-50/90 transition-colors duration-300 hover:shadow-xl">
                                        <span className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                                        <span className="font-bold text-gray-800">Tiruppur</span>
                                    </div>
                                </Link>

                                <Link href="/erode" className="cursor-pointer">
                                    <div
                                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-xl shadow-lg px-4 py-2 flex items-center hover:bg-red-50/90 transition-colors duration-300 hover:shadow-xl">
                                        <span className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                                        <span className="font-bold text-gray-800">Erode</span>
                                    </div>
                                </Link>

                                {/* Decorative ring element */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className="w-32 h-32 rounded-full border-4 border-white opacity-30 animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content - Taking 2 columns now */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Network Presence</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Skylink currently serves Coimbatore, Tiruppur, Erode, and surrounding towns, residential
                            areas, and industrial zones. We continue expanding our fiber network to reach more homes and
                            businesses in Tamil Nadu.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Our focus is to deliver high-quality, low-latency, stable broadband wherever reliability
                            matters most.
                        </p>

                        {/* City tags - Now clickable */}
                        <div className="flex flex-wrap gap-5 mt-8">
                            {cities.map((city, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, scale: 0.8}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.4, delay: index * 0.2}}
                                    viewport={{once: true}}
                                    className="flex flex-col items-center"
                                >
                                    <Link href={city.url}>
                                        <div
                                            className={`inline-flex items-center px-6 py-3 rounded-full text-base font-semibold cursor-pointer transform transition-all duration-300 hover:scale-105 ${city.highlight ? 'bg-red-600 text-white shadow-md shadow-red-600/20 hover:bg-red-700 hover:shadow-lg' : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300'}`}>
                                            {city.highlight && (
                                                <span
                                                    className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                                            )}
                                            {city.name}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}