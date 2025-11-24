"use client";
import dynamic from "next/dynamic";
import React, {useState} from "react";
import {motion} from "framer-motion";

// Import main tab components
const Company = dynamic(() => import("@/components/about/Company"));

// Import existing components
const Counter = dynamic(() => import("@/components/Counter"));
const CEOBanner = dynamic(() => import("@/components/CEOBanner"));
const HeroTitleBanner = dynamic(() => import("@/components/HeroTitleBanner"));

export default function About() {
    const [activeTab, setActiveTab] = useState("company");

    return (
        <div className="bg-white min-h-screen">
            {/* Tabs Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 justify-center md:justify-start" aria-label="Tabs">
                        <button
                            onClick={() => setActiveTab("company")}
                            className={`${activeTab === "company"
                                ? "border-red-500 text-red-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} 
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base transition-all duration-200`}
                        >
                            Company
                        </button>
                        <button
                            onClick={() => setActiveTab("management")}
                            className={`${activeTab === "management"
                                ? "border-red-500 text-red-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} 
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base transition-all duration-200`}
                        >
                            Management
                        </button>
                    </nav>
                </div>
            </div>

            {/* Tab Content with Animations */}
            <div>
                {activeTab === "company" && (
                    <motion.div
                        key="company"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Company/>
                    </motion.div>
                )}

                {activeTab === "management" && (
                    <motion.div
                        key="management"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <div style={{marginTop: "20px"}}>
                            <CEOBanner/>
                        </div>
                        <HeroTitleBanner/>

                    </motion.div>
                )}
            </div>
        </div>
    );
}