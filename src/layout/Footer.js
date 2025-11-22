"use client";
import SiteLogo from "@/components/SiteLogo";
import React, {useEffect, useState} from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function Footer() {
    // First line menu items
    const [footerFirstLineMenu, setFooterFirstLineMenu] = useState([
        {title: "Site Map", url: "/sitemap"},
        {title: "About Us", url: "/about"},
        {title: "Privacy Policy", url: "/policy"},
        {title: "Broadband Details", url: "/plans"},
        {title: "Coimbatore", url: "/coimbatore"},
        {title: "Erode", url: "/erode"},
        {title: "Tiruppur", url: "/tiruppur"}
    ]);

    // Second line menu items - policies and terms
    const [footerSecondLineMenu, setFooterSecondLineMenu] = useState([
        {title: "Refund Policy", url: "/refund"},
        {title: "Subscription Contract", url: "/subscription-contract"},
        {title: "Whistleblower Policy", url: "/whistleblower-policy"},
        {title: "Terms of Use", url: "/terms"}
    ]);

    const [footerMenu, setFootermenu] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Function to handle opening the speed test popup
    const handleOpenSpeedTest = (e) => {
        e.preventDefault();

        // Calculate center position for the popup
        const width = 1000;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        // Open popup window
        const popup = window.open(
            "https://skylinkfiber.speedtestcustom.com/",
            "SpeedTest",
            `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
        );

        if (!popup) {
            alert("Please allow popups for this site to run the speed test");
        }
    };

    return (
        <footer className="bg-slate-900 text-gray-200">
            {/* Top Bar */}
            <div className="border-none">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6">
                    <SiteLogo/>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link
                            href="https://x.com/skylinkfiber"
                            target="_blank"
                            className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
                        >
                            <XIcon fontSize="small"/>
                        </Link>
                        <Link
                            href="https://www.facebook.com/skylinkfibernetindia/"
                            target="_blank"
                            className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
                        >
                            <FacebookIcon fontSize="small"/>
                        </Link>
                        <Link
                            href="https://www.instagram.com/skylinkfibernet/"
                            target="_blank"
                            className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
                        >
                            <InstagramIcon fontSize="small"/>
                        </Link>
                        <Link
                            href="https://in.linkedin.com/company/skylink-fibernet"
                            target="_blank"
                            className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
                        >
                            <LinkedInIcon fontSize="small"/>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {footerMenu.map((section, index) => (
                        <div key={index}>
                            <h3
                                className="text-lg font-semibold flex justify-between items-center cursor-pointer md:cursor-default"
                                onClick={() => isMobile && toggleAccordion(index)}
                            >
                                {section.title}
                                {isMobile && (
                                    <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                                )}
                            </h3>
                            {(openIndex === index || !isMobile) && (
                                <ul className="mt-3 space-y-2 text-sm">
                                    {section.menus.map((menu, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={menu.url}
                                                className="hover:text-white transition"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Links - Two-line layout */}
                <div className="mt-8 space-y-4">
                    {/* First Line with Career and main links */}
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-400">
                        {/* Careers link to Zoho Recruit - placed at the beginning */}
                        <li>
                            <a
                                href="https://skylinkfibernet.zohorecruit.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium hover:text-white transition"
                            >
                                Careers
                            </a>
                        </li>
                        {footerFirstLineMenu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className="hover:text-white transition">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {/* Separate Speed Test link with custom click handler */}
                        <li>
                            <button
                                onClick={handleOpenSpeedTest}
                                className="text-xs text-gray-400 hover:text-white transition"
                            >
                                Speed Test
                            </button>
                        </li>
                    </ul>

                    {/* Second Line with policy and terms links */}
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-400">
                        {footerSecondLineMenu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className="hover:text-white transition">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    © 2025 Skylink Intellectual Property. All rights reserved.
                </p>
            </div>
        </footer>
    );
}