import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomSliderOtt = ({ ottaddons }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = ottaddons.filter(item => item && item.trim() !== "");

    if (items.length === 0) return null;

    const currentItem = items[currentIndex].trim();

    const prevSlide = () => {
        setCurrentIndex((idx) => (idx === 0 ? items.length - 1 : idx - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((idx) => (idx === items.length - 1 ? 0 : idx + 1));
    };

    const pdfLink = (() => {
        switch (currentItem) {
            case "OTTplay Basic Pack":
                return "/assets/pdf/ott-ottplay-basic.pdf";
            case "OTTplay Lite Pack":
                return "/assets/pdf/ott-ottplay-lite.pdf";
            case "OTTplay Flexi Pack":
                return "/assets/pdf/ott-ottplay-flexi.pdf";
            case "OTTplay Mega Pack":
                return "/assets/pdf/ott-ottplay-mega.pdf";
            case "PlayBoxIPTV Lite Pack":
                return "/assets/pdf/ott-playboxiptv-lite.pdf";
            case "PlayBoxIPTV Flexi Pack":
                return "/assets/pdf/ott-playboxiptv-flexi.pdf";
            case "PlayBoxIPTV Mega Pack":
                return "/assets/pdf/ott-playboxiptv-mega.pdf";
            case "PlayBoxIPTV Mega Max Pack":
                return "/assets/pdf/ott-playboxiptv-mega.pdf";
            case "PlayBoxIPTV Flexi Plus Pack":
                return "/assets/pdf/ott-playboxiptv-flexiplus.pdf";
            case "PlayBoxIPTV Mega Plus Pack":
                return "/assets/pdf/ott-playboxiptv-megaplus.pdf";
            case "Watcho Basic Pack":
                return "/assets/pdf/ott-watcho-basic.pdf";
            default:
                return null;
        }
    })();


    const downloadLinkWithArrows = pdfLink ? (
        <div className="flex items-center action-wrap mt-2">
            <Link href={pdfLink} download>
                Download
            </Link>
            <motion.button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="ml-2 text-xl"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                style={{ marginLeft: 8, background: "transparent", border: "none", cursor: "pointer" }}
            >
                &#8592;
            </motion.button>
            <motion.button
                onClick={nextSlide}
                aria-label="Next slide"
                className="ml-2 text-xl"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                style={{ marginLeft: 8, background: "transparent", border: "none", cursor: "pointer" }}
            >
                &#8594;
            </motion.button>
        </div>
    ) : null;

    const renderSlide = () => {
        switch (currentItem) {
            case "OTTplay Basic Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Basic Pack - ₹ 29</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/sunnxt.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/fancode.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/distro-tv.png" alt="SonyLiv" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "OTTplay Lite Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Lite Pack - ₹ 54</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/sunnxt.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/fancode.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/distro-tv.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/red-hot.avif" alt="SonyLiv" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "OTTplay Flexi Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Flexi Pack - ₹ 80</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/sunnxt.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/fancode.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/distro-tv.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/red-hot.avif" alt="SonyLiv" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "OTTplay Mega Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Mega Pack - ₹ 155</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/sunnxt.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/lionsgate.jpg" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="SonyLiv" width={60} height={60} />
                            <Image src="/assets/red-hot.avif" alt="SonyLiv" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "PlayBoxIPTV Lite Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Lite Pack - ₹ 67</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Flexi Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Flexi Pack - ₹75</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Mega Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Mega Pack - ₹84</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Mega Max Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Mega Pack - ₹84</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Flexi Plus Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Flexi Plus - ₹ 1728</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "PlayBoxIPTV Mega Plus Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Mega Plus - ₹ 1999</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "Watcho Basic Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">Watcho Basic Pack - ₹ 89</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "Watcho Lite Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">Watcho Basic Pack - ₹ 199</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <Image src="/assets/zee.jpg" alt="Zee 5" width={60} height={60} />
                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
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
            {renderSlide()}
        </div>
    );
};

export default CustomSliderOtt;
