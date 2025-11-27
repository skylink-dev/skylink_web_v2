import Blogs from "@/app/(site)/blogs/Blogs";

// Blogs page metadata
export const metadata = {
    title: "Blogs & Articles | Skylink",
    description: "Explore Skylink's blog for the latest articles on internet technology, streaming services, smart home solutions, and digital lifestyle tips.",
    keywords: [
        'skylink blog',
        'internet articles',
        'streaming guides',
        'technology tips',
        'digital lifestyle',
        'fiber internet news',
        'smart home articles'
    ],
    openGraph: {
        title: "Blogs & Articles | Skylink",
        description: "Explore our latest articles on internet technology and digital lifestyle.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Blogs & Articles | Skylink",
            },
        ],
    },
    twitter: {
        title: "Blogs & Articles | Skylink",
        description: "Explore our latest articles on internet technology and digital lifestyle.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page() {


  return (
    <>
     <Blogs/>
    </>
  );
}
