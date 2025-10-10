'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoBanner() {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowContent(true);
  };
  return (
    <div
      className="max-width-background mar-b-none pad-b-xl hero-panel flex-column zoom-on-hover theme-dark-accent-bg overlay-color"
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '900px',
        marginBottom: '60px',
        width:'1920px'
      }} id="videobanner"
    >
      <div
        className="jsx-1049057036 bg-art absolute-fill bgcolor overflow-hidden order1 bgcolor-fix panel-height-tall"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <div className="absolute-fill bgcolor bgcolor-fix"></div>
        <div
          className="absolute-fill bg-no-repeat zoomable"
          style={{
            backgroundImage: "url('/assets/amazon-firestick-banner.jpg')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <div
            className="width-full height-full"
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <div
              className="jsx-2184214177 gvpBitCloud unconstrained"
              style={{ width: '100%', height: '100%' }}
            >
              <div
                className="jsx-2184214177 gvpContainer unconstrained"
                style={{ width: '100%', height: '100%' }}
              >
                <div
                  className="CTAView__ctaContainer CTAView__ctaContainer__GT1500 unconstrained color-white"
                  style={{ height: '100%' }}
                >
                  {!showContent && (
                    <video
                      key="unique-video"
                      ref={videoRef}
                      id="videoPlayer_a100359"
                      className="CTAView__ctaVideo CTAView__ctaBackground"
                      playsInline
                      autoPlay
                      muted
                      onEnded={() => {
                        console.log('Video ended event fired');
                        setShowContent(true);
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        backgroundColor: 'black',
                      }}
                    >
                      <source type="video/mp4" src="https://skyplay.in/assets/video/skyplay-firetv-video.mp4" />
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {!showContent && (
        <button
          id="closeVideo"
          title="Close Video"
          aria-label="Close Video"
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 10,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* SVG Close Icon */}
          <svg height="20" width="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="container flex panel-height-tall z1"
            style={{ position: 'relative', zIndex: 2 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="row flex-wrap flex-self-stretch justify-center flex-items-center hero-panel-content rel">
              <div className="flex flex-items-center justify-center order1 hero-panel-image visible-mobile grid-col-6 grid-col-6-md grid-col-12-sm flex-self-stretch"></div>
              <div className="flex-self-center pad-t-xl pad-b-xl text-center text-center-md text-left-sm grid-col-8 grid-col-10-md grid-col-12-sm undefined">
                <p className="type-eyebrow-xxl">
                  Introducing the Skylink Fire Tv <span className="nowrap">Guarantee</span>
                </p>
                <h1 className="mar-b-xs heading-xxl">
                  Connectivity you depend on. Deals you want. Service you deserve.
                </h1>
                <div className="type-base mar-b-xs rte-styles">
                  Skylink is the first and only carrier that offers a guarantee for wire and fiber networks.
                  New and existing eligible customers are covered by the Skylink Guarantee at no extra charge.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
