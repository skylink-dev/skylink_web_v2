'use client'
import React from 'react'
import VideoBanner from '@/components/VideoBanner'
import VideoTabs from '@/components/VideoTabs'
import IconMoreDetails from '@/components/IconMoreDetails'
import PricingPlans from '@/components/PricingPlans'
import ComparisonTable from '@/components/ComparisonTable'
import TwoColumnSection from '@/components/TwoColumnSection'
import ContentandImageCarousel from '@/components/ContentandImageCarousel'
import TitleComponent from '@/components/TitleComponent'
import StepByStepComponent from '@/components/StepByStepComponent'
import SingleFaq from '@/components/SingleFaq'
import Faq from '@/components/Faq'
import NormalTabs from '@/components/NormalTabs'
import {firestickData} from "../../../data/Home";
import StructuredData from "@/components/StructuredData";
import {getServiceStructuredData, getBreadcrumbStructuredData} from "@/lib/structuredData";

export default function Firetv() {
    const iconMoreDetailcontent = [{
        icon: (<svg aria-label="mobile-tower" className="color-gray-800 svg-accent-att-blue" height="64" width="64" role="img" viewBox="0 0 96 96"><path className="svg-base" d="M62.41 80.88l2.64 8.42 1.9-.6-15.76-50.37a8 8 0 10-6.38 0L29.05 88.7l1.9.6 2.64-8.42L48 74.52zm-11.93-7.45l8.43-3.72 2.71 8.63zM42 31a6 6 0 116 6 6 6 0 01-6-6zm6 8a7.47 7.47 0 001.26-.11l9.05 28.9L48 72.34l-10.31-4.55 9.05-28.9A7.47 7.47 0 0048 39zM34.38 78.34l2.71-8.63 8.43 3.72z"></path><path className="svg-accent" d="M31.05 31A16.54 16.54 0 0036 42.8l-1.41 1.42a18.64 18.64 0 01-.07-26.43l1.42 1.41A16.54 16.54 0 0031.05 31zm-3.3-19.42l-1.41-1.42a29.42 29.42 0 00.11 41.74l1.4-1.42a27.43 27.43 0 01-.1-38.9zm32.32 7.62A16.63 16.63 0 0160 42.8l1.41 1.42a18.64 18.64 0 00.07-26.43zm9.59-9.07l-1.41 1.42a27.43 27.43 0 01-.1 38.9l1.4 1.42a29.42 29.42 0 00.11-41.74z"></path></svg>),
        title: "Breezy Search",
        description: "If you’ve experienced a qualifying outage, we’ll notify you and credit your bill once it’s resolved. Skylink keeps things simple and stress-free.",
        cta: ""
    }, {
        icon: (<svg aria-label="handshake" className="color-gray-800 svg-accent-att-blue" height="64" width="64" role="img" viewBox="0 0 96 96"><path className="svg-accent" d="M45.62 69.15l-.06-.08a4.74 4.74 0 00-3.14-1.89 4.5 4.5 0 00-.64 0 4.75 4.75 0 00-3.86-6.06 4.43 4.43 0 00-.63 0 4.77 4.77 0 00-7.41-5.19l-.66.48a4.78 4.78 0 00-7.63-3.78l-2.5 1.84a4.79 4.79 0 000 7.71L38 76a5.18 5.18 0 003 1 5.8 5.8 0 003.43-1.17l.1-.08a4.8 4.8 0 001.09-6.6zm-6.17-5a2.78 2.78 0 01-.59 3.89l-4.14 3.06L30 67.66l5.54-4.08a2.8 2.8 0 013.9.59zm-8.39-6.69a2.76 2.76 0 012.08-.46A2.73 2.73 0 0135 58.07a2.78 2.78 0 01-.63 3.93l-6 4.45L23.62 63zm-11.91.79A2.74 2.74 0 0120.28 56l2.5-1.84a2.73 2.73 0 011.65-.55 2.84 2.84 0 011.66.54 2.8 2.8 0 010 4.49L22 61.7l-1.65-1.21a2.76 2.76 0 01-1.2-2.22zm24.23 15.9l-.1.07a3.4 3.4 0 01-4.15.15l-2.73-2 3.65-2.69a2.76 2.76 0 012.08-.51 2.7 2.7 0 011.79 1.06 2.8 2.8 0 01-.54 3.92zm27-54.6l-6 4.45H45.45L33 37.85l.48.66a6.71 6.71 0 004.48 2.69 6.9 6.9 0 005.21-1.37l7.3-5.57-1.21-1.59-7.3 5.57a4.93 4.93 0 01-3.71 1 4.69 4.69 0 01-2.63-1.29L46.34 26h17.8l17.08 23.18-6 4.39 1.19 1.6 13.06-9.61zM66 25.21l3.89-2.86 16.82 22.78L82.83 48z"></path><path className="svg-base" d="M40 26v-2h-8.41l-6-4.45L6.28 45.72 16.11 53l1.18-1.61-2.72-2L31.77 26zM9.08 45.3L26 22.35l3.9 2.86L13 48.16zm64.13 15.55a4.76 4.76 0 01-5.47 1.65 4.74 4.74 0 01-4 4.93 4.4 4.4 0 01-.73.06 4.69 4.69 0 01-1.61-.3 4.74 4.74 0 01-6.4 4.7 4.69 4.69 0 01-.91 3 4.78 4.78 0 01-3.86 1.95 4.68 4.68 0 01-2-.44l.84-1.81a2.78 2.78 0 002.81-4.77L50 68.44l1.19-1.61L55 69.64A2.78 2.78 0 0059.36 67a2.75 2.75 0 00-1.1-1.83l-1.93-1.42 1.19-1.61 3.76 2.77a2.79 2.79 0 002.07.51 2.73 2.73 0 001.82-1.1 2.68 2.68 0 00.51-2.06 2.75 2.75 0 00-1.1-1.83L62.71 59l1.19-1.6 3.82 2.81a2.78 2.78 0 003.88-.59 2.74 2.74 0 00.52-2.07A2.81 2.81 0 0071 55.77L49.94 40.25l1.19-1.61L72.2 54.16a4.78 4.78 0 011 6.69z"></path></svg>),
        title: "Power of Choice",
        description: "Skylink offers top deals without locking you into expensive plans. Get only what you need — no hidden fees, no fluff.",
        cta: ""
    }, {
        icon: (<svg aria-label="personal-care" className="color-gray-800 svg-accent-att-blue" height="64" width="64" role="img" viewBox="0 0 96 96"><path className="svg-accent" d="M48 49.94L32.06 34A10.55 10.55 0 0147 19.09l1 1 1-1A10.54 10.54 0 1163.94 34zM39.52 18a8.53 8.53 0 00-6 14.58L48 47.11l14.53-14.53A8.55 8.55 0 0050.44 20.5L48 22.94l-2.44-2.44a8.55 8.55 0 00-6.04-2.5z"></path><path className="svg-base" d="M86.59 58.56a6.65 6.65 0 00-9.34-1.15l-9.81 7.68A9 9 0 0161.9 67h-3.44A6 6 0 0060 63v-7H32.82c-11.52 0-16.25 6.89-17.43 9H8v2h7v12H8v2h56.9a11 11 0 006.77-2.34l13.78-10.77a6.66 6.66 0 001.14-9.33zm-2.37 7.75L70.44 77.09A9 9 0 0164.9 79H17V66.23c.6-1.15 4.71-8.23 15.82-8.23H58v5a4 4 0 01-4 4H40v2h21.9a11 11 0 006.77-2.34L78.49 59a4.59 4.59 0 013.43-1 4.65 4.65 0 012.3 8.28z"></path></svg>),
        title: "Free Streams",
        description: "Unlock a wide library of free entertainment — from trending clips to binge-worthy shows — all from your Skylink Firestick.",
        cta: ""
    }];
    const providersData = [
        { key: "option1", name: "Fire TV Stick", bgClass: "bg-att-blue", textClass: "color-white" },
        { key: "option2", name: "Set Top Box (SD)", bgClass: "bg-gray-200", textClass: "color-red-600" },
        { key: "option3", name: "Set Top Box (HD)", bgClass: "bg-gray-200", textClass: "color-red-600" },
        { key: "option3", name: "Android Box", bgClass: "bg-gray-200", textClass: "color-red-600" },
        { key: "option3", name: "Android Box (Google Certified)", bgClass: "bg-gray-200", textClass: "color-red-600" }
    ];
    const tablecontent = [
        { title: "OS", option1: "Fire OS (Amazon modified Android)", option2: "Varies (proprietary; DVB/IPTV)", option3: "Same as SD but supports HD", option4: "Android Open Source (often modified)", option5: "Official Android TV / Google TV" },
        { title: "Max Resolution", option1: "1080p (stick) or 4K (4K stick)", option2: "SD (576i/480p)", option3: "HD (1080p)", option4: "Usually 4K-capable", option5: "4K HDR-capable" },
        { title: "App Store / Ecosystem", option1: "Amazon Appstore; ~7k+ apps including Netflix, Prime, etc.", option2: "Limited, provider-specific", option3: "Limited", option4: "Google Play (mobile) + APKs, full flexibility", option5: "Google Play for TV; certified, remote Optimized app UI" },
        { title: "Voice Assistant", option1: "Alexa built-in (remote or Cube)", option2: "Rarely included", option3: "Rare", option4: "May include Google Assistant via add ons", option5: "Google Assistant integrated" },
        { title: "UI & Navigation", option1: "Remote-friendly, Amazon UI", option2: "Basic channel-based menus", option3: "Basic/EPG menus", option4: "Often touch-based UI (not ideal for remote)", option5: "Optimized for remote, 'Discover' home" },
        { title: "App Compatibility", option1: "Amazon approved apps only", option2: "Limited to provider apps", option3: "Same as SD", option4: "Unrestricted app installs; some apps unoptimized", option5: "Certified apps; consistent performance" },
        { title: "Updates & Security", option1: "Regular via Amazon", option2: "Varies by provider", option3: "Varies", option4: "Inconsistent updates; often outdated versions", option5: "Regular Google-certified updates" },
        { title: "Connectivity", option1: "Wifi; sticks may support Ethernet via adapter", option2: "Ethernet/coax", option3: "Ethernet/coax", option4: "Wifi, USB ports; may include Ethernet", option5: "Wifi + Ethernet or dual-band; full LAN support" },
        { title: "Remote & Controls", option1: "Alexa Voice Remote", option2: "Infrared basic remote", option3: "Infrared", option4: "Varies; often generic remote", option5: "Remote with Google Assistant voice" },
        { title: "Picture Picture (PIP)", option1: "On Fire TV, selectable", option2: "Rare", option3: "Rare", option4: "May lack PIP support", option5: "PIP supported" },
        { title: "Cast / Mirroring", option1: "Miracast, limited AirPlay support", option2: "Usually not supported", option3: "Same", option4: "Full Google Cast, HDMI output", option5: "Full cast + Google assistant integration" },
        { title: "Price Range (approx.)", option1: "3・k (1080p to 4K sticks) ", option2: "1・k (provider-subsidized)", option3: "2・k", option4: "3・0k", option5: "5・k (e.g. Chromecast/Shield)" },
        { title: "Pros", option1: "Compact, Alexa, strong streaming performance", option2: "Simple, linear TV, low cost", option3: "HD TV support, broadcaster menus", option4: "Full Android freedom & APKs", option5: "Smooth UI, certified apps, Google ecosystem" },
        { title: "Cons", option1: "Amazon-locked, fewer sideload options", option2: "Dated UI, limited apps", option3: "Same as SD with higher cost", option4: "Potential instability, poor app support", option5: "Higher cost, slightly less flexibility outside Play Store" },
    ];
    const promoCardsData = [
        {
            id: 1,
            eyebrow: 'High-def? Def.',
            heading: 'Maximize your TV’s potential',
            description: 'Enjoy Full HD streaming and fast performance. Lose yourself in the scene with crisp clarity and vibrant detail — powered by Skyplay.',
            legal: 'HD availability depends on your TV and streaming service. Internet speed affects performance.',
            buttonLabel: '',
            image: '/assets/skyplay-iptv-hd-channels.jpg',
            ctaHref: '/',
            ctaText: 'Get started',
            color: ""
        },
        {
            id: 2,
            eyebrow: 'Alexa Voice Remote',
            heading: 'Just press and ask',
            description: 'Use your voice to search, play, and control content. With Alexa built-in, entertainment is just a command away.',
            legal: 'Voice features require Alexa-enabled remote and internet connection.',
            buttonLabel: '',
            image: '/assets/alexa-voice-remote.jpg',
            ctaHref: '/',
            ctaText: 'Explore now',
            color: "color-white"
        }
    ];

    const CotentImageCarouselData = [
        {
            image: "/assets/consistent-speed-reliable.jpg",
            subtitle: "Instant Entertainment",
            title: "Start Streaming in Seconds",
            description: `"Unbox, plug in, and dive into your favorite shows within minutes. No technical skills required—just pure entertainment."`,
            company: "",
            customer: "",
            cta: "See for yourself"
        },
        {
            image: "/assets/slider-image-1.jpg",
            subtitle: "Smarter Than a Remote",
            title: "Voice That Gets You",
            description: `"Say it, and it's done. Alexa on Fire TV understands your commands—no more endless scrolling or typing."`,
            company: "",
            customer: "",
            cta: "See for yourself"
        },
        {
            image: "/assets/slider-image-1.jpg",
            subtitle: "Entertainment Your Way",
            title: "Apps, Games & More",
            description: `"From binge-worthy series to casual games and music, Fire TV brings your whole digital world to one screen."`,
            company: "",
            customer: "",
            cta: "See for yourself"
        },
        {
            image: "/assets/slider-image-1.jpg",
            subtitle: "Upgrade Without Replacing",
            title: "Breathe Life into Any TV",
            description: `"Transform any old screen into a smart TV. With Fire TV, your existing setup becomes instantly future-ready."`,
            company: "",
            customer: "",
            cta: "Explore the flexibility"
        },
    ];

    const faqData = [
        {
            title: "Stream your favorite TV shows and movies",
            content:
                "Enjoy seamless streaming with our IPTV and OTT services. Watch live channels, on-demand movies, and exclusive content across multiple devices in HD and 4K quality with Skyplay.",
        },
        {
            title: "Plans for every household",
            content:
                "Skylink offers flexible broadband plans that fit every home and budget. Whether you're a casual browser or a high-data user, we have a reliable internet plan just for you.",
        },
        {
            title: "Entertainment for the whole family",
            content:
                "With Skylink’s OTT services, access kids shows, live sports, movies, and international content — all in one subscription. Set parental controls and stream worry-free for all age groups.",
        },
        {
            title: "Switch to Skylink hassle-free",
            content:
                "Ready to upgrade your connection? Switching to Skylink is easy. Keep your current setup or get new equipment installed at no extra cost with our quick activation and installation support.",
        },
        {
            title: "Get the latest in broadband and OTT",
            content:
                "Experience ultra-fast broadband with Skylink Fiber. Combine it with our curated OTT bundles to enjoy the latest content from top platforms and get the best in digital home entertainment.",
        },
    ];

    const faqContent = [
        {
            title: "What is Skylink Fire TV and how does it work?",
            content: "Skylink Fire TV is a plug-and-play streaming device that connects to your TV via HDMI, turning any screen into a smart entertainment hub. It gives you access to live TV, on-demand content, OTT apps, and more through the Skyplay interface."
        },
        {
            title: "What do I need to use Skylink Fire TV?",
            content: "All you need is a TV with an HDMI port and a stable internet connection. Simply plug in the Skylink Fire TV, connect to Wi-Fi, and start streaming your favorite content right away."
        },
        {
            title: "Does Skylink Fire TV come preloaded with OTT apps?",
            content: "Yes, it comes with a wide range of preloaded OTT apps including Netflix, Prime Video, Jio Hotstar, Zee5, Sony LIV, and many others. Some apps may require separate subscriptions."
        },
        {
            title: "Can I use voice control on Skylink Fire TV?",
            content: "Yes, Skylink Fire TV supports voice commands with its remote. You can search for content, control playback, and even open apps using voice for a hands-free experience."
        },
        {
            title: "Is Skylink Fire TV suitable for non-smart TVs?",
            content: "Absolutely. Skylink Fire TV turns any non-smart TV with an HDMI port into a full-featured smart TV, allowing access to internet-based content and apps."
        },
        {
            title: "Do I need a Skylink subscription to use the Fire TV?",
            content: "While the device works with popular OTT platforms, subscribing to Skylink's bundled plans gives you access to premium content, live channels, and additional app benefits without multiple logins."
        },
        {
            title: "Can I take my Skylink Fire TV while traveling?",
            content: "Yes, it's portable and can be used anywhere with a TV and internet connection. It remembers your login and settings, making it ideal for travel."
        },
        {
            title: "What kind of content is available through Skylink Fire TV?",
            content: "Skylink Fire TV offers a mix of live TV, OTT movies and series, kids content, news, regional channels, and international entertainment — all accessible from a single interface."
        },
        {
            title: "Is there any monthly fee for using Skylink Fire TV?",
            content: "The Fire TV itself is a one-time purchase, but access to certain content or bundled OTT platforms may require a subscription. Skyplay offers affordable combo plans with Fire TV and content access."
        },
        {
            title: "How do I set up the Skylink Fire TV?",
            content: "Plug the device into your TV’s HDMI port, power it on, connect to Wi-Fi, and follow the on-screen instructions. The setup takes just a few minutes and doesn't require technical skills."
        }
    ];
    const stepsData = [
        {
            id: 1,
            title: 'Plug & Power',
            description: 'Connect the Firestick to your TV’s HDMI port and plug the USB cable into a wall outlet for optimal performance.',
            link: '/',
            svg: (
                <svg aria-label="Icon number one" className="color-gray-800 svg-accent-att-blue" height="64" width="64"
                     role="img" viewBox="0 0 96 96">
                    <path className="svg-accent" d="M41 40.64l8.12-6.24H51V62h-2V36.76l-7 5.32z"/>
                    <path className="svg-base"
                          d="M48 86a38 38 0 1138-38 38 38 0 01-38 38zm0-74a36 36 0 1036 36 36 36 0 00-36-36z"/>
                </svg>
            )
        },
        {
            id: 2,
            title: 'Get Connected',
            description: 'Switch your TV to the correct HDMI input. Pair your remote (usually automatic), then connect to your Wi-Fi network.',
            link: '/activate',
            svg: (
                <svg aria-label="icon number two" className="color-gray-800 svg-accent-att-blue" height="64" width="64"
                     role="img" viewBox="0 0 96 96">
                    <path className="svg-base"
                          d="M48 86a38 38 0 1138-38 38 38 0 01-38 38zm0-74a36 36 0 1036 36 36 36 0 00-36-36z"/>
                    <path className="svg-accent" d="M40.66 62v-1.48..."/>
                </svg>
            )
        },
        {
            id: 3,
            title: 'Sign In & Personalize',
            description: 'Sign in to your Amazon account and adjust display settings for the best resolution under Settings > Display & Sounds.',
            link: '/add-line',
            svg: (
                <svg aria-label="icon number three" className="color-gray-800 svg-accent-att-blue" height="64"
                     width="64" role="img" viewBox="0 0 96 96">
                    <path className="svg-base" d="M48 86..."/>
                    <path className="svg-accent" d="M47.46 62.4a12.64..."/>
                </svg>
            )
        },
        {
            id: 4,
            title: 'Install Your Favorites',
            description: 'Download top streaming apps like Prime Video, Netflix, and YouTube to start enjoying your Firestick.',
            link: '/upgrade',
            svg: (
                <svg aria-label="icon number four" className="color-gray-800 svg-accent-att-blue" height="64" width="64"
                     role="img" viewBox="0 0 96 96">
                    <path className="svg-base" d="M48 86..."/>
                    <path className="svg-accent" d="M51 61v-7.12..."/>
                </svg>
            )
        },
    ];

    // Generate service structured data
    const firestickServiceData = getServiceStructuredData({
        name: "Skylink Firestick Streaming Services",
        description: "Stream content from thousands of apps like Netflix, Prime Video, Hotstar, and more with Skylink's Firestick service. 4K streaming quality available.",
        serviceType: "StreamingService",
        url: "http://stage.skylink.net.in:3000/firestick"
    });

    // Generate breadcrumb structured data
    const breadcrumbData = getBreadcrumbStructuredData([
        {name: "Home", url: "http://stage.skylink.net.in:3000"},
        {name: "Products", url: "http://stage.skylink.net.in:3000/products"},
        {name: "Firestick", url: "http://stage.skylink.net.in:3000/firestick"}
    ]);

    return (
        <>
            <VideoBanner></VideoBanner>
            <VideoTabs></VideoTabs>
            {/*<StepByStepComponent steps={stepsData}></StepByStepComponent>*/}
            {/*<IconMoreDetails title={{*/}
            {/*  eyebrow: 'Experience Skylink Firestick AssuranceGetting Started with Skylink Firestick',*/}
            {/*  heading: 'Here’s how it works',*/}
            {/*  description: "We’ve got your back — or we’ll make it right. Eligible Skylink customers are proactively covered by the Skylink Guarantee at no extra charge."*/}
            {/*}} content={iconMoreDetailcontent} />*/}
            <ComparisonTable
                heading="Zero Touch Installation"
                subtitle="Streaming starts with the Skylink Fire TV — just plug, play, and dive into a world of entertainment. It's the simplest way to turn any TV into a smart experience powered by Skyplay."
                providers={providersData}
                content={tablecontent}
            />
            <NormalTabs></NormalTabs>
            <TwoColumnSection title="Experience the Skylink Promise" promoCards={promoCardsData} />
            <TitleComponent title={'See how the Skylink Fire TV <br /> makes your entertainment seamless'} ></TitleComponent>
            <ContentandImageCarousel slidesData={CotentImageCarouselData} />
            <Faq title="You’ve asked. We’ve answered." content={faqContent} />
            {/* <SingleFaq content={faqData} /> */}
            <StructuredData data={firestickServiceData}/>
            <StructuredData data={breadcrumbData}/>
        </>
    )
}
