"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function InternetPlans() {
  const [sliderClasses, setSliderClasses] = useState([
    {
      speed: "300Mbps speed",
      rating: 4.0526,
      stars: "4.0",
      reviews: 10594,
      reviewSummary: "10K",
      description:
        "Select Shop now to see pricing and deals available at your address.",
      savingText:
        "Select Shop now to see pricing and deals available at your address.",
      features: [
        "Game, stream, and video chat with confidence.",
        "Support your smart home devices.",
        "15x faster upload speeds than cable internet1.",
      ],
    },
    {
      speed: "500Mbps speed",
      rating: 3.9958,
      stars: "3.9",
      reviews: 6644,
      reviewSummary: "6K",
      description:
        "Select Shop now to see pricing and deals available at your address.",
      savingText:
        "Select Shop now to see pricing and deals available at your address.",
      features: [
        "Level up your gaming with low lag.",
        "Connect and control multiple smart devices with ease.",
        "20x faster upload speeds than cable internet1.",
      ],
    },
  ]);
  const rating = 5;
  const getStarClass = (index, rating) => {
    return index < Math.round(rating) ? "filled" : "unfilled";
  };
  const CustomPrevArrow = ({ onClick }) => (
    <>
      <div className="jsx-3741889289 grid-col-1 slick-arrow slick-prev slick-disabled fade-in">
        <button
          className="jsx-3142907309 btn-reset touch-space  "
          aria-label="Previous"
          onClick={onClick}
        >
          <span className="jsx-3142907309 inline-flex flex-centered round  border color-white border-gray-400 color-gray-400 underlay-icon-bg  width-lg-all height-lg-all">
            <svg
              className="height-sm-all width-sm-all color-gray-400 "
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 32 32"
            >
              <path
                className="svg-base"
                d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );

  const CustomNextArrow = ({ onClick }) => (
    <>
      <div className="jsx-3741889289 grid-col-1 slick-arrow slick-next fade-in">
        <button
          className="jsx-3142907309 btn-reset touch-space"
          aria-label="Next"
          onClick={onClick}
        >
          <span className="jsx-3142907309 inline-flex flex-centered round  border rotate180 color-white border-cobalt-600 color-cobalt-600 bg-transparent  width-lg-all height-lg-all">
            <svg
              className="height-sm-all width-sm-all color-cobalt-600 "
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 32 32"
            >
              <path
                className="svg-base"
                d="M19.73 26.71L9 16 19.73 5.29l1.41 1.42L11.85 16l9.29 9.29z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      // console.log("Current slide index:", current);
      // console.log("Next slide index:", next);
    },
  };
  return (
    <div className="max-width-background planToggleWrapper bg-gray-200 pad-t-lg pad-b-lg  ">
      <div className="container">
        <div className="row flex-wrap justify-center text-center ">
          <div className="grid-col-12 grid-col-12-md grid-col-12-sm">
            <div className="jsx-1725204834">
              <h2 className="mar-b-xs heading-xxl">
                Choose how fast you want to go
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="jsx-1725204834  plan-toggle-cards-list-wrapper pad-t-xs">
        <div className="jsx-640618752 jsx-1371232659 carousel-v2 container pad-b-md">
          <div className="jsx-640618752 jsx-1371232659 row-nowrap flex-items-center carousel-overflow">
            <div
              className="carousel-navigation carousel-nav"
              aria-label="carousel buttons"
            >
              <span
                id="carousel_spanMsgLeft_messageFirst"
                className="hidden-spoken"
                tabindex="-1"
                aria-hidden="true"
                aria-label="You have reached the beginning. Disabling Previous button."
                role="text"
              ></span>
              <button
                value="prev"
                aria-label="Scroll Left"
                aria-labelledby="carousel_spanMsgLeft_messageFirst"
                disabled=""
                className="carousel-control btn-reset touch-space"
              >
                <span className="inline-flex flex-centered round width-xl-all height-xl-all rotate180">
                  <svg
                    aria-label="scroll left"
                    focusable="false"
                    className=""
                    height="32"
                    width="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      className="svg-base"
                      d="M12.27 26.71l-1.41-1.42L20.15 16l-9.29-9.29 1.41-1.42L23 16z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="jsx-640618752 jsx-1371232659 grid-col-10 devicePadding carousel-track-container pad-t-xs">
            <div className="jsx-640618752 jsx-1371232659 row-nowrap carousel-track">
              <Slider {...settings}>
                {sliderClasses.map((item, index) => (
                  <div
                    key={index}
                    className="jsx-640618752 jsx-1371232659 grid-col-4 carousel-item   allActive "
                  >
                    <div className="jsx-640618752 jsx-1371232659 carousel-slide height-full">
                      <div className="jsx-2200991819 card height-full rel pad-sm-lg pad-md-md bgcolor theme-base-bg bg-white pad-xs-sm radius-lg plan-card-wrapper border border-gray-300 pad-none pad-none-lg pad-none-md pad-none-sm pad-none-xs width-full flex-column gap24 undefined">
                        <div className="jsx-1016079517 card-flag-wrapper"></div>
                        <div className="jsx-2176973199 pad-l-xs pad-r-xs pad-b-sm-all flex flex-column gap24 justify-between height-full">
                          <div className="jsx-2176973199 flex flex-column gap24">
                            <div className="jsx-2176973199 plan-card-heading">
                              <h2 className="mar-b-none heading-md color-gray-800">
                                {item.speed}
                              </h2>
                            </div>
                            <div className="jsx-2176973199 plan-card-ratings">
                              <div className="jsx-284813413">
                                <Link
                                  href="/"
                                  className="jsx-284813413 star-rating inline-flex flex-items-stretch valign-bottom rel color-gray-800"
                                >
                                  <div className="jsx-284813413 hidden-spoken">
                                    Rated 4.0526 out of 5 stars with 10594
                                    reviews
                                  </div>
                                  <div className="jsx-284813413 star-rating-stars flex">
                                    {[...Array(5)].map((_, starindex) => (
                                      <svg
                                        key={starindex}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        className={`jsx-2439502770 ${getStarClass(
                                          starindex
                                        )}`}
                                      >
                                        <defs className="jsx-2439502770">
                                          <clipPath
                                            id={`star--${starindex}`}
                                            className="jsx-2439502770"
                                          >
                                            <path
                                              d="M8 .73 5.77 5.24a.59.59 0 0 1-.44.32l-5 .73L4 9.8a.58.58 0 0 1 .16.52l-.85 4.95 4.46-2.34a.6392.6392 0 0 1 .54 0l4.46 2.34-.85-4.95A.58.58 0 0 1 12 9.8l3.61-3.51-5-.73a.5902.5902 0 0 1-.44-.32L8 .73Z"
                                              className="jsx-2439502770 svg-base"
                                            ></path>
                                          </clipPath>
                                        </defs>
                                        <rect
                                          x={index * 20} // Adjust position based on index
                                          y="0"
                                          fill={
                                            getStarClass(starindex) === "filled"
                                              ? "#FFD700"
                                              : "#1d2329"
                                          } // Gold for filled, dark for unfilled
                                          width="100%"
                                          height="100%"
                                          clip-path={`url(#star--${starindex})`}
                                          className="jsx-2439502770"
                                        ></rect>
                                        <path
                                          d="M8 2.99l1.33 2.69a1.58 1.58 0 0 0 1.19.87l3 .43-2.17 2.13a1.58 1.58 0 0 0-.46 1.41l.51 3-2.66-1.4a1.61 1.61 0 0 0-1.48 0L4.6 13.45l.51-3a1.58 1.58 0 0 0-.46-1.34L2.5 6.98l3-.43a1.58 1.58 0 0 0 1.19-.87L8 2.99zM8 .73L5.77 5.24a.59.59 0 0 1-.44.32l-5 .73L4 9.8a.58.58 0 0 1 .16.52l-.85 4.95 4.46-2.34a.64.64 0 0 1 .54 0l4.46 2.34-.85-4.95A.58.58 0 0 1 12 9.8l3.61-3.51-5-.73a.59.59 0 0 1-.44-.32L8 .73z"
                                          className="jsx-2439502770 svg-base"
                                        ></path>
                                      </svg>
                                    ))}
                                  </div>
                                  <div className="jsx-284813413 star-rating-text mar-t-2 mar-t-none-sm flex flex-items-center type-12 line-h-tight mar-l-xxs">
                                    <span className="jsx-284813413 span-a font-bold">
                                      4.0
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="jsx-284813413 span-b star-rating-divider mar-l-xxxs mar-r-xxxs bg-gray-500"
                                    ></span>
                                    <span className="jsx-284813413 span-c">
                                      10K
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="jsx-2176973199 "></div>
                            <div className="jsx-2176973199 plan-icon-text">
                              <div className="jsx-2176973199 flex flex-items-top gap8 pad-t-xxs pad-b-xxs">
                                <svg
                                  aria-label="Savings Text Icon"
                                  className="flex-shrink-0 "
                                  aria-hidden="false"
                                  focusable="false"
                                  height="24"
                                  width="24"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    d="M10 19.5849C12.7658 18.313 15.109 16.2749 16.752 13.7121C18.395 11.1493 19.2688 8.16916 19.27 5.12492C19.2672 4.47067 19.2271 3.81712 19.15 3.16742C16.4607 1.29592 13.2596 0.299606 9.98321 0.314371C6.70685 0.329135 3.51481 1.35426 0.842504 3.24992C0.766414 3.87209 0.726348 4.49813 0.722504 5.12492C0.723425 8.17018 1.59802 11.1512 3.24248 13.7143C4.88694 16.2774 7.23223 18.3149 10 19.5849ZM9.25 5.49992V3.99992H10.75V5.49992H12.25V6.99992H9.25C9.05109 6.99992 8.86033 7.07894 8.71967 7.21959C8.57902 7.36025 8.5 7.55101 8.5 7.74992C8.5 7.94883 8.57902 8.1396 8.71967 8.28025C8.86033 8.42091 9.05109 8.49992 9.25 8.49992H10.75C11.3467 8.49992 11.919 8.73697 12.341 9.15893C12.763 9.58089 13 10.1532 13 10.7499C13 11.3467 12.763 11.919 12.341 12.3409C11.919 12.7629 11.3467 12.9999 10.75 12.9999V14.4999H9.25V12.9999H7.75V11.4999H10.75C10.9489 11.4999 11.1397 11.4209 11.2803 11.2803C11.421 11.1396 11.5 10.9488 11.5 10.7499C11.5 10.551 11.421 10.3602 11.2803 10.2196C11.1397 10.0789 10.9489 9.99992 10.75 9.99992H9.25C8.65327 9.99992 8.08097 9.76287 7.65901 9.34091C7.23706 8.91896 7 8.34666 7 7.74992C7 7.15319 7.23706 6.58089 7.65901 6.15893C8.08097 5.73698 8.65327 5.49992 9.25 5.49992Z"
                                    fill="#2D7E24"
                                  ></path>
                                </svg>
                                <span className="jsx-2176973199 type-sm">
                                  {item.savingText}
                                </span>
                              </div>
                            </div>
                            <div className="jsx-2176973199 plan-card-cta">
                              <div className="jsx-2176973199">
                                <Link
                                  id="plan-card-cta-4-0"
                                  target="_self"
                                  aria-label="Shop 300Mbps fiber internet now"
                                  href="/plans"
                                  className="jsx-1196099039 btn-primary  btn-full-width"
                                >
                                  Shop now
                                </Link>
                              </div>
                            </div>
                            <div className="jsx-2176973199 plan-toggle-accordion-wrapr plan-card-acc">
                              <div className="border-bottom border-gray-300">
                                <button className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm link-icon type-sm font-bold hover color-cobalt-600">
                                  <span className="reading-width">
                                    Features & benefits
                                  </span>
                                  <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
                                </button>
                                <div className="jsx-3015755231 overflow-hidden animate-slide-open hide-focusable">
                                  <div className="jsx-2176973199 flex-column gap24 pad-t-sm-all">
                                    {item.features.map((subitem, subindex) => (
                                      <div
                                        key={subindex}
                                        className="jsx-4151701284 flex flex-items-top gap8"
                                      >
                                        <div className="jsx-4151701284 flex height-md-all width-md-all flex-shrink-0">
                                          <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            className=""
                                            height="32"
                                            width="32"
                                            viewBox="0 0 32 32"
                                          >
                                            <path
                                              className="svg-base"
                                              d="M11.33 26.75l-10-10 1.42-1.42 8.62 8.63 18-18 1.42 1.41z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <div className="jsx-4151701284 flex flex-column flex-self-center">
                                          <div className="jsx-4151701284 inline-block">
                                            <span className="type-sm font-bold mar-b-none rte-styles">
                                              <strong>{subitem}</strong>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
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
  );
}
