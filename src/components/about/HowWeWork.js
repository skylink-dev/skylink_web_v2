import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function HowWeWork() {
    const workProcesses = [
        {
            title: "Smooth Installation",
            description: "Our technicians handle setups neatly and explain everything in simple terms so you know exactly how your connection works.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
            ),
        },
        {
            title: "Proactive Network Care",
            description: "We monitor performance daily across regions. When we spot something unusual, we act before it becomes a problem for you.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
            ),
        },
        {
            title: "Fast Issue Resolution",
            description: "Local support means quick responses. When something needs attention, our teams are nearby and ready to help.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Our systematic approach ensures a reliable,
                        hassle-free experience for all customers.</p>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {workProcesses.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="relative"
                        >
                            {/* Connection lines between cards (only between cards) */}
                            {index < workProcesses.length - 1 && (
                                <div
                                    className="absolute top-10 right-0 w-1/2 h-0.5 bg-red-100 hidden md:block z-0"></div>
                            )}

                            <div
                                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative z-10 h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                {/* Decorative background pattern */}
                                <div
                                    className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-50 rounded-full opacity-50"></div>

                                <div className="relative z-10">
                                    {/* Icon with number */}
                                    <div className="flex items-center mb-5">
                                        <div
                                            className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg relative">
                                            <div
                                                className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-20"></div>
                                            {process.icon}
                                            <span
                                                className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-red-600 flex items-center justify-center text-sm font-bold border-2 border-red-600">{index + 1}</span>
                                        </div>
                                        <div className="ml-3 h-0.5 bg-red-100 flex-grow"></div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                                    <p className="text-gray-600">{process.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}