"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import ContactPopup from "../../plans/component/ContactPopup";
import { Check } from "lucide-react";

export default function CustomPlan({ plans, isMobile, activeTab }) {
  const basePlans = plans || [];
  const additionalOTTCharges = 50;
  const additionalChannelCharges = 100; //

  // Extract unique speeds
  const speeds = useMemo(
    () => [...new Set(basePlans.map((p) => p.internetSpeed))],
    [basePlans]
  );

  // Default validities
  const validities = useMemo(() => [12, 6, 3, 1], []);

  const [selectedSpeed, setSelectedSpeed] = useState(speeds[0]);
  const [selectedCycle, setSelectedCycle] = useState(validities[0]);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Filter plans for current speed
  const filteredPlans = useMemo(
    () => basePlans.filter((p) => p.internetSpeed === selectedSpeed),
    [basePlans, selectedSpeed]
  );

  const allChannelCounts = useMemo(() => {
    const all = basePlans.map((p) => p.tvChannels);
    return [...new Set(all)].sort((a, b) => a - b);
  }, [basePlans]);

  // Selected Channel (default to lowest)
  const [selectedChannel, setSelectedChannel] = useState(
    `${allChannelCounts[0]}+ Channels`
  );

  // 🟢 Find the minimum channel count for the selected speed
  const minChannelsForSpeed = useMemo(() => {
    const plansForSpeed = basePlans.filter(
      (p) => p.internetSpeed === selectedSpeed
    );
    if (!plansForSpeed.length) return allChannelCounts[0];
    return Math.min(...plansForSpeed.map((p) => p.tvChannels));
  }, [basePlans, selectedSpeed, allChannelCounts]);

  // 🟢 NEW: Collect all possible OTT counts from all plans
  const allOttCounts = useMemo(() => {
    const all = basePlans.flatMap((p) => p.noOfOTTs || []);
    return [...new Set(all)].sort((a, b) => a - b);
  }, [basePlans]);

  const [selectedOtt, setSelectedOtt] = useState(`${allOttCounts[0]}+ OTTs`);

  // Find the active plan
  const activePlan = useMemo(() => {
    const channelCount = parseInt(selectedChannel);
    console.log(basePlans);
    return basePlans.find(
      (p) =>
        (p.internetSpeed === selectedSpeed &&
          p.validity.includes(selectedCycle)) ||
        p.tvChannels === channelCount
    );
  }, [basePlans, selectedSpeed, selectedCycle, selectedChannel]);

  // Label map
  const labelMap = {
    1: "Monthly",
    3: "Quarterly",
    6: "Half Yearly",
    12: "Annual",
  };

  // 🟢 Determine the plan’s base OTT count and handle extra charge
  const baseOttLimit = activePlan
    ? Math.max(...activePlan.noOfOTTs)
    : allOttCounts[0];
  const selectedOttCount = parseInt(selectedOtt);
  const isExtraOtt = selectedOttCount > baseOttLimit;

  // Example extra cost rule
  const extraOttCharge = isExtraOtt
    ? (selectedOttCount - baseOttLimit) * additionalOTTCharges
    : 0;
  // 🟡 Determine the plan’s base channel count
  const baseChannelLimit = activePlan
    ? activePlan.tvChannels
    : allChannelCounts[0];
  const selectedChannelCount = parseInt(selectedChannel);
  const isExtraChannel = selectedChannelCount > baseChannelLimit;

  const extraChannelCharge = isExtraChannel
    ? (selectedChannelCount - baseChannelLimit) * additionalChannelCharges
    : 0;

  // 🟢 Calculate final price dynamically
  const planPrice = activePlan
    ? activePlan.price + extraOttCharge + extraChannelCharge
    : extraOttCharge + extraChannelCharge;

  const getDiscountMessage = () => {
    if (!activePlan) return "";
    const idx = activePlan.validity.indexOf(selectedCycle);
    const discount = activePlan.discount[idx] || 0;
    const install = activePlan.installationCharges[idx] || 0;
    if (discount > 0)
      return `Enjoy a ${discount}% discount on this ${labelMap[selectedCycle]} plan.`;
    return `Installation charge ₹${install} applicable.`;
  };

  useEffect(() => {
    if (selectedSpeed && basePlans.length > 0) {
      // Filter plans for the selected speed
      const plansForSpeed = basePlans.filter(
        (p) => p.internetSpeed === selectedSpeed
      );

      if (plansForSpeed.length > 0) {
        // 🟡 Find the smallest (or first) channel count
        const minChannel = Math.min(...plansForSpeed.map((p) => p.tvChannels));

        // 🟢 Collect all OTT counts from these plans
        const allOttCounts = plansForSpeed.flatMap((p) => p.noOfOTTs || []);
        const minOtt =
          allOttCounts.length > 0 ? Math.min(...allOttCounts) : null;

        // Update selectedChannel
        setSelectedChannel(`${minChannel}+ Channels`);

        // Update selectedOtt (if available)
        if (minOtt !== null) {
          setSelectedOtt(`${minOtt}+ OTTs`);
        }
      }
    }
  }, [selectedSpeed, basePlans]);

  // 🔵 Reusable Grid Button
  const ButtonGrid = ({
    options,
    selected,
    setSelected,
    color,
    disabledLogic,
    discountMap = {},
    extraChargeLogic = () => 0, // 🆕 returns extra charge for each option
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
      `grid grid-cols-${Math.min(count, 4)} md:grid-cols-${Math.min(
        count,
        4
      )} gap-2`;

    return (
      <div className={`${getGridCols(options.length)} w-full`}>
        {options.map((opt) => {
          const isDisabled = disabledLogic ? disabledLogic(opt) : false;
          const discount = discountMap[opt] || 0; // 🆕 get discount for this option
          const extraCharge = extraChargeLogic(opt);

          return (
            <div key={opt} className="relative w-full">
              {/* 🏷️ Discount ribbon */}
              {discount > 0 && (
                <div className="absolute -top-[1px] left-2 z-10 flex flex-col items-center">
                  {/* Main red part */}
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
                onClick={() => !isDisabled && setSelected(opt)}
                className={`relative cursor-pointer w-full py-3 rounded-md font-medium border transition-all duration-200 flex items-center justify-center gap-2 ${
                  isDisabled
                    ? colorMap[color].disabled
                    : selected === opt
                    ? colorMap[color].active
                    : colorMap[color].base
                }`}
              >
                {selected === opt && (
                  <Check
                    size={18}
                    strokeWidth={4}
                    className="absolute top-1 right-1 text-white  rounded-full p-[1px]"
                  />
                )}
                <div className="flex flex-col items-center">
                  <span>{opt}</span>

                  {extraChargeLogic &&
                    typeof extraCharge === "number" &&
                    extraChargeLogic !== undefined && (
                      <span
                        className={`text-[11px] font-medium ${
                          extraCharge > 0 ? "text-orange-600" : "text-green-600"
                        }`}
                      >
                        {extraCharge > 0 ? `+₹${extraCharge}` : "Free"}
                      </span>
                    )}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <ContactPopup
        isMobile={isMobile}
        activeMbps={activeTab}
        activePrice={planPrice}
        activeCycle={labelMap[selectedCycle]}
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
      />

      <div className="w-full bg-gray-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md py-3">
          Customize Your Own Plan
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            {/* Speed */}
            <div className="bg-blue-50 border border-blue-300 p-5 rounded-xl">
              <h3 className="text-blue-800 font-semibold text-lg mb-4">
                Choose Your Bandwidth
              </h3>
              <ButtonGrid
                options={speeds}
                selected={selectedSpeed}
                setSelected={setSelectedSpeed}
                color="blue"
              />
            </div>

            {/* Cycle */}
            <div className="bg-red-50 border border-red-300 p-5 rounded-xl">
              <h3 className="text-red-700 font-semibold text-lg mb-4">
                Choose Your Billing Cycle
              </h3>
              <ButtonGrid
                options={validities.map((v) => labelMap[v])}
                selected={labelMap[selectedCycle]}
                setSelected={(label) =>
                  setSelectedCycle(
                    parseInt(
                      Object.keys(labelMap).find((k) => labelMap[k] === label)
                    )
                  )
                }
                color="red"
                discountMap={(() => {
                  // 🆕 build a discount map: { 'Monthly': 0, 'Quarterly': 10, ... }
                  const map = {};
                  console.log(validities);
                  validities.forEach((v) => {
                    console.log(activePlan);
                    const idx = activePlan?.validity.indexOf(v);
                    const disc =
                      idx !== -1 ? activePlan?.discount[idx] || 0 : 0;
                    map[labelMap[v]] = disc;
                  });
                  console.log("discount map  :" + map);
                  return map;
                })()}
              />
            </div>

            {/* Channels */}
            <div className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl">
              <h3 className="text-yellow-700 font-semibold text-lg mb-4">
                Choose Your TV Channels
              </h3>
              <ButtonGrid
                options={allChannelCounts.map((c) => `${c}+ Channels`)}
                selected={selectedChannel}
                setSelected={setSelectedChannel}
                color="yellow"
                disabledLogic={(opt) => parseInt(opt) < minChannelsForSpeed}
                extraChargeLogic={(opt) => {
                  const count = parseInt(opt);
                  return count > baseChannelLimit
                    ? (count - baseChannelLimit) * additionalChannelCharges
                    : 0;
                }}
              />
            </div>

            {/* OTT */}
            <div className="bg-green-50 border border-green-300 p-5 rounded-xl">
              <h3 className="text-green-700 font-semibold text-lg mb-4">
                Choose Your OTT Apps
              </h3>
              <ButtonGrid
                options={allOttCounts.map((c) => `${c}+ OTTs`)}
                selected={selectedOtt}
                setSelected={setSelectedOtt}
                color="green"
                disabledLogic={(opt) => parseInt(opt) < baseOttLimit}
                extraChargeLogic={(opt) => {
                  const count = parseInt(opt);
                  return count > baseOttLimit
                    ? (count - baseOttLimit) * additionalOTTCharges
                    : 0;
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            {/* Summary */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-800 font-semibold text-lg mb-4">
                Plan Highlights
              </h3>

              {activePlan ? (
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>Speed:</strong> {activePlan.internetSpeed}
                  </p>
                  <p>
                    <strong>Data:</strong> {activePlan.dataLimit}
                  </p>
                  <p>
                    <strong>Channels:</strong> {selectedChannel}
                  </p>
                  <p>
                    <strong>OTT Apps:</strong> {selectedOtt}
                  </p>
                  <p>
                    <strong>Validity:</strong> {labelMap[selectedCycle]}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Select your plan details to see highlights.
                </p>
              )}

              {activePlan && (
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <p className="text-xl font-bold text-gray-900">
                    ₹{planPrice}{" "}
                    <span className="text-sm text-gray-600">+ GST</span>
                  </p>
                  {isExtraOtt && (
                    <p className="text-xs text-orange-600 mt-1">
                      Includes ₹{extraOttCharge} extra for additional OTT apps.
                    </p>
                  )}
                  {isExtraChannel && (
                    <p className="text-xs text-orange-600 mt-1">
                      Includes ₹{extraChannelCharge} extra for additional TV
                      channels.
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {getDiscountMessage()}
                  </p>
                  <button
                    className="mt-4 w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-md font-semibold hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Subscribe Now
                  </button>
                </div>
              )}
            </div>

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
