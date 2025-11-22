import Covai from "@/app/(site)/coimbatore/Covai";


// Coimbatore page metadata
export const metadata = {
    title: "Best Internet & Broadband Plans in Coimbatore - Skylink Fibernet",
    description: "Skylink provides fast, reliable internet & broadband plans of Coimbatore with unlimited data, stable speeds, quick installation, and local support.",
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
        'coimbatore internet provider',
        'fiber internet coimbatore',
        'tv services coimbatore',
        'best internet coimbatore',
        'skylink coimbatore'
    ],
    openGraph: {
        title: "Internet & TV Services in Coimbatore | Skylink",
        description: "Skylink offers high-speed fiber internet and TV services in Coimbatore. Check availability in your area today.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/coimbatore`,
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Internet & TV Services in Coimbatore | Skylink",
            },
        ],
    },
    twitter: {
        title: "Internet & TV Services in Coimbatore | Skylink",
        description: "Skylink offers high-speed fiber internet and TV services in Coimbatore. Check availability in your area today.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page() {
 return (
     <>
         <Covai/>
     </>
 )
}
