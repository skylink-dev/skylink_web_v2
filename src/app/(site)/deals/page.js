import Deals from "@/app/(site)/deals/Deals";

// Deals page metadata
export const metadata = {
    title: "Special Offers & Deals | Skylink",
    description: "Explore Skylink's latest offers, promotions and bundle deals on internet, TV and OTT services. Save with our limited-time special packages.",
    keywords: [
        'skylink deals',
        'internet offers',
        'tv promotions',
        'bundle offers',
        'discount packages',
        'special promotions',
        'savings on internet',
        'broadband deals'
    ],
    openGraph: {
        title: "Special Offers & Deals | Skylink",
        description: "Explore Skylink's latest offers and save with our bundle deals.",
        url: "http://stage.skylink.net.in:3000/deals",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Special Offers & Deals | Skylink",
            },
        ],
    },
    twitter: {
        title: "Special Offers & Deals | Skylink",
        description: "Explore Skylink's latest offers and save with our bundle deals.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page() {
  return (
    <>
      <Deals/>
    </>
  );
}
