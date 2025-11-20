"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroBannerNew from "@/components/coimbatore/herobannernew";
import WhyProduct from "@/components/coimbatore/WhyProduct";
import SmartSection from "@/components/coimbatore/SmartSection";
import SkylinkFAQ from "@/components/coimbatore/SkylinkFAQ";
import TrustedPartners from "@/components/coimbatore/TrustPartners";
import TvOttPartners from "@/components/coimbatore/TvOttPartners";
import FixedPlan from "@/app/(site)/plans/component/FixedPlan";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));


export default function Covai() {
    // Define city name for the page
    const cityName = "Coimbatore";

    const plans = useSelector((state) => state.newPlans);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Handle screen resize for mobile detection
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
            <HeroBannerNew city={cityName} />
            <WhyProduct city={cityName} />
            <TvOttPartners />
            <SmartSection city={cityName} />
            <div className="container mx-auto text-center">
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
            <SkylinkFAQ city={cityName} />
        </>
    );
}
