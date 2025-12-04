"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contacts/ContactForm";
import LocationMap from "@/components/contacts/LocationMap";
import HeroBanner from "@/components/HeroBanner";

import HeroBannerNew from "@/components/coimbatore/herobannernew";
import FixedPlan from "@/app/(site)/plans/component/FixedPlan";
import { useSelector } from "react-redux";
import SmartSection from "@/components/coimbatore/SmartSection";
import TvOttPartners from "@/components/coimbatore/TvOttPartners";
import TrustedPartners from "@/components/coimbatore/TrustPartners";
import WhyProduct from "@/components/coimbatore/WhyProduct";
import LocationFAQ from "@/components/LocationFAQ";

const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));

export default function Erode() {
    const plans = useSelector((state) => state.newPlans);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <HeroBannerNew city="Erode" />
            <WhyProduct city="Erode" />
            <TvOttPartners />
            <SmartSection city="Erode" />
            <div className={`container  mx-auto text-center`}>
                <div>
                    <FixedPlan
                        isMobile={isMobile}
                        plans={plans.basePlans}
                        activeTab={"Fixed Plan"}
                        setSelectedPlan={setSelectedPlan}
                        isContactOpen={isContactOpen}
                        setIsContactOpen={setIsContactOpen}
                    />
                </div>
            </div>
            <TrustedPartners />
            <LocationFAQ city="Erode" />
        </>
    );
}
