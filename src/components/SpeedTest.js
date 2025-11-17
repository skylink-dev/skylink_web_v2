"use client";
import React, { useState } from "react";
import {motion} from "framer-motion";
import dynamic from "next/dynamic";

// Dynamic import of Hyperspeed component to avoid SSR issues
const Hyperspeed = dynamic(() => import('./Hyperspeed'), {ssr: false});

export default function SpeedTestBanner() {
    const [showPopup, setShowPopup] = useState(false);

    // Hyperspeed animation preset optimized for speed test visualization
    const hyperspeedPreset = {
        distortion: 'xyDistortion', // A more horizontal flowing effect for speed test
        length: 400,
        roadWidth: 14,  // Wider road for more dramatic effect
        islandWidth: 1, // Thinner island to emphasize speed
        lanesPerRoad: 5, // More lanes for richer visualization
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 3,     // Faster default speed to showcase "speed" test
        carLightsFade: 0.4,
        totalSideLightSticks: 30,
        lightPairsPerRoadWay: 60, // More lights for a busier effect
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [80, 100], // Faster movement
        movingCloserSpeed: [-180, -200], // Faster counter-movement
        carLightsLength: [400 * 0.05, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.5, 0.5],
        carFloorSeparation: [0, 1],
        colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xff0033, // Red color matching the button
            brokenLines: 0xffffff,   // White for visibility
            leftCars: [0xff0033, 0xd90429, 0xe5383b], // Various red shades
            rightCars: [0x0077b6, 0x00b4d8, 0x90e0ef], // Blue tones for contrast
            sticks: 0xff0033 // Match brand color
        }
    };

    const handleOpen = () => {
        setShowPopup(true);

        // Calculate center position
        const width = 1000;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        // Open with minimal browser chrome - this hides as much as possible
        const popup = window.open(
            "https://skylinkfiber.speedtestcustom.com/result/edef1540-f364-11eb-a95f-853cd1c871f8",
            "SpeedTest",
            `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
        );

        if (!popup) {
            alert("Please allow popups for this site to run the speed test");
        }
    };

    const handleClose = () => setShowPopup(false);

    const currentDate = new Date().toString();
    const [ip] = useState("103.130.90.103");

    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
            <div
                className="max-w-7xl mx-auto bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl overflow-hidden flex items-center justify-between px-8 sm:px-16 h-[480px] relative">
                {/* Hyperspeed animation background */}
                <div className="absolute inset-0 z-0">
                    <Hyperspeed effectOptions={hyperspeedPreset}/>
                </div>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>

                {/* Text Section */}
                <div className="max-w-2xl z-10 relative">
                    <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
                        Speed Test
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
                        Check Your Connection in a Minute
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                        Run a quick test to measure your current download and upload speeds with our tool. See if your
                        connection can handle streaming, gaming, and video calls smoothly. Accurate result in seconds, no login
                        needed
                    </p>

                    <p className="text-xs text-gray-400 mb-1">
                        {currentDate.toUpperCase()}
                    </p>
                    <p className="text-xs text-gray-400">Your IP: {ip}</p>
                </div>

                {/* Button Section */}
                <motion.div
                    className="flex flex-col items-center justify-center z-10 relative"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <button
                        onClick={handleOpen}
                        className="flex flex-col items-center text-center transition-all duration-300"
                    >
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                            {/* Outer glow pulse */}
                            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>

                            {/* Main button circle */}
                            <div
                                className="absolute inset-4 bg-gradient-to-br from-[#ff0033] to-[#d90429] rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 group overflow-hidden border-4 border-white">
                                {/* Inner rotating shine effect */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                {/* Lightning bolt icon */}
                                <motion.div
                                    className="relative z-10"
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, 5, 0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <span className="text-5xl sm:text-6xl">⚡</span>
                                </motion.div>
                            </div>
                        </div>

                        <motion.p
                            className="mt-6 text-sm sm:text-base text-white font-semibold tracking-wide"
                            initial={{opacity: 0.8}}
                            animate={{opacity: [0.8, 1, 0.8]}}
                            transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
                        >
                            Click to Test Your Speed <span className="inline-block animate-bounce">⚡</span>
                        </motion.p>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}