"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HalfColumnCard({ titlecontent, items }) {
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-4 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        {titlecontent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-wide text-red-500 font-semibold">
              {titlecontent.sub}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              {titlecontent.title}
            </h2>
              <button
                  onClick={() => {
                      console.log("Button clicked:", titlecontent.cta);
                      if (typeof window !== 'undefined' && window.location) {
                          if (titlecontent.link && titlecontent.link !== "#" && titlecontent.link !== "") {
                          window.location.href = titlecontent.link;
                        } else {
                          window.location.href = "/contact-us";
                        }
                      }
                  }}
              aria-label={titlecontent.cta}
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300"
            >
              {titlecontent.cta}
            </button>
          </motion.div>
        )}

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-3xl overflow-hidden shadow-lg bg-gray-900 text-white min-h-[420px] md:min-h-[500px] h-full w-full group"
              style={{
                  backgroundImage: `url(${
                      isMobile && item.mobileimage ? item.mobileimage : item.image
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                  backgroundColor: "#1a202c", /* Dark background for loading state */
                  backgroundRepeat: "no-repeat",
                  height: "100%",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 ease-in-out"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-red-300 font-semibold mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 mb-4 max-w-md">
                    {item.description}
                  </p>
                  {item.legalText && (
                    <p className="text-xs opacity-70 mt-2">{item.legalText}</p>
                  )}
                </div>

                {/* Button */}
                <div className="mt-6">
                    <button
                        onClick={() => {
                            console.log("Button clicked:", "Shop Now");
                            if (typeof window !== 'undefined' && window.location) {
                                if (item.link && item.link !== "#" && item.link !== "") {
                                    window.location.href = item.link;
                                } else {
                                    window.location.href = "/contact-us";
                                }
                            }
                        }}
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300"
                    aria-label="Shop now"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
