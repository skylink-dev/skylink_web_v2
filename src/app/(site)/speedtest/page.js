

import SpeedTestPage from "@/app/(site)/speedtest/SpeedTest";

// Speed Test page metadata
export const metadata = {
    title: "Internet Speed Test | Skylink",
    description: "Test your current internet connection speed with Skylink's free online speed test. Measure your download and upload speeds accurately.",
    keywords: [
        'internet speed test',
        'bandwidth test',
        'network speed',
        'connection test',
        'download speed',
        'upload speed',
        'latency test'
    ],
    openGraph: {
        title: "Internet Speed Test | Skylink",
        description: "Test your current internet connection speed with our free online tool.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/speedtest`,
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Internet Speed Test | Skylink",
            },
        ],
    },
    twitter: {
        title: "Internet Speed Test | Skylink",
        description: "Test your current internet connection speed with our free online tool.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page(){
    return(
        <>
            <SpeedTestPage/>
        </>
    )
}