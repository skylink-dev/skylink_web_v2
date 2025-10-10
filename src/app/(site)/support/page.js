'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { supportscontent } from "../../../data/support";

const SliderBanner = dynamic(() => import('@/components/SliderBanner'));
const SupportSection = dynamic(() => import('@/components/SupportSection'));
const CustomSearch = dynamic(() => import('@/components/CustomSearch'));
const ContactDetails = dynamic(() => import('@/components/ContactDetails'));

export default function Page() {
  return (
    <>
      <SliderBanner />
      <SupportSection
        title="Welcome to Skylink Support"
        subtitle="Want personalized help?"
        cta="Sign in"
        supports={supportscontent}
      />
      <CustomSearch />
      <ContactDetails />
    </>
  );
}
