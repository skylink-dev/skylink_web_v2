import React from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://skylinkfiber.com";

export const metadata = {
  title: "Plans & Pricing | Skylink",
  description:
    "Explore Skylink's flexible plans with transparent pricing, GST included. Choose a plan that fits your needs perfectly.",
  keywords: [
    "Skylink",
    "Skylink plans",
    "Skylink pricing",
    "Skylink subscription",
    "Skylink premium plans",
    "Skylink monthly plan",
    "Skylink yearly plan",
    "best subscription plans",
    "customize plan",
    "internet plans",
  ],
  openGraph: {
    title: "Plans & Pricing | Skylink",
    description: "Compare Skylink plans and choose the perfect match.",
    url: `${BASE_URL}/plans`,
    siteName: "Skylink",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og/plans.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/plans`,
  },
};

export default function PlansLayout({ children }) {
  return children;
}
