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
    <section className={`bg-theme-base-bg ${toppaddingremove || ""} py-12`}>
      <div className="container mx-auto px-4 relative">
        {title && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
              {title}
            </h1>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* LEFT CARD */}
          <motion.div
            className="flex-1 bg-cover bg-center relative rounded-2xl overflow-hidden min-h-[550px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              key={selectedId}
              className="relative z-10 p-8 sm:p-10 md:p-12 text-white  h-full pr-45 flex flex-col justify-center rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {selected && (
                <>
                  <p className="uppercase tracking-wide text-sm mb-2">
                    {selected.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    {selected.title}
                  </h3>
                  <p className="text-base mb-4">{selected.description}</p>
                  <p className="text-sm opacity-80">{selected.details}</p>
                  <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Link
                      href={selected.link || "#"}
                      className="inline-block bg-white text-blue-600 font-semibold py-2 px-5 rounded-lg shadow hover:bg-blue-100 transition"
                    >
                      Subscribe now
                    </Link>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="flex-1 bg-cover bg-center relative rounded-2xl overflow-hidden min-h-[550px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              className={`relative z-0 p-8 sm:p-10 md:p-12 bg-white/70  h-full flex flex-col justify-center rounded-2xl ${optionalColor}`}
              key={rightSelected?.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase text-gray-600 text-sm mb-2">
                {rightSelected?.subheading}
              </p>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700"
                dangerouslySetInnerHTML={{ __html: rightSelected?.heading }}
              />
              <p className="text-gray-700 mb-4">{rightSelected?.description}</p>
              <p className="text-xs text-gray-500">{rightSelected?.legal}</p>
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={rightSelected?.href || "#"}
                  className="inline-block bg-blue-600 text-white py-2 px-5 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  {rightSelected?.mainCta}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
