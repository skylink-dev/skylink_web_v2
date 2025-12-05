import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image'

export default function AboutIntro() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div
                className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-50 to-transparent rounded-bl-[100px] opacity-70"></div>
            <div
                className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-50 to-transparent rounded-tr-[70px] opacity-80"></div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side: Content with modern styling */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true, margin: "-100px"}}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-sm uppercase tracking-wider text-red-600 font-semibold mb-2">Our
                                Story</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Local Roots, <span className="relative inline-block">
                                    <span className="relative z-10">Expanding Vision</span>
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10"></span>
                                </span>
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed border-l-4 border-red-500 pl-4 py-2 bg-gray-50 rounded-r-md">
                                From its roots in Coimbatore, growth happened by being near and dear to every customer
                                it
                                served. Today, Skylink provides top-class fiber internet in all corners of Coimbatore,
                                Tiruppur, Erode, and its surroundings.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Our focus lies in reliability, honest service, and support that feels
                                personal. Anyone who chooses Skylink chooses a local team that takes their connection
                                seriously.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Our objective is straightforward: strong networks, clear plans, quick resolution, and
                                staying accountable. The cities we serve are the cities we live in, and every new
                                connection feels
                                like an extension of our own community.
                            </p>
                        </div>

                        {/* Statistics row */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="text-red-600 text-2xl font-bold">7+</div>
                                <div className="text-gray-600 text-sm">Years of Service</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="text-red-600 text-2xl font-bold">50K+</div>
                                <div className="text-gray-600 text-sm">Happy Customers</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="text-red-600 text-2xl font-bold">3</div>
                                <div className="text-gray-600 text-sm">Major Cities</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Enhanced image display */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        viewport={{once: true, margin: "-100px"}}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main image with enhanced styling */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/about-company-image-1.JPG"
                                    alt="Skylink Office"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Overlay gradient */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-transparent"></div>

                                {/* Decorative corner elements */}
                                <div
                                    className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white opacity-70 rounded-tl-2xl"></div>
                                <div
                                    className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white opacity-70 rounded-br-2xl"></div>
                            </div>

                            {/* Decorative elements */}
                            <div
                                className="absolute -top-8 -right-8 w-24 h-24 bg-red-100 rounded-full opacity-80 -z-10"></div>
                            <div
                                className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-red-200 rounded-full -z-10"></div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white px-5 py-3 rounded-xl shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-800 font-medium text-sm">Growing Network</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}