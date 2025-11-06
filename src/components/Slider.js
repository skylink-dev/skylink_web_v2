/**
 *
 *
 * Need to rework this component since this slider normally chat gpt is no good with slider
 *
 *
 *
 */

"use client";
import { useCallback, useState, useEffect } from "react";

export default function Slider({ slides = [], title, color }) {
  if (!slides.length) return null;
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNextSlide, 10000);
    return () => clearInterval(interval);
  }, [isHovered, goToNextSlide]);

  const reorderedSlides = slides.length
    ? [...slides.slice(activeIndex), ...slides.slice(0, activeIndex)]
    : [];

  return (
    <div
      className="jsx-132159725 animated-filmstrip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-width-background animated-filmstrip-container pad-b-md mar-b-lg pad-t-xs bgcolor theme-accent-bg">
        <div className={`absolute-fill bgcolor bgcolor-fix ${color}`}></div>
        <div className="container rel">
          <div className="row flex-wrap flex-items-center justify-center">
            <div className="text-center pad-t-none-sm  grid-col-10 grid-col-10-md grid-col-12-sm">
              <h2 className="margin-b-none heading-inline heading-xxl">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <section
          aria-roledescription="carousel"
          aria-label="Great connections start here"
          className="jsx-2137253706 flex-column"
        >
          <div className="jsx-2137253706 film-strip-carousel-options-container container rel flex flex-items-center justify-center gap24 mar-t-md-lg mar-t-lg-md mar-t-lg-sm pad-b-xs">
            <div className="jsx-2137253706 film-strip-carousel-options-wrapper flex-sm flex-items-center-sm rel">
              <div className="jsx-2989659875 flex justify-center height-xs">
                <div
                  role="tablist"
                  aria-label="Slides"
                  tabIndex="-1"
                  className="jsx-2989659875 filmstrip-carousel-indicators flex gap8"
                >
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      data-testid={`film-strip-carousel-button-${index + 1}`}
                      data-indicator-index={index}
                      id={`film-film-strip-indicator-${index}`}
                      type="button"
                      role="tab"
                      aria-label={`Slide ${index + 1}`}
                      aria-selected={index === activeIndex ? "true" : "false"}
                      aria-controls={slide.id}
                      className="jsx-2989659875 filmstrip-carousel-indicator round height-xs width-xs rel z2"
                      tabIndex={index === activeIndex ? "0" : "-1"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="film-strip-container rel">
            <div
              data-testid="filmstrip_reel_wrapper"
              className="jsx-2137253706 film-strip-reel-container mar-none rel overflow-x-hidden scrollbar-hidden"
            >
              <div
                data-testid="filmstrip_reel"
                className="jsx-2137253706 film-strip-reel flex height-auto flex-items-stretch"
              >
                {reorderedSlides.map((slide, index) => (
                  <div
                    key={`${slide.id}-${index}`}
                    id={slide.id}
                    role="tabpanel"
                    aria-roledescription="slide"
                    aria-label={`${
                      ((activeIndex + index) % slides.length) + 1
                    } of ${slides.length}`}
                    className={`jsx-2137253706 film ${
                      index === 0 ? "active" : ""
                    }`}
                    style={{
                      opacity: index === 0 ? 1 : 0.8,
                      transform: index === 0 ? "scale(1)" : "scale(0.95)",
                      transition: "all 0.8s ease-in-out",
                    }}
                  >
                    <div
                      className="jsx-1181136068 jsx-2300775981 card flex-card radius-lg rel bgcolor theme-light-bg-img flex-card-background"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="jsx-1181136068 jsx-2300775981 row flex card-height-base rel flex-column">
                        <div className="jsx-1181136068 jsx-2300775981 flex-1 grid-col-6 pad-b-none pad-md-lg pad-md-md pad-lg-sm max-width">
                          <div className="jsx-1181136068 jsx-2300775981 ">
                            <p className="type-eyebrow-md">{slide.eyebrow}</p>
                            <h3
                              className="heading-md"
                              dangerouslySetInnerHTML={{
                                __html: slide.heading,
                              }}
                            ></h3>
                            <div className="type-base mar-t-xs rte-styles">
                              {slide.description}
                            </div>
                            <div
                              id={slide.legalButtonId}
                              className="type-legal mar-t-xxs color-gray-700"
                            >
                              <span>{slide.legal}</span>
                              <button
                                className="btn-reset nowrap"
                                aria-label={slide.legalLabel}
                              >
                                {slide.legalLabel}
                              </button>
                            </div>
                            <div className="cta-container mar-t-xs">
                              <a
                                className="btn-primary"
                                id={slide.ctaId}
                                aria-label={slide.ctaLabel}
                                href={slide.ctaHref}
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex-3 height-full width-full radius-lg grid-col-6"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
