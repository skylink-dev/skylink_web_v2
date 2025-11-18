"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function BeforeFooter() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuList = [
    {
      title: "Internet & Broadband Deals",
      submenu: [
        { name: "Broadband plans & offers", link: "/" },
        { name: "High-speed fiber internet", link: "/" },
        { name: "Unlimited data plans", link: "/" },
        { name: "Home Wi-Fi setup", link: "/" },
        { name: "Broadband & OTT bundle deals", link: "/" },
        { name: "Broadband & IPTV combo offers", link: "/" },
      ],
    },
    {
      title: "IPTV & TV Services",
      submenu: [
        { name: "Live TV channels", link: "/" },
        { name: "IPTV plans & packages", link: "/" },
        { name: "TV & broadband bundles", link: "/" },
        { name: "Regional language packs", link: "/" },
        { name: "Set-top box offers", link: "/" },
      ],
    },
    {
      title: "OTT Subscriptions & Combos",
      submenu: [
        { name: "OTT platform bundles", link: "/" },
        { name: "Broadband + OTT combos", link: "/" },
        { name: "Free OTT with broadband", link: "/" },
        { name: "Top OTT apps (Netflix, Prime, Hotstar)", link: "/" },
        { name: "Entertainment combos", link: "/" },
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 before-footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuList.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3
                className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center border-b pb-2"
                onClick={() => isMobile && toggleAccordion(index)}
              >
                {item.title}
                {isMobile && (
                  <span className="text-2xl font-bold text-gray-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                )}
              </h3>

              {(openIndex === index || !isMobile) && (
                <ul className="space-y-2 mt-3">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex}>
                      <Link
                        href={subitem.link}
                        className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                      >
                        {subitem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
