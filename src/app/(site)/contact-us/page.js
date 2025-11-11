"use client";
import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contacts/ContactForm";
import LocationMap from "@/components/contacts/LocationMap";

const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));

export default function Page() {
  return (
    <>
      <ContactForm />
      <LocationMap />
      {/* <ContactSection />
      <ContactFormNew />
      <CustomSearch />
      <ContactDetails /> */}
    </>
  );
}
