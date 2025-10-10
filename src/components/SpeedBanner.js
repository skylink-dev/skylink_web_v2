'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from "next/image"
import Link from 'next/link'

export default function SpeedBanner({mainImage, content, color}) {
    const sliderRef = useRef();
    const dotsRef = useRef();
const [carouselItems, setCarouselItems] = useState(content.slides);

    const settings = {
        dots: true,
        arrows: false,  
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (<div ref={dotsRef}><ul className="smooth-scroll">{dots}</ul></div>), 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    useEffect(() => {
    const dotContainer = dotsRef.current;
     if (dotContainer) {
      dotContainer.classList.remove("slick-dots");
      dotContainer.classList.add("custom-dots");
    }
    const externalWrapper = document.querySelector("#custom-arrow-dot-wrapper .smooth-scroll");
    if (dotContainer && externalWrapper) {
      externalWrapper.appendChild(dotContainer);
    }
  }, []);
    return (
        <section className='speed-banner'>
        <div className="max-width-background flex-column zoom-on-hover speed-banner ">
            <div className="jsx-1049057036 height-auto absolute-fill bgcolor overflow-hidden order1 bgcolor-fix panel-height-base">
                <div className="absolute-fill bgcolor bgcolor-fix"></div>
                <div className="absolute-fill bg-no-repeat zoomable" id="heropanel-2-0-background" style={{ backgroundImage: `url(${mainImage})` }}></div>
            </div>
            <div className="container flex panel-height-base">
                <div className="row flex-wrap flex-self-stretch rel">
                    <div className={`flex-self-center pad-t-xl pad-b-xl rel grid-col-4 grid-col-6-md grid-col-12-sm ${color}`}>
                        <p className="type-eyebrow-xxl">{content.headingTop}</p>
                        <div className="mar-b-xs heading-xxl" dangerouslySetInnerHTML={{ __html: content.headingMain }}>
                        </div>
                        <div className="type-base mar-b-xs rte-styles">
                            {content.description}
                        </div>
                        <div className="type-legal mar-b-sm-all">
                            <span className=" ">{content.subDescription}</span>
                        </div>
                        <div className="flex flex-wrap gap16">
                            <Link id="heroPanel-Check-availability-lnk-6375" aria-label="Check your availability for fiber internet" viewport="[object Object]" href={content.ctaLink} className="jsx-1196099039 btn-primary ">{content.ctaText}</Link>
                        </div>
                    </div>
                    <div className="flex flex-items-center justify-center hero-panel-image-with-slot hero-panel-image grid-col-4 grid-col-6-md grid-col-12-sm flex-self-stretch">
                    </div>
                    <div className="flex-self-center pad-l-none-md pad-l-none-sm pad-r-none-md pad-r-none-sm hero-slot grid-col-4 grid-col-12-md grid-col-12-sm">
                        <div className="relevant-offers-carousel bgcolor undefined bg-transparent undefined">
                            <div className="jsx-994660347 rel">
                                <div id="r32-relevant-offer-carousel-duc-carousel" className="jsx-994660347">
                                    <div id="custom-arrow-dot-wrapper" className="slick-dots order1">
                                        <div className="slick-dots-wrapper underlay">
                                            <div className="jsx-3741889289 slick-arrow slick-prev fade-in" onClick={() => sliderRef.current.slickPrev()}>
                                                <button type="button" tabIndex="0" aria-label="show previous slide" className="jsx-3142907309 btn-reset touch-space smtabarea "><span className="jsx-3142907309 inline-flex flex-centered round  border color-white border-cobalt-600 color-cobalt-600 bg-transparent  width-sm-all height-sm-all"><svg className="height-xs width-xs color-cobalt-600 " focusable="false" height="16" width="16" viewBox="0 0 16 16">
                                                    <path className="svg-base" d="M9.36 13.35L4 8l5.36-5.35.71.7L5.42 8l4.65 4.65z"></path>
                                                </svg></span></button>
                                            </div>
                                             <div className="dot-slot smooth-scroll">

                                             </div>
                                            <div className="jsx-3741889289 slick-arrow slick-next fade-in" onClick={() => sliderRef.current.slickNext()}>
                                                <button type="button" tabIndex="0" aria-label="show next slide" className="jsx-3142907309 btn-reset touch-space smtabarea "><span className="jsx-3142907309 inline-flex flex-centered round  border rotate180 color-white border-cobalt-600 color-cobalt-600 bg-transparent  width-sm-all height-sm-all"><svg className="height-xs width-xs color-cobalt-600 " focusable="false" height="16" width="16" viewBox="0 0 16 16">
                                                    <path className="svg-base" d="M9.36 13.35L4 8l5.36-5.35.71.7L5.42 8l4.65 4.65z"></path>
                                                </svg></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <Slider ref={sliderRef} {...settings}>
                                        {carouselItems.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-center height-full block-lg mar-l-xxs-lg mar-r-xxs-lg mar-r-none-md mar-l-md-md mar-r-none-sm mar-l-md-sm pad-none pad-b-xs-lg fade">
                                                    <div className="jsx-1505123363 offer-card-container height-full">
                                                        <div className="jsx-2200991819 card height-full rel z0 pad-sm-lg pad-md-md bgcolor theme-base-bg bg-white pad-xs-sm radius-lg card-shell false justify-end block-lg flex-md flex-sm row-reverse pad-sm-all text-center text-left-md text-left-sm undefined">
                                                            <div className="jsx-1505123363 card-content-height">
                                                                <div className="jsx-1505123363">
                                                                    <h2 className="mar-b-xs heading-md">{item.title}</h2>
                                                                </div>
                                                                <div className="jsx-1505123363 font-regular type-legal pad-t-xxs">
                                                                    <div id="relevant-offers-carousel-legal_Legal" className="type-legal mar-b-xxs-sm mar-b-xs-md">
                                                                        <span className=" ">Includes up to 5 Wi-Fi extenders, if needed, at sole discretion of Skylink.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jsx-1505123363 accessory-image false flex-grow-0 flex-shrink-0 flex-auto justify-center mar-r-md-sm mar-r-sm-md mar-r-none-lg flex mar-t-lg-md mar-t-lg-sm pad-t-none-md pad-t-none-sm">
                                                                <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '3 / 2' }}>
                                                                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
