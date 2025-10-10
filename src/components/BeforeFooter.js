'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function BeforeFooter() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust if needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <div className="full-width-background bgcolor theme-neutral-bg bg-gray-200 bg-white pad-t-lg pad-b-lg before-footer">
      <div className="container">
        <div className="row">
          <div className="text-center pad-t-none pad-b-none grid-col-12">
            <h2 className="heading-xxl"></h2>
          </div>
        </div>
        <div className="row justify-center pad-t-lg">
          {menuList.map((item, index) => (
            <div
              key={index}
              className="linkfarmUL pad-t-none pad-b-none rel grid-col-4-md grid-col-3"
            >
              <h3
                className="mar-b-sm heading-sm cursor-pointer flex justify-between items-center"
                onClick={() => isMobile && toggleAccordion(index)}
              >
                {item.title}
                {isMobile && (
                  <span className="text-lg">{openIndex === index ? '−' : '+'}</span>
                )}
              </h3>

              {/* Show submenu only if active or on desktop */}
              {(openIndex === index || !isMobile) && (
                <ul className="bullets type-sm">
                  {item.submenu.map((subitem, subindex) => (
                    <li
                      key={subindex}
                      className="font-regular linkfarmLI pad-t-xxs pad-b-xxs mar-b-none"
                    >
                      <Link href={subitem.link} className="link-text2">
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
    </div>
  );
}
