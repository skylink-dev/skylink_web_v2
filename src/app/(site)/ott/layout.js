export const metadata = {
    title: 'Skylink OTT Streaming Services | Premium Content Anywhere',
    description: 'Access 25+ premium OTT platforms with Skylink streaming services. Watch movies, shows, and live TV on any device with our high-speed streaming packages.',
    keywords: 'Skylink OTT, streaming service, Netflix, Amazon Prime, Disney+, Hotstar, Sony LIV, ZEE5, online TV, movies, shows, live TV, on-demand content, premium streaming',
    openGraph: {
        title: 'Skylink OTT Streaming Services | Premium Content Anywhere',
        description: 'Access 25+ premium OTT platforms with Skylink streaming services. Watch movies, shows, and live TV on any device with our high-speed streaming packages.',
        images: [{url: '/assets/ott-banner.jpeg'}],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Skylink OTT Streaming Services | Premium Content Anywhere',
        description: 'Access 25+ premium OTT platforms with Skylink streaming services. Watch movies, shows, and live TV on any device with our high-speed streaming packages.',
        images: ['/assets/ott-banner.jpeg'],
        creator: '@skylinknetwork',
    },
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
    },
    alternates: {
        canonical: 'https://skylinknetwork.com/ott',
    },
};

export default function OttLayout({children}) {
    return children;
}