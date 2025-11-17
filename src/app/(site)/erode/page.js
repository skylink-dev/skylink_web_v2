"use client";
import React, {useEffect, useState} from "react";
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
import FixedPlan from "@/app/(site)/new_plans/component/FixedPlan";
import {useSelector} from "react-redux";

const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));

export default function Page() {
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
            <HeroBannerER />
            <WhyProduct />
            <TvOttPartners/>
            <SmartSection />
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
            <TrustedPartners/>
            <SkylinkFAQ/>
        </>
    );
}
