import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'

export default function OurCommitment() {
    // Values that we commit to
    const values = [
        {name: "Reliability", icon: "🔗", description: "Consistent service you can depend on"},
        {name: "Transparency", icon: "✨", description: "Clear communication, no hidden fees"},
        {name: "Support", icon: "🤝", description: "Local teams ready to assist"},
        {name: "Innovation", icon: "💡", description: "Always improving our technology"},
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background with pattern and gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100">
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-20 mix-blend-multiply">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#ef4444" opacity="0.2"></circle>
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-pattern)"/>
                    </svg>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7}}
                        viewport={{once: true, margin: "-100px"}}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="inline-block text-sm uppercase tracking-wider bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium mb-3">Our
                                Pledge</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                The Internet is part of everyday life. It powers work, school, conversations, and
                                entertainment. Skylink exists to make that experience steady, simple, and worry-free. If
                                your connection ever needs help, we show up.
                            </p>

                            <div className="bg-white rounded-xl p-6 border border-red-100 shadow-md">
                                <p className="text-gray-700 leading-relaxed font-medium italic">
                                    &ldquo;We take pride in being a local provider that stands behind its service and
                                    its
                                    people.&rdquo;
                                </p>
                                <div className="flex items-center mt-4">
                                    <div
                                        className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Skylink Management Team</div>
                                        <div className="text-sm text-gray-500">Coimbatore, Tamil Nadu</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-sm border border-red-100 text-sm"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-lg">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{value.name}</div>
                                            <div className="text-xs text-gray-500">{value.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.3}}
                                viewport={{once: true}}
                                className="pt-2"
                            >
                                <Link
                                    href="/plans"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span>Explore Our Plans</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Image with professional styling */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.7}}
                        viewport={{once: true, margin: "-100px"}}
                        className="relative flex justify-center"
                    >
                        {/* Main image with frame */}
                        <div className="relative w-full max-w-md">
                            {/* Red gradient border frame */}
                            <div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 shadow-lg transform rotate-1 -z-10"></div>

                            {/* Main image container */}
                            <div className="relative rounded-2xl overflow-hidden bg-white p-3">
                                {/* Image with subtle overlay */}
                                <div className="relative rounded-xl overflow-hidden">
                                    <Image
                                        src="/assets/about-company-image-2.JPG"
                                        alt="Skylink Customer Support"
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Subtle gradient overlay for better text readability */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                    {/* Bottom caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="text-white font-medium text-shadow">Customer-First Approach
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Top badge */}
                            <div
                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md z-10">
                                Always There For You
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Key metrics */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.3}}
                    viewport={{once: true, margin: "-100px"}}
                    className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden border border-red-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-100">
                        <div className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
                            <div className="text-gray-600">Customer Support</div>
                        </div>
                        <div className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-1">99.9%</div>
                            <div className="text-gray-600">Network Uptime</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Text shadow utility for better text readability on images */}
            <style jsx global>{`
                .text-shadow {
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
            `}</style>
        </section>
    );
}