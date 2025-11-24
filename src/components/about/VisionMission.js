import React from 'react';
import {motion} from 'framer-motion';

export default function VisionMission() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background styling */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

            {/* Decorative elements */}
            <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
            <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
            <div
                className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true, margin: "-100px"}}
                    className="text-center mb-16"
                >
                    <h2 className="inline-block text-sm uppercase tracking-wider text-gray-600 font-semibold mb-2 bg-gray-100 px-3 py-1 rounded-full">Our
                        Philosophy</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Vision & Mission</h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Vision Card - now spans 7 columns for emphasis */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7}}
                        viewport={{once: true, margin: "-100px"}}
                        className="md:col-span-7 relative overflow-hidden"
                    >
                        <div
                            className="bg-gradient-to-br from-red-50 via-red-100 to-red-50 rounded-3xl shadow-xl border border-red-100 overflow-hidden h-full">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-red-500"></div>
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <pattern id="vision-pattern" x="0" y="0" width="40" height="40"
                                             patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                        <rect x="20" y="0" width="2" height="40" fill="currentColor"
                                              opacity="0.5"></rect>
                                        <rect x="0" y="20" width="40" height="2" fill="currentColor"
                                              opacity="0.5"></rect>
                                    </pattern>
                                    <rect x="0" y="0" width="100%" height="100%" fill="url(#vision-pattern)"/>
                                </svg>
                            </div>

                            <div className="relative z-10 p-10">
                                <div className="flex items-center mb-6">
                                    <div
                                        className="bg-white/70 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg border border-red-200">
                                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xs uppercase tracking-wider text-red-700 font-semibold mb-1">Looking
                                            ahead</h4>
                                        <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-red-100">
                                    To connect <span className="font-semibold">1 million Indians by 2030</span> with
                                    next-generation internet, IPTV, and streaming,
                                    building smarter, happier communities where reliable connectivity is the norm, not a
                                    luxury.
                                </p>

                                {/* Vision metrics */}
                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    <div
                                        className="bg-white/90 backdrop-blur-sm p-3 rounded-xl text-center border border-red-100">
                                        <div className="text-2xl font-bold text-red-600">1M+</div>
                                        <div className="text-sm text-gray-600">Target Customers</div>
                                    </div>
                                    <div
                                        className="bg-white/90 backdrop-blur-sm p-3 rounded-xl text-center border border-red-100">
                                        <div className="text-2xl font-bold text-red-600">2030</div>
                                        <div className="text-sm text-gray-600">Target Year</div>
                                    </div>
                                    <div
                                        className="bg-white/90 backdrop-blur-sm p-3 rounded-xl text-center border border-red-100">
                                        <div className="text-2xl font-bold text-red-600">3+</div>
                                        <div className="text-sm text-gray-600">Services Offered</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission Card - now spans 5 columns */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.2}}
                        viewport={{once: true, margin: "-100px"}}
                        className="md:col-span-5 relative overflow-hidden"
                    >
                        <div
                            className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-3xl shadow-xl border border-blue-100 overflow-hidden h-full">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500"></div>
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <pattern id="mission-pattern" x="0" y="0" width="40" height="40"
                                             patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                                        <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.5"></circle>
                                    </pattern>
                                    <rect x="0" y="0" width="100%" height="100%" fill="url(#mission-pattern)"/>
                                </svg>
                            </div>

                            <div className="relative z-10 p-10">
                                <div className="flex items-center mb-6">
                                    <div
                                        className="bg-white/70 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg border border-blue-200">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-1">Our
                                            Purpose</h4>
                                        <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100">
                                    We build connectivity that stays strong when people need it most, supporting the way
                                    communities learn, work, create and move forward. Our focus is simple: internet that
                                    holds its promise, grows with tomorrow and earns trust every single day.
                                </p>

                                {/* Value tag */}
                                <div
                                    className="mt-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-blue-100 flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                                    <div className="text-gray-700 font-medium">Trust. Reliability. Innovation.
                                        Community.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}