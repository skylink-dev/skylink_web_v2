import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function FlexCard({
  auth,
  title,
  contentData,
  rightImage,
  leftImage,
  mobileleftImage,
  mobileRightImage,
  rightContentData,
  additionalclass,
  toppaddingremove,
  optionalColor
}) {
  const [selectedId, setSelectedId] = useState(contentData?.[0]?.id || null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const selected = contentData?.find(item => item.id === selectedId);
  const rightSelected = rightContentData;

  useEffect(() => {
    if (!contentData || contentData.length === 0) return;
    const interval = setInterval(() => {
      setSelectedId(prev => {
        const currentIndex = contentData.findIndex(item => item.id === prev);
        const nextIndex = (currentIndex + 1) % contentData.length;
        return contentData[nextIndex].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [contentData]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    setIsMounted(true);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [leftBg1, setLeftBg1] = useState('');
  const [leftBg2, setLeftBg2] = useState('');
  const [leftVisible1, setLeftVisible1] = useState(true);

  const [rightBg1, setRightBg1] = useState('');
  const [rightBg2, setRightBg2] = useState('');
  const [rightVisible1, setRightVisible1] = useState(true);

  useEffect(() => {
    if (!selected) return;
    const newImage = isMobile ? (selected.mobileLeftImage || selected.leftImage) : selected.leftImage;
    if (leftVisible1) {
      setLeftBg2(newImage);
      setTimeout(() => setLeftVisible1(false), 20);
    } else {
      setLeftBg1(newImage);
      setTimeout(() => setLeftVisible1(true), 20);
    }
  }, [selectedId, isMobile]);

  useEffect(() => {
    if (!rightSelected) return;
    const newImage = isMobile ? (mobileRightImage || rightImage) : rightImage;
    if (rightVisible1) {
      setRightBg2(newImage);
      setTimeout(() => setRightVisible1(false), 20);
    } else {
      setRightBg1(newImage);
      setTimeout(() => setRightVisible1(true), 20);
    }
  }, [selectedId, isMobile]);

  return (
    <div>
      <div className={`max-width-background bgcolor mar-b-none mar-t-none pad-b-md pad-t-lg theme-base-bg ${toppaddingremove}`}>
        <div className="container rel">
          {title && (
            <div className="row flex-wrap justify-center">
              <div className="text-center grid-col-10">
                <h1 className="mar-b-xs heading-xxl color-att-blue">{title}</h1>
              </div>
            </div>
          )}

          <div className={`row flex-wrap flex-items-stretch justify-center ${additionalclass}`}>
            <div className="grid-col-8">
              <div
                id="card-40"
                className="card flex-card radius-lg rel bgcolor theme-dark-bg-img flex-card-background"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Background crossfade divs */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${leftBg1})`,
                    opacity: leftVisible1 ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: 0
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${leftBg2})`,
                    opacity: leftVisible1 ? 0 : 1,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: 0
                  }}
                />
                {/* Content */}
                <div className="row flex flex-column card-height-tall rel" style={{ position: 'relative', zIndex: 1 }}>
                  <div className="flex-1 grid-col-6 pad-r-none-lg pad-b-none pad-md-lg pad-md-md pad-lg-sm pad-r-none">
                    <div>
                      {selected && (
                        <>
                          <p className="type-eyebrow-lg">{selected.subtitle}</p>
                          <h3 className="heading-lg">{selected.title}</h3>
                          <div className="type-base mar-t-xs rte-styles">{selected.description}</div>
                          <div id="card-40-legal_Legal" className="type-legal mar-t-xxs">
                            <span>{selected.details}</span>
                            <button className="btn-reset nowrap" aria-label=" See details about this offer"></button>
                          </div>
                          <div className="cta-container mar-t-xs font-color-change">
                            <Link className="btn-primary bg-white" href={selected.link || "#"}>
                              Subscribe now
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="grid-col-4">
              <div
                id="card-41"
                className="card flex-card radius-lg rel bgcolor theme-light-bg-img flex-card-background"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Background crossfade divs */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${rightBg1})`,
                    opacity: rightVisible1 ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: 0
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${rightBg2})`,
                    opacity: rightVisible1 ? 0 : 1,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: 0
                  }}
                />
                {/* Content */}
                <div
                  className={`row flex flex-column card-height-tall rel`}
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <div className={`flex-1 grid-col-6 pad-b-none max-width pad-md-lg pad-md-md pad-lg-sm ${optionalColor}`}>
                    <div>
                      <p className="type-eyebrow-md">{rightSelected?.subheading}</p>
                      <h3 className="heading-md" dangerouslySetInnerHTML={{ __html: rightSelected?.heading }}></h3>
                      <div className="type-base mar-t-xs rte-styles">{rightSelected?.description}</div>
                      <div id="card-41-legal_Legal" className="type-legal mar-t-xxs">
                        <span>{rightSelected?.legal}</span>
                        <button className="btn-reset nowrap" aria-label="See switcher offer details">
                          {rightSelected?.smallcta}
                        </button>
                      </div>
                      <div className="cta-container mar-t-xs">
                        <Link className="btn-primary" href={rightSelected?.href || '#'}>
                          {rightSelected?.mainCta}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 grid-col-6 pad-b-none max-width">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
