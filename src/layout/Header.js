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
      color: "bg-gradient-to-r from-[#E91A2F] to-[#E91A2F]",
      download: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"/>
            </svg>
        ),
    },
    {
      label: "Claim Your TV/OTT",
      href: "https://activations.skyplay.in/ott_subscription/login/",
      color: "bg-gradient-to-r from-[#4285F4] to-[#4285F4]",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.5 6h-15v9h15V6z"/>
                <path fillRule="evenodd"
                      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                      clipRule="evenodd"/>
            </svg>
        ),
    },
    {
      label: "Quick Pay",
      href: "https://www.skylinknet.in/customer_portal/account/sn",
      color: "bg-gradient-to-r from-[#F4B402] to-[#F4B402]",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                    d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"/>
                <path fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a3.833 3.833 0 001.72-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178a3.833 3.833 0 00-1.719-.756V8.334c.376.1.733.27 1.025.478l.927.696a.75.75 0 00.9-1.2l-.927-.696A4.33 4.33 0 0012.75 6z"
                      clipRule="evenodd"/>
            </svg>
        ),
    },
    {
      label: "View Our Plans",
      href: "/new_plans", // internal route -> should open in same page
      color: "bg-gradient-to-r from-[#2A9D57] to-[#2A9D57]",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                    d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"/>
            </svg>
        ),
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
                  {btn.icon ?
                      <div className="flex flex-col items-center justify-center">
                          {btn.icon}
                          <span className="text-center px-1 break-words text-[10px] mt-1">{btn.label}</span>
                      </div> :
                      <span className="text-center px-1 break-words">{btn.label}</span>
                  }
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
                className={`${btn.color} text-white text-sm font-medium rounded-md px-3 py-1.5 transition-all duration-300 hover:brightness-90 hover:-translate-y-[1px] hover:shadow-md h-[36px] min-w-[126px] flex items-center justify-center`}
              >
                  {btn.icon ?
                      <div className="flex items-center justify-center">
                          <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">{btn.icon}</span>
                          <span className="ml-2 text-sm">{btn.label}</span>
                      </div> :
                      <span className="text-center text-sm">{btn.label}</span>
                  }
              </Link>
            );
          })}
        </div>
      </div>

        {/* Mobile Drawer */}
      <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                           strokeWidth="2" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
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
              <p className="text-sm text-gray-500 mb-3 font-medium">Quick Actions</p>
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
                          <span className="text-xs">{btn.label}</span>
                      </Link>
                  ))}
              </div>
          </div>
      </div>

        {/* Overlay for Drawer */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        ></div>
      )}

        {/* ✅ Floating Action Buttons - Hidden on Mobile */}
        <div className="fixed right-4 bottom-36 lg:right-8 lg:top-52 h-32 w-[210px] z-40 hidden lg:block">
            {/* Download IPTV App Button */}
            <div className="absolute top-0 right-0 z-20 group">
                <Link
                    href={buttons[0].href}
                    download={buttons[0].download}
                    target="_blank"
                    className={`${buttons[0].color} text-white p-3 rounded-full shadow-lg flex items-center w-12 h-12 lg:hover:w-[210px] overflow-hidden transition-all duration-300`}
                    title={buttons[0].label}
                >
                    <div className="flex items-center w-full">
                        <div className="flex-shrink-0">{buttons[0].icon}</div>
                        <span
                            className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                          {buttons[0].label}
                        </span>
                    </div>
                </Link>
            </div>

            {/* Claim Your TV/OTT Button */}
            <div className="absolute top-16 right-0 z-10 group">
                <Link
                    href={buttons[1].href}
                    target="_blank"
                    className={`${buttons[1].color} text-white p-3 rounded-full shadow-lg flex items-center w-12 h-12 lg:hover:w-[210px] overflow-hidden transition-all duration-300`}
                    title={buttons[1].label}
                >
                    <div className="flex items-center w-full">
                        <div className="flex-shrink-0">{buttons[1].icon}</div>
                        <span
                            className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                          {buttons[1].label}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  );
}
