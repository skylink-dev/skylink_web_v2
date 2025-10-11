import React from 'react'

export default function HeroTitleBanner() {
    return (
        <>
            <div className="hero">
                <div className="hero--text">
                    <h1>Speed You Need. Connection You Trust. Entertainment You Love</h1>
                </div>
            </div>
            <div className="section--intro">
                <div className="image image--1">
                    <img src="/assets/about-company-image-1.JPG" width="1024" height="768" />
                </div>
                <div className="image image--2">
                    <img src="/assets/about-company-image-2.JPG" />
                </div>
                <div className="image image--3">
                    <img src="/assets/about-company-image-3.JPG" />
                </div>
                <div className="image image--4">
                    <img src="/assets/about-company-image-4.JPG" />
                </div>
                <div className="text">
                    <h2 className="h3">Our Mission</h2>
                    <p>By 2030, Skylink empowered team and channel partners will connect 1 million Indians with next‑gen IPTV, broadband, and OTT—powered by 5G, fiber, AI, and edge—to enrich lives, empower businesses, and inspire communities.</p>
                </div>
            </div>
        </>
    )
}
