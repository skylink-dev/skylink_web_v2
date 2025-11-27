import Tv from "@/app/(site)/tv/Tv";
// TV page metadata
export const metadata = {
  title: "TV Packages & Channels | Skylink",
  description:
    "Discover our premium TV packages with hundreds of channels, 4K content, and flexible plans for the whole family.",
  keywords: [
    "high speed internet",
    "fiber internet",
    "fiber broadband",
    "internet provider",
    "tv subscription",
    "entertainment packages",
    "OTT services",
    "Skylink Fiber",
    "broadband",
    "internet plans",
    "tv packages",
    "tv channels",
    "4k tv",
    "hd channels",
    "cable tv alternative",
  ],
  openGraph: {
    title: "TV Packages & Channels | Skylink",
    description:
      "Discover our premium TV packages with hundreds of channels, 4K content, and flexible plans for the whole family.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/tv`,
    type: "website",
    images: [
      {
        url: "/newassets/metaImage/skylink_opengraph.png",
        width: 1200,
        height: 630,
        alt: "TV Packages & Channels | Skylink",
      },
    ],
  },
  twitter: {
    title: "TV Packages & Channels | Skylink",
    description:
      "Discover our premium TV packages with hundreds of channels, 4K content, and flexible plans for the whole family.",
    images: ["/newassets/metaImage/skylink_opengraph.png"],
  },
};

export default function TvPage() {
    return (
        <div>
            <Tv/>
        </div>
    );
}

