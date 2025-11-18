import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomIptvSlider = ({ iptvaddons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = iptvaddons.filter(item => item && item.trim() !== "");

  if (items.length === 0) return null;

  const currentItem = items[currentIndex].trim();

  const prevSlide = () => {
    setCurrentIndex((idx) => (idx === 0 ? items.length - 1 : idx - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((idx) => (idx === items.length - 1 ? 0 : idx + 1));
  };

  const renderSlide = () => {
    const pdfLink = (() => {
      switch (currentItem) {
        case "Skyplay Mini":
          return "/assets/pdf/iptv-skyplay-min-channel-lists.pdf";
        case "Skyplay Pro":
          return "/assets/pdf/iptv-skyplay-pro-channel-lists.pdf";
        case "Skyplay Premium":
          return "/assets/pdf/iptv-skyplay-premium-channel-lists.pdf";
        case "Skyplay Mini Hindi pack":
          return "/assets/pdf/iptv-skyplay-premium-channel-lists.pdf";
        case "Skyplay Hindi  Combo SD":
          return "/assets/pdf/iptv-skyplay-premium-channel-lists.pdf";
        default:
          return null;
      }
    })();

    const downloadLinkWithArrows = pdfLink ? (
      <div className="flex items-center action-wrap">
        <Link href={pdfLink} download>
          Download
        </Link>

        {items.length > 1 && (
          <>
            {/* Left arrow */}
            <motion.button
              onClick={prevSlide}
              aria-label="Previous slide"
              style={{
                marginLeft: 8,
                cursor: "pointer",
                border: "none",
                background: "transparent",
                fontSize: 18,
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8592;
            </motion.button>

            {/* Right arrow */}
            <motion.button
              onClick={nextSlide}
              aria-label="Next slide"
              style={{
                marginLeft: 8,
                cursor: "pointer",
                border: "none",
                background: "transparent",
                fontSize: 18,
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8594;
            </motion.button>
          </>
        )}
      </div>
    ) : null;

    switch (currentItem) {
      case "Skyplay Mini":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Skylink Mini Addon - ₹93</h2>
            <div className="image-wrap w-100 flex gap-2">
              <Image alt="sun-tv" width={40} height={40} src="/assets/sun-tv.png" />
              <Image alt="zee" width={40} height={40} src="/assets/zee-tamizh.png" />
              <Image alt="vijay" width={40} height={40} src="/assets/vijay-tv.png" />
            </div>
            {downloadLinkWithArrows}
          </div>
        );
      case "Skyplay Pro":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Skylink Pro Addon - ₹ 164</h2>
            <div className="image-wrap w-100 flex gap-2">
              <Image alt="sun-tv" width={40} height={40} src="/assets/sun-tv.png" />
              <Image alt="zee" width={40} height={40} src="/assets/zee-tamizh.png" />
              <Image alt="vijay" width={40} height={40} src="/assets/vijay-tv.png" />
              <Image alt="star" width={40} height={40} src="/assets/star-sports.png" />
            </div>
            {downloadLinkWithArrows}
          </div>
        );
      case "Skyplay Premium":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Skylink Premium Addon - ₹ 472</h2>
            <div className="image-wrap w-100 flex gap-2">
              <Image alt="sun-tv" width={40} height={40} src="/assets/sun-tv.png" />
              <Image alt="zee" width={40} height={40} src="/assets/zee-tamizh.png" />
              <Image alt="vijay" width={40} height={40} src="/assets/vijay-tv.png" />
            </div>
            {downloadLinkWithArrows}
          </div>
        );
      case "Skyplay Mini Hindi pack":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Skylink Mini Hindi Addon - ₹195 </h2>
            <div className="image-wrap w-100 flex gap-2">
              <Image alt="tune6" width={40} height={40} src="/assets/star-plus.webp" />
              <Image alt="ddtamil" width={40} height={40} src="/assets/zee-tv-hindi.png" />
              <Image alt="mktunes" width={40} height={40} src="/assets/colors-tv-channel.png" />
              <Image alt="polimer" width={40} height={40} src="/assets/sony-entertainment.png" />
            </div>
            {downloadLinkWithArrows}
          </div>
        );
      case "Skyplay Hindi Combo SD":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Skylink Hindi Combo SD - ₹131 </h2>
            <div className="image-wrap w-100 flex gap-2">
              <Image alt="tune6" width={40} height={40} src="/assets/star-plus.webp" />
              <Image alt="ddtamil" width={40} height={40} src="/assets/zee-tv-hindi.png" />
              <Image alt="mktunes" width={40} height={40} src="/assets/colors-tv-channel.png" />
              <Image alt="polimer" width={40} height={40} src="/assets/sony-entertainment.png" />
              <Image alt="polimer" width={40} height={40} src="/assets/nick.png" />
            </div>
            {downloadLinkWithArrows}
          </div>
        );
      case "Skyplay Hindi Combo HD":
        return (
          <div className="info-details px-4">
            <h2 className="mt-4 font-semibold">Skylink Hindi Combo HD - ₹195 </h2>
            <div className="image-wrap w-100 flex gap-2">
              <Image alt="tune6" width={40} height={40} src="/assets/star-plus.webp" />
              <Image alt="ddtamil" width={40} height={40} src="/assets/zee-tv-hindi.png" />
              <Image alt="mktunes" width={40} height={40} src="/assets/colors-tv-channel.png" />
              <Image alt="polimer" width={40} height={40} src="/assets/sony-entertainment.png" />
              <Image alt="polimer" width={40} height={40} src="/assets/nick.png" />
            </div>
            {downloadLinkWithArrows}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="custom-slider relative w-full max-w-md mx-auto">
      <div>{renderSlide()}</div>
    </div>
  );
};

export default CustomIptvSlider;
