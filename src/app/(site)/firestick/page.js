import Firetv from "@/app/(site)/firestick/Firetv";

// Firestick page metadata
export const metadata = {
    title: "Skylink Fire TV Stick | Stream TV & OTT Content",
    description: "Get the Skylink Fire TV Stick for seamless streaming of your favorite shows, movies, and OTT content. Easy setup and voice control included.",
    keywords: [
        'high speed internet',
        'fiber internet',
        'fiber broadband',
        'internet provider',
        'tv subscription',
        'entertainment packages',
        'OTT services',
        'Skylink Fiber',
        'broadband',
        'internet plans',
        'fire tv stick',
        'streaming device',
        'amazon fire tv',
        'skylink streaming',
        'ott streaming device',
        'smart tv stick'
    ],
    openGraph: {
        title: "Skylink Fire TV Stick | Stream TV & OTT Content",
        description: "Get the Skylink Fire TV Stick for seamless streaming of your favorite shows, movies, and OTT content. Easy setup and voice control included.",
        url: "http://stage.skylink.net.in:3000/firestick",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Skylink Fire TV Stick | Stream TV & OTT Content",
            },
        ],
    },
    twitter: {
        title: "Skylink Fire TV Stick | Stream TV & OTT Content",
        description: "Get the Skylink Fire TV Stick for seamless streaming of your favorite shows, movies, and OTT content. Easy setup and voice control included.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function page() {
    return(
        <>
            <Firetv/>
        </>
    )
}