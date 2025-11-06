"use client";
import React, { useState, useMemo } from "react";

import { ottImageList } from "@/redux/data/OTTNamesImage";

export default function FixedPlan({ isMobile, plans }) {
  const [selectedValidity, setSelectedValidity] = useState("1 Month");
  const [selectedSpeed, setSelectedSpeed] = useState("30 Mbps");

  const validityOptions = useMemo(
    () => [...new Set(plans.flatMap((p) => p.validity))],
    [plans]
  );
  const speedOptions = useMemo(
    () => [...new Set(plans.map((p) => p.internetSpeed))],
    [plans]
  );

  const filteredPlans = useMemo(() => {
    return plans.filter(
      (p) =>
        p.validity.includes(selectedValidity) &&
        p.internetSpeed === selectedSpeed
    );
  }, [plans, selectedValidity, selectedSpeed]);

  const getImagePath = (imageName) => {
    const match = ottImageList.find((item) => item.name === imageName);
    return match ? match.image : "/newassets/ott/default.png";
  };

  return (
    <div className="w-full bg-white py-6 px-4 flex flex-col gap-6 border border-gray-200 rounded-xl shadow-sm">
      {/* 🔘 Validity Selection */}
      <div>
        <h3 className="text-gray-800 text-sm font-semibold mb-2">
          Choose Your Billing Cycle
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {validityOptions.map((v) => {
            const labelMap = {
              "1 Month": "Monthly",
              "3 Month": "Quarterly",
              "6 Month": "Half Yearly",
              "12 Month": "Annual",
            };

            const displayLabel = labelMap[v] || v; // fallback if new validity appears

            return (
              <button
                key={v}
                onClick={() => setSelectedValidity(v)}
                className={`w-full py-2 text-sm font-medium rounded-md relative overflow-hidden border transition-all duration-300 
          ${
            selectedValidity === v
              ? "bg-red-600 text-white border-red-600"
              : "bg-gray-50 text-gray-700 border-gray-300 hover:text-white"
          }
          group
        `}
              >
                {/* Hover fill effect */}
                <span
                  className={`absolute inset-0 bg-red-600 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out rounded-full origin-center ${
                    selectedValidity === v ? "scale-150" : ""
                  }`}
                ></span>
                <span className="relative z-10">{displayLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ⚡ Speed Selection */}
      <div>
        <h3 className="text-gray-800 text-sm font-semibold mb-2">
          Choose Your BandWidth
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {speedOptions.map((speed) => (
            <button
              key={speed}
              onClick={() => setSelectedSpeed(speed)}
              className={`w-full py-2 text-sm font-medium rounded-md relative overflow-hidden border transition-all duration-300 
                ${
                  selectedSpeed === speed
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-gray-50 text-gray-700 border-gray-300 hover:text-white"
                }
                group
              `}
            >
              {/* Hover fill effect */}
              <span
                className={`absolute inset-0 bg-red-600 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out rounded-full origin-center ${
                  selectedSpeed === speed ? "scale-150" : ""
                }`}
              ></span>
              <span className="relative z-10">{speed}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 💡 Filtered Plans */}
      <div className="mt-6">
        {filteredPlans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan, index) => {
              const isSelectedValidity = plan.validity === selectedValidity;
              const isSelectedSpeed = plan.internetSpeed === selectedSpeed;

              return (
                <div
                  key={plan.sno || index}
                  className={`flex flex-col bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 ${
                    isSelectedValidity && isSelectedSpeed
                      ? "border-red-500 ring-2 ring-red-200"
                      : "border-gray-200"
                  }`}
                >
                  {/* 💰 Save Tag */}
                  {plan.discount && (
                    <div className="inline-block mb-3 bg-gradient-to-r from-pink-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                      Save ₹{plan.discount}
                    </div>
                  )}

                  {/* 🏷️ Title */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {plan.name || `Plan ₹${plan.price}`}{" "}
                    <span className="text-gray-600 font-normal">
                      {plan.internetSpeed ? `- ${plan.internetSpeed}` : ""}
                    </span>
                  </h2>

                  {/* 📆 Validity */}
                  {plan.validity && (
                    <div className="text-sm text-gray-700 mb-3">
                      <span className="font-medium">Validity:</span>{" "}
                      <span
                        className={`${
                          isSelectedValidity
                            ? "text-red-600 font-semibold"
                            : "text-gray-800"
                        }`}
                      >
                        {selectedValidity}
                      </span>
                    </div>
                  )}

                  {/* 💵 Price Section */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{plan.price}/m
                    </span>
                    <span className="text-sm text-gray-500">+ GST</span>
                    {plan.originalPrice && (
                      <span className="line-through text-xs text-gray-400 ml-2">
                        ₹{plan.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* 📡 Plan Details */}
                  <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-2 mb-4">
                    <div>
                      <span className="font-semibold">
                        {plan.internetSpeed}
                      </span>
                      <p className="text-xs text-gray-500">Speed</p>
                    </div>
                    <div>
                      <span className="font-semibold">{plan.dataLimit}</span>
                      <p className="text-xs text-gray-500">Data Limit</p>
                    </div>
                    <div>
                      <span className="font-semibold">{plan.tvChannels}</span>
                      <p className="text-xs text-gray-500">TV Channels</p>
                    </div>
                    <div>
                      <span className="font-semibold">{plan.noOfOTTs}</span>
                      <p className="text-xs text-gray-500">OTT Apps</p>
                    </div>
                  </div>

                  {/* 🎬 OTT Icons */}
                  {plan.mainOTTs?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 justify-start">
                      {plan.mainOTTs.slice(0, 5).map((ott, i) => (
                        <img
                          key={i}
                          src={getImagePath(ott)}
                          alt={ott}
                          className="h-8 w-8 object-contain rounded-md border border-gray-200"
                        />
                      ))}
                    </div>
                  )}

                  {/* ⚡ CTA Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-auto">
                    <button className="flex-1 py-2 border border-gray-800 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition">
                      View Details
                    </button>
                    <button className="flex-1 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-md hover:opacity-90 transition">
                      Select Plan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm">No plans found.</p>
        )}
      </div>
    </div>
  );
}
