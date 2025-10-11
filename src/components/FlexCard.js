"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
  optionalColor,
}) {
  const [selectedId, setSelectedId] = useState(contentData?.[0]?.id || null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const selected = contentData?.find((item) => item.id === selectedId);
  const rightSelected = rightContentData;

  useEffect(() => {
    if (!contentData || contentData.length === 0) return;
    const interval = setInterval(() => {
      setSelectedId((prev) => {
        const currentIndex = contentData.findIndex((item) => item.id === prev);
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [leftBg, setLeftBg] = useState("");
  const [rightBg, setRightBg] = useState("");

  useEffect(() => {
    if (selected)
      setLeftBg(isMobile ? selected.mobileLeftImage || selected.leftImage : selected.leftImage);
  }, [selectedId, isMobile]);

  useEffect(() => {
    if (rightSelected)
      setRightBg(isMobile ? mobileRightImage || rightImage : rightImage);
  }, [selectedId, isMobile]);

  return (
    <div>
      <div
        className={`max-width-background bgcolor mar-b-none mar-t-none pad-b-md pad-t-lg theme-base-bg ${toppaddingremove}`}
      >
        <div className="container rel">
          {title && (
            <motion.div
              className="row flex-wrap justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center grid-col-10">
                <h1 className="mar-b-xs heading-xxl color-att-blue">{title}</h1>
              </div>
            </motion.div>
          )}

          <div
            className={`row flex-wrap flex-items-stretch justify-center ${additionalclass}`}
          >
            {/* LEFT CARD */}
            <motion.div
              className="grid-col-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                id="card-40"
                className="card flex-card radius-lg rel bgcolor theme-dark-bg-img flex-card-background overflow-hidden"
              >
                <AnimatePresence>
                  <motion.div
                    key={leftBg}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${leftBg})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                  />
                </AnimatePresence>

                <motion.div
                  className="row flex flex-column card-height-tall rel"
                  style={{ position: "relative", zIndex: 1 }}
                  key={selectedId}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex-1 grid-col-6 pad-md-lg pad-lg-sm">
                    {selected && (
                      <>
                        <p className="type-eyebrow-lg">{selected.subtitle}</p>
                        <h3 className="heading-lg">{selected.title}</h3>
                        <div className="type-base mar-t-xs rte-styles">
                          {selected.description}
                        </div>
                        <div
                          id="card-40-legal_Legal"
                          className="type-legal mar-t-xxs"
                        >
                          <span>{selected.details}</span>
                        </div>
                        <motion.div
                          className="cta-container mar-t-xs font-color-change"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Link
                            className="btn-primary bg-white"
                            href={selected.link || "#"}
                          >
                            Subscribe now
                          </Link>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              className="grid-col-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                id="card-41"
                className="card flex-card radius-lg rel bgcolor theme-light-bg-img flex-card-background overflow-hidden"
              >
                <AnimatePresence>
                  <motion.div
                    key={rightBg}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${rightBg})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                  />
                </AnimatePresence>

                <motion.div
                  className={`row flex flex-column card-height-tall rel`}
                  style={{ position: "relative", zIndex: 1 }}
                  key={rightSelected?.heading}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className={`flex-1 grid-col-6 pad-b-none max-width pad-md-lg pad-md-md pad-lg-sm ${optionalColor}`}
                  >
                    <p className="type-eyebrow-md">
                      {rightSelected?.subheading}
                    </p>
                    <h3
                      className="heading-md"
                      dangerouslySetInnerHTML={{
                        __html: rightSelected?.heading,
                      }}
                    />
                    <div className="type-base mar-t-xs rte-styles">
                      {rightSelected?.description}
                    </div>
                    <div
                      id="card-41-legal_Legal"
                      className="type-legal mar-t-xxs"
                    >
                      <span>{rightSelected?.legal}</span>
                    </div>
                    <motion.div
                      className="cta-container mar-t-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        className="btn-primary"
                        href={rightSelected?.href || "#"}
                      >
                        {rightSelected?.mainCta}
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
