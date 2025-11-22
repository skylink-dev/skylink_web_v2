import React from 'react';
import {motion} from 'framer-motion';

export default function WhyChooseSkylink() {
    const features = [
        {
            title: "Consistent performance",
            description: "Our fiber network is built for uptime. That means fewer drops, smoother video calls, faster cloud access, and better streaming.",
            icon: (
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            )
        },
        {
            title: "Local support from real people",
            description: "When you contact Skylink support, you reach people based in Coimbatore, Tiruppur, or Erode. No long hold times. No generic scripts. Just someone who knows your area and wants to help.",
            icon: (
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            )
        },
        {
            title: "Clear plans with no surprises",
            description: "Skylink offers simple, transparent broadband plans. What you see is what you get. No hidden charges or tricky conditions.",
            icon: (
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            title: "Technology that stays ahead",
            description: "We use Wi-Fi 6, strong fiber infrastructure, and clean installation methods to give customers a stable and future-ready connection.",
            icon: (
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why People Choose Skylink</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">Our reputation is built on dependability and
                        transparency, providing service people can count on.</p>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div
                                className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}