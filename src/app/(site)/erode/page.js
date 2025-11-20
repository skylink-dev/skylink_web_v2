import Erode from "@/app/(site)/erode/Erode";
// Erode page metadata
export const metadata = {
    title: "Internet & TV Services in Erode | Skylink",
    description: "Get connected with Skylink's high-speed fiber internet and TV services in Erode. Check coverage and plans.",
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
        'erode internet provider',
        'fiber internet erode',
        'tv services erode',
        'best internet erode',
        'skylink erode'
    ],
    openGraph: {
        title: "Internet & TV Services in Erode | Skylink",
        description: "Get connected with Skylink's high-speed fiber internet and TV services in Erode. Check coverage and plans.",
        url: "http://stage.skylink.net.in:3000/erode",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Internet & TV Services in Erode | Skylink",
            },
        ],
    },
    twitter: {
        title: "Internet & TV Services in Erode | Skylink",
        description: "Get connected with Skylink's high-speed fiber internet and TV services in Erode. Check coverage and plans.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page(){
    return(
        <>
            <Erode/>
        </>
    )
}