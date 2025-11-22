"use client";
import dynamic from "next/dynamic";
import React, {useState} from "react";
import {motion} from "framer-motion";

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
    const [activeTab, setActiveTab] = useState("company");

    return (
        <div className="bg-white min-h-screen">
            {/* Tabs Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                        <button
                            onClick={() => setActiveTab("company")}
                            className={`${activeTab === "company"
                                ? "border-red-500 text-red-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} 
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
                        >
                            Company
                        </button>
                        <button
                            onClick={() => setActiveTab("management")}
                            className={`${activeTab === "management"
                                ? "border-red-500 text-red-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} 
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base`}
                        >
                            Management
                        </button>
                    </nav>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {activeTab === "company" && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="space-y-10"
                    >
                        {/* Company Introduction */}
                        <section className="prose prose-lg max-w-none">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                            <p className="text-gray-700 leading-relaxed">
                                Skylink was started with a simple idea. Good internet should not be a luxury. It should
                                just work.
                                Whether you run a business, study from home, stream after a long day, or manage a
                                factory
                                floor, your connection should stay steady without making you think about it.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                From its roots in Coimbatore, growth happened by being near and dear to every customer
                                it
                                served. Today, Skylink provides top-class fiber internet in all corners of Coimbatore,
                                Tiruppur,
                                Erode, and its surroundings. Our focus lies in reliability, honest service, and support
                                that feels
                                personal. Anyone who chooses Skylink chooses a local team that takes their connection
                                seriously.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Our objective is straightforward: strong networks, clear plans, quick resolution, and
                                staying
                                accountable. The cities we serve are the cities we live in, and every new connection
                                feels like an
                                extension of our own community.
                            </p>
                        </section>

                        {/* Vision & Mission */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-red-50 p-6 sm:p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
                                <p className="text-gray-700">
                                    To connect 1 million Indians by 2030 with next-generation internet, IPTV, and
                                    streaming,
                                    building smarter, happier communities where reliable connectivity is the norm, not a
                                    luxury.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
                                <p className="text-gray-700">
                                    We build connectivity that stays strong when people need it most, supporting the way
                                    communities learn, work, create and move forward. Our focus is simple: internet that
                                    holds its
                                    promise, grows with tomorrow and earns trust every single day.
                                </p>
                            </div>
                        </section>

                        {/* Why Choose Skylink */}
                        <section>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why People Choose
                                Skylink</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Consistent performance</h3>
                                    <p className="text-gray-600">
                                        Our fiber network is built for uptime. That means fewer drops, smoother video
                                        calls, faster cloud
                                        access, and better streaming.
                                    </p>
                                </div>
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Local support from real
                                        people</h3>
                                    <p className="text-gray-600">
                                        When you contact Skylink support, you reach people based in Coimbatore,
                                        Tiruppur, or Erode.
                                        No long hold times. No generic scripts. Just someone who knows your area and
                                        wants to help.
                                    </p>
                                </div>
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Clear plans with no
                                        surprises</h3>
                                    <p className="text-gray-600">
                                        Skylink offers simple, transparent broadband plans. What you see is what you
                                        get. No hidden
                                        charges or tricky conditions.
                                    </p>
                                </div>
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology that stays
                                        ahead</h3>
                                    <p className="text-gray-600">
                                        We use Wi-Fi 6, strong fiber infrastructure, and clean installation methods to
                                        give customers a
                                        stable and future-ready connection.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Network Presence */}
                        <section className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Network Presence</h2>
                            <p className="text-gray-700 mb-4">
                                Skylink currently serves Coimbatore, Tiruppur, Erode, and surrounding towns, residential
                                areas,
                                and industrial zones. We continue expanding our fiber network to reach more homes and
                                businesses in Tamil Nadu.
                            </p>
                            <p className="text-gray-700">
                                Our focus is to deliver high-quality, low-latency, stable broadband wherever reliability
                                matters
                                most.
                            </p>
                        </section>

                        {/* How We Work */}
                        <section>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Smooth installation</h3>
                                    <p className="text-gray-600">
                                        Our technicians handle setups neatly and explain everything in simple terms so
                                        you know
                                        exactly how your connection works.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Proactive network care</h3>
                                    <p className="text-gray-600">
                                        We monitor performance daily across regions. When we spot something unusual, we
                                        act before
                                        it becomes a problem for you.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast issue resolution</h3>
                                    <p className="text-gray-600">
                                        Local support means quick responses. When something needs attention, our teams
                                        are nearby
                                        and ready to help.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Commitment */}
                        <section className="bg-gradient-to-r from-red-50 to-red-100 p-6 sm:p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
                            <p className="text-gray-700 mb-4">
                                The Internet is part of everyday life. It powers work, school, conversations, and
                                entertainment.
                                Skylink exists to make that experience steady, simple, and worry-free. If your
                                connection ever
                                needs help, we show up.
                            </p>
                            <p className="text-gray-700 font-medium">
                                We take pride in being a local provider that stands behind its service and its people.
                            </p>
                        </section>
                    </motion.div>
                )}

                {activeTab === "management" && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <div style={{marginTop: "10px"}}>
                            <CEOBanner/>
                        </div>
                        <HeroTitleBanner/>
                        <Counter/>
                    </motion.div>
                )}
            </div>
        </div>
    );
}