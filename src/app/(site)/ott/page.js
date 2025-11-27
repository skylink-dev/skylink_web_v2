import Ott from "@/app/(site)/ott/Ott";


export const metadata = {
    title: 'Skylink OTT Streaming Services | Premium Content Anywhere',
    description: 'Access 25+ premium OTT platforms with Skylink streaming services. Watch movies, shows, and live TV on any device with our high-speed streaming packages.',
    keywords: 'Skylink OTT, streaming service, Netflix, Amazon Prime, Disney+, Hotstar, Sony LIV, ZEE5, online TV, movies, shows, live TV, on-demand content, premium streaming',
    openGraph: {
        title: 'Skylink OTT Streaming Services | Premium Content Anywhere',
        description: 'Access 25+ premium OTT platforms with Skylink streaming services. Watch movies, shows, and live TV on any device with our high-speed streaming packages.',
        images: [{url: '/newassets/metaImage/skylink_opengraph.png'}],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Skylink OTT Streaming Services | Premium Content Anywhere',
        description: 'Access 25+ premium OTT platforms with Skylink streaming services. Watch movies, shows, and live TV on any device with our high-speed streaming packages.',
        images: ['/newassets/metaImage/skylink_opengraph.png'],
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


export default function page(){
    return(
        <>
            <Ott/>
        </>

    )
}