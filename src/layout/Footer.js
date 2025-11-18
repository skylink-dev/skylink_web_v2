"use client";
import SiteLogo from "@/components/SiteLogo";
import React, { useEffect, useState } from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function Footer() {
  const [footerMenu, setFootermenu] = useState([
    // {
    //   title: "Skylink",
    //   menus: [
    //     { title: "About Us", url: "/about" },
    //     { title: "Find a Store", url: "/" },
    //     { title: "Newsroom", url: "/" },
    //     { title: "Investor Relations", url: "/" },
    //     { title: "Careers", url: "/" },
    //     { title: "Contact Support", url: "/" },
    //     { title: "Skylink Guarantee", url: "/" },
    //   ],
    // },
    // {
    //   title: "Services",
    //   menus: [
    //     { title: "Broadband Plans", url: "/" },
    //     { title: "IPTV Packages", url: "/" },
    //     { title: "OTT Subscriptions", url: "/" },
    //     { title: "Plan Upgrades", url: "/" },
    //     { title: "Parental Controls", url: "/" },
    //     { title: "Home Surveillance", url: "/" },
    //     { title: "IoT Services", url: "/" },
    //   ],
    // },
    // {
    //   title: "Help & Support",
    //   menus: [
    //     { title: "Installation Guide", url: "/" },
    //     { title: "Troubleshooting", url: "/" },
    //     { title: "FAQs", url: "/" },
    //     { title: "Billing & Payments", url: "/" },
    //     { title: "Network Status", url: "/" },
    //     { title: "Device Compatibility", url: "/" },
    //     { title: "Customer Care", url: "/" },
    //   ],
    // },
    // {
    //   title: "Resources",
    //   menus: [
    //     {
    //       title: "Speed Test",
    //       url: "https://skylinkfiber.speedtestcustom.com/",
    //     },
    //     { title: "Coverage Areas", url: "/" },
    //     { title: "Download Channel List", url: "/" },
    //     { title: "Compare Plans", url: "/" },
    //     { title: "Broadband Facts", url: "/" },
    //     { title: "What is IPTV?", url: "/" },
    //     { title: "How OTT Works", url: "/" },
    //   ],
    // },
    // {
    //   title: "Legal & Policy",
    //   menus: [
     
    //   ],
    // },
  ]);

  const [footerBottomMenu, setFooterBottomMenu] = useState([
      {title: "Site Map", url: "/sitemap"},
    { title: "Coverage Map", url: "/" },
     { title: "Privacy Policy", url: "/policy" },
        { title: "Refund Policy", url: "/refund" },
        { title: "Subscription Contract", url: "/subscription-contract" },
        { title: "Whistleblower Policy", url: "/whistleblower-policy" },
    { title: "Terms of Use", url: "/" },
    { title: "Broadband Details", url: "/" },
    { title: "Legal Policy Center", url: "/" },
    { title: "Cybersecurity", url: "/" },
    { title: "FCC Public Files", url: "/" },
  ]);

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
          <SiteLogo />
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://x.com/skylinkfiber"
              target="_blank"
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
            >
              <XIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.facebook.com/skylinkfibernetindia/"
              target="_blank"
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
            >
              <FacebookIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.instagram.com/skylinkfibernet/"
              target="_blank"
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
            >
              <InstagramIcon fontSize="small" />
            </Link>
            <Link
              href="https://in.linkedin.com/company/skylink-fibernet"
              target="_blank"
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"
            >
              <LinkedInIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto  py-10">
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

        {/* <div className="my-8 border-t border-slate-700"></div> */}

        {/* Bottom Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-400">
          {footerBottomMenu.map((item, index) => (
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

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © 2025 Skylink Intellectual Property. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
