'use client';
import SiteLogo from '@/components/SiteLogo'
import React, { useEffect, useState } from 'react'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'

export default function Footer() {
    const [footerMenu, setFootermenu] = useState([
    // {
    //     title: "Skylink",
    //     menus: [
    //         { title: "About Us", url: "/about" },
    //         { title: "Find a Store", url: "/" },
    //         { title: "Newsroom", url: "/" },
    //         { title: "Investor Relations", url: "/" },
    //         { title: "Careers", url: "/" },
    //         { title: "Contact Support", url: "/" },
    //         { title: "Skylink Guarantee", url: "/" }
    //     ]
    // },
    // {
    //     title: "Services",
    //     menus: [
    //         { title: "Broadband Plans", url: "/" },
    //         { title: "IPTV Packages", url: "/" },
    //         { title: "OTT Subscriptions", url: "/" },
    //         { title: "Plan Upgrades", url: "/" },
    //         { title: "Parental Controls", url: "/" },
    //         { title: "Home Surveillance", url: "/" },
    //         { title: "IoT Services", url: "/" }
    //     ]
    // },
    // {
    //     title: "Help & Support",
    //     menus: [
    //         { title: "Installation Guide", url: "/" },
    //         { title: "Troubleshooting", url: "/" },
    //         { title: "FAQs", url: "/" },
    //         { title: "Billing & Payments", url: "/" },
    //         { title: "Network Status", url: "/" },
    //         { title: "Device Compatibility", url: "/" },
    //         { title: "Customer Care", url: "/" }
    //     ]
    // },
    // {
    //     title: "Resources",
    //     menus: [
    //         { title: "Speed Test", url: "https://skylinkfiber.speedtestcustom.com/" },
    //         { title: "Coverage Areas", url: "/" },
    //         { title: "Download Channel List", url: "/" },
    //         { title: "Compare Plans", url: "/" },
    //         { title: "Broadband Facts", url: "/" },
    //         { title: "What is IPTV?", url: "/" },
    //         { title: "How OTT Works", url: "/" }
    //     ]
    // },
    // {
    //     title: "Legal & Policy",
    //     menus: [
    //         { title: "Privacy Policy", url: "/policy" },
    //         { title: "Refund Policy", url: "/refund" },
    //         { title: "Subscription Contract", url: "/subscription-contract" },
    //         { title: "Whistleblower Policy", url: "/whistleblower-policy" }
    //     ]
    // }
]);
    const [footerBottomMenu, setFooterBottomMenu] = useState([
    { title: "Site Map", url: "/" },
    { title: "Coverage Map", url: "/" },
    { title: "Privacy Policy", url: "/policy" },
    { title: "Terms of Use", url: "/" },
    { title: "Broadband Details", url: "/" },
    { title: "Accessibility", url: "/" },
    { title: "Advertising Preferences", url: "/" },
    { title: "Legal Policy Center", url: "/" },
    { title: "Cybersecurity", url: "/" },
    { title: "FCC Public Files", url: "/" }
]);
    const [openIndex, setOpenIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return (
        <footer>
            <div id="top-panel" className="hydrated">
                <div id="z5-footer-v2-top-panel" className="full-width-background bg-att-blue">
                    <div className="container">
                        <div className="row">
                            <div className="att-consumer-logo grid-col-12 flex-row flex-items-center justify-between">
                                <SiteLogo></SiteLogo>
                                <div className="flex-row gap16 gap8-sm">
                                    <Link className="round footer-social-link flex flex-items-center justify-center color-white" href="https://x.com/skylinkfiber" target="_blank">
                                        <XIcon></XIcon>
                                    </Link>
                                    <Link className="round footer-social-link flex flex-items-center justify-center color-white" href="https://www.facebook.com/skylinkfibernetindia/" target="_blank">
                                        <FacebookIcon></FacebookIcon>
                                    </Link>
                                    <Link className="round footer-social-link flex flex-items-center justify-center color-white" href="https://www.instagram.com/skylinkfibernet/" target="_blank">
                                        <InstagramIcon></InstagramIcon>
                                    </Link>
                                    <Link className="round footer-social-link flex flex-items-center justify-center color-white" href="https://in.linkedin.com/company/skylink-fibernet" target="_blank">
                                        <LinkedInIcon></LinkedInIcon>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-width-background bg-att-blue-000 pad-b-xs" id="z5-footer-v2-shell">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="grid-col-12 flex-column pad-b-xs">
                            <div id="z5-linkbarn-v2">
                                <div className="auto-wrap-5up">
                                    {footerMenu.map((item, index) => (
                                        <div key={index} className="grid- pad-l-none pad-r-none border-gray-300 border-top">
                                            <h3 id={`h3-title-1${index}`} className="heading-xs flex flex-items-center justify-between-md justify-between-sm" onClick={() => isMobile && toggleAccordion(index)}>
                                                <span className="type-16 css-bold">{item.title}</span>
                                                {isMobile && (
                                                    <span className="arrow">{openIndex === index ? '−' : '+'}</span>
                                                )}
                                            </h3>
                                            {(openIndex === index || !isMobile) && (
                                                <div className='pad-t-xs'>
                                                    <ul className="flex-column gap16">
                                                        {item.menus.map((objItem, objIndex) => (
                                                            <li key={objIndex}>
                                                                <Link className="link-text solo font-regular type-sm line-h-tight" href={objItem.url}>
                                                                    {objItem.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid-col-12 flex-column pad-t-none pad-b-xs">
                            <div className="hr-rule color-gray-300 mar-t-sm-all mar-b-sm-all hide-sm hide-md">
                                <hr aria-hidden="true" />
                            </div>
                            <div className="hydrated">
                                <div id="z5-footer-v2-resources-links" style={{"display":"none"}}>
                                    <ul className="flex-lg flex-column-md flex-column-sm col-gap24 row-gap16 mar-t-sm-sm mar-t-md-md">
                                        <li>
                                            <Link href="/" className="link-text solo type-xs css-bold">Techbuzz blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="link-text solo type-xs css-bold">Techbuzz blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/" className="link-text solo type-xs css-bold">Techbuzz blog</Link>
                                        </li>
                                    </ul>
                                    <div className="hr-rule color-gray-300 footer-spacer-rule" style={{ "color": "transparent", "marginTop": "8px" }}><hr className="hide-lg" aria-hidden="true" /></div>
                                </div>
                            </div>
                            <div className="hydrated">
                                <div id="z5-footer-v2-legal-links">
                                    <ul className='flex flex-wrap col-gap24 row-gap8 block-md block-sm columns2'>
                                        {footerBottomMenu.map((item, index) => (
                                            <li key={index} className="mar-b-xs-md mar-b-xs-sm">
                                                <Link href={item.url} className="link-text solo font-regular type-xs">{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="hydrated">
                                <div id="z5-footer-v2-disclaimer">
                                    <p className="type-xxs mar-t-sm-all">
                                        © 2025 Skylink Intellectual Property. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
