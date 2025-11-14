"use client";
import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contacts/ContactForm";
import LocationMap from "@/components/contacts/LocationMap";
import HeroBanner from "@/components/HeroBanner";

import HeroBannerER from "@/components/erode/HerobannerER";
import WhyProduct from "@/components/erode/WhyProduct";
import TvOttPartners from "@/components/erode/TvOttPartners";
import SmartSection from "@/components/erode/SmartSection";
import SkylinkPlans from "@/components/erode/SkylinkPlans";
import TrustedPartners from "@/components/erode/TrustPartners";
import SkylinkFAQ from "@/components/erode/SkylinkFAQ";

const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));

export default function Page() {
    return (
        <>
            <HeroBannerER />
            <WhyProduct />
            <TvOttPartners/>
            <SmartSection />
            <SkylinkPlans/>
            <TrustedPartners/>
            <SkylinkFAQ/>
        </>
    );
}
