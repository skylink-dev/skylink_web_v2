'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image"

export default function RightImageLeftContent({ title, Content, coreImage, order }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);

  // Handle mobile detection
  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    setIsMounted(true);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
   useEffect(() => {
    if (isMobile && sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(0);
      }, 100);
    }
  }, [isMobile]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentImage(index),
  };

  if (!isMounted) return null;
    return (
        <section className='right-image-left-content-section'>
        <div className="max-width-background story-stack theme-base-bg bgcolor">
            <div className="container pad-t-xl-sm pad-t-lg-lg pad-t-lg-md pad-l-none-md pad-l-none-sm pad-r-none-md pad-r-none-sm mar-b-sm pad-b-sm">
                <div className="row flex-wrap flex-items-center justify-center">
                    <div className="text-center pad-t-none pad-b-xxs-sm pad-b-xxs-md pad-r-xl-sm pad-l-xl-sm grid-col-10">
                        <h2 className="no-default-margin heading-xxl">{title}</h2>
                    </div>
                </div>
                {!isMobile ? (
                    <div className={`row flex-wrap flex-row pad-t-xs-lg pad-l-xs-lg pad-r-xs-lg pad-none-md pad-l-none-sm pad-r-none-sm ${order}`}>
                        <div className="jsx-1864732960 z1 story-stack-img-wrapper rel overflow-hidden radius-lg layoutImage image-aspect-ratio height-full mar-b-lg-md mar-b-xl-sm">
                            <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '3 / 4' }}>
                            <Image src={Content[currentImage]?.img || "/assets/default-image.webp"} fill style={{ objectFit: 'cover' }} alt="content" className="absolute top transition-1s width-full radius-lg fadein" />
                            </div>
                        </div>
                        <div className="jsx-1864732960 customOffsetWidth"></div>
                        <div className="jsx-1864732960 rollOver">
                            {Content.map((item, index) => (
                                <div key={`desktop-${index}`}>
                                    <div className={`jsx-3293071849 hideSeparator radius-lg active mar-t-none pad-b-xxs-lg theme-accent-bg radius-lg cursor card rel block no-border-box ${currentImage === index ? 'bg-att-blue-000' : ''}`} onMouseEnter={() => setCurrentImage(index)}>
                                        <div className="flex flex-row gap16 pad-md pad-t-sm-lg pad-b-sm-lg">
                                            <div className="">
                                                <div className="round overflow-hidden flex-shrink-0 bg-att-blue-100 height-xxl-all width-xxl-all flex flex-centered">
                                                     <Image src={item.icon} width={50} height={50} alt={item.title} />
                                                </div>
                                            </div>
                                            <div className="flex flex-column flex-grow mar-t-xxs-lg">
                                                <h3 className="mar-b-xxs-lg mar-b-md-sm mar-b-sm-md heading-sm">{item.title}</h3>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div className="type-base rte-styles">
                                                                {item.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                            <button type="button" tabIndex="0" role="link" aria-label="Connecting changes everything" className="jsx-3142907309 btn-reset touch-space mdtabarea "><span className="jsx-3142907309 inline-flex flex-centered round    width-md-all height-md-all"><svg className="height-sm-all width-sm-all height-xs-sm width-xs-sm width-xs-md height-xs-md color-cobalt-600" aria-hidden="true" role="link" focusable="false" height="16" width="16" viewBox="0 0 33 33"><path className="svg-base" fillRule="evenodd" clipRule="evenodd" d="M21.4373 9.43213L20.0231 10.8463L24.6793 15.5032H4.49219V17.5032H24.6793L20.0231 22.1601L21.4373 23.5743L28.5084 16.5032L21.4373 9.43213Z" fill="#0057B8"></path></svg></span></button>
                                        </div>
                                    </div>
                                    <div className="hr-seperator"><div className="jsx-2125347277 color-gray-400 hr-rule "><hr className="jsx-2125347277 font-bold color-gray-800" /></div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>) : (
                    <div className="row flex-wrap flex-row pad-t-xs-lg pad-l-xs-lg pad-r-xs-lg pad-none-md pad-l-none-sm pad-r-none-sm container " id="mobile-slider">
                     <Slider {...sliderSettings} ref={sliderRef}>
                       {Content.map((item, index) => ( 
                        <div key={`mobile-${index}`} className="flex justify-center pad-md-md pad-b-xxs pad-sm-lg pad-l-xxs pad-r-xxs" >
                        <div className="jsx-1864732960 story-stack-carousel width-full">
                        <div className="jsx-994660347 rel">
                            <div className="jsx-994660347 theme-base-bg bgcolor">
                                <div className="jsx-1864732960 width-full">
                                    <div className="jsx-1410485163 radius-lg theme-accent-bg bg-att-blue-000 flex-column height-full">
                                        <div className="jsx-1410485163 rel">
                                            <div className="jsx-1410485163 aspect-ratio-1 oveflow-hidden">
                                                <Image src={Content[currentImage]?.img || "/assets/default-image.webp"} fill style={{ objectFit: 'cover' }} alt="content" className="obj-fit-cover radius-lg radius-b-none width-full" />
                                            </div>
                                            <div className="jsx-1410485163 absolute pad-l-xs-sm pad-l-sm-md bottom-offset width-full">
                                                <div className="round overflow-hidden flex-shrink-0 border bg-white height-xl-all width-xl-all flex flex-centered">
                                                    <Image src={item.icon} width={50} height={50} alt={item.title} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jsx-1410485163 height-full flex flex-row gap8 pad-l-sm-md pad-l-md-sm pad-r-sm-md pad-r-md-sm">
                                            <div className="jsx-1410485163 flex-column flex-grow mar-t-md-md pad-t-xxs-md mar-t-lg-sm pad-t-xxs-sm mar-b-md-md mar-b-lg-sm">
                                                <div className="jsx-1410485163 carousel-heading">
                                                    <h3 className="mar-b-xxs-lg mar-b-md-sm mar-b-sm-md heading-sm">{item.title}</h3>
                                                </div>
                                                <div>
                                                    <div className="type-sm">
                                                        <div className="type-base rte-styles">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jsx-1410485163 flex-column justify-end mar-b-sm-all">
                                                <button type="button" role="link" aria-label="Connecting changes everything" className="jsx-3142907309 btn-reset touch-space mdtabarea ">
                                                    <span className="jsx-3142907309 inline-flex flex-centered round  bg-cobalt  width-md-all height-md-all">
                                                        <svg aria-label="Connecting changes everything" className="height-sm-all width-sm-all height-xs-sm width-xs-sm width-xs-md height-xs-md color-att-blue-000" role="link" focusable="false" height="16" width="16" viewBox="0 0 33 33"><path className="svg-base" fillRule="evenodd" clipRule="evenodd" d="M21.4373 9.43213L20.0231 10.8463L24.6793 15.5032H4.49219V17.5032H24.6793L20.0231 22.1601L21.4373 23.5743L28.5084 16.5032L21.4373 9.43213Z" fill="#0057B8"></path></svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>))}
                    </Slider>
                </div>
                )}
                
            </div>
        </div>
        </section>
    )
}
