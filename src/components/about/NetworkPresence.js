import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function NetworkPresence() {
    const cities = [
        {
            name: "Coimbatore",
            highlight: true,
            url: "/coimbatore",
            stats: {homes: "25K+", business: "5K+", rating: "4.8/5"}
        },
        {name: "Tiruppur", highlight: true, url: "/tiruppur", stats: {homes: "15K+", business: "3K+", rating: "4.7/5"}},
        {name: "Erode", highlight: true, url: "/erode", stats: {homes: "10K+", business: "2K+", rating: "4.7/5"}}
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background styling with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-red-50">
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="#ef4444" opacity="0.5"></circle>
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#network-pattern)"/>
                    </svg>
                </div>

                {/* Decorative network lines */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="20" x2="100" y2="80" stroke="#ef4444" strokeWidth="0.2"/>
                        <line x1="0" y1="80" x2="100" y2="20" stroke="#ef4444" strokeWidth="0.2"/>
                        <line x1="50" y1="0" x2="50" y2="100" stroke="#ef4444" strokeWidth="0.2"/>
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#ef4444" strokeWidth="0.2"/>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    {/* Content Section - 2 columns */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true, margin: "-100px"}}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h2 className="inline-block text-sm uppercase tracking-wider bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium mb-3">Serving
                                Tamil Nadu</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Network Presence</h3>
                            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                        </div>

                        <p className="text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-red-100">
                            Skylink currently serves Coimbatore, Tiruppur, Erode, and surrounding towns, residential
                            areas, and industrial zones. We continue expanding our fiber network to reach more homes and
                            businesses in Tamil Nadu.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Our focus is to deliver high-quality, low-latency, stable broadband wherever reliability
                            matters most.
                        </p>

                        {/* Statistics */}
                        <div
                            className="grid grid-cols-3 gap-4 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                            <div className="p-4 text-center border-r border-gray-100">
                                <div className="text-2xl font-bold text-red-600">50K+</div>
                                <div className="text-sm text-gray-500 font-medium">Connected Homes</div>
                            </div>
                            <div className="p-4 text-center border-r border-gray-100">
                                <div className="text-2xl font-bold text-red-600">10K+</div>
                                <div className="text-sm text-gray-500 font-medium">Business Clients</div>
                            </div>
                            <div className="p-4 text-center">
                                <div className="text-2xl font-bold text-red-600">3</div>
                                <div className="text-sm text-gray-500 font-medium">Major Cities</div>
                            </div>
                        </div>

                        {/* City links - styled as modern tags */}
                        <div className="flex flex-wrap gap-3">
                            {cities.map((city, index) => (
                                <Link
                                    key={index}
                                    href={city.url}
                                    className={`group relative overflow-hidden rounded-lg px-5 py-2.5 transition-all duration-300 hover:shadow-lg ${city.highlight ? 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:-translate-y-1' : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:bg-red-50'}`}
                                >
                                    {/* Background shine effect on hover */}
                                    <div
                                        className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%] skew-x-12"></div>

                                    <div className="relative flex items-center gap-2">
                                        {city.highlight && (
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        )}
                                        <span className="font-medium">{city.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Network Visual with Company Image - 3 columns */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8}}
                        viewport={{once: true, margin: "-100px"}}
                        className="relative lg:col-span-3"
                    >
                        {/* Main network visualization */}
                        <div className="relative overflow-hidden">
                            <div className="relative bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
                                {/* Hexagonal mask for the image */}
                                <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3]">
                                    {/* Background map image with cities marked */}
                                    <div className="w-full h-full">
                                        {/* The image of network map or cityscape */}
                                        <Image
                                            src="/assets/about-company-image-4.JPG"
                                            alt="Skylink Network Presence"
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Semi-transparent gradient overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-900/30"></div>
                                    </div>

                                    {/* Interactive city markers with data cards */}
                                    {cities.map((city, index) => {
                                        // Position the cities at different points on the map
                                        const positions = [
                                            'top-1/4 left-1/4',  // Coimbatore
                                            'top-1/4 right-1/4', // Tiruppur
                                            'bottom-1/4 left-1/2 -translate-x-1/2' // Erode
                                        ];

                                        return (
                                            <div key={index}
                                                 className={`absolute ${positions[index]} transition-all duration-300 hover:z-20 group`}>
                                                <Link href={city.url}>
                                                    {/* City marker - visible by default */}
                                                    <div
                                                        className="relative bg-white/90 rounded-xl shadow-lg px-4 py-2 flex items-center hover:bg-red-50/90 transition-colors duration-300 hover:shadow-xl transform group-hover:scale-105">
                                                        <span
                                                            className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                                                        <span className="font-bold text-gray-800">{city.name}</span>
                                                    </div>

                                                    {/* Stats card - appears on hover */}
                                                    <div
                                                        className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-lg border border-gray-100 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-[180px] pointer-events-none">
                                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                                            <div>
                                                                <div className="text-gray-500">Homes:</div>
                                                                <div
                                                                    className="font-semibold text-gray-900">{city.stats.homes}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-gray-500">Business:</div>
                                                                <div
                                                                    className="font-semibold text-gray-900">{city.stats.business}</div>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <div className="text-gray-500">Customer Rating:</div>
                                                                <div
                                                                    className="font-semibold text-gray-900">{city.stats.rating} u2605
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}

                                    {/* Network Rings Animation */}
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white opacity-20 animate-ping"></div>
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white opacity-15 animate-ping animation-delay-200"></div>
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-white opacity-10 animate-ping animation-delay-400"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div
                                className="absolute -bottom-5 -right-5 w-24 h-24 bg-red-100 rounded-full opacity-80 -z-10"></div>
                            <div
                                className="absolute -top-5 -left-5 w-16 h-16 bg-red-100 rounded-full opacity-80 -z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Custom animation for delayed ping */}
            <style jsx>{`
                @keyframes ping {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                .animate-ping {
                    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
            `}</style>
        </section>
    );
}