import React from 'react';
import {motion} from 'framer-motion';

export default function VisionMission() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Vision Card */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                    >
                        {/* Background pattern */}
                        <div
                            className="absolute top-0 right-0 w-40 h-40 bg-red-200 rounded-full opacity-20 transform translate-x-20 -translate-y-20"></div>

                        <div className="relative z-10">
                            <div
                                className="bg-white/70 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-md border border-red-100">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To connect 1 million Indians by 2030 with next-generation internet, IPTV, and streaming,
                                building smarter, happier communities where reliable connectivity is the norm, not a
                                luxury.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                    >
                        {/* Background pattern */}
                        <div
                            className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-20 transform translate-x-20 -translate-y-20"></div>

                        <div className="relative z-10">
                            <div
                                className="bg-white/70 backdrop-blur-sm w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-md border border-blue-100">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We build connectivity that stays strong when people need it most, supporting the way
                                communities learn, work, create and move forward. Our focus is simple: internet that
                                holds its
                                promise, grows with tomorrow and earns trust every single day.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}