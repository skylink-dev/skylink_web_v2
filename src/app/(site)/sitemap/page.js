"use client";

import Link from "next/link";
import React from "react";

export default function SitemapPage() {
    // Your existing sitemap sections (same content, just re-grouped)
    const sitemapSections = [
        {
            title: "Main Services",
            links: [
                { name: "Internet", href: "/internet" },
                { name: "TV", href: "/tv" },
                { name: "OTT", href: "/ott" },
                { name: "Support", href: "/support" },
            ],
        },
        {
            title: "Location Services",
            links: [
                { name: "Chennai", href: "/locations/chennai" },
                { name: "Coimbatore", href: "/locations/coimbatore" },
            ],
        },
        {
            title: "Account",
            links: [
                { name: "Login", href: "/ott_subscription/login/" },
                { name: "Register", href: "/contact-us" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact-us" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
            ],
        },
        {
            title: "More",
            links: [
                { name: "Help Center", href: "/support/" },
            ],
        },
        {
            title: "Internet Plans",
            links: [
                { name: "Broadband", href: "/new_plans" },
                { name: "Fiber Plans", href: "/new_plans" },
            ],
        },
    ];

    // evenly split into 4 columns like screenshot
    const columns = [[], [], [], []];
    sitemapSections.forEach((section, index) => {
        columns[index % 4].push(section);
    });

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-10">
            {/* TOP TITLE */}
            <h1 className="text-4xl font-extrabold mb-8">Site Map</h1>

            {/* SUBTITLE (like "Mobile" in screenshot) */}
            <h2 className="text-xl font-semibold mb-2">Website Navigation</h2>

            <hr className="border-gray-300 mb-8" />

            {/* 4-COLUMN GRID LIKE THE SCREENSHOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-8">
                        {column.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                                <ul className="space-y-1">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                href={link.href}
                                                className="text-blue-700 hover:underline text-sm"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
