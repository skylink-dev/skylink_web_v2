import Support from "@/app/(site)/support/Support";


export const metadata = {
    title: "Customer Support | Skylink",
    description: "Get help with your Skylink internet, TV, or OTT services. Contact our 24/7 customer support team for technical assistance and troubleshooting.",
    keywords: [
        'skylink support',
        'customer service',
        'technical help',
        'internet troubleshooting',
        'contact skylink',
        'service assistance',
        'help center'
    ],
    openGraph: {
        title: "Customer Support | Skylink",
        description: "Get help with your Skylink internet, TV, or OTT services.",
        url: "http://stage.skylink.net.in:3000/support",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Customer Support | Skylink",
            },
        ],
    },
    twitter: {
        title: "Customer Support | Skylink",
        description: "Get help with your Skylink internet, TV, or OTT services.",
        images: ["/opengraph-image.jpg"],
    },
};


export default function Page() {
    return (
        <>
            <Support/>
        </>
    )
}