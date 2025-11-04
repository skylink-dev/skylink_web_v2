"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FlexCard({
  title,
  contentData,
  rightContentData,
  rightImage,
  leftImage,
  mobileleftImage,
  mobileRightImage,
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
      setLeftBg(
        isMobile
          ? selected.mobileLeftImage || selected.leftImage
          : selected.leftImage
      );
  }, [selectedId, isMobile]);

  useEffect(() => {
    if (rightSelected)
      setRightBg(isMobile ? mobileRightImage || rightImage : rightImage);
  }, [selectedId, isMobile]);

  return (
    <section className={`bg-gradient-to-br from-gray-50 to-red-50 ${toppaddingremove || ""} py-16`}>
      <div className="container mx-auto px-4 relative">
        {title && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {title}
            </h1>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-[95rem] mx-auto">
          {/* LEFT CARD - LANDSCAPE (Wider) */}
          <motion.div
            className="lg:flex-[2] bg-cover bg-center relative rounded-3xl overflow-hidden h-[500px] shadow-2xl hover:shadow-red-500/20 transition-shadow duration-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={leftBg}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${leftBg})` }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2 }}
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-[1]" />

            <motion.div
              key={selectedId}
              className="relative z-10 p-8 sm:p-10 md:p-12 lg:p-14 text-white h-full flex flex-col justify-center rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {selected && (
                <>
                  <motion.p 
                    className="uppercase tracking-widest text-sm mb-3 text-red-400 font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selected.subtitle}
                  </motion.p>
                  <motion.h3 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selected.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg mb-3 text-gray-100 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selected.description}
                  </motion.p>
                  <motion.p 
                    className="text-sm opacity-90 text-gray-200 max-w-2xl mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selected.details}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={selected.link || "#"}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                    >
                      <span>Subscribe now</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT CARD - PORTRAIT (Image visible, content at top) */}
          <motion.div
            className="lg:flex-1 bg-cover bg-center relative rounded-3xl overflow-hidden h-[500px] shadow-2xl hover:shadow-red-500/20 transition-shadow duration-300"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={rightBg}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${rightBg})` }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2 }}
              />
            </AnimatePresence>

            {/* Content at top without container */}
            <motion.div
              className={`relative z-10 p-6 sm:p-8 md:p-10 text-white h-full flex flex-col justify-start rounded-3xl ${optionalColor}`}
              key={rightSelected?.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="uppercase text-red-400 text-xs sm:text-sm mb-2 font-semibold tracking-widest drop-shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {rightSelected?.subheading}
              </motion.p>
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-white leading-tight drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: rightSelected?.heading }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              />
              <motion.p 
                className="text-gray-100 mb-3 text-xs sm:text-sm leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {rightSelected?.description}
              </motion.p>
              <motion.p 
                className="text-xs text-gray-200 mb-4 drop-shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {rightSelected?.legal}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={rightSelected?.href || "#"}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-sm"
                >
                  <span>{rightSelected?.mainCta}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}