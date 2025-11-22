// Home page metadata
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
    title: "Skylink - High-Speed Internet & TV Services",
    description: "Experience the best in high-speed fiber internet, TV services, and entertainment packages with Skylink. Discover plans for your home and business.",
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
        'home internet',
        'tv packages',
        'fiber optic',
        'wifi services',
        'streaming content'
    ],
    openGraph: {
        title: "Skylink - High-Speed Internet & TV Services",
        description: "Experience the best in high-speed fiber internet, TV services, and entertainment packages with Skylink.",
        url: `${BASE_URL}/`,
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Skylink - High-Speed Internet & TV Services",
            },
        ],
    },
    twitter: {
        title: "Skylink - High-Speed Internet & TV Services",
        description: "Experience the best in high-speed fiber internet, TV services, and entertainment packages with Skylink.",
        images: ["/opengraph-image.jpg"],
    },
};