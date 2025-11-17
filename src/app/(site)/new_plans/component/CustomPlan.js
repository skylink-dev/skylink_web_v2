"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import ContactPopup from "../../plans/component/ContactPopup";
import { ottImageList } from "@/redux/data/OTTNamesImage";
import { channelImageList } from "@/redux/data/ChannelsNamesImage";
import {
  Check,
  Gauge,
  Database,
  Tv,
  PlayCircle,
  Calendar,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { selectPlan } from "@/redux/slices/newPlanSlice";
import NewPlanSummary from "./NewPlanSummary";
import SelectedPlanSummary from "./SelectedPlanSumamry";

const PlanSummary = ({
  activePlan,
  planPrice,
  extraOttCharge,
  extraChannelCharge,
  installationCharge,
  isExtraOtt,
  isExtraChannel,
  selectedOtt,
  selectedChannel,
  selectedCycle,
  discountMessage,
  labelMap,
  onSubscribe,
  uniqueChannels = [],
  uniqueOTTs = [],
  planSummary,
}) => {
  if (!activePlan) {
    return (
      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center text-gray-500 text-sm">
        Select your plan details to see summary.
      </div>
    );
  }

  // 🟢 Find selected OTT group
  const selectedOttCount = parseInt(selectedOtt);
  const matchedOttPlan = uniqueOTTs.find(
    (p) => p.noOfOTTs === selectedOttCount
  );
  const selectedChannels = parseInt(selectedChannel);
  const matchedChannels = uniqueChannels.find(
    (p) => p.noOfChannels === selectedChannels
  );

  // 🟢 Extract OTT image list
  const ottList =
    matchedOttPlan?.ottList?.map((ottName) => {
      const match = ottImageList.find((item) => item.name === ottName);
      return match
        ? { name: match.name, image: match.image }
        : { name: ottName, image: "/newassets/ott/default.png" };
    }) || [];

  // 🟢 Extract Channel image list

  const channelList = matchedChannels?.channelList.map((chName) => {
    const match = channelImageList.find((item) => item.name === chName);
    return match
      ? { name: match.name, image: match.image }
      : { name: chName, image: "/newassets/channel/default.png" };
  });

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDE — Plan Summary */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-6 text-sm text-gray-700">
            {/* SPEED */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Gauge size={18} className="text-red-500" />
                <p className="text-gray-500 text-xs uppercase">Speed</p>
              </div>
              <p className="font-semibold text-base mt-1">
                {activePlan.internetSpeed}
              </p>
            </div>

            {/* DATA */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Database size={18} className="text-blue-500" />
                <p className="text-gray-500 text-xs uppercase">Data</p>
              </div>
              <p className="font-semibold text-base mt-1">
                {activePlan.dataLimit}
              </p>
            </div>

            {/* CHANNELS */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Tv size={18} className="text-yellow-500" />
                <p className="text-gray-500 text-xs uppercase">Channels</p>
              </div>
              <p className="font-semibold text-base mt-1">{selectedChannel}</p>
              {channelList.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {channelList.slice(0, 6).map((ch, i) => (
                    <div
                      key={ch.name + "" + i}
                      className="bg-gray-50  rounded-xl flex items-center justify-center p-1 hover:shadow-md transition-all duration-200"
                    >
                      <Image
                        src={ch.image}
                        alt={ch.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  ))}
                  {channelList.length > 6 && (
                    <div className="text-xs text-gray-500 flex items-center justify-center">
                      +{channelList.length - 6} more
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* OTT APPS */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <PlayCircle size={18} className="text-green-500" />
                <p className="text-gray-500 text-xs uppercase">OTT Apps</p>
              </div>
              <p className="font-semibold text-base mt-1">{selectedOtt}</p>
              {ottList.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {ottList.slice(0, 6).map((ott, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl flex items-center justify-center p-1 hover:shadow-md transition-all duration-200"
                    >
                      <Image
                        src={ott.image}
                        alt={ott.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  ))}
                  {ottList.length > 6 && (
                    <div className="text-xs text-gray-500 flex items-center justify-center">
                      +{ottList.length - 6} more
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* VALIDITY */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-purple-500" />
                <p className="text-gray-500 text-xs uppercase">Validity</p>
              </div>
              <p className="font-semibold text-base mt-1">
                {labelMap[selectedCycle]}
              </p>
            </div>

            {/* INSTALLATION */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Wrench size={18} className="text-orange-500" />
                <p className="text-gray-500 text-xs uppercase">Installation</p>
              </div>
              <p className="font-semibold text-base mt-1">
                {planSummary.installationCharges > 0
                  ? `₹${installationCharge}`
                  : "Free"}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — PRICE CARD */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 lg:max-w-xs flex flex-col justify-between">
          <div>
            <div className="text-5xl flex flex-row content-center justify-center space-x-3 font-extrabold">
              ₹{planSummary.base_price}{" "}
              <div className="text-sm flex  font-light my-auto mx-4 justify-center content-center h-full ">
                X {planSummary.cycle} Months
              </div>{" "}
            </div>
            <p className="text-sm font-light mb-3">+ GST</p>

            {(isExtraOtt || isExtraChannel) && (
              <div className="text-xs text-red-100 space-y-1">
                {isExtraOtt && (
                  <p>Includes ₹{extraOttCharge} for extra OTT apps</p>
                )}
                {isExtraChannel && (
                  <p>Includes ₹{extraChannelCharge} for extra channels</p>
                )}
              </div>
            )}

            <p className="text-xs text-red-100 mt-2">{discountMessage}</p>
          </div>

          <button
            onClick={onSubscribe}
            className="mt-6 w-full py-3 bg-white text-red-600 font-semibold rounded-md hover:bg-red-50 hover:scale-[1.03] transition-all duration-200"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CustomPlan({
  plans,
  isMobile,
  activeTab,
  setSelectedPlan,
  isContactOpen,
  setIsContactOpen,
}) {
  const basePlans = plans;
  const speeds = basePlans.speeds;
  const [selectedSpeed, setSelectedSpeed] = useState({
    name: "30 Mbps",
    price: 399,
  });
  const validities = basePlans.validity;
  const [selectedValidity, setSelectedValidity] = useState(12);
  const channelsList = basePlans.channels;
  const [selectedChannel, setSelectedChannel] = useState({
    name: 350,
    packValidity: [
      {
        speed: "30 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "50 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "100 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "200 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
    ],

    channelList: ["Vijay Tv", "Zee Tamil", "News 7"],
  });
  const ottsList = basePlans.otts;
  const [selectedOtt, setSelectedOtt] = useState({
    name: 15,

    packValidity: [
      {
        speed: "30 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "50 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "100 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "200 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "300 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      {
        speed: "500 Mbps",
        duration: [1, 3, 6, 12],
        additionalcost: 0,
      },
      // {
      //   speed: "1000 Mbps",
      //   duration: [1, 3, 6, 12],
      //   additionalcost: 0,
      // },
    ],
    ottList: ["aha Tamil"],
  });
  const [activePlan, setActivePlan] = useState(null);
  const [disableChannelList, setDisableChannelList] = useState(null);
  const [extraChargeChannelList, setExtraChargeChannelList] = useState(null);
  const [disableOttList, setDisableOttList] = useState(null);
  const [extraChargeOttList, setExtraChargeOttList] = useState(null);
  const [installationCharge, setInstallationCharges] = useState(null);
  const discountList = basePlans?.discount;
  useEffect(() => {
    /**
     * This modul is for getting channel list along with their price and calculation and finding
     *
     */
    let extraChargesList = [];
    let additionalCost = -1;
    channelsList.forEach((el) => {
      for (let i = 0; i < el?.packValidity?.length; i++) {
        let element = el?.packValidity[i];

        if (
          Number(element?.speed?.replace(/mbps/i, "").trim()) + "" >=
          Number(selectedSpeed.name?.replace(/mbps/i, "").trim())
        ) {
          additionalCost = element?.additionalcost;
          break;
        }
        additionalCost = -1;
      }
      if (additionalCost <= 0) {
        setSelectedChannel(el);
        extraChargesList.push({
          name: el.name,
          addons: false,
          cost: 0,
        });
      } else {
        extraChargesList.push({
          name: el.name,
          addons: true,
          cost: additionalCost,
        });
      }
    });
    setExtraChargeChannelList(extraChargesList);
    let disabledlist = [];
    channelsList.forEach((el) => {
      let channelcheck = false;
      for (let i = 0; i < el?.packValidity?.length; i++) {
        let element = el?.packValidity[i];
        if (
          Number(element?.speed?.replace(/mbps/i, "").trim()) + "" ==
          Number(selectedSpeed.name?.replace(/mbps/i, "").trim())
        ) {
          channelcheck = true;
          break;
        }
        channelcheck = false;
      }
      if (channelcheck) {
        disabledlist.push({
          name: el.name,
          disable: false,
        });
      } else {
        disabledlist.push({
          name: el.name,
          disable: true,
        });
      }
      setDisableChannelList(disabledlist);
    });
    /**
     *
     *
     * Checking for OTT disbling and checking for validity
     *
     *
     */
    disabledlist = [];
    ottsList.forEach((el) => {
      let channelcheck = false;
      for (let i = 0; i < el?.packValidity?.length; i++) {
        let element = el?.packValidity[i];
        if (
          Number(element?.speed?.replace(/mbps/i, "").trim()) + "" ==
          Number(selectedSpeed.name?.replace(/mbps/i, "").trim())
        ) {
          channelcheck = true;
          break;
        }
        channelcheck = false;
      }
      if (channelcheck) {
        disabledlist.push({
          name: el.name,
          disable: false,
        });
      } else {
        disabledlist.push({
          name: el.name,
          disable: true,
        });
      }
      setDisableOttList(disabledlist);
    });
    additionalCost = -1;
    extraChargesList = [];
    ottsList.forEach((el) => {
      for (let i = 0; i < el?.packValidity?.length; i++) {
        let element = el?.packValidity[i];

        if (
          Number(element?.speed?.replace(/mbps/i, "").trim()) + "" >=
          Number(selectedSpeed.name?.replace(/mbps/i, "").trim())
        ) {
          additionalCost = element?.additionalcost;
          break;
        }
        additionalCost = -1;
      }
      if (additionalCost <= 0) {
        setSelectedOtt(el);
        extraChargesList.push({
          name: el.name,
          addons: false,
          cost: 0,
        });
      } else {
        extraChargesList.push({
          name: el.name,
          addons: true,
          cost: additionalCost,
        });
      }
    });
    setExtraChargeOttList(extraChargesList);
  }, [selectedSpeed]);

  // Reusable Grid Button
  const ButtonGrid = ({
    type,
    options,
    selected,
    setSelected,
    color,
    disabledLogic,
    discountMap,
    extraChargeLogic,
  }) => {
    const colorMap = {
      blue: {
        base: "border-blue-300 text-blue-700 hover:bg-blue-500 hover:text-white",
        active: "bg-blue-600 text-white border-blue-600",
        disabled: "border-blue-400 text-blue-300 cursor-not-allowed",
      },
      red: {
        base: "border-red-300 text-red-700 hover:bg-red-500 hover:text-white",
        active: "bg-red-600 text-white border-red-600",
        disabled: "border-red-100 text-red-300 cursor-not-allowed opacity-50",
      },
      yellow: {
        base: "border-yellow-300 text-yellow-700 hover:bg-yellow-500 hover:text-white",
        active: "bg-yellow-500 text-white border-yellow-500",
        disabled:
          "border-yellow-300 text-yellow-500 cursor-not-allowed opacity-50",
      },
      green: {
        base: "border-green-300 text-green-700 hover:bg-green-500 hover:text-white",
        active: "bg-green-600 text-white border-green-600",
        disabled:
          "border-green-300 text-green-500 cursor-not-allowed opacity-50",
      },
    };

    const getGridCols = (count) =>
      `grid grid-cols-${Math.ceil(count / 2)} md:grid-cols-${Math.min(
        count
      )} gap-2`;

    return (
      <>
        {type == "speed" ? (
          <>
            <div
              className={`${getGridCols(options.length)} w-full items-stretch`}
            >
              {options.map((opt, idx) => {
                return (
                  <div key={opt.name + "  " + idx} className="relative w-full">
                    {/* 🏷️ Discount ribbon */}

                    <button
                      onClick={() => {
                        setSelected(opt);
                      }}
                      className={`relative cursor-pointer w-full p-2 md:py-3 rounded-md font-medium border transition-all duration-200 flex items-center justify-center  flex-col md:flex-row ${
                        selected?.name === opt.name
                          ? colorMap[color].active
                          : colorMap[color].base
                      }`}
                    >
                      <p> {opt?.name?.replace(/mbps/i, "").trim()}</p>
                      <p>Mbps</p>

                      {selected?.name === opt.name && (
                        <Check
                          size={18}
                          strokeWidth={4}
                          className="absolute top-1 right-1 text-white rounded-full p-[1px]"
                        />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}

        {type == "validity" ? (
          <>
            <div className={`${getGridCols(options.length)} w-full`}>
              {[...options].reverse().map((opt) => {
                let discount = 0;
                console.log(discountMap);
                discountMap?.validity?.forEach((el, idx) => {
                  if (el == opt) {
                    discount = discountMap?.rate[idx];
                  }
                });

                return (
                  <div key={"validity" + opt} className="relative w-full">
                    {/* 🏷️ Discount ribbon */}
                    {discount > 0 && (
                      <div className="absolute -top-[1px] left-2 z-10 flex flex-col items-center">
                        <span
                          className={`absolute top-0 left-0 flex items-start justify-center font-semibold text-[13px] 
                      ${selected === opt ? "text-red-600" : "text-white"}`}
                          style={{
                            backgroundImage: `url(${
                              selected === opt
                                ? "/newassets/plan/offer-badge-white.png"
                                : "/newassets/plan/offer-badge.png"
                            })`,
                            backgroundPosition: "-4px -8px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "50px 50px",
                            width: "43px",
                            height: "50px",
                            lineHeight: "7px",
                            padding: "11px 4px 0",
                          }}
                        >
                          {discount}%
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setSelected(opt);
                      }}
                      className={`relative cursor-pointer w-full py-3 rounded-md font-medium border transition-all duration-200 flex items-center justify-center gap-2 ${
                        selected === opt
                          ? colorMap[color].active
                          : colorMap[color].base
                      }`}
                    >
                      {selected === opt && (
                        <Check
                          size={18}
                          strokeWidth={4}
                          className="absolute top-1 right-1 text-white rounded-full p-[1px]"
                        />
                      )}
                      <div className="flex flex-col items-center">
                        <span>
                          {opt == 12
                            ? "Annual"
                            : opt == 6
                            ? "Half Yearly"
                            : opt == 3
                            ? "Quaterly"
                            : "Monthly"}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}

        {type == "channels" || type == "ott" ? (
          <div className={`${getGridCols(options.length)} w-full`}>
            {options.map((opt, idx) => {
              var isDisabled = false;
              var isextraCharge = false;
              var extraCharge = false;
              for (let i = 0; i < disabledLogic?.length; i++) {
                if (opt?.name + "" == disabledLogic[i].name + "") {
                  isDisabled = disabledLogic[i].disable;
                }
              }
              for (let i = 0; i < extraChargeLogic?.length; i++) {
                console.log("Checking for Additional logic idn  " + type);
                console.log(
                  opt?.name + "",
                  extraChargeLogic[i].name + "",
                  opt?.name + "" == extraChargeLogic[i].name + "",
                  +" " +
                    extraChargeLogic[i].addons +
                    "  " +
                    extraChargeLogic[i]?.cost
                );
                if (opt?.name + "" == extraChargeLogic[i].name + "") {
                  isextraCharge = extraChargeLogic[i].addons;
                  extraCharge = extraChargeLogic[i]?.cost;
                }
              }

              return (
                <div key={type + opt.name + idx} className="relative w-full">
                  <button
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;
                      setSelected(opt);
                    }}
                    className={`relative cursor-pointer w-full py-3 rounded-md font-medium border transition-all duration-200 flex items-center justify-center gap-2 ${
                      isDisabled
                        ? colorMap[color].disabled
                        : selected?.name === opt.name
                        ? colorMap[color].active
                        : colorMap[color].base
                    }`}
                  >
                    {selected?.name === opt.name && (
                      <Check
                        size={18}
                        strokeWidth={4}
                        className="absolute top-1 right-1 text-white rounded-full p-[1px]"
                      />
                    )}
                    <div className="flex flex-col items-center">
                      <span>
                        {opt.name}
                        {` + ${type == "channels" ? "Channels" : "OTTs"} `}
                        <span
                          className={`text-[11px] font-medium ${
                            isDisabled ? "hidden" : ""
                          } `}
                        >
                          {isextraCharge ? `(Addon)` : "(Free)"}
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
        {type == "syper" ? (
          <div className={`${getGridCols(options.length)} w-full`}>
            {options.map((opt) => {
              const isDisabled = disabledLogic ? disabledLogic(opt) : false;
              const discount = discountMap[opt] || 0;
              const extraCharge =
                typeof extraChargeLogic === "function"
                  ? extraChargeLogic(opt)
                  : null;

              return (
                <div key={opt.name} className="relative w-full">
                  {/* 🏷️ Discount ribbon */}
                  {discount > 0 && (
                    <div className="absolute -top-[1px] left-2 z-10 flex flex-col items-center">
                      <span
                        className={`absolute top-0 left-0 flex items-start justify-center font-semibold text-[13px] 
                      ${selected === opt ? "text-red-600" : "text-white"}`}
                        style={{
                          backgroundImage: `url(${
                            selected === opt
                              ? "/newassets/plan/offer-badge-white.png"
                              : "/newassets/plan/offer-badge.png"
                          })`,
                          backgroundPosition: "-4px -8px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "50px 50px",
                          width: "43px",
                          height: "50px",
                          lineHeight: "7px",
                          padding: "11px 4px 0",
                        }}
                      >
                        {discount}%
                      </span>
                    </div>
                  )}

                  <button
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;
                      setSelected(opt);
                    }}
                    className={`relative cursor-pointer w-full py-3 rounded-md font-medium border transition-all duration-200 flex items-center justify-center gap-2 ${
                      isDisabled
                        ? colorMap[color].disabled
                        : selected === opt
                        ? colorMap[color].active
                        : colorMap[color].base
                    }`}
                  >
                    {selected.name === opt.name && (
                      <Check
                        size={18}
                        strokeWidth={4}
                        className="absolute top-1 right-1 text-white rounded-full p-[1px]"
                      />
                    )}
                    <div className="flex flex-col items-center">
                      <span>
                        {opt}{" "}
                        {extraCharge !== null && (
                          <span className={`text-[11px] font-medium `}>
                            {extraCharge > 0 ? `(Addon)` : "(Free)"}
                          </span>
                        )}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </>
    );
  };

  return (
    <>
      {/* <ContactPopup
        isMobile={isMobile}
        activeMbps={activeTab}
        activePrice={planPrice}
        activeCycle={labelMap[selectedCycle]}
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
      /> */}

      <div className="w-full bg-gray-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md py-3">
          Customize Your Own Plan
        </h2>

        <div className="flex flex-col lg:flex-col gap-6">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            {/* Speed */}
            <div className="bg-blue-50 border border-blue-300 p-5 rounded-xl">
              <h3 className="text-blue-800 text-start  font-semibold text-lg mb-2">
                Choose Your Bandwidth
              </h3>
              <ButtonGrid
                type={`speed`}
                options={speeds}
                selected={selectedSpeed}
                setSelected={setSelectedSpeed}
                color="blue"
              />
            </div>

            {/* Cycle */}
            <div className="bg-red-50 border border-red-300 p-5 rounded-xl">
              <h3 className="text-red-700 text-start font-semibold text-lg mb-2">
                Choose Your Billing Cycle
              </h3>
              <ButtonGrid
                type={`validity`}
                options={validities}
                selected={selectedValidity}
                setSelected={setSelectedValidity}
                color="red"
                discountMap={(() => {
                  let map = [];
                  discountList.forEach((v) => {
                    console.log(selectedSpeed.name, "   ", v?.speed);
                    if (selectedSpeed.name == v?.speed) {
                      map = v;
                    }
                  });
                  return map;
                })()}
              />
            </div>

            {/* Channels */}
            <div className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl">
              <h3 className="text-yellow-700 text-start  font-semibold text-lg mb-2">
                Choose Your TV Channels
              </h3>
              <ButtonGrid
                type={`channels`}
                options={channelsList}
                selected={selectedChannel}
                setSelected={setSelectedChannel}
                disabledLogic={disableChannelList}
                extraChargeLogic={extraChargeChannelList}
                color="yellow"
              />
            </div>

            {/* OTT */}
            <div className="bg-green-50 border border-green-300 p-5 rounded-xl">
              <h3 className="text-green-700 text-start  font-semibold text-lg mb-2">
                Choose Your OTT Apps
              </h3>
              <ButtonGrid
                type={`ott`}
                options={ottsList}
                selected={selectedOtt}
                setSelected={setSelectedOtt}
                color="green"
                disabledLogic={disableOttList}
                extraChargeLogic={extraChargeOttList}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full  flex flex-col gap-6">
            {/* Summary */}
            {/* <NewPlanSummary
              selectedSpeed={selectedSpeed}
              selectedValidity={selectedValidity}
              selectedChannel={selectedChannel}
              selectedOtt={selectedOtt}
              discountList={discountList}
              installationCharge={installationCharge}
            /> */}

            <SelectedPlanSummary
              speed="50 Mbps"
              validity={3}
              installation={1000}
              channelCount={350}
              ottCount={22}
              internetCharge={1497}
              discount={0}
            />

            {activePlan && (
              // <div className="mt-6 border-t border-gray-200 pt-4">
              //   <p className="text-xl font-bold text-gray-900">
              //     ₹{planPrice}{" "}
              //     <span className="text-sm text-gray-600">+ GST</span>
              //   </p>
              //   {isExtraOtt && (
              //     <p className="text-xs text-orange-600 mt-1">
              //       Includes ₹{extraOttCharge} extra for additional OTT apps.
              //     </p>
              //   )}
              //   {isExtraChannel && (
              //     <p className="text-xs text-orange-600 mt-1">
              //       Includes ₹{extraChannelCharge} extra for additional TV
              //       channels.
              //     </p>
              //   )}
              //   <p className="text-xs text-gray-500 mt-1">
              //     {getDiscountMessage()}
              //   </p>
              //   <button
              //     className="mt-4 w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-md font-semibold hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
              //     onClick={() => setIsContactOpen(true)}
              //   >
              //     Subscribe Now
              //   </button>
              // </div>

              <PlanSummary
                activePlan={activePlan}
                planPrice={planPrice}
                extraOttCharge={extraOttCharge}
                extraChannelCharge={extraChannelCharge}
                installationCharge={activePlan?.installationCharges?.[0] || 0}
                isExtraOtt={isExtraOtt}
                isExtraChannel={isExtraChannel}
                selectedOtt={selectedOtt}
                selectedChannel={selectedChannel}
                selectedCycle={selectedCycle}
                discountMessage={getDiscountMessage()}
                uniqueOTTs={uniqueOTTs}
                uniqueChannels={uniqueChannels}
                labelMap={labelMap}
                onSubscribe={() => setIsContactOpen(true)}
                planSummary={planSummary}
              />
            )}

            {/* Contact */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
              <h5 className="text-gray-800 font-semibold mb-2">
                Get in touch with our experts
              </h5>
              <h3 className="text-blue-700 font-bold text-xl mb-1">
                <a
                  href="tel:9944199445"
                  className="underline hover:text-blue-900"
                >
                  +91 99441 99445
                </a>
              </h3>
              <p className="text-gray-600 text-sm">
                24/7 Customer Care Service Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
