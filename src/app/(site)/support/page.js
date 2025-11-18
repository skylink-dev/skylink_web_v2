"use client";
import React from "react";
import dynamic from "next/dynamic";
import { supportscontent } from "../../../data/support";

const SliderBanner = dynamic(() => import("@/components/SliderBanner"));
const SupportSection = dynamic(() => import("@/components/SupportSection"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));
const SupportVideos = dynamic(() => import("@/components/SupportVideo"));

export default function Page() {
  return (
    <>
      <SliderBanner />
      <SupportVideos />
      <CustomSearch />
      <ContactDetails />
    </>
  );
}
