"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menu] = useState([
    { title: "Home", url: "/" },
    { title: "Internet", url: "/internet" },
    { title: "TV", url: "/tv" },
    { title: "OTT", url: "/ott" },
    { title: "Support", url: "/support" },
    { title: "Plans", url: "/plans" },
    { title: "Contact Us", url: "/contact-us" },
  ]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const isActive = (url) => pathname === url;

  return (
    <>
      {/* ✅ Mobile Hamburger */}
      <div className=" lg:hidden">
        <button
          onClick={toggleDrawer}
          aria-label="Menu"
          className="p-2 text-gray-800 hover:text-red-600 focus:outline-none transition-colors"
        >
          {/* Hamburger icon */}
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

      {/* ✅ Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
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

        {/* Drawer Menu Links */}
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
      </div>

      {/* ✅ Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-6">
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
      </div>

      {/* ✅ Overlay (to close drawer when clicking outside) */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
}
