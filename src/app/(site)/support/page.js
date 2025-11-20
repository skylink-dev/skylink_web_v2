"use client";
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

// Define page metadata - removing export as we've moved it to layout.js
// export const metadata = {
//     title: "Support | Skylink Fiber",
//     description: "Get help with your Skylink services. Find answers to common questions, troubleshooting guides, and contact our support team for assistance.",
// };

// Define FAQ items directly
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
