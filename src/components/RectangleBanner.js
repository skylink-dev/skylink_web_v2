'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RectangleBanner({
  backgroundImage,
  eyebrow,
  heading,
  description,
  buttonText,
  buttonLink,
  darkTheme = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className={`max-width-background mar-b-md hero-panel flex-column zoom-on-hover ${
        darkTheme ? 'theme-dark-bg-img' : ''
      } my-5`}
      style={{ position: 'relative' }}
    >
      {/* Background */}
      <div className="jsx-1049057036 bg-art absolute-fill bgcolor overflow-hidden order1 bgcolor-fix panel-height-base">
        <div className="absolute-fill bgcolor bgcolor-fix"></div>
        <div
          className="absolute-fill bg-no-repeat zoomable"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 1s ease',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container flex panel-height-base">
        <div className="row flex-wrap flex-self-stretch hero-panel-content rel">
          <div className="flex flex-items-center justify-center order1 hero-panel-image grid-col-6 grid-col-6-md grid-col-12-sm flex-self-stretch"></div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex-self-center pad-t-xl pad-b-xl rel grid-col-6 grid-col-6-md grid-col-12-sm"
          >
            <p className="type-eyebrow-xl">
              <span className="nowrap">{eyebrow}</span>
            </p>
            <h2
              className="mar-b-xs heading-xl"
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h2>
            <div
              className="type-base mar-b-xs rte-styles"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-wrap gap16"
            >
              <Link
                href={buttonLink}
                className="jsx-1196099039 btn-primary bg-white text-black"
                aria-label={buttonText}
              >
                {buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
