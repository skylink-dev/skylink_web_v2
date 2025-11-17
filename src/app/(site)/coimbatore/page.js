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
import FixedPlan from "@/app/(site)/new_plans/component/FixedPlan";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";

const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const CustomSearch = dynamic(() => import("@/components/CustomSearch"));
const ContactDetails = dynamic(() => import("@/components/ContactDetails"));

export default function Page() {
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
      <HeroBannerNew />
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
      <SkylinkFAQ />
    </>
  );
}
