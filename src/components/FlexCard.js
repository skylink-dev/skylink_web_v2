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
  }, [selected, isMobile]);

  useEffect(() => {
    if (rightSelected)
      setRightBg(isMobile ? mobileRightImage || rightImage : rightImage);
  }, [rightSelected, isMobile, mobileRightImage, rightImage]);

  if (!isMounted) return null;

  return (
    <section
      className={`bg-gradient-to-br from-gray-50 to-red-50 ${
        toppaddingremove || ""
      } py-8 sm:py-12 md:py-16`}
    >
      <div className="container mx-auto p-3 sm:p-4 md:p-6 relative">
        {title && (
          <motion.div
            className="text-center mb-6 sm:mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl p-2 min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-600/80 to-red-600 bg-clip-text text-transparent px-2">
              {title}
            </h1>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-stretch max-w-[95rem] mx-auto">
          {/* LEFT CARD - LANDSCAPE (Wider) */}
          <motion.div
            className="lg:flex-[2] bg-cover bg-center relative rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] min-[375px]:h-[450px] sm:h-[480px] md:h-[500px] shadow-xl sm:shadow-2xl hover:shadow-red-500/20 transition-shadow duration-300"
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
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-[1]" />

            <motion.div
              key={selectedId}
              className="relative z-10  p-5 min-[375px]:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 text-white h-full flex flex-col justify-center rounded-2xl sm:rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {selected && (
                <>
                  <motion.p
                    className="uppercase tracking-wider sm:tracking-widest text-xs min-[375px]:text-xs mb-2 sm:mb-3 text-red-400 font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selected.subtitle}
                  </motion.p>
                  <motion.h3
                    className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selected.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm min-[375px]:text-base sm:text-lg mb-2 sm:mb-3 text-gray-100 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selected.description}
                  </motion.p>
                  <motion.p
                    className="text-xs min-[375px]:text-sm opacity-90 text-gray-200 max-w-2xl mb-4 sm:mb-5 md:mb-6"
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
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2.5 min-[375px]:py-3 px-6 min-[375px]:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-sm min-[375px]:text-base"
                    >
                      <span>Subscribe now</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT CARD - PORTRAIT (Image visible, content at top) */}
          <motion.div
            className="lg:flex-1 bg-cover bg-center relative rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] min-[375px]:h-[450px] sm:h-[480px] md:h-[500px] shadow-xl sm:shadow-2xl hover:shadow-red-500/20 transition-shadow duration-300"
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

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-[1]" />

            {/* Content at top */}
            <motion.div
              className={`relative z-10 p-5 min-[375px]:p-6 sm:p-8 md:p-10 text-white h-full flex flex-col justify-start rounded-2xl sm:rounded-3xl ${optionalColor}`}
              key={rightSelected?.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="uppercase text-red-300 text-xs min-[375px]:text-sm mb-1.5 sm:mb-2 font-semibold tracking-wider sm:tracking-widest drop-shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {rightSelected?.subheading}
              </motion.p>
              <motion.h3
                className="text-lg min-[375px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-white leading-tight drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: rightSelected?.heading }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              />
              <motion.p
                className="text-gray-100 mb-2 sm:mb-3 text-xs min-[375px]:text-sm leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {rightSelected?.description}
              </motion.p>
              <motion.p
                className="text-xs text-gray-200 mb-3 sm:mb-4 drop-shadow-lg"
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 min-[375px]:py-2.5 px-5 min-[375px]:px-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-xs min-[375px]:text-sm"
                >
                  <span>{rightSelected?.mainCta}</span>
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:shadow-red-500\\/20:hover,
          .hover\\:shadow-red-500\\/50:hover {
            box-shadow: none;
          }
        }
      `}</style>
    </section>
  );
}
