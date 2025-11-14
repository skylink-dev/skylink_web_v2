"use client";
import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contacts/ContactForm";
import LocationMap from "@/components/contacts/LocationMap";
import HeroBanner from "@/components/HeroBanner";
import HeroBannerNew from "@/components/coimbatore/herobannernew";
import HeroBannerTUP from "@/components/tiruppur/HeroBannerTiruppur";
import WhyProduct from "@/components/tiruppur/WhyProduct";
import TvOttPartners from "@/components/tiruppur/TvOttPartners";
import SmartSection from "@/components/tiruppur/SmartSection";
import SkylinkPlans from "@/components/tiruppur/SkylinkPlans";
import TrustedPartners from "@/components/tiruppur/TrustPartners";
import SkylinkFAQ from "@/components/tiruppur/SkylinkFAQ";

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
