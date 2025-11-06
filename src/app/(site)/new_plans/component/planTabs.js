"use client";
import React, { useEffect, useState } from "react";
import FixedPlan from "./FixedPlan";
import CustomPlan from "./CustomPlan";

export default function PlanTabs({ isMobile, plans }) {
  const [activeTab, setActiveTab] = useState("Fixed Plan");
  const [fade, setFade] = useState(true);

  const tabs = ["Customize Plan", "Fixed Plan"];

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* TAB SWITCHER */}
      <div className="flex items-center justify-center mb-8">
        {isMobile ? (
          <div className="flex items-center justify-center gap-2 w-full max-w-md">
            {tabs.map((tab, i) => (
              <React.Fragment key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 w-60 py-2 px-3 rounded-md font-semibold border transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-red-600 text-white border-red-600 scale-105"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab === "Fixed Plan" ? "Fixed Plans" : "Customize Your Plan"}
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
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-48 h-11 text-base sm:text-md font-semibold rounded-full shadow-md text-center relative overflow-hidden transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300"
                } group`}
              >
                {/* Animated gradient expanding from center */}
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100 rounded-full`}
                ></span>

                {/* Text with hover color */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-white"
                      : "group-hover:text-white group-hover:font-semibold"
                  }`}
                >
                  {tab === "Fixed Plan" ? "Fixed Plans" : "Customize Your Plan"}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* TAB CONTENT with fade animation */}
      <div
        className={`mt-8 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {isMobile ? (
          <>
            {activeTab === "Fixed Plan" ? (
              <FixedPlan
                isMobile={isMobile}
                plans={plans}
                activeTab={activeTab}
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
            <div className="flex flex-col md:flex-row w-full justify-between gap-6">
              <div className="flex-1">
                <CustomPlan
                  isMobile={isMobile}
                  plans={plans}
                  activeTab={activeTab}
                />
              </div>
              <div className="flex-1">
                <FixedPlan
                  isMobile={isMobile}
                  plans={plans}
                  activeTab={activeTab}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
