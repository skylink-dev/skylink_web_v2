'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function MainMenu() {
    const pathname = usePathname();
    const [menu, setMenu] = useState([{title:"Internet", url:"/internet"}, {title:"TV", url:"/tv"}, {title:"OTT", url:"/ott"}, {title:"Support", url:"/support"}, {title:"Plans", url:"/plans"},  {title:"Contact Us", url:"/contact-us"} ]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const isActive = (url) => pathname === url;
    return (
        <>
            <div className='main-menu hidden'>
                <div className='inline-flex height-full flex-items-center type-14 '>
                    <button   onClick={toggleDrawer} id="z1_hamburger_button" className="inline-flex height-sm-all pad-l-xs pad-r-xs color-black border-left border-light-gray false" data-slide-animation="from-left" role="button" tabIndex="0" aria-expanded="false" aria-haspopup="true" aria-controls="z1_menu_wrapper" aria-label="Menu"><span className="z1_hamburger_icon full-width-background bg-black" aria-hidden="true"><span id="z1_hamburger_label" aria-hidden="true">Menu</span></span></button>
                </div>
            </div>
                <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 transition-transform duration-300 linear
    ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`} id="drawyer-menu">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={toggleDrawer}
                            className="text-black text-2xl"
                            aria-label="Close"
                            id="closeButton"
                        >
                            &times;
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        {menu.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className={`mobile-menu-style ${isActive(item.url) ? 'active' : ''}`}
                                onClick={toggleDrawer}
                             >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            <div className="flex flex-items-center hidden-tablet hidden-mobile hydrated">
                <div className="inline-flex rel height-sm-all flex-centered">
                    {menu.map((item, index) => (
                        <Link key={index} href={item.url} 
                        className={`z1_hover_link inline-flex rel color-ui-black flex-centered pad-r-xxxs mar-r-xs no-hover ${isActive(item.url) ? 'active' : ''}`}                                                    >
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
