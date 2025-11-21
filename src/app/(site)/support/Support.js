'use client'
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
const faqItems = [
    {
        title: "What speeds does Skylink Fiber offer?",
        content: "Skylink Fiber offers speeds ranging from 100 Mbps to 1 Gbps, with symmetric upload and download speeds to meet your needs."
    },
    {
        title: "How do I troubleshoot my internet connection?",
        content: "Try restarting your router first, then check cable connections, and ensure there are no service outages in your area. If problems persist, contact our 24/7 support."
    },
    {
        title: "Can I upgrade my plan?",
        content: "Yes, you can easily upgrade your plan through your online account or by contacting customer service. Plan changes typically take effect within 24 hours."
    },
    {
        title: "What should I do if my internet is slow?",
        content: "First run a speed test, check if too many devices are connected, try a wired connection, and restart your router. If issues continue, our support team can help diagnose the problem."
    },
    {
        title: "Is there a data cap on Skylink Fiber plans?",
        content: "No, all Skylink Fiber plans come with unlimited data with no caps or throttling, allowing you to stream, game, and work without restrictions."
    }
];

export default function Support() {
    // Create a version of the FAQ items for structured data
    const faqItemsForSchema = faqItems.map(item => ({
        question: item.title,
        answer: item.content
    }));

    // Generate FAQ structured data
    const faqStructuredData = getFAQStructuredData(faqItemsForSchema);

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
