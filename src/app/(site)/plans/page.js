import PlanTabs from "./component/planTabs";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://stage.skylink.net.in:3000";
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

export default function Page() {
  return (
    <section className="px-4 py-2 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl m-auto font-bold  mb-5 text-red-600">
          Broadband + TV + OTT
        </h1>

        <PlanTabs />
      </div>
    </section>
  );
}
