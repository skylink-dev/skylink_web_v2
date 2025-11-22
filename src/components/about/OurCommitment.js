import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function OurCommitment() {
    return (
        <section className="py-16 bg-gradient-to-br from-red-50 to-red-100">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left side content */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Commitment</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The Internet is part of everyday life. It powers work, school, conversations, and
                            entertainment.
                            Skylink exists to make that experience steady, simple, and worry-free. If your connection
                            ever
                            needs help, we show up.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            We take pride in being a local provider that stands behind its service and its people.
                        </p>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.3}}
                            viewport={{once: true}}
                        >
                            <Link
                                href="/plans"
                                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 mt-4"
                            >
                                <span>Explore Our Plans</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right side image */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Background decorative elements */}
                            <div
                                className="absolute -top-8 -right-8 w-64 h-64 bg-red-200 rounded-full opacity-30 mix-blend-multiply"></div>
                            <div
                                className="absolute -bottom-8 -left-8 w-64 h-64 bg-yellow-200 rounded-full opacity-30 mix-blend-multiply"></div>

                            {/* Main image - now straight (no rotation) */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/about-company-image-2.JPG"
                                    alt="Skylink Customer Support"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Gradient overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating badge - now straight (no rotation) */}
                            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-4">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-gray-800 font-semibold">Trusted by Thousands</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}