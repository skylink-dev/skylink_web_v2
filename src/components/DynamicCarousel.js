    'use client'
    import React, { useState } from 'react';
    import Slider from 'react-slick';
    import Link from 'next/link';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
    import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

    const CustomPrevArrow = ({ onClick, isDisabled }) => (
        <>
            <div className={`jsx-3741889289 grid-col-1 slick-arrow slick-prev ${isDisabled ? 'slick-disabled' : 'slick-active'}`}>
                <button className="jsx-3142907309 btn-reset touch-space  " aria-label="Previous" onClick={onClick}>
                    <span className={isDisabled ? "jsx-3142907309 inline-flex flex-centered round  border color-white border-gray-400 color-gray-400 underlay-icon-bg  width-lg-all height-lg-all" : "jsx-3142907309 inline-flex flex-centered round  border color-white border-cobalt-600 color-cobalt-600 bg-transparent  width-lg-all height-lg-all"}><svg className={isDisabled ? "height-sm-all width-sm-all color-gray-400 " : "height-sm-all width-sm-all color-cobalt-600"} focusable="false" height="24" width="24" viewBox="0 0 32 32">
                        <path className="svg-base" d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z"></path>
                    </svg></span>
                </button>
            </div>
        </>
    );

    const CustomNextArrow = ({ onClick, isDisabled }) => (
        <>
            <div className={`jsx-3741889289 grid-col-1 slick-arrow slick-next ${isDisabled ? 'slick-disabled' : 'slick-active'}`}>
                <button className="jsx-3142907309 btn-reset touch-space" aria-label="Next" onClick={onClick}>
                    <span className={isDisabled ? "jsx-3142907309 inline-flex flex-centered round  border rotate180 color-white border-gray-400 color-gray-400 underlay-icon-bg  width-lg-all height-lg-all" : "jsx-3142907309 inline-flex flex-centered round  border rotate180 color-white border-cobalt-600 color-cobalt-600 bg-transparent  width-lg-all height-lg-all"}>
                        <svg className={isDisabled ? "height-sm-all width-sm-all color-gray-400" : "height-sm-all width-sm-all color-cobalt-600"} focusable="false" height="24" width="24" viewBox="0 0 32 32">
                            <path className="svg-base" d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z"></path>
                        </svg></span>
                </button>
            </div></>
    );

    export default function DynamicCarousel({ title, slidesData, color }) {
        const [carouselItems, setCarouselItems] = useState(slidesData);
        const [currentSlide, setCurrentSlide] = useState(0);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            appendDots: dots => {
    const total = dots.length;
    const current = currentSlide;
    const indexesToShow = [
        (current - 1 + total) % total,
        current,
        (current + 1) % total,
        (current + 2) % total,
    ];
    const filteredDots = indexesToShow.map(i => dots[i]);

    return <ul style={{ display: 'flex', justifyContent: 'center' }}>{filteredDots}</ul>},
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
                setCurrentSlide(next);
            },
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
                        <Slider {...settings}>
                            {carouselItems.map((item, index) => (
                                <div key={index} className="flex justify-center grid-col-12 fade">
                                    <div className="width-full">
                                        <div className="card bgcolor theme-base-bg border-shadow height-full z0 bg-white rel radius-lg flex justify-between flex-column" style={{ height: '100%' }}>
                                            <div className="card-img overflow-hidden">
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.title}
                                                    className="zoomable"
                                                    style={{ backgroundPosition: 'center bottom', backgroundSize: 'contain' }}
                                                />
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
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
