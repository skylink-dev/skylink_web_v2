import Internet from "@/app/(site)/internet/Internet";
// Internet page metadata
export const metadata = {
    title: "High-Speed Fiber Internet | Skylink",
    description: "Get ultra-fast, reliable fiber internet with unlimited data. Perfect for streaming, gaming, and working from home.",
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
        'unlimited internet',
        'fiber optic internet',
        'high-speed connection',
        'no data caps',
        'internet service provider'
    ],
    openGraph: {
        title: "High-Speed Fiber Internet | Skylink",
        description: "Get ultra-fast, reliable fiber internet with unlimited data. Perfect for streaming, gaming, and working from home.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/internet`,
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "High-Speed Fiber Internet | Skylink",
            },
        ],
    },
    twitter: {
        title: "High-Speed Fiber Internet | Skylink",
        description: "Get ultra-fast, reliable fiber internet with unlimited data. Perfect for streaming, gaming, and working from home.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page() {
    return(
        <>
            <Internet/>
        </>
    )
}