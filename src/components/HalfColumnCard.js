"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HalfColumnCard({ titlecontent, items, color }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    setIsMounted(true);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-gray-50 py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        {titlecontent && (
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold">
              {titlecontent.sub}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {titlecontent.title}
            </h2>
            <Link
              href="/plans"
              aria-label={titlecontent.cta}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition"
            >
              {titlecontent.cta}
            </Link>
          </div>
        )}

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden relative shadow-lg bg-white group min-h-[450px] md:min-h-[550px]"
              style={{
                backgroundImage: `url(${
                  isMobile && item.mobileimage ? item.mobileimage : item.image
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>

              {/* Card content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10 text-white">
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-300">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg mb-4 opacity-90">
                    {item.description}
                  </p>
                  {item.legalText && (
                    <p className="text-xs opacity-70 mt-2">{item.legalText}</p>
                  )}
                </div>

                <div className="mt-6">
                  <Link
                    href={item.link}
                    className={`inline-block px-6 py-3 rounded-md text-sm font-medium transition ${
                      color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white text-gray-900 hover:bg-gray-200"
                    }`}
                    aria-label="Shop now"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
