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
    { title: "Plans", url: "/plans" },
    { title: "Contact Us", url: "/contact-us" },
  ];

  const buttons = [
    {
      label: "Download IPTV App",
      href: "https://www.skylink.net.in/wp-content/uploads/large-files/skyplaytv.apk",
      color: "bg-gradient-to-r from-[#E91A2F] to-[#E91A2F]",
      download: true,
      icon: (
        <Image
          src="/newassets/navbar/icons/play.png"
          alt="Play Icon"
          width={24}
          height={24}
          className="w-5 h-5 object-contain"
        />
      ),
    },
    {
      label: "Claim Your TV/OTT",
      href: "https://activations.skyplay.in/ott_subscription/login/",
      color: "bg-gradient-to-r from-[#4285F4] to-[#4285F4]",
      icon: (
        <Image
          src="/newassets/navbar/icons/ott.png"
          alt="Play Icon"
          width={24}
          height={24}
          className="w-5 h-5 object-contain"
        />
      ),
    },
    {
      label: "Quick Pay",
      href: "https://www.skylinknet.in/customer_portal/account/sn",
      color: "bg-gradient-to-r from-[#F4B402] to-[#F4B402]",
      icon: (
        <Image
          src="/newassets/navbar/icons/pay.png"
          alt="Play Icon"
          width={24}
          height={24}
          className="w-5 h-5 object-contain"
        />
      ),
    },
    {
      label: "View Our Plans",
      href: "/plans", // internal route -> should open in same page
      color: "bg-gradient-to-r from-[#2A9D57] to-[#2A9D57]",
      icon: (
        <Image
          src="/newassets/navbar/icons/plan.png"
          alt="Play Icon"
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      ),
    },
  ];

  const isActive = (url) => pathname === url;
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const checkWidth = () => {
        const isMobileView = window.innerWidth < 1024;
        setIsMobile(isMobileView);

        // Close drawer when switching to desktop view
        if (!isMobileView && isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };

      checkWidth();
      window.addEventListener("resize", checkWidth);
      return () => window.removeEventListener("resize", checkWidth);
  }, [isDrawerOpen]);  // Add isDrawerOpen as dependency

  useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      style.textContent = `
        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {/* ✅ Mobile Top Buttons */}
      {isMobile && (
        <div className="grid grid-cols-4 w-full m-0 p-0">
          {buttons.map((btn, idx) => {
            const isInternal = btn.href.startsWith("/");
            return (
              <Link
                key={idx}
                href={btn.href}
                download={btn.download}
                target={isInternal || btn.download ? undefined : "_blank"}
                className={`${btn.color} flex items-center justify-center text-center text-white text-[11px] font-medium min-h-[60px] h-[60px] px-1 text-wrap leading-tight transition-all duration-300 hover:brightness-90 hover:-translate-y-[1px] hover:shadow-md w-full`}
              >
                {btn.icon ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-6 flex items-center justify-center">
                      {btn.icon}
                    </div>
                    <span className="text-center px-1 break-words text-[10px] mt-1 text-shadow">
                      {btn.label}
                    </span>
                  </div>
                ) : (
                  <span className="text-center px-1 break-words text-shadow">
                    {btn.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-3 px-4 lg:px-4">
        {/* LEFT SECTION: Logo + Menu Toggle */}
        <div className="flex items-center justify-between w-full lg:w-auto lg:pl-2">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity duration-200 lg:-ml-14"
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

          {/* Hamburger Menu (Mobile) */}
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

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-6 lg:ml-8">
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

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2 lg:ml-auto lg:-mr-14">
          {buttons.map((btn, idx) => {
            const isInternal = btn.href.startsWith("/");
            return (
              <Link
                key={idx}
                href={btn.href}
                download={btn.download}
                target={isInternal || btn.download ? undefined : "_blank"}
                className={`${btn.color} text-white text-sm font-medium rounded-[1rem] px-3 py-1.5 transition-all duration-300 hover:brightness-95 hover:-translate-y-[1px] hover:shadow-lg h-[36px] min-w-[126px] flex items-center justify-center group overflow-hidden relative border border-white/10 backdrop-blur-sm`}
              >
                  <>
                      {btn.icon ? (
                          <div className="flex items-center justify-center z-10">
                      <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                        {btn.icon}
                      </span>
                              <span className="ml-2 text-sm text-shadow">
                        {btn.label}
                      </span>
                          </div>
                      ) : (
                          <span className="text-center text-sm text-shadow z-10">
                      {btn.label}
                    </span>
                      )}
                      <div
                          className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[1rem]"></div>
                      <div
                          className="absolute inset-x-0 top-0 h-[1px] bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-[-100%] ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo */}
        <div className="bg-gray-50 py-4 px-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div className="w-32">
              <Image
                src={SiteImg}
                alt="Skylink Logo"
                width={120}
                height={35}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>
            <button
              onClick={toggleDrawer}
              aria-label="Close"
              className="text-gray-500 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Drawer Menu Links */}
        <nav className="flex flex-col py-4">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={toggleDrawer}
              className={`text-base font-medium px-6 py-3 transition-colors border-l-4 ${
                isActive(item.url)
                  ? "text-red-600 font-semibold border-red-600 bg-gray-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50 border-transparent hover:border-red-200"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div className="px-6 py-4 border-t border-gray-100 mt-auto">
          <p className="text-sm text-gray-500 mb-3 font-medium">
            Quick Actions
          </p>
          <div className="grid grid-cols-2 gap-2">
            {buttons.slice(0, 2).map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                download={btn.download}
                target="_blank"
                onClick={toggleDrawer}
                className={`${btn.color} text-white text-sm font-medium rounded-md p-3 flex flex-col items-center justify-center text-center`}
              >
                <span className="w-5 h-5 mb-1">{btn.icon}</span>
                <span className="text-xs text-shadow">{btn.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for Drawer */}
        <div
            onClick={toggleDrawer}
            className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} lg:hidden`}
        ></div>

      {/* Floating Action Buttons - Hidden on Mobile */}
      <div className="fixed right-4 bottom-36 lg:right-8 lg:top-52 h-32 w-[230px] z-40 hidden lg:block pointer-events-none">
        {/* Download IPTV App Button */}
        <div className="absolute top-0 right-0 z-20 group pointer-events-auto">
          <Link
            href={buttons[0].href}
            download={buttons[0].download}
            target="_blank"
            className={`${buttons[0].color} text-white p-2.5 rounded-full shadow-lg flex items-center w-12 h-12 lg:hover:w-[210px] lg:hover:pl-3 lg:hover:pr-1 overflow-hidden transition-all duration-300`}
            title={buttons[0].label}
          >
              <div className="flex items-center w-full">
                  <div className="flex-shrink-0">
                      <Image
                          src="/newassets/navbar/icons/play.png"
                          alt="Play Icon"
                          width={26}
                          height={26}
                          className="w-6 h-6"
                      />
                  </div>
                  <span
                      className="ml-3 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium text-shadow">
                {buttons[0].label}
              </span>
              </div>
          </Link>
        </div>

          {/* Claim Your TV/OTT Button */}
          <div className="absolute top-16 right-0 z-10 group pointer-events-auto">
              <Link
                  href={buttons[1].href}
                  target="_blank"
                  className={`${buttons[1].color} text-white p-2.5 rounded-full shadow-lg flex items-center w-12 h-12 lg:hover:w-[210px] lg:hover:pl-3 lg:hover:pr-1 overflow-hidden transition-all duration-300`}
            title={buttons[1].label}
          >
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <Image
                  src="/newassets/navbar/icons/ott.png"
                  alt="Play Icon"
                  width={26}
                  height={26}
                  className="w-6 h-6"
                />
              </div>
              <span className="ml-3 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium text-shadow">
                {buttons[1].label}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
