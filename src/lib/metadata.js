/**
 * Central metadata configuration for the Skylink website
 * This file contains the global metadata defaults and utility functions
 * to generate page-specific metadata.
 */

// Base URL for the website
const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Global keywords that apply to the entire site
export const GLOBAL_KEYWORDS = [
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
];

// Default metadata configuration
export const defaultMetadata = {
  // Basic metadata
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Skylink - High-Speed Internet & TV Services",
    template: "%s | Skylink",
  },
  description:
    "Experience the best in high-speed fiber internet, TV services, and entertainment packages with Skylink. Discover plans for your home and business.",
  applicationName: "Skylink Fiber",
  authors: [{ name: "Skylink" }],
  generator: "Next.js",
  keywords: GLOBAL_KEYWORDS,
  referrer: "origin-when-cross-origin",
  creator: "Skylink",
  publisher: "Skylink",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Skylink - High-Speed Internet & TV Services",
    description:
      "Experience the best in high-speed fiber internet, TV services, and entertainment packages with Skylink.",
    siteName: "Skylink",
    images: [
      {
        url: "/newassets/metaImage/skylink_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Skylink - High-Speed Internet & TV Services",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Skylink - High-Speed Internet & TV Services",
    description:
      "Experience the best in high-speed fiber internet, TV services, and entertainment packages with Skylink.",
    images: ["/newassets/metaImage/skylink_opengraph.png"],
    creator: "@skylinkfiber",
    site: "@skylinkfiber",
  },

  // Additional metadata
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

/**
 * Generate metadata for a specific page
 *
 * @param {Object} options - Metadata options to override defaults
 * @param {string} options.title - Page-specific title
 * @param {string} options.description - Page-specific description
 * @param {string[]} options.additionalKeywords - Additional keywords for this specific page
 * @param {string} options.pageUrl - Page-specific URL path (without domain)
 * @param {string} options.imageUrl - Page-specific Open Graph image
 * @returns {Object} Complete metadata object for the page
 */
export function generateMetadata(options = {}) {
  const {
    title,
    description,
    additionalKeywords = [],
    pageUrl = "",
    imageUrl = "/newassets/metaImage/skylink_opengraph.png",
  } = options;

  // Combine global keywords with page-specific keywords
  const combinedKeywords = [...GLOBAL_KEYWORDS, ...additionalKeywords];

  // Create the full URL for this page
  const fullUrl = `${SITE_URL}${
    pageUrl.startsWith("/") ? pageUrl : `/${pageUrl}`
  }`;

  // Return customized metadata
  return {
    ...defaultMetadata,
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    keywords: combinedKeywords,

    // Update Open Graph metadata
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || defaultMetadata.openGraph.title,
      description: description || defaultMetadata.openGraph.description,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || defaultMetadata.openGraph.title,
        },
      ],
    },

    // Twitter metadata
    twitter: {
      ...defaultMetadata.twitter,
      title: title || defaultMetadata.twitter.title,
      description: description || defaultMetadata.twitter.description,
      images: [imageUrl],
    },
  };
}

/**
 * Page metadata configurations
 *
 * Pre-configured metadata for common pages
 */
export const pageMetadata = {
  // Internet page metadata
  internet: generateMetadata({
    title: "High-Speed Fiber Internet | Skylink",
    description:
      "Get ultra-fast, reliable fiber internet with unlimited data. Perfect for streaming, gaming, and working from home.",
    additionalKeywords: [
      "unlimited internet",
      "fiber optic internet",
      "high-speed connection",
      "no data caps",
      "internet service provider",
    ],
    pageUrl: "/internet",
  }),

  // TV page metadata
  tv: generateMetadata({
    title: "TV Packages & Channels | Skylink",
    description:
      "Discover our premium TV packages with hundreds of channels, 4K content, and flexible plans for the whole family.",
    additionalKeywords: [
      "tv packages",
      "tv channels",
      "4k tv",
      "hd channels",
      "cable tv alternative",
    ],
    pageUrl: "/tv",
  }),

  // OTT page metadata
  ott: generateMetadata({
    title: "OTT Streaming Services | Skylink",
    description:
      "Stream your favorite content with our OTT services. Access popular streaming platforms at discounted rates.",
    additionalKeywords: [
      "ott platforms",
      "streaming services",
      "ott bundles",
      "online streaming",
      "video on demand",
    ],
    pageUrl: "/ott",
  }),

  // Contact page metadata
  contact: generateMetadata({
    title: "Contact Us | Skylink",
    description:
      "Get in touch with our support team. We're available 24/7 to assist with any questions about our services.",
    additionalKeywords: [
      "customer support",
      "contact skylink",
      "help center",
      "technical support",
      "service inquiry",
    ],
    pageUrl: "/contact-us",
  }),

  // About page metadata
  about: generateMetadata({
    title: "About Skylink | Our Story",
    description:
      "Learn about Skylink's mission to provide cutting-edge internet and TV services across India.",
    additionalKeywords: [
      "about skylink",
      "company history",
      "mission vision",
      "internet provider india",
      "fiber network",
    ],
    pageUrl: "/about",
  }),

  // Plans page metadata
  plans: generateMetadata({
    title: "Internet & TV Plans | Skylink",
    description:
      "Compare our internet and TV plans to find the perfect package for your home or business.",
    additionalKeywords: [
      "internet plans",
      "tv plans",
      "combo packages",
      "fiber plans",
      "broadband packages",
      "subscription plans",
    ],
    pageUrl: "/plans",
  }),

  // Location-specific pages
  coimbatore: generateMetadata({
    title: "Internet & TV Services in Coimbatore | Skylink",
    description:
      "Skylink offers high-speed fiber internet and TV services in Coimbatore. Check availability in your area today.",
    additionalKeywords: [
      "coimbatore internet provider",
      "fiber internet coimbatore",
      "tv services coimbatore",
      "best internet coimbatore",
      "skylink coimbatore",
    ],
    pageUrl: "/coimbatore",
  }),

  erode: generateMetadata({
    title: "Internet & TV Services in Erode | Skylink",
    description:
      "Get connected with Skylink's high-speed fiber internet and TV services in Erode. Check coverage and plans.",
    additionalKeywords: [
      "erode internet provider",
      "fiber internet erode",
      "tv services erode",
      "best internet erode",
      "skylink erode",
    ],
    pageUrl: "/erode",
  }),

  tiruppur: generateMetadata({
    title: "Internet & TV Services in Tiruppur | Skylink",
    description:
      "Skylink offers reliable high-speed fiber internet and TV services throughout Tiruppur. Check availability now.",
    additionalKeywords: [
      "tiruppur internet provider",
      "fiber internet tiruppur",
      "tv services tiruppur",
      "best internet tiruppur",
      "skylink tiruppur",
    ],
    pageUrl: "/tiruppur",
  }),

  // Add more page metadata configurations as needed
};
