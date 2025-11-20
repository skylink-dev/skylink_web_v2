import Tiruppur from "@/app/(site)/tiruppur/Tiruppur";

// Tiruppur page metadata
export const metadata = {
    title: "Internet & TV Services in Tiruppur | Skylink",
    description: "Skylink offers reliable high-speed fiber internet and TV services throughout Tiruppur. Check availability now.",
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
        'tiruppur internet provider',
        'fiber internet tiruppur',
        'tv services tiruppur',
        'best internet tiruppur',
        'skylink tiruppur'
    ],
    openGraph: {
        title: "Internet & TV Services in Tiruppur | Skylink",
        description: "Skylink offers reliable high-speed fiber internet and TV services throughout Tiruppur. Check availability now.",
        url: "http://stage.skylink.net.in:3000/tiruppur",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Internet & TV Services in Tiruppur | Skylink",
            },
        ],
    },
    twitter: {
        title: "Internet & TV Services in Tiruppur | Skylink",
        description: "Skylink offers reliable high-speed fiber internet and TV services throughout Tiruppur. Check availability now.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page() {
    return (
        <>
            <Tiruppur/>
    </>
    )
}