import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'

export default function WhyChooseSkylink() {
    const features = [
        {
            title: "Consistent Performance",
            description: "Our fiber network is built for uptime. That means fewer drops, smoother video calls, faster cloud access, and better streaming.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            )
        },
        {
            title: "Local Support From Real People",
            description: "When you contact Skylink support, you reach people based in Coimbatore, Tiruppur, or Erode. No long hold times. No generic scripts. Just someone who knows your area and wants to help.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            )
        },
        {
            title: "Clear Plans With No Surprises",
            description: "Skylink offers simple, transparent broadband plans. What you see is what you get. No hidden charges or tricky conditions.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            title: "Technology That Stays Ahead",
            description: "We use Wi-Fi 6, strong fiber infrastructure, and clean installation methods to give customers a stable and future-ready connection.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0 bg-[radial-gradient(#6b7280_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>

            {/* Background accents */}
            <div
                className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-red-50 to-transparent opacity-70"></div>
            <div
                className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-gray-50 to-transparent opacity-70"></div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true, margin: "-100px"}}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center bg-gray-50 rounded-full px-4 py-1 mb-3">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                        <span className="text-sm text-gray-600 font-medium">Our Advantages</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why People Choose Skylink</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">Our reputation is built on dependability and
                        transparency, providing service people can count on.</p>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative h-full flex flex-col"
                        >
                            {/* Card with gradient border effect */}
                            <div
                                className={`relative rounded-2xl p-px bg-gradient-to-br from-red-500 to-red-600 shadow-lg h-full`}>
                                <div
                                    className={`bg-red-50 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden backdrop-blur-sm`}>
                                    {/* Background decorative element */}
                                    <div
                                        className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/30 rounded-full"></div>

                                    {/* Icon with gradient background */}
                                    <div
                                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-red-500 to-red-600 shadow-lg relative z-10`}>
                                        {/* Pulse effect */}
                                        <div
                                            className={`absolute inset-0 rounded-xl bg-gradient-to-br from-red-500 to-red-600 animate-ping opacity-20`}></div>
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{feature.title}</h3>

                                    <div
                                        className={`bg-white/80 p-4 rounded-xl border border-red-100 mb-4 flex-grow relative z-10`}>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>

                                    {/* Removed Skylink Advantage tag as requested */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Banner section at bottom */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.3}}
                    viewport={{once: true, margin: "-100px"}}
                    className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-6 items-center p-6 md:p-0">
                        <div className="col-span-4 p-6 md:p-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to experience better
                                internet?</h3>
                            <p className="text-gray-300 mb-6">Join thousands of satisfied Skylink customers enjoying
                                reliable, high-speed connections.</p>
                            <Link href="/plans"
                                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                                Explore Our Plans
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-span-2 hidden md:block h-full">
                            <div className="relative h-full">
                                <Image
                                    src="/assets/about-company-image-3.JPG"
                                    alt="Skylink Customer Service"
                                    className="object-cover h-full w-full"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/90"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}