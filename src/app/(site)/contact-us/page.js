'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/contacts/ContactForm';

const ContactSection = dynamic(() => import('@/components/ContactSection'));
const ContactFormNew = dynamic(() => import('@/components/ContactFormNew'));
const CustomSearch = dynamic(() => import('@/components/CustomSearch'));
const ContactDetails = dynamic(() => import('@/components/ContactDetails'));

export default function Page() {
  return (
    <>
    <ContactForm/>
      <ContactSection />
      <ContactFormNew />
      <CustomSearch />
      <ContactDetails />
    </>
  );
}
