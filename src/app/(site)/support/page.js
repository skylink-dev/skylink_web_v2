import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import HeroBanner from "@/components/HeroBanner";
import IconCard from "@/components/IconCard";
import SupportSection from "@/components/SupportSection";
import StructuredData from "@/components/StructuredData";
import {getFAQStructuredData} from "@/lib/structuredData";

const SliderBanner = dynamic(() => import("@/components/SliderBanner"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));
const SupportVideos = dynamic(() => import("@/components/SupportVideo"));


// Support page metadata
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
const faqItems = [
    {
        question: "What speeds does Skylink Fiber offer?",
        answer: "Skylink Fiber offers speeds ranging from 100 Mbps to 1 Gbps, with symmetric upload and download speeds to meet your needs."
    },
    {
        question: "How do I troubleshoot my internet connection?",
        answer: "Try restarting your router first, then check cable connections, and ensure there are no service outages in your area. If problems persist, contact our 24/7 support."
    },
    {
        question: "Can I upgrade my plan?",
        answer: "Yes, you can easily upgrade your plan through your online account or by contacting customer service. Plan changes typically take effect within 24 hours."
    },
    {
        question: "What should I do if my internet is slow?",
        answer: "First run a speed test, check if too many devices are connected, try a wired connection, and restart your router. If issues continue, our support team can help diagnose the problem."
    },
    {
        question: "Is there a data cap on Skylink Fiber plans?",
        answer: "No, all Skylink Fiber plans come with unlimited data with no caps or throttling, allowing you to stream, game, and work without restrictions."
    }
];

export default function Page() {
    // Generate FAQ structured data
    const faqStructuredData = getFAQStructuredData(faqItems);

    return (
    <>
        {/* Add structured data */}
        <StructuredData data={faqStructuredData}/>
      <SliderBanner />
      <SupportVideos />
      <CustomSearch />
      <ContactDetails />
        <Faq title="You've asked. We've answered." content={faqItems}/>
    </>
  );
}
