'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';

export default function ContentandImageCarousel({ slidesData }) {
      const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
       setCurrentIndex((prevIndex) => (
    prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
  ));
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
    return prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1;
  });
    };


    return (
        <div className="max-width-background card-shuffle panel-height-base theme-dark-accent-bg bgcolor pad-b-lg pad-t-xxxl">
            <div className="absolute-fill bgcolor bgcolor-fix"></div>
            <div className="absolute-fill bg-no-repeat zoomable" id="card-shuffle-13-background" style={{ "backgroundImage": "url('/assets/bg.jpg')" }}></div>
            <div className="container">
                <div className="row flex-wrap flex-items-center justify-center row-reverse">
                    <div className="text-center offset0-md grid-col-7 grid-col-12-md grid-col-12-sm offset1 offset0-sm">
                        <div className="jsx-1992011584 slider-image-container-wrapper">
                            <button onClick={handlePrev} className="jsx-1992011584 slider-nav prev btn-reset">
                                <span className="jsx-1992011584 slider-nav-arrow-icon inline-flex flex-centered round width-xl-lg height-xl-lg width-xxl-md width-xxl-sm height-xxl-md height-xxl-sm bg-white border color-cobalt-600 border-cobalt-600">
                                    <svg aria-label="previous slide" focusable="false" className="" height="32" width="32" viewBox="0 0 32 32"><path className="svg-base" d="M12.27 26.71l-1.41-1.42L20.15 16l-9.29-9.29 1.41-1.42L23 16z"></path></svg></span>
                            </button>
                            <div className="jsx-1992011584 slides width-full desktop">
                                {slidesData.map((item, index) => (
                                    <div key={index} className={`jsx-1992011584 slider-image radius-lg bgcolor image-aspect-ratio width-full overflow-hidden ${index === currentIndex ? "active" : ""}`}>
                                        <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '2 / 3' }}>
                                        <Image src={item.image} alt={item.title} fill className="zoomable" style={{ objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleNext} className="jsx-1992011584 slider-nav next btn-reset">
                                <span className="jsx-1992011584 slider-nav-arrow-icon inline-flex flex-centered round width-xl-lg height-xl-lg width-xxl-md width-xxl-sm height-xxl-md height-xxl-sm bg-white border color-cobalt-600 border-cobalt-600"><svg aria-label="next slide" focusable="false" className="" height="32" width="32" viewBox="0 0 32 32"><path className="svg-base" d="M12.27 26.71l-1.41-1.42L20.15 16l-9.29-9.29 1.41-1.42L23 16z"></path></svg></span>
                            </button>
                        </div>
                    </div>
                    <div className="text-center grid-col-4 grid-col-12-md grid-col-12-sm">
                        <div className="jsx-410943750 slider-content-container-wrapper">
                            {slidesData.map((item, index) => (
                                <div key={index} className={`jsx-410943750 slider-content custom-slider-height flex flex-items-center justify-center ${index === currentIndex ? "active" : ""}`}>
                                    <div className="jsx-410943750 pad-l-none pad-r-none text-left text-center-md text-center-sm">
                                        <p className="type-eyebrow-xxl color-white">{item.subtitle}</p>
                                        <h2 className="mar-b-xs heading-xxl color-white">{item.title}</h2>
                                        <div className="jsx-410943750">
                                            <div className="jsx-410943750">
                                                <div className="type-base rte-bullets-type-base rte-styles">
                                                    <p>{item.description}</p>
                                                    <p><span className="type-legal inline-block">{item.company}​ <br /> {item.customer}</span></p>
                                                </div>
                                            </div>
                                            <div className="jsx-410943750 cta-container flex-column flex-row-md flex-row-sm justify-center flex-wrap gap24 gap16-sm">
                                                <div className="jsx-410943750 flex flex-items-center">
                                                    <Link id="cardShuffle-See-for-yourself-lnk-2610" aria-label="Shop Skyplay Fiber plans" href="/buy/internet/plans" className="jsx-1196099039 btn-primary bg-white">{item.cta}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
