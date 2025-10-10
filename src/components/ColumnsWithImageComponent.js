'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image"
import Link from 'next/link';

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <button
                className="btn-reset touch-space"
                aria-label="Previous"
            >
                <span className="inline-flex flex-centered round border color-white border-gray-400 color-gray-400 underlay-icon-bg width-lg-all height-lg-all">
                    <svg className="height-sm-all width-sm-all color-gray-400" focusable="false" height="24" width="24" viewBox="0 0 32 32">
                        <path d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z"></path>
                    </svg>
                </span>
            </button>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <button
                className="btn-reset touch-space"
                aria-label="Next"
            >
                <span className="inline-flex flex-centered round border rotate180 color-white border-cobalt-600 color-cobalt-600 bg-transparent width-lg-all height-lg-all">
                    <svg className="height-sm-all width-sm-all color-cobalt-600" focusable="false" height="24" width="24" viewBox="0 0 32 32">
                        <path d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z"></path>
                    </svg>
                </span>
            </button>
        </div>
    );
};

const slidesData = [
    {
        title: "Skyplay Business Fiber",
        subtitle: "Get up to 3 months* free",
        description: "Plus, we will cover your early termination fee up to ₹750** when switching from another provider.",
        legal: "*1 month with 300M; 2 months with 500M; 3 months with 1 GIG+. Fees extra. **Card redemption & proof of eligibility required. Ltd availability/areas.",
        imgSrc: "/assets/skyplay-business-fiber-connection-1.jpg",
        link: "/buy/internet/plans?customer_type=smallbusiness"
    },
    {
    title: "₹699 Triple Play Bundle",
    subtitle: "IPTV + OTT + Internet + WiFi",
    description: "Enjoy seamless entertainment and connectivity with Skyplay's ₹699 combo plan. Includes high-speed internet, IPTV with HD channels, premium OTT apps, and easy home WiFi setup.",
    legal: "Offer valid in select cities only. Internet speed and OTT availability may vary by location and network conditions. Installation charges may apply. Fair usage policy applies. Terms and conditions apply.",
        imgSrc: "/assets/skyplay-business-fiber-connection-2.jpg",
        link: "/buy/internet/plans?customer_type=smallbusiness"
    }
];

export default function ColumnsWithImageComponent() {
    const [carouselItems, setCarouselItems] = useState(slidesData);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        gap: 10,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        beforeChange: (current, next) => {
            console.log("Current slide index:", current);
            console.log("Next slide index:", next);
        },
    };

    return (
        <div className="max-width-background mar-b-sm">
            <div className="absolute-fill bgcolor bgcolor-fix bg-gray-200"></div>
            <div className="rel container">
                <div className="row flex-items-stretch">
                    <div className="centered grid-col-10 text-center pad-t-xl pad-b-xs">
                        <h2 className="mar-b-xs heading-xxl">Enjoy big savings on business essentials</h2>
                    </div>
                </div>
            </div>
            <div className="container pad-b-xl">
                <div className="jsx-994660347 rel">
                    <Slider {...settings}>
                        {carouselItems.map((item, index) => (
                            <div key={index} className="flex justify-center grid-col-12 fade">
                                <div className="width-full px-2" key={index}>
                                    <div className="card bgcolor theme-base-bg height-full z0 bg-white rel radius-lg flex justify-between flex-column">
                                        <div className="card-img overflow-hidden">
                                            <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '3 / 2' }}>
                                            <Image src={item.imgSrc} alt={item.title} fill className="zoomable" style={{ objectFit: 'cover' }}/>
                                            </div>
                                            <div className="pad-sm-lg pad-md-md pad-xs-sm pad-b-xxs">
                                                <p className="type-eyebrow-md">{item.title}</p>
                                                <h3 className="mar-b-xs heading-md">{item.subtitle}</h3>
                                                <div className="type-sm mar-b-xs rte-styles">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="type-legal mar-b-sm-all">
                                                    <span>{item.legal}</span>
                                                    <button className="btn-reset nowrap"></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pad-sm-lg pad-md-md pad-xs-sm pad-t-xxs">
                                            <Link
                                                href={item.link}
                                                className="jsx-1196099039 btn-primary"
                                                aria-label={`See if ${item.title} is available in your area.`}
                                            >
                                                Check availability
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
