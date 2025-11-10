"use client";
import React, { useState, useMemo } from "react";

import { ottImageList } from "@/redux/data/OTTNamesImage";
import { channelImageList } from "@/redux/data/ChannelsNamesImage";
import ContactPopup from "../../plans/component/ContactPopup";
import Image from "next/image";

export default function FixedPlan({ isMobile, plans, activeTab }) {
  const [selectedValidity, setSelectedValidity] = useState("12 Month");
  const [selectedSpeed, setSelectedSpeed] = useState("50 Mbps");
  const [activePrice, setActivePrice] = useState();
  const [activeCycle, setActiveCycle] = useState();
  const [isContactOpen, setIsContactOpen] = useState();

  const validityOptions = useMemo(
    () => [...new Set(plans.flatMap((p) => p.validity))],
    [plans]
  );
  const speedOptions = useMemo(
    () => [...new Set(plans.map((p) => p.internetSpeed))],
    [plans]
  );
  useState(() => {
    setActiveCycle(selectedValidity.substring(0, 1));
  }, [selectedValidity]);

  const filteredPlans = useMemo(() => {
    return plans.filter(
      (p) =>
        p.validity.includes(selectedValidity) &&
        p.internetSpeed === selectedSpeed
    );
  }, [plans, selectedValidity, selectedSpeed]);

  const getImagePath = (imageName, searchType) => {
    if (searchType == "OTT") {
      const match = ottImageList.find((item) => item.name === imageName);
      return match ? match.image : "/newassets/ott/default.png";
    } else if (searchType == "TV") {
      const match = channelImageList.find((item) => item.name === imageName);
      return match ? match.image : "/newassets/channels/default.png";
    }
    return match ? match.image : "/newassets/default.png";
  };

  return (
    <>
      <ContactPopup
        isMobile={isMobile}
        activeMbps={selectedSpeed}
        activePrice={activePrice}
        activeCycle={
          activeCycle == 1
            ? "Monthly"
            : activeCycle == 3
            ? "Quaterly"
            : activeCycle == 6
            ? "Half Yearly"
            : "Yearly"
        }
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
      />

      <div className="w-full bg-red-100 py-6 px-4 flex flex-col gap-6 border border-gray-200 rounded-xl shadow-sm">
        <div className="w-full  m-0">
          <h2 className="w-full h-2 text-center text-2xl text-gray-00  font-semibold mb-2">
            OUR PLAN
          </h2>
        </div>

        {/* 🔘 Validity Selection */}

        <div className="bg-red-50 m-0 p-2 rounded-xl">
          <h3 className="w-full text-start text-gray-800 text-sm font-semibold mb-2">
            Choose Your Billing Cycle
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
            {validityOptions.reverse().map((v) => {
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
        <div className="bg-red-50 m-0 p-2 rounded-xl">
          <h3 className="w-full text-start text-gray-800 text-sm font-semibold mb-2">
            Choose Your BandWidth
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-1">
            {speedOptions.map((speed) => (
              <button
                key={speed}
                onClick={() => setSelectedSpeed(speed)}
                className={`w-full py-2 text-[14px] lg:text-sm font-medium rounded-md relative overflow-hidden border transition-all duration-300 
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
        <div className="mt-6 w-full">
          {filteredPlans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredPlans.map((plan, index) => {
                const isSelectedValidity = plan.validity === selectedValidity;
                const isSelectedSpeed = plan.internetSpeed === selectedSpeed;
                let discountIndex = 0;
                plan.validity.forEach((element, index) => {
                  if (element === selectedValidity) {
                    console.log(index);
                    discountIndex = index;
                  }
                });
                const discount = plan.discount[discountIndex];
                console.log(discount);
                return (
                  <div
                    key={plan.sno || index}
                    className={`relative  flex flex-col overflow-hidden bg-white bg-gradient-to-r from-pink-100/20 to-blue-100/20  border rounded-xl p-5  hover:shadow-2xl transition-all duration-200 inset-shadow-sm  ${
                      isSelectedValidity && isSelectedSpeed
                        ? "border-red-500 ring-2 ring-red-200"
                        : "border-gray-200"
                    }`}
                  >
                    {discount ? (
                      <>
                        {/* Ribbon */}
                        <div
                          className="absolute top-5 -left-10 w-40 h-8 
             bg-gradient-to-r from-[#e01212] to-red-700 
             text-white text-center font-semibold text-sm tracking-wide 
             flex items-center justify-center 
             transform -rotate-45 
             shadow-[0_2px_8px_rgba(0,0,0,0.4)] 
             before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent 
             rounded-sm"
                        >
                          {discount}% OFF
                        </div>
                      </>
                    ) : null}

                    {/* 💰 Save Tag */}
                    {/* {plan.discount && (
                      <div className="inline-block mb-3 bg-gradient-to-r from-pink-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                        Save ₹{plan.discount}
                      </div>
                    )} */}

                    {/* 🏷️ Title */}
                    <h2 className=" flex flex-col  text-lg font-semibold text-gray-900 mb-1">
                      {`Skylink Red  ${plan.name || ` ₹${plan.price}`}`}{" "}
                      <span className="text-gray-600 font-normal text-xs">
                        {plan.internetSpeed ? `${plan.internetSpeed}` : ""}

                        <span className="text-gray-500 font-normal text-xs">
                          {`+ TV + OTT`}
                        </span>
                      </span>
                    </h2>

                    {/* 📆 Validity */}
                    {/* {plan.validity && (
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
                  )} */}

                    {/* 📡 Plan Details */}
                    <div className="grid w-full grid-cols-1 text-sm text-gray-700 gap-y-2 mb-4">
                      {/* <div>
                      <span className="font-semibold">
                        {plan.internetSpeed}
                      </span>
                      <p className="text-xs text-gray-500">Speed</p>
                    </div> */}
                      <div className="grid rounded-sm p-2 grid-cols-2 ">
                        <div>
                          <span className="font-semibold">
                            {plan.dataLimit}
                          </span>
                          <p className="text-xs text-gray-500">Data Limit</p>
                        </div>
                        <div>
                          <span className="font-semibold">
                            {plan.internetSpeed}
                          </span>
                          <p className="text-xs text-gray-500">Speed</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 ">
                        <div className="grid  rounded-sm p-2 grid-rows-2 ">
                          <div className=" justify center content-center">
                            {plan.mainOTTs?.length > 0 && (
                              <div className="flex flex-wrap gap-1 justify-center">
                                {plan.mainChannels.slice(0, 5).map((tv, i) => (
                                  <Image
                                    key={i}
                                    src={getImagePath(tv, "TV")}
                                    alt={tv}
                                    width={24} // h-6 = 1.5rem = 24px
                                    height={24}
                                    className="object-contain rounded-md border border-gray-200"
                                  />
                                ))}
                                {/* <div className="flex h-6 w-6 object-contain rounded-md border border-gray-200 text-[6px] content-center align-center text-center p-0">
                              <span className="w-full content-center align-center text-center p-0 m-0 ">
                                + more
                              </span>
                            </div> */}
                              </div>
                            )}
                          </div>
                          <div>
                            <span className="font-semibold">
                              {plan.tvChannels}
                            </span>
                            <p className="text-xs text-gray-500">TV Channels</p>
                          </div>
                        </div>

                        {/* 🎬 OTT Icons */}
                        <div className="grid  rounded-sm p-2 grid-rows-2 ">
                          <div className="flext justify  content-center  ">
                            {plan.mainOTTs?.length > 0 && (
                              <div className="flex flex-wrap gap-1 justify-center">
                                {plan.mainOTTs.slice(0, 4).map((ott, i) => (
                                  <Image
                                    key={i}
                                    src={getImagePath(ott, "OTT")}
                                    alt={ott}
                                    width={24} // h-6 = 1.5rem = 24px
                                    height={24}
                                    className="object-contain rounded-md border border-gray-200"
                                  />
                                ))}
                                {/* <div className="flex h-6 w-6 object-contain rounded-md border border-gray-200 text-[6px] content-center align-center text-center p-0">
                              <span className="w-full content-center align-center text-center p-0 m-0 ">
                                + more
                              </span>
                            </div> */}
                              </div>
                            )}
                          </div>
                          <div>
                            <span className="font-semibold">
                              {plan.noOfOTTs}+
                            </span>
                            <p className="text-xs text-gray-500">OTT Apps</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 💵 Price Section */}
                    <div className="flex w-full items-center justify-center gap-2 mb-4">
                      <span className="text-xl text-center font-bold text-gray-900">
                        ₹{plan.price}{" "}
                        <span className="font-normal text-gray-600 text-lg">
                          x {selectedValidity}
                        </span>
                      </span>
                      <span className="lg:text-sm text-[8px] text-gray-500">
                        + GST
                      </span>
                      {plan.originalPrice && (
                        <span className="line-through text-xs text-gray-400 ml-2">
                          ₹{plan.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* ⚡ CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between gap-3 mt-auto">
                      {/* <button className="flex-1 py-2 border border-gray-800 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition">
                      View Details
                    </button> */}
                      <button
                        onClick={() => {
                          setActiveCycle(
                            selectedValidity.substring(0, 1) == "1"
                              ? selectedValidity.substring(1, 2) == "2"
                                ? 12
                                : 1
                              : Number(selectedValidity.substring(0, 1))
                          );
                          setActivePrice(
                            (selectedValidity.substring(0, 1) == "1"
                              ? selectedValidity.substring(1, 2) == "2"
                                ? 12
                                : 1
                              : Number(selectedValidity.substring(0, 1))) *
                              plan.price
                          );
                          setIsContactOpen(!isContactOpen);
                        }}
                        className="flex-1 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-md hover:opacity-90 transition"
                      >
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
    </>
  );
}
