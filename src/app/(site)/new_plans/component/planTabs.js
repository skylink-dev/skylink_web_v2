"use client";
import React, { useEffect, useRef, useState } from "react";
import FixedPlan from "./FixedPlan";
import { motion } from "framer-motion";
import CustomPlan from "./CustomPlan";
import ContactPopup from "../../plans/component/ContactPopup";

export default function PlansTabs({ isMobile, plans, isMediumSize }) {
  const [activeTab, setActiveTab] = useState("Customize Plan");
  const [fade, setFade] = useState(true);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // const tabs = ["Customize Plan", "Fixed Plan"];
  const tabs = [
    {
      key: "Customize Plan",
    },
    {
      key: "Fixed Plan",
    },
  ];
  const variants = {
    left: { x: "-50%", scale: 0.9, opacity: 0.8 },
    centerright: { x: "60%", scale: 1, opacity: 1 },
    centerleft: { x: "-60%", scale: 1, opacity: 1 },
    right: { x: "50%", scale: 0.9, opacity: 0.8 },
  };

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="w-full">
      <ContactPopup
        isMobile={isMobile}
        selectedPlan={selectedPlan}
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
      />

      {/* TAB SWITCHER */}
      <div className="w-full flex flex-col items-center justify-center mb-8">
        {/* <div className="w-full flex flex-row m-2 p-3 content-center justify-center">
          {" "}
          <div className="flex  flex-row content-right justify-center  w-60 h-15 rounded-xl">
            <Image className="w-12 h-12" src={"/newassets/plan/mascot.png"} />
            {"   "}
            <span className=" ml-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-2xl p-4 justify-center text-xs md:xl text-center  text-white font-semibold content-center">
              Your Plan
            </span>
          </div>
          <div className="flex flex-row  w-full  w-60 h-15 rounded-xl">
            {"   "}
            <span className=" ml-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-2xl p-4 justify-center text-xs md:xl text-center  text-white font-semibold content-center">
              Our Plan
            </span>
            <Image
              className="w-12 h-12 scale-x-[-1] "
              src={"/newassets/plan/mascot.png"}
            />
          </div>
        </div> */}
        {isMobile || isMediumSize ? (
          <div className="flex items-center justify-center gap-2 w-full max-w-md">
            {tabs.map((tab, i) => (
              <React.Fragment key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 w-60 py-2 px-3 rounded-md font-semibold border transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-red-600 text-white border-red-600 scale-105"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab.key === "Fixed Plan"
                    ? "Explore Our Standard Plans"
                    : "Customize Your Own Plans"}
                </button>
                {i === 0 && (
                  <span className="text-gray-500 font-medium text-sm">or</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-60 h-15 text-base sm:text-md font-semibold rounded-full shadow-md text-center relative overflow-hidden transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300"
                } group`}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100 rounded-full`}
                ></span>
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeTab === tab.key
                      ? "text-white"
                      : "group-hover:text-white group-hover:font-semibold"
                  }`}
                >
                  {tab.key === "Fixed Plan"
                    ? "Explore Our Standard Plans"
                    : "Customize Your Own Plans"}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* TAB CONTENT with fade animation */}
      <div
        className={`mt-4 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {isMobile || isMediumSize ? (
          <>
            {activeTab === "Fixed Plan" ? (
              <FixedPlan
                isMobile={isMobile}
                plans={plans}
                activeTab={activeTab}
                setSelectedPlan={setSelectedPlan}
                isContactOpen={isContactOpen}
                setIsContactOpen={setIsContactOpen}
              />
            ) : (
              <CustomPlan
                isMobile={isMobile}
                plans={plans}
                activeTab={activeTab}
              />
            )}
          </>
        ) : (
          <>
            <div className="relative flex w-full justify-center items-start gap-20 lg:gap-30 overflow-hidden ">
              {/* 🧩 Custom Plan */}
              <motion.div
                className="flex-1 min-w-[70%]"
                onClick={() => {
                  setActiveTab("Customize Plan");
                }}
                variants={variants}
                animate={
                  activeTab === "Customize Plan" ? "centerright" : "left"
                }
                transition={{ duration: 0.6, ease: "easeIn" }}
              >
                <CustomPlan
                  isMobile={isMobile}
                  plans={plans}
                  activeTab={activeTab}
                />
              </motion.div>

              {/* 🧩 Fixed Plan */}
              <motion.div
                className="flex-1 min-w-[70%]"
                variants={variants}
                onClick={() => {
                  setActiveTab("Fixed Plan");
                }}
                animate={activeTab === "Fixed Plan" ? "centerleft" : "right"}
                transition={{ duration: 0.6, ease: "easeIn" }}
              >
                <FixedPlan
                  isMobile={isMobile}
                  plans={plans}
                  activeTab={activeTab}
                  setSelectedPlan={setSelectedPlan}
                  isContactOpen={isContactOpen}
                  setIsContactOpen={setIsContactOpen}
                />
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
