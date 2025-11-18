"use client";
import React, { useState, useMemo, useEffect, act } from "react";
import { ottImageList } from "@/redux/data/OTTNamesImage";
import { channelImageList } from "@/redux/data/ChannelsNamesImage";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function FixedPlan({
  isMobile,
  plans,
  activeTab,
  setSelectedPlan,
  setIsContactOpen,
  isContactOpen,
  setShowInfo,
}) {
  // const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedValidity, setSelectedValidity] = useState(12);
  const [selectedSpeed, setSelectedSpeed] = useState("50 Mbps");
  const [activePrice, setActivePrice] = useState();
  const [activeCycle, setActiveCycle] = useState();

  const validityOptions = useMemo(
    () => [...new Set(plans.flatMap((p) => p.validity))],
    [plans]
  );
  const speedOptions = useMemo(
    () => [...new Set(plans.map((p) => p.internetSpeed))],
    [plans]
  );
  useEffect(() => {
    setActiveCycle(selectedValidity);
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
      <div className=" relative w-full min-w-80 mt-4  py-6 px-4 flex flex-col gap-6 border border-gray-200 rounded-xl shadow-sm">
        {activeTab !== "Fixed Plan" && (
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute z-[999] w-1/4 h-full rounded-xl left-0 top-0 bottom-0 lg:text-2xl 
                 flex items-center flex-col justify-start gap-4
                 cursor-pointer select-none
                 bg-gradient-to-b from-red-600 via-red-300 to-blue-600 
                 text-white text-xl font-semibold 
                 shadow-xl border-l border-white/10 px-4"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" whitespace-nowrap lg:text-2xl mt-60 tracking-wide"
            >
              Choose Our <br></br> Fixed Plans
            </motion.span>
            <motion.div
              className="rounded-full border-2  mt-10 border-white flex items-center justify-center p-2"
              animate={{
                scale: [1, 1.2, 1],
                borderWidth: ["2px", "4px", "2px"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <AiOutlineArrowRight className="text-white text-3xl" />
            </motion.div>
          </motion.div>
        )}
        <div className="w-full  m-0">
          <h2
            className={`w-full h-full p-3 mt-0 text-center rounded-xs text-2xl text-gray-100 ${
              activeTab == "Fixed Plan"
                ? "bg-gradient-to-r from-red-600 to bg-red-700   "
                : "bg-gray-300"
            } font-semibold mb-2 `}
          >
            Explore Our Standard Plans
          </h2>
        </div>

        {/* ⚡ Speed Selection */}
        <div
          className={`  ${
            activeTab == "Fixed Plan" ? "bg-red-50  " : "bg-gray-100  "
          } border border-red-100 m-0 p-2 rounded-xl`}
        >
          <h3
            className={`w-full text-start  ${
              activeTab == "Fixed Plan" ? "text-gray-800" : "text-gray-400"
            }  text-sm  font-semibold m-2 md:p-1 md:text-lg`}
          >
            Choose Your BandWidth
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-8 md:p-2">
            {speedOptions.map((speed) => (
              <button
                key={speed}
                onClick={() => setSelectedSpeed(speed)}
                className={`w-full p-2 text-sm md:text-lg  font-medium rounded-md relative overflow-hidden border transition-all duration-300 
                   ${
                     activeTab == "Fixed Plan"
                       ? ` ${
                           selectedSpeed === speed
                             ? "bg-red-600 text-white border-red-600"
                             : "bg-gray-50 text-gray-700 border-gray-300   hover:text-white hover:bg-red-600"
                         }`
                       : "bg-gray-200 text-gray-400 border-gray-100 "
                   }
               
                
              `}
              >
                {/* Hover fill effect */}
                <span
                  className={`absolute inset-0  ${
                    activeTab == "Fixed Plan" ? "bg-red-600" : "bg-gray-300"
                  }
            
            scale-0 group-hover:scale-150 transition-transform duration-500 ease-out rounded-full origin-center ${
              selectedSpeed === speed ? "scale-150" : ""
            }`}
                ></span>
                <span className="relative z-10">{speed}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 🔘 Validity Selection */}

        <div
          className={` ${
            activeTab == "Fixed Plan" ? "bg-red-50 " : "bg-gray-100 "
          }  border border-red-100  m-0 p-2 rounded-xl`}
        >
          <h3
            className={`w-full text-start  ${
              activeTab == "Fixed Plan" ? "text-gray-800" : "text-gray-400"
            } text-sm font-semibold mb-2  m-2 md:p-1 md:text-lg`}
          >
            Choose Your Billing Cycle
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 md:gap-10">
            {[...validityOptions].reverse().map((v) => {
              const labelMap = {
                1: "Monthly",
                3: "Quarterly",
                6: "Half Yearly",
                12: "Annual",
              };

              const displayLabel = labelMap[v] || v; // fallback if new validity appears

              return (
                <button
                  key={v}
                  onClick={() => setSelectedValidity(v)}
                  className={`w-full py-2 text-sm font-medium md:text-lg rounded-md relative overflow-hidden border transition-all duration-300 

                     ${
                       activeTab == "Fixed Plan"
                         ? ` ${
                             selectedValidity === v
                               ? "bg-red-600 text-white border-red-600"
                               : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-red-600 hover:text-white"
                           }`
                         : "text-gray-400 border-gray-300  bg-gray-200/80"
                     }
        `}
                >
                  {/* Hover fill effect */}
                  <span
                    className={`absolute inset-0  ${
                      activeTab == "Fixed Plan" ? "bg-red-600" : "bg-gray-300"
                    }  scale-0 group-hover:scale-150 transition-transform duration-500 ease-out rounded-full origin-center ${
                      selectedValidity === v ? "scale-150" : ""
                    }`}
                  ></span>
                  <span className="relative z-10">{displayLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 💡 Filtered Plans */}
        <div className="my-6 mx-2 w-full">
          {filteredPlans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4  ">
              {filteredPlans.map((plan, index) => {
                const isSelectedValidity = plan.validity === selectedValidity;
                const isSelectedSpeed = plan.internetSpeed === selectedSpeed;
                let discountIndex = 0;
                plan.validity.forEach((element, index) => {
                  if (element === selectedValidity) {
                    // console.log(index);
                    discountIndex = index;
                  }
                });
                const discount = plan.discount[discountIndex];
                return (
                  <div
                    key={plan.sno || index}
                    className={`relative  flex flex-col overflow-hidden bg-white bg-gradient-to-r from-pink-100/20 to-blue-100/20  border rounded-xl p-2  hover:shadow-2xl transition-all duration-200 inset-shadow-sm  ${
                      isSelectedValidity && isSelectedSpeed
                        ? "border-red-500 ring-2 ring-red-200"
                        : "border-gray-200"
                    }`}
                  >
                    {discount ? (
                      <>
                        {/* Ribbon */}
                        <div
                          className={`absolute top-5 -left-10 w-40 h-8 
${
  activeTab == "Fixed Plan"
    ? "bg-gradient-to-r from-[#e01212] to-red-700"
    : "bg-gray-400"
}
              
             text-white text-center font-semibold text-sm tracking-wide 
             flex items-center justify-center 
             transform -rotate-45 
             shadow-[0_2px_8px_rgba(0,0,0,0.4)] 
             before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent 
             rounded-sm`}
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
                    <h2 className=" flex flex-col  text-lg 2xl:text-2xl xl:text:xl font-semibold text-gray-900 m-4 ">
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
                    <div className="grid w-full m-4 grid-cols-1 text-sm text-gray-700 gap-y-4 my-4">
                      {/* <div>
                      <span className="font-semibold">
                        {plan.internetSpeed}
                      </span>
                      <p className="text-xs text-gray-500">Speed</p>
                    </div> */}
                      <div className="grid min-w-1/3 rounded-sm p-2 grid-cols-2 ">
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
                                    width={32} // h-6 = 1.5rem = 24px
                                    height={32}
                                    className={`object-contain rounded-md border border-gray-200  ${
                                      activeTab == "Fixed Plan"
                                        ? ""
                                        : "grayscale"
                                    }`}
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
                              {plan.tvChannels} +
                            </span>
                            <p className="text-xs text-gray-500">TV Channels</p>
                          </div>
                        </div>

                        {/* 🎬 OTT Icons */}
                        <div className="grid  rounded-sm p-2 grid-rows-2 ">
                          <div className="flext justify  content-center  ">
                            {plan.mainOTTs?.length > 0 && (
                              <div className="flex flex-wrap gap-1 justify-center">
                                {plan.mainOTTs[discountIndex]
                                  .slice(0, 4)
                                  .map((ott, i) => (
                                    <Image
                                      key={i}
                                      src={getImagePath(ott, "OTT")}
                                      alt={ott}
                                      width={32} // h-6 = 1.5rem = 24px
                                      height={32}
                                      className={`object-contain rounded-md border border-gray-200  ${
                                        activeTab == "Fixed Plan"
                                          ? ""
                                          : "grayscale"
                                      }`}
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
                              {plan.noOfOTTs[discountIndex]}+
                            </span>
                            <p className="text-xs text-gray-500">OTT Apps</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 💵 Price Section */}
                    <div className="flex w-full h-full items-end justify-center gap-2 mb-4">
                      <span
                        className={`text-xl text-end font-bold activeTab ==  ${
                          activeTab == "Fixed Plan"
                            ? "text-gray-900"
                            : "text-gray-600"
                        } `}
                      >
                        ₹{plan.price}{" "}
                        <span className="font-normal text-gray-600 text-lg">
                          x {selectedValidity} Months
                        </span>
                      </span>
                      <span className="lg:text-[8px] text-[8px] text-gray-500">
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
                            selectedValidity == 1
                              ? selectedValidity == 2
                                ? 12
                                : 1
                              : Number(selectedValidity)
                          );
                          setActivePrice(
                            (selectedValidity == 1
                              ? selectedValidity == 2
                                ? 12
                                : 1
                              : Number(selectedValidity)) * plan.price
                          );
                          setSelectedPlan({
                            ...plan,
                            discountIndex: discountIndex,
                            activeCycle: selectedValidity,
                          });
                          setShowInfo(true);
                          setIsContactOpen(!isContactOpen);
                        }}
                        className={`flex-1 py-2   ${
                          activeTab == "Fixed Plan"
                            ? "bg-gradient-to-r from-red-600 to-red-500"
                            : "bg-gray-400"
                        }  text-white font-semibold rounded-md hover:opacity-90 transition`}
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
        {/* {selectedPlan && (
          <div className="mt-8 w-full bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Plan Summary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Plan Name</span>
                <span className="font-medium text-gray-900">
                  {selectedPlan.name}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Billing Cycle</span>
                <span className="font-medium text-gray-900">
                  {selectedValidity}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Base Price</span>
                <span className="font-medium text-gray-900">
                  ₹{selectedPlan.basePrice}
                </span>
              </div>

              {selectedPlan.discountValue > 0 && (
                <div className="flex justify-between border-b pb-2 text-green-600">
                  <span>
                    Discount ({selectedPlan.discount[discountIndex]}%)
                  </span>
                  <span>- ₹{selectedPlan.discountValue}</span>
                </div>
              )}

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">After Discount</span>
                <span className="font-medium text-gray-900">
                  ₹{selectedPlan.totalAfterDiscount}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-medium text-gray-900">
                  ₹{selectedPlan.gstAmount}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Installation Charges</span>
                <span className="font-medium text-gray-900">
                  ₹{INSTALLATION_CHARGE}
                </span>
              </div>

              <div className="flex justify-between border-t pt-3 text-lg font-semibold text-gray-900">
                <span>Total Payable</span>
                <span className="text-red-600">₹{selectedPlan.finalPrice}</span>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
}
