import React, { useState } from "react";
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
                return "https://skyplay.in/assets/pdf/ott-ottplay-basic.pdf";
            case "OTTplay Lite Pack":
                return "https://skyplay.in/assets/pdf/ott-ottplay-lite.pdf";
            case "OTTplay Flexi Pack":
                return "https://skyplay.in/assets/pdf/ott-ottplay-flexi.pdf";
            case "OTTplay Mega Pack":
                return "https://skyplay.in/assets/pdf/ott-ottplay-mega.pdf";
            case "PlayBoxIPTV Lite Pack":
                return "https://skyplay.in/assets/pdf/ott-playboxiptv-lite.pdf";
            case "PlayBoxIPTV Flexi Pack":
                return "https://skyplay.in/assets/pdf/ott-playboxiptv-flexi.pdf";
            case "PlayBoxIPTV Mega Pack":
                return "https://skyplay.in/assets/pdf/ott-playboxiptv-mega.pdf";
            case "PlayBoxIPTV Mega Max Pack":
                return "https://skyplay.in/assets/pdf/ott-playboxiptv-mega.pdf";
            case "PlayBoxIPTV Flexi Plus Pack":
                return "https://skyplay.in/assets/pdf/ott-playboxiptv-flexiplus.pdf";
            case "PlayBoxIPTV Mega Plus Pack":
                return "https://skyplay.in/assets/pdf/ott-playboxiptv-megaplus.pdf";
            case "Watcho Basic Pack":
                return "https://skyplay.in/assets/pdf/ott-watcho-basic.pdf";
            default:
                return null;
        }
    })();


    const downloadLinkWithArrows = pdfLink ? (
        <div className="flex items-center action-wrap mt-2">
            <a href={pdfLink} download>
                Download
            </a>
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
                            <img src="https://skyplay.in/assets/sunnxt.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/jio-hotstrar.webp" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/Amazon_Prime_Video_logo_2024.svg.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "OTTplay Lite Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Lite Pack - ₹ 54</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/sunnxt.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/jio-hotstrar.webp" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/Amazon_Prime_Video_logo_2024.svg.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "OTTplay Flexi Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Flexi Pack - ₹ 80</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/sunnxt.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/jio-hotstrar.webp" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/Amazon_Prime_Video_logo_2024.svg.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "OTTplay Mega Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">OTTplay Mega Pack - ₹ 155</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/sunnxt.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2025/02/jio-hotstrar.webp" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" alt="SonyLiv" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "PlayBoxIPTV Lite Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Lite Pack - ₹ 67</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/sunnxt.png" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Flexi Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Flexi Pack - ₹75</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Mega Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Mega Pack - ₹84</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Mega Max Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Mega Pack - ₹84</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "PlayBoxIPTV Flexi Plus Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Flexi Plus - ₹ 1728</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "PlayBoxIPTV Mega Plus Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">PlayBoxIPTV Mega Plus - ₹ 1999</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );

            case "Watcho Basic Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">Watcho Basic Pack - ₹ 89</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
                        </div>
                        {downloadLinkWithArrows}
                    </div>
                );
            case "Watcho Lite Pack":
                return (
                    <div className="info-details px-4">
                        <h2 className="mt-4 font-semibold">Watcho Basic Pack - ₹ 199</h2>
                        <div className="image-wrap w-100 flex gap-2">
                            <img src="https://skyplay.in/assets/zee.jpg" alt="Zee 5" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/rajdigital-tv.png" alt="Raj Digital Tv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/aha-logo.png" alt="Aha" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/sony-liv.jpg" alt="Sony liv" style={{"width":"35px", "height":"35px"}} />
                            <img src="https://skyplay.in/assets/hungama.png" alt="Hungama" style={{"width":"35px", "height":"35px"}} />
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
