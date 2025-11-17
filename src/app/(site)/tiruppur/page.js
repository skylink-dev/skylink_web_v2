"use client";
import React, {useEffect, useState} from "react";
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
import {useSelector} from "react-redux";
import FixedPlan from "@/app/(site)/new_plans/component/FixedPlan";

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
      <HeroBannerTUP />
      <WhyProduct />
      <TvOttPartners />
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
      <TrustedPartners />
      <SkylinkFAQ />
    </>
  );
}
