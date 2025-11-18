"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlanTabs from "./component/planTabs";
import { Providers } from "../Providers";
import { PlanProvider } from "../plans/context/PlansContext";

export default function Page() {
  const plans = useSelector((state) => state.newPlans);

  const [isMobile, setIsMobile] = useState(false);
  const [isMediumSize, setIsMediumSize] = useState(false);

  // ✅ Handle screen resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsMediumSize(window.innerWidth > 768 && window.innerWidth < 1098);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("📦 Loaded plans:", plans);
  }, [plans]);

  return (
    <Providers>
      <PlanProvider>
        <section className="py-10 px-4 bg-gray-50 min-h-screen">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-red-600">
              Broadband + TV + OTT
            </h1>

            <div className="">
              <PlanTabs
                isMobile={isMobile}
                plans={plans}
                isMediumSize={isMediumSize}
              />
            </div>
          </div>
        </section>
      </PlanProvider>
    </Providers>
  );
}
