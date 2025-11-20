"use client";
import dynamic from "next/dynamic";
import React from "react";

const Counter = dynamic(() => import("@/components/Counter"));
const CEOBanner = dynamic(() => import("@/components/CEOBanner"));
const DynamicCarousel = dynamic(() => import("@/components/DynamicCarousel"));
const HeroTitleBanner = dynamic(() => import("@/components/HeroTitleBanner"));
const SimpleTestimonial = dynamic(() =>
    import("@/components/SimpleTestimonial")
);

const dynamicSlidesData = [
    {
        imgSrc: "/assets/blogs-01.png",
        title: "Skylink Broadband Net",
        subtitle: "Reliable High-Speed Internet Across India",
        description:
            "Delivering ultra-fast fiber broadband with speeds up to 1 Gbps, connecting homes and businesses from Chennai to Delhi seamlessly.",
        normaltext: "",
        legalText:
            "Speed and availability vary by location and network conditions.",
        link: "/about#broadband",
    },
    {
        imgSrc: "/assets/blogs-02.png",
        title: "Skylink OTT Platform",
        subtitle: "Your Gateway to Diverse Entertainment",
        description:
            "Access a wide range of streaming content from top Indian channels and international hits on one unified OTT platform.",
        normaltext: "",
        legalText: "Content availability varies by region.",
        link: "/about#ott",
    },
    {
        imgSrc: "/assets/blogs-03.png",
        title: "Skylink IPTV Service",
        subtitle: "Live TV with Exceptional Quality",
        description:
            "Enjoy 900+ live HD channels spanning multiple languages and regions, with interactive features like pause, rewind, and multi-device support.",
        normaltext: "",
        legalText: "Channel lineup depends on area and device compatibility.",
        link: "/about#iptv",
    },
    {
        imgSrc: "/assets/blogs-04.png",
        title: "Skylink Mobile Apps",
        subtitle: "Entertainment On-the-Go",
        description:
            "Stream your favorite shows and live TV anywhere, anytime with the Skylink mobile app available on iOS and Android.",
        normaltext: "",
        legalText: "App functionality may vary by device and network.",
        link: "/about#mobileapp",
    },
    {
        imgSrc: "/assets/blogs-05.png",
        title: "Skylink Smart Home",
        subtitle: "Connect and Control Seamlessly",
        description:
            "Integrate your broadband with smart home devices for automated control of lighting, security, and entertainment systems.",
        normaltext: "",
        legalText: "Device compatibility required for full functionality.",
        link: "/about#smarthome",
    },
    {
        imgSrc: "/assets/blogs-06.png",
        title: "Skylink Support Team",
        subtitle: "24/7 Assistance and Service",
        description:
            "Get expert help anytime through our dedicated support channels ensuring uninterrupted service and quick resolutions.",
        normaltext: "",
        legalText: "Support availability subject to local regulations.",
        link: "/about#support",
    },
];

export default function About() {
    return (
        <>
            <div style={{ marginTop: "10px" }}>
                <CEOBanner></CEOBanner>
            </div>
            <div className="container" id="main">
                <div style={{ marginTop: "-30px" }}>
                    {/*<SimpleTestimonial></SimpleTestimonial>*/}
                </div>
                <div style={{ marginTop: "35px" }}>
                    <HeroTitleBanner></HeroTitleBanner>
                </div>
                <Counter></Counter>
            </div>
        </>
    );
}
