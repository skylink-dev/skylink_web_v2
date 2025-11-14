'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TabContent = ({ videoSrc, title, description, legalText }) => (
    <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
                {/* Video Section */}
                <div className="lg:w-7/12 relative">
                    <div className="aspect-video lg:aspect-auto lg:h-full bg-black rounded-t-2xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            playsInline
                            autoPlay
                            loop
                            muted
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                        {/* Gradient overlay for better text readability on mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-5/12 p-6 md:p-8 lg:p-10 flex items-center">
                    <div className="w-full space-y-4 md:space-y-6">
                        <motion.h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {title}
                        </motion.h2>

                        <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        {legalText && (
                            <motion.div
                                className="pt-4 border-t border-gray-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-xs text-gray-500 flex-1 leading-relaxed">
                    {legalText}
                  </span>
                                    <button
                                        className="text-sm font-semibold text-red-600 hover:text-red-700 whitespace-nowrap transition-colors duration-200"
                                        aria-label="See network interruption details"
                                    >
                                        See details
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const tabsData = [
    {
        title: 'Connectivity',
        content: (
            <TabContent
                videoSrc="/assets/video/your-partner-connectivity.mp4"
                title="Your partner in connectivity"
                description="Keeping you connected is our promise. If you experience a network interruption, we'll fix it fast and credit you with a full day of service."
                legalText="Credit for fiber downtime lasting 20 minutes or more; or for wire broadband downtime lasting 60 minutes or more caused by a single incident impacting 10 or more towers. Restrictions and exclusions apply."
            />
        ),
    },
    {
        title: 'Deals and Pricing',
        content: (
            <TabContent
                videoSrc="/assets/video/your-partner-connectivity.mp4"
                title="Great deals and pricing for you"
                description="Our best deals on any smartphone don't require the most expensive plan. Plus, enjoy Skylink Fiber® with no hidden fees or equipment charges, guaranteed."
                legalText="Offers vary by device. Restrictions may apply."
            />
        ),
    },
    {
        title: 'Customer Care',
        content: (
            <TabContent
                videoSrc="/assets/video/your-partner-connectivity.mp4"
                title="Care when you need it"
                description="Speak to a friendly technical expert within five minutes or schedule a callback at a time that you choose. Plus, enjoy same or next day technician appointment availability."
                legalText="Five minutes begins once customer is routed to technical support assistance. See details"
            />
        ),
    },
];

export default function VideoTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const router = useRouter();

    const handleContactSales = () => {
        // Navigate to ContactForm.js in the contact folder
        // Assuming the path is /contact/ContactForm or similar
        router.push('/contact-us');
    };

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        The Skylink Guarantee
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience unparalleled service with our comprehensive guarantee program
                    </p>
                </motion.div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
                        <div className="flex flex-wrap justify-center gap-2">
                            {tabsData.map((tab, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                                        activeTab === index
                                            ? 'text-white shadow-lg'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {activeTab === index && (
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-xl"
                                            layoutId="activeTab"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 whitespace-nowrap">
                    {tab.title}
                  </span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tabs Content */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {tabsData[activeTab].content}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Additional CTA Section */}
                <motion.div
                    className="text-center mt-12 md:mt-16 lg:mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Experience Skylink?
                        </h3>
                        <p className="text-lg md:text-xl mb-6 opacity-90">
                            Join thousands of satisfied customers enjoying guaranteed connectivity
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/new_plans"
                                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                            >
                                Get Started Today
                            </Link>
                            <button
                                onClick={handleContactSales}
                                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}