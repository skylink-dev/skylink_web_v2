import Contact from "@/app/(site)/contact-us/Contact";

// Contact page metadata
export const metadata = {
    title: "Contact Us | Skylink",
    description: "Get in touch with our support team. We're available 24/7 to assist with any questions about our services.",
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
        'customer support',
        'contact skylink',
        'help center',
        'technical support',
        'service inquiry'
    ],
    openGraph: {
        title: "Contact Us | Skylink",
        description: "Get in touch with our support team. We're available 24/7 to assist with any questions about our services.",
        url: "http://stage.skylink.net.in:3000/contact-us",
        type: "website",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Us | Skylink",
            },
        ],
    },
    twitter: {
        title: "Contact Us | Skylink",
        description: "Get in touch with our support team. We're available 24/7 to assist with any questions about our services.",
        images: ["/opengraph-image.jpg"],
    },
};

export default function Page() {
  return (
    <>
      <Contact/>
    </>
  );
}
