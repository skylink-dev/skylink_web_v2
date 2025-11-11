"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SiteImg from "../assets/skylink logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menu = [
    { title: "Home", url: "/" },
    { title: "Internet", url: "/internet" },
    { title: "TV", url: "/tv" },
    { title: "OTT", url: "/ott" },
    { title: "Support", url: "/support" },
    { title: "Plans", url: "/new_plans" },
    { title: "Contact Us", url: "/contact-us" },
  ];

  const buttons = [
    {
      label: "Download IPTV App",
      href: "https://www.skylink.net.in/wp-content/uploads/large-files/skyplaytv.apk",
      color:
        "bg-gradient-to-r from-[#E91A2F] to-[#E91A2F] inset-shadow-red-900/50 inset-shadow-sm  ",
      download: true,
    },
    {
      label: "Claim Your TV/OTT",
      href: "https://activations.skyplay.in/ott_subscription/login/",
      color:
        "bg-gradient-to-r from-[#4285F4] to-[#4285F4] inset-shadow-green-900/50 inset-shadow-sm ",
    },
    {
      label: "Quick Pay",
      href: "https://www.skylinknet.in/customer_portal/account/sn",
      color:
        "bg-gradient-to-r from-[#F4B402] to-[#F4B402] inset-shadow-yellow-900/50 inset-shadow-sm ",
    },
    {
      label: "View Our Plans",
      href: "/new_plans",
      color:
        "bg-gradient-to-r from-[#2A9D57] to-[#2A9D57] inset-shadow-blue-900/50 inset-shadow-sm  ",
    },
  ];

  const isActive = (url) => pathname === url;
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {isMobile ? (
        <div className="grid grid-cols-4 w-full m-0 p-0">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              download={btn.download}
              target={btn.download ? undefined : "_blank"}
              className={`${btn.color} 
              flex items-center justify-center text-center text-white text-[11px] font-medium 
              min-h-[60px] h-[60px] px-1 text-wrap leading-tight 
              transition-all duration-300 hover:brightness-90 hover:-translate-y-[1px] hover:shadow-md
              w-full`} // Added w-full for equal width
            >
              <span className="text-center px-1 break-words">{btn.label}</span>
            </Link>
          ))}
        </div>
      ) : null}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-3 px-4 lg:px-6">
        {/* LEFT SECTION: Logo + Menu */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* ✅ Logo */}
          <Link
            href="/"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
          >
            <Image
              src={SiteImg}
              alt="Skylink Logo"
              width={140}
              height={40}
              className="h-auto w-auto max-w-[140px] object-contain"
              priority
            />
          </Link>

          {/* ✅ Hamburger for Mobile */}
          <button
            onClick={toggleDrawer}
            aria-label="Menu"
            className="lg:hidden p-2 text-gray-800 hover:text-red-600 focus:outline-none transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {/* ✅ Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={`text-gray-800 text-sm font-medium transition-all duration-200 hover:text-red-600 ${
                isActive(item.url)
                  ? "text-red-600 border-b-2 border-red-600 pb-[2px]"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* ✅ Desktop Buttons - Equal size */}
        <div className="hidden lg:flex items-center gap-2">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              download={btn.download}
              target={btn.download ? undefined : "_blank"}
              className={`${btn.color} text-white text-sm font-medium rounded-md px-3 py-2 transition-all duration-300 hover:brightness-90 hover:-translate-y-[1px] hover:shadow-md min-h-[40px] h-[40px] min-w-[120px] flex items-center justify-center text-center`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={toggleDrawer}
            aria-label="Close"
            className="text-2xl text-gray-700 hover:text-red-600 transition"
          >
            &times;
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col space-y-4">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={toggleDrawer}
              className={`text-base font-medium px-2 py-1 rounded transition-colors ${
                isActive(item.url)
                  ? "text-red-600 font-semibold"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Drawer Buttons */}
        {/* <div className="mt-6 flex flex-col gap-3">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              download={btn.download}
              target={btn.download ? undefined : "_blank"}
              className={`${btn.color} text-white text-sm font-medium text-center rounded-md py-2 transition-all hover:brightness-90`}
            >
              {btn.label}
            </Link>
          ))}
        </div> */}
      </div>

      {/* ✅ Overlay for Drawer */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        ></div>
      )}
    </header>
  );
}