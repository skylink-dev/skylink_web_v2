"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <></>
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.95, y: 40 }}
    //   animate={{ opacity: 1, scale: 1, y: 0 }}
    //   transition={{ duration: 0.7, ease: "easeOut" }}
    //   whileHover={{ scale: 1.01 }}
    //   className={`relative overflow-hidden rounded-2xl shadow-lg my-10 mx-4 sm:mx-6 md:mx-10 lg:mx-auto ${
    //     darkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    //   } max-w-7xl`}
    // >
    //   {/* Background Image */}
    //   <div
    //     className="absolute inset-0 bg-cover bg-center"
    //     style={{
    //       backgroundImage: `url('${backgroundImage}')`,
    //     }}
    //   ></div>

    //   {/* Content Container */}
    //   <div className="relative z-10 flex flex-col items-start justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px] px-5 sm:px-8 md:px-16 py-10">
    //     {/* Text Block */}
    //     <motion.div
    //       initial={{ opacity: 0, x: 40 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    //       className="max-w-xl text-left"
    //     >
    //       {/* Eyebrow Text */}
    //       <p className="text-sm uppercase tracking-wide font-semibold text-blue-400 mb-2">
    //         {eyebrow}
    //       </p>

    //       {/* Heading */}
    //       <h2
    //         className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 drop-shadow-md"
    //         dangerouslySetInnerHTML={{ __html: heading }}
    //       ></h2>

    //       {/* Description */}
    //       <div
    //         className="text-sm sm:text-base leading-relaxed mb-5 break-words"
    //         dangerouslySetInnerHTML={{ __html: description }}
    //       ></div>

    //       {/* CTA Button */}
    //       {buttonText && (
    //         <motion.div whileHover={{ scale: 1.05 }}>
    //           <Link
    //             href={buttonLink}
    //             className={`inline-block px-5 py-2.5 rounded-lg font-medium shadow-md transition ${
    //               darkTheme
    //                 ? "bg-white text-gray-900 hover:bg-gray-200"
    //                 : "bg-blue-600 text-white hover:bg-blue-700"
    //             }`}
    //             aria-label={buttonText}
    //           >
    //             {buttonText}
    //           </Link>
    //         </motion.div>
    //       )}
    //     </motion.div>
    //   </div>
    // </motion.div>
  );
}
