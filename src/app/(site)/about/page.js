import About from "@/app/(site)/about/About";

// About page metadata
export const metadata = {
  title: "About Skylink | Our Story",
  description:
    "Learn about Skylink's mission to provide cutting-edge internet and TV services across India.",
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
    "about skylink",
    "company history",
    "mission vision",
    "internet provider india",
    "fiber network",
  ],
  openGraph: {
    title: "About Skylink | Our Story",
    description:
      "Learn about Skylink's mission to provide cutting-edge internet and TV services across India.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/newassets/metaImage/skylink_opengraph.png",
        width: 1200,
        height: 630,
        alt: "About Skylink | Our Story",
      },
    ],
  },
  twitter: {
    title: "About Skylink | Our Story",
    description:
      "Learn about Skylink's mission to provide cutting-edge internet and TV services across India.",
    images: ["/newassets/metaImage/skylink_opengraph.png"],
  },
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
