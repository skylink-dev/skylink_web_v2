import React, { useEffect, useState } from "react";
import { tvPackages, getSelectedPackage } from "../../../src/app/(site)/plans/utils/channelDetailsUtils";


export default function CurrentChannel({ activeChannel }) {
    const baseImages = [
        "https://skylink.net.in/wp-content/uploads/2025/02/sun-tv.svg",
        "https://skylink.net.in/wp-content/uploads/2025/02/vijay-tv.webp",
        "https://skylink.net.in/wp-content/uploads/2025/02/zee-tamil.png",
    ];

    const extendedImages = [
        "https://skylink.net.in/wp-content/uploads/2025/03/Discovery_HD_World.png",
        "https://skylink.net.in/wp-content/uploads/2025/03/National_Geographic_Channel.svg.png",
    ];

    const [selectedPackage, setSelectedPackage] = useState(tvPackages[0]);

    useEffect(() => {
        const pkg = getSelectedPackage(activeChannel);
        setSelectedPackage(pkg);
    }, [activeChannel]);

    return (
        <div className="tv-channel-image-wrap">
            {baseImages.map((src, index) => (
                <img key={index} src={src} alt="TV Channel" />
            ))}
            {selectedPackage.label !== "350+ Channels" &&
                extendedImages.map((src, index) => (
                    <img key={index} src={src} alt="TV Channel" />
                ))}
            <p>
            </p>
        </div>
    );
}
