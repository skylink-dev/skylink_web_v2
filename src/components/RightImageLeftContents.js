'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';

export default function RightImageLeftContent({ title, Content, coreImage, order }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      setIsMounted(true);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      setTimeout(() => sliderRef.current.slickGoTo(0), 100);
    }
  }, [isMobile]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: index => setCurrentImage(index),
  };

  if (!isMounted) return null;

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

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
            // Desktop
            <div className={`row flex-wrap flex-row pad-t-xs-lg pad-l-xs-lg pad-r-xs-lg pad-none-md pad-l-none-sm pad-r-none-sm ${order}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="jsx-1864732960 z1 story-stack-img-wrapper rel overflow-hidden radius-lg layoutImage image-aspect-ratio height-full mar-b-lg-md mar-b-xl-sm"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '3 / 4' }}>
                    <Image src={Content[currentImage]?.img || "/assets/default-image.webp"} fill style={{ objectFit: 'cover' }} alt="content" className="absolute top transition-1s width-full radius-lg fadein" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="jsx-1864732960 customOffsetWidth"></div>
              <div className="jsx-1864732960 rollOver">
                {Content.map((item, index) => (
                  <div key={`desktop-${index}`}>
                    <div className={`jsx-3293071849 hideSeparator radius-lg active mar-t-none pad-b-xxs-lg theme-accent-bg radius-lg cursor card rel block no-border-box ${currentImage === index ? 'bg-att-blue-000' : ''}`} onMouseEnter={() => setCurrentImage(index)}>
                      <div className="flex flex-row gap16 pad-md pad-t-sm-lg pad-b-sm-lg">
                        <div>
                          <div className="round overflow-hidden flex-shrink-0 bg-att-blue-100 height-xxl-all width-xxl-all flex flex-centered">
                            <Image src={item.icon} width={50} height={50} alt={item.title} />
                          </div>
                        </div>
                        <div className="flex flex-column flex-grow mar-t-xxs-lg">
                          <h3 className="mar-b-xxs-lg mar-b-md-sm mar-b-sm-md heading-sm">{item.title}</h3>
                          <div className="type-base rte-styles">{item.description}</div>
                        </div>
                      </div>
                    </div>
                    <div className="hr-seperator">
                      <div className="jsx-2125347277 color-gray-400 hr-rule"><hr className="jsx-2125347277 font-bold color-gray-800" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Mobile
            <div className="row flex-wrap flex-row pad-t-xs-lg pad-l-xs-lg pad-r-xs-lg pad-none-md pad-l-none-sm pad-r-none-sm container" id="mobile-slider">
              <Slider {...sliderSettings} ref={sliderRef}>
                {Content.map((item, index) => (
                  <motion.div
                    key={`mobile-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center pad-md-md pad-b-xxs pad-sm-lg pad-l-xxs pad-r-xxs"
                  >
                    <div className="jsx-1864732960 story-stack-carousel width-full">
                      <div className="jsx-994660347 rel theme-base-bg bgcolor radius-lg">
                        <div className="jsx-1410485163 aspect-ratio-1 overflow-hidden radius-lg">
                          <Image src={item.img || "/assets/default-image.webp"} fill style={{ objectFit: 'cover' }} alt="content" className="obj-fit-cover radius-lg radius-b-none width-full" />
                        </div>
                        <div className="absolute pad-l-xs-sm pad-l-sm-md bottom-offset width-full">
                          <div className="round overflow-hidden flex-shrink-0 border bg-white height-xl-all width-xl-all flex flex-centered">
                            <Image src={item.icon} width={50} height={50} alt={item.title} />
                          </div>
                        </div>
                        <div className="flex-column flex-grow pad-t-xxs-sm pad-b-xxs-sm">
                          <h3 className="heading-sm mar-b-xxs-lg">{item.title}</h3>
                          <div className="type-base rte-styles">{item.description}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
