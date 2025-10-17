'use client';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomPrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <ArrowBackIosIcon />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <ArrowForwardIosIcon />
  </div>
);

export default function DynamicCarousel({ title, slidesData, color }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: dots => (
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        {dots.map((dot, index) => (
          <li key={index}>
            <button
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentSlide === index ? '#1d4ed8' : '#ccc',
                transition: 'all 0.3s ease',
              }}
              onClick={() => sliderRef.current.slickGoTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    ),
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 2 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1 
        } 
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div className={`max-width-background mar-b-none pad-t-md pad-b-lg theme-base-bg bgcolor`}>
        <div className={`absolute-fill bgcolor bgcolor-fix ${color}`}></div>
        <div className="rel container">
          <div className="row flex-items-stretch">
            <div className="centered grid-col-10 text-center pad-b-xs">
              <h2 className="mar-b-xs heading-xxl">{title}</h2>
            </div>
          </div>
        </div>

        <div className="container pad-b-none">
          <Slider ref={sliderRef} {...settings}>
            {slidesData.map((item, index) => (
              <motion.div
                key={index}
                className="flex justify-center grid-col-12 fade"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="width-full">
                  <div className="card bgcolor theme-base-bg border-shadow height-full z0 bg-white rel radius-lg flex justify-between flex-column">
                    <div className="card-img overflow-hidden">
                      <div className="image-container" style={{ 
                        position: 'relative', 
                        width: '100%', 
                        height: '0', 
                        paddingBottom: '56.25%', // 16:9 aspect ratio
                        overflow: 'hidden'
                      }}>
                        <motion.img
                          src={item.imgSrc}
                          alt={item.title}
                          className="zoomable"
                          style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center center'
                          }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="pad-sm-lg pad-md-md pad-xs-sm pad-b-xxs">
                        <p className="type-eyebrow-md">{item.title}</p>
                        <h3 className="mar-b-xs heading-md">{item.subtitle}</h3>
                        <div className="type-sm mar-b-xs rte-styles">{item.description}</div>
                        <div id={`legal-${index}`} className="type-legal mar-b-sm-all color-gray-700">
                          <span>
                            <p><strong>{item.normaltext}</strong></p>
                            <p>{item.legalText}</p>
                          </span>
                          <button className="btn-reset nowrap" aria-label="See offer details"></button>
                        </div>
                      </div>
                    </div>
                    <div className="pad-sm-lg pad-md-md pad-xs-sm pad-t-xxs">
                      <Link
                        href={item.link}
                        className="jsx-1196099039 btn-primary"
                        aria-label="Learn more about this bundle offer"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .image-container {
          aspect-ratio: 16/9;
        }
        
        @media (max-width: 1024px) {
          .image-container {
            aspect-ratio: 4/3;
          }
        }
        
        @media (max-width: 768px) {
          .image-container {
            aspect-ratio: 1/1;
          }
        }
      `}</style>
    </div>
  );
}