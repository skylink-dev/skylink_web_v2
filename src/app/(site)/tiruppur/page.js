"use client";
import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contacts/ContactForm";
import LocationMap from "@/components/contacts/LocationMap";
import HeroBanner from "@/components/HeroBanner";
import HeroBannerNew from "@/components/coimbatore/herobannernew";
import WhyProduct from "@/components/coimbatore/WhyProduct";
import SmartSection from "@/components/coimbatore/SmartSection";
import SkylinkFAQ from "@/components/coimbatore/SkylinkFAQ";
import SkylinkPlans from "@/components/coimbatore/SkylinkPlans";
import TrustedPartners from "@/components/coimbatore/TrustPartners";
import TvOttPartners from "@/components/coimbatore/TvOttPartners";
import HeroBannerTUP from "@/components/tiruppur/HeroBannerTiruppur";

const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));

export default function Page() {
  return (
    <>
      <HeroBannerTUP />
      <WhyProduct />
      <TvOttPartners />
      <SmartSection />
      <SkylinkPlans />
      <TrustedPartners />
      <SkylinkFAQ />
    </>
  );
}
