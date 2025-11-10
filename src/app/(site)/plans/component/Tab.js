"use client";
import "./Tab.css";
import "./Tab.mobile.css";
import React, { useEffect, useRef, useState } from "react";
import Speed from "../../../../components/plans/Speed";
import BilledCycle from "../../../../components/plans/BilledCycle";
import Channel from "../../../../components/plans/Channel";
import Ott from "../../../../components/plans/Ott";
import PlanHighlights from "../../../../components/plans/PlanHighlights";
import CustomPlans from "../../../../components/plans/CustomPlans";
import CustomPlansMobile from "../../../../components/plans/CustomPlansMobile";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlanAccordionDetails from "../../../../components/plans/PlanAccordionDetails";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePlans } from "../context/PlansContext";
import "./Tab.css";
import ContactPopup from "./ContactPopup";
import PlanTabs from "../../new_plans/component/planTabs";
import Image from "next/image";

const NewPlanCard = ({
  setInsideAccordionIndex,
  isSelected,
  setActiveMbps,
  setActivePrice,
  setBasePrice,
  setActiveCycle,
  setActiveInstallation,
  isMobile,
  planDetailArray,
  mbps,
  insideAccordionIndex,
  activeCycle,
  detailRef,
  viewCart,
  setDrawerOpen,
  sectionRef,
  activeTab,
  setActiveTab,
  setIsOpen,
  setIsContactOpen,
  isContactOpen,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      {Object.entries(planDetailArray)
        .reverse()
        .map((plan, planIdx) => {
          const key = `${mbps}-${planIdx}`;
          const planInfo = plan[1][activeCycle];
          const isOpen = insideAccordionIndex === key;
          const selected = isSelected(key);

          return (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`relative bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-72 p-4 flex flex-col justify-between cursor-pointer ${
                selected || planInfo.hot === "yes"
                  ? "border-red-500 bg-gradient-to-r from-red-600 via-red-600/90 to-red-600 text-white ring-2 ring-red-300"
                  : "border-gray-200"
              }`}
              onClick={
                isMobile
                  ? () => {
                      setInsideAccordionIndex((prev) =>
                        prev === key ? false : key
                      );
                      setActiveMbps(planInfo.speed);
                      setActivePrice(planInfo.price);
                      setBasePrice(planInfo.basePrice);
                      setActiveCycle(planInfo.billingCycle);
                      setActiveInstallation(planInfo.installationFee);
                    }
                  : undefined
              }
            >
              {/* Recommended Badge */}
              {planInfo.hot === "yes" && (
                <div className="absolute -top-3 right-3 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                  <FaStar className="text-white w-4 h-4" /> Recommended
                </div>
              )}

              {/* Plan Speed and Price */}
              <div className="text-center">
                <h3
                  className={`text-2xl font-extrabold  ${
                    selected || planInfo.hot === "yes"
                      ? "text-white"
                      : " text-gray-800"
                  }`}
                >
                  {planInfo.speed}
                </h3>
                <p
                  className={`text-sm${
                    selected || planInfo.hot === "yes"
                      ? "text-white"
                      : " text-gray-500"
                  }  mt-1`}
                >
                  {planInfo.dataLimit} Data
                </p>
                <div
                  className={`mt-2 text-lg font-semibold ${
                    selected || planInfo.hot === "yes"
                      ? "text-white"
                      : " text-gray-800"
                  } `}
                >
                  ₹{planInfo.price}{" "}
                  <span
                    className={`text-sm ${
                      selected || planInfo.hot === "yes"
                        ? "text-white"
                        : " text-gray-500"
                    } `}
                  >
                    /{" "}
                    {planInfo.billingCycle === "Monthly"
                      ? "1 Month"
                      : planInfo.billingCycle === "Quarterly"
                      ? "3 Months"
                      : planInfo.billingCycle === "Half-Yearly"
                      ? "6 Months"
                      : "12 Months"}
                  </span>
                </div>
              </div>

              {/* OTT + TV Logos */}
              <div className="flex justify-center gap-3 mt-4">
                {planInfo?.otts && (
                  <Image
                    src="/newassets/plan/channels/sunnxt.png"
                    alt="SunNXT"
                    width={32} // w-8 = 2rem = 32px
                    height={32} // h-8 = 2rem = 32px
                    className="rounded-md object-contain"
                  />
                )}
                {planInfo?.channels && (
                  <Image
                    src="/newassets/plan/channels/zee-tamizh.png"
                    alt="Zee Tamil"
                    width={32} // w-8 = 2rem = 32px
                    height={32} // h-8 = 2rem = 32px
                    className="rounded-md object-contain"
                  />
                )}
              </div>

              {/* Validity */}
              <div
                className={`mt-4 flex justify-between text-sm ${
                  selected || planInfo.hot === "yes"
                    ? "text-white"
                    : " text-gray-600"
                }  border-t pt-2`}
              >
                <div>
                  <span className="block font-semibold">Validity</span>
                  <span>
                    {planInfo.billingCycle === "Monthly"
                      ? "1 Month"
                      : planInfo.billingCycle === "Quarterly"
                      ? "3 Months"
                      : planInfo.billingCycle === "Half-Yearly"
                      ? "6 Months"
                      : "12 Months"}
                  </span>
                </div>
                <div>
                  <span className="block font-semibold">Installation</span>
                  <span>₹{planInfo.installationFee}</span>
                </div>
              </div>

              {/* Details Accordion (optional on mobile) */}
              <div ref={detailRef} className="mt-3">
                <PlanAccordionDetails
                  key={key}
                  open={insideAccordionIndex === key}
                  plan={planInfo}
                  planindex={key}
                  isSelected={isSelected}
                  setInsideAccordionIndex={setInsideAccordionIndex}
                  insideAccordionIndex={insideAccordionIndex}
                  viewCart={viewCart}
                  setDrawerOpen={setDrawerOpen}
                  sectionRef={sectionRef}
                />
              </div>

              {/* Book Now Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDrawerOpen(true);
                  setActiveMbps(planInfo.speed);
                  setActivePrice(planInfo.price);
                  setBasePrice(planInfo.basePrice);
                  setActiveCycle(planInfo.billingCycle);
                  setActiveInstallation(planInfo.installationFee);
                  setActiveTab("Fixed Plan");
                  setIsOpen(!isOpen);
                  setIsContactOpen(!isContactOpen);
                }}
                className={`mt-4 w-full rounded-xl text-white font-semibold py-2 transition-all duration-300 ${
                  selected
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                }`}
              >
                Book Now
              </button>
            </motion.div>
          );
        })}
    </div>
  );
};

const PlanCard = ({
  setInsideAccordionIndex,
  isSelected,
  setActiveMbps,
  setActivePrice,
  setBasePrice,
  setActiveCycle,
  setActiveInstallation,
  isMobile,
  planDetailArray,
  mbps,
  insideAccordionIndex,
  activeCycle,
  detailRef,
  viewCart,
  setDrawerOpen,
  sectionRef,
  activeTab,
  setActiveTab,
  setIsOpen,
  setIsContactOpen,
  isContactOpen,
}) => {
  return (
    <div className=" flex content-center justify-center  ">
      {Object.entries(planDetailArray)
        .reverse()
        .map((plan, planIdx) => {
          const key = `${mbps}-${planIdx}`;
          const isOpen = insideAccordionIndex === key;
          const planInfo = plan[1][activeCycle];
          return (
            <div
              key={key}
              className={`pricing-plan-package-item  absolute ${
                isSelected(key) ? "active" : ""
              } ${planInfo.hot === "yes" ? "active" : ""}`}
              onClick={
                isMobile
                  ? () => {
                      setInsideAccordionIndex((prev) =>
                        prev === key ? false : key
                      );
                      setActiveMbps(planInfo.speed);
                      setActivePrice(planInfo.price);
                      setBasePrice(planInfo.basePrice);
                      setActiveCycle(planInfo.billingCycle);
                      setActiveInstallation(planInfo.installationFee);
                    }
                  : undefined
              }
            >
              {planInfo.hot === "yes" && (
                <div
                  className={`relative -top-7 -right-3  flex w-35 ${
                    activeTab == "Fixed Plan"
                      ? "bg-yellow-400/80"
                      : "bg-gray-600/20"
                  }  rounded-xl mb-4  p-2 justify-center content-center`}
                >
                  <p className="font-extrabold  text-white mt-1 mr-4 text-xs uppercase drop-shadow-md">
                    Recommended
                  </p>
                  <div className="relative">
                    <FaStar className="absolute left-0 right-0 top-0 star text-white w-6 h-6" />
                  </div>
                </div>
              )}
              <div className="pricing-separate-files m-0 p-0">
                <div className="mobile-alignmentfor-planname">
                  <div className="speed-wrap ">
                    <div className="speed-icon" style={{ display: "none" }}>
                      <Image
                        alt="tv-logo-speed-brand"
                        src="https://skyplay.in/assets/speed-brand.svg"
                        width={25}
                        height={25}
                        loading="lazy"
                        className="object-contain"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="ott-counts mobile-only">
                      {planInfo.speed + " + " + planInfo.otts}
                    </div>
                    <div className="speed-texts">
                      {isMobile ? (
                        <>
                          ₹{planInfo.basePrice}
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span className="multiply-symbol">X</span>{" "}
                            {planInfo.billingCycle === "Monthly"
                              ? "1"
                              : planInfo.billingCycle === "Quarterly"
                              ? "3"
                              : planInfo.billingCycle === "Half-Yearly"
                              ? "6"
                              : planInfo.billingCycle === "Annual"
                              ? "12"
                              : ""}
                          </span>
                        </>
                      ) : (
                        <div className="speed-container">
                          <span className="speed-container-wrap">
                            <span className="speed-container-title">Speed</span>
                            <span className="speed-container-price">
                              <div className="speed-container-unit">
                                {planInfo.speed.split(" ")[0]}
                              </div>
                              <div className="speed-container-mbps">
                                {planInfo.speed.split(" ")[1]}
                              </div>
                            </span>
                          </span>
                          <div className="data-limit">
                            {planInfo.dataLimit} Data
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="specialInfocontainer">
                      <div className="specialInfowrap">
                        <span className="specialInfowraptitle">Validity</span>
                        <span className="specialInfowrapvalue">
                          <div>
                            {planInfo.billingCycle === "Monthly"
                              ? "1 Month"
                              : planInfo.billingCycle === "Quarterly"
                              ? "3 Months"
                              : planInfo.billingCycle === "Half-Yearly"
                              ? "6 Months"
                              : planInfo.billingCycle === "Annual"
                              ? "12 Months"
                              : ""}
                          </div>
                        </span>
                      </div>
                      <div className="specialInfowrap">
                        <span className="specialInfowraptitle">Data</span>
                        <span className="specialInfowrapvalue">
                          {planInfo.dataLimit}
                        </span>
                      </div>
                    </div>
                    <button
                      className="details-link mobile-only"
                      onClick={() => {
                        setInsideAccordionIndex(true);
                        setDrawerOpen(false);
                        setActiveMbps(planInfo.speed);
                        setActivePrice(planInfo.price);
                        setBasePrice(planInfo.basePrice);
                        setActiveCycle(planInfo.billingCycle);
                        setActiveInstallation(planInfo.installationFee);
                      }}
                    >
                      {insideAccordionIndex === key ? (
                        <KeyboardArrowRightIcon />
                      ) : (
                        <KeyboardArrowRightIcon />
                      )}
                    </button>
                  </div>
                  <div className="mobile-hide">
                    <button
                      className="details-link"
                      onClick={() => {
                        setInsideAccordionIndex((prev) => {
                          const isOpen = prev === key;
                          const newIndex = isOpen ? false : key;
                          if (!isOpen) {
                            setDrawerOpen(false);
                            setActiveMbps(planInfo.speed);
                            setActivePrice(planInfo.price);
                            setBasePrice(planInfo.basePrice);
                            setActiveCycle(planInfo.billingCycle);
                            setActiveInstallation(planInfo.installationFee);
                          }
                          return newIndex;
                        });
                      }}
                    >
                      More Detail
                    </button>
                  </div>
                  <div className="pricing-plan-package-details mobile-only">
                    <div
                      className="iconslist"
                      style={{
                        display: "flex",
                        columnGap: "12px",
                      }}
                    >
                      <div className="info-details tv-container">
                        <div className="image-wrap w-100 flex gap-2 my-2">
                          {planInfo?.channels === "350+ Channels" && (
                            <>
                              <Image
                                alt="news7"
                                src="/newassets/plan/channels/news7_tamil.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />

                              <Image
                                alt="zee"
                                src="/newassets/plan/channels/zee-tamizh.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />
                            </>
                          )}
                          {planInfo?.channels === "550+ Channels" && (
                            <>
                              <Image
                                alt="zee"
                                src="/newassets/plan/channels/zee-tamizh.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />

                              <Image
                                alt="vijay"
                                src="/newassets/plan/channels/vijay-tv.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />
                            </>
                          )}
                          {planInfo?.channels === "750+ Channels" && (
                            <>
                              <Image
                                alt="zee"
                                src="/newassets/plan/channels/zee-tamizh.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />

                              <Image
                                alt="vijay"
                                src="/newassets/plan/channels/vijay-tv.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />
                            </>
                          )}
                          <span className="count-of-logo">+10 more</span>
                        </div>
                      </div>
                      <div className="info-details tv-container">
                        <div className="image-wrap w-100 flex gap-2 my-2">
                          {planInfo?.otts === "21+ OTTs" && (
                            <>
                              <Image
                                alt="sunnxt"
                                src="/newassets/plan/channels/sunnxt.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />

                              <Image
                                alt="zee5"
                                src="/newassets/plan/channels/zee5.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />
                            </>
                          )}
                          {planInfo?.otts === "24+ OTTs" && (
                            <>
                              <Image
                                alt="sunnxt"
                                src="/newassets/plan/channels/sunnxt.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />

                              <Image
                                alt="zee5"
                                src="/newassets/plan/channels/zee5.png"
                                width={35}
                                height={35}
                                className="object-contain rounded-md"
                              />
                            </>
                          )}
                          <span className="count-of-logo">+10 more</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="subscribe-button mt-2"
                      onClick={(e) => {
                        setDrawerOpen(true);
                        setActiveMbps(planInfo.speed);
                        setActivePrice(planInfo.price);
                        setActiveInstallation(planInfo.installationFee);
                        setBasePrice(planInfo.basePrice);
                        setActiveCycle(planInfo.billingCycle);
                        setIsOpen(!isOpen);
                        setIsContactOpen(!isContactOpen);
                        console.log("Clicked");
                      }}
                    >
                      {isSelected(key) ? (
                        <span className="flex items-center justify-center">
                          Book Now
                        </span>
                      ) : (
                        "Book Now"
                      )}
                    </button>
                  </div>
                </div>
                <div className="pricing-plan-package-details">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                    }}
                    className="mobile-hide"
                  >
                    <span className="special-price-wrap">
                      ₹{planInfo.price}
                    </span>{" "}
                    /{" "}
                    <div style={{ fontSize: "12px" }}>
                      {planInfo.billingCycle === "Monthly"
                        ? "1 Mon"
                        : planInfo.billingCycle === "Quarterly"
                        ? "3 Mon"
                        : planInfo.billingCycle === "Half-Yearly"
                        ? "6 Mon"
                        : planInfo.billingCycle === "Annual"
                        ? "12 Mon"
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t order-change">
                <div ref={detailRef}>
                  {isMobile ? (
                    <PlanAccordionDetails
                      key={key}
                      open={insideAccordionIndex === key}
                      plan={planInfo}
                      planindex={key}
                      isSelected={isSelected}
                      setInsideAccordionIndex={setInsideAccordionIndex}
                      insideAccordionIndex={insideAccordionIndex}
                      viewCart={viewCart}
                      setDrawerOpen={setDrawerOpen}
                      sectionRef={sectionRef}
                    />
                  ) : (
                    <PlanAccordionDetails
                      key={key}
                      open={insideAccordionIndex === false}
                      plan={planInfo}
                      planindex={key}
                      isSelected={isSelected}
                      setInsideAccordionIndex={setInsideAccordionIndex}
                      insideAccordionIndex={insideAccordionIndex}
                      viewCart={viewCart}
                      setDrawerOpen={setDrawerOpen}
                      sectionRef={sectionRef}
                    />
                  )}
                </div>
                <Image
                  className="red-line-wrap"
                  src="/newassets/plan/red-line.png"
                  alt="red line"
                  width={500} // adjust based on actual image size or layout
                  height={10} // adjust proportionally to maintain aspect ratio
                  priority // optional: ensures it loads fast if it's a key visual element
                />

                <hr
                  style={{
                    marginTop: "20px",
                    color: "#dddddd",
                  }}
                />
                <div className="pricing-plan-package-details">
                  <span className="mobile-hide">
                    <span className="special_price_wrap">
                      ₹{planInfo.basePrice}{" "}
                      <span className="after-price-special-font-styling">
                        X{" "}
                        {planInfo.billingCycle === "Monthly"
                          ? "1 Month"
                          : planInfo.billingCycle === "Quarterly"
                          ? "3 Months"
                          : planInfo.billingCycle === "Half-Yearly"
                          ? "6 Months"
                          : planInfo.billingCycle === "Annual"
                          ? "12 Months"
                          : ""}
                      </span>
                    </span>
                  </span>
                </div>
                <button
                  className={`subscribe-button ${
                    !isMobile ? "open-popup" : ""
                  } mt-2`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDrawerOpen(true);
                    setActiveMbps(planInfo.speed);
                    setActivePrice(planInfo.price);
                    setBasePrice(planInfo.basePrice);
                    setActiveCycle(planInfo.billingCycle);
                    setActiveTab("Fixed Plan");
                    setActiveInstallation(planInfo.installationFee);
                    setIsOpen(!isOpen);
                    setIsContactOpen(!isContactOpen);
                    console.log("Clicked");
                  }}
                >
                  {isSelected(key) ? (
                    <span className="flex items-center justify-center">
                      Book Now
                    </span>
                  ) : (
                    "Book Now"
                  )}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default function Tab() {
  const newplans = useSelector((state) => state.newPlans.basePlans);
  const plans = useSelector((state) => state.plans);
  const tags = ["Fixed Plan"];
  const billingCycle = ["Monthly", "Quarterly", "Half-Yearly", "Annual"];
  const [activeState, setActiveState] = useState("Tamil Nadu");
  const { activeTab, setActiveTab } = usePlans();
  const [activeCycle, setActiveCycle] = useState("Annual");
  const [activePrice, setActivePrice] = useState(699 * 12);
  const [activeMbps, setActiveMbps] = useState("50mbps");
  const [selectedPlanIndices, setSelectedPlanIndices] = useState(["30mbps-1"]);
  const [activeInstallation, setActiveInstallation] = useState(0);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(1);
  const [insideAccordionIndex, setInsideAccordionIndex] = useState(false);
  const [openChannelAccordionIndex, setOpenChannelAccordionIndex] =
    useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [basePrice, setBasePrice] = useState(699);
  const [isMobile, setIsMobile] = useState(0);
  const detailRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const customerSelectedPlanKey = "selectedplan-599";
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    setActiveTab("Customize Plan");

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const togglePlanSelection = (key) => {
    setSelectedPlanIndices((prev) => {
      if (prev.includes(key)) {
        return prev.filter((i) => i !== key);
      } else {
        if (prev.length >= 3) {
          alert("You can select up to 3 plans only");
          return prev;
        }
        return [...prev, key];
      }
    });
  };

  useEffect(() => {
    if (isMobile) {
      setActiveCycle("Annual");
    }
  }, []);

  useEffect(() => {
    const zonePlans =
      plans?.planOptions?.actualPrizeByZone?.[activeState]?.[activeTab]?.[
        activeCycle
      ] || {};
    const mbpsKeys = Object.keys(zonePlans);
    for (let i = 0; i < mbpsKeys.length; i++) {
      const mbps = mbpsKeys[i];
      const entries = Object.entries(zonePlans[mbps] || {});

      const hotPlanIndex = entries.findIndex(([_, plan]) => {
        const planInfo = plan?.[activeCycle];
        return planInfo?.hot === "yes";
      });

      const customIndex = entries.findIndex(([_, plan]) => {
        const planInfo = plan?.[activeCycle];
        return (
          planInfo?.planname ===
          customerSelectedPlanKey.replace("selectedplan-", "")
        );
      });

      let targetIndex = customIndex !== -1 ? customIndex : hotPlanIndex;
      if (targetIndex !== -1) {
        setSelectedPlanIndices([`${mbps}-${targetIndex}`]);
        setActiveMbps(mbps);
        setOpenAccordionIndex(i);
        return;
      }
    }
    if (mbpsKeys.length > 0) {
      setActiveMbps(mbpsKeys[0]);
      setOpenAccordionIndex(0);
      setSelectedPlanIndices([]);
    }
  }, [plans, activeState, activeTab, activeCycle]);

  const isSelected = (key) => {
    const selected = selectedPlanIndices.includes(key);
    return selected;
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prev) => (prev === index ? index : index));
  };

  const viewCart = (e) => {
    e.stopPropagation();
    setDrawerOpen(true);
  };

  const selectedPlan =
    selectedPlanIndices.length === 1
      ? (() => {
          const [mbps, index] = selectedPlanIndices[0].split("-");
          const currentMbps = activeMbps.replace(/\s+/g, "").toLowerCase();
          const plansMap =
            plans?.planOptions?.actualPrizeByZone?.[activeState]?.[activeTab]?.[
              currentMbps
            ]?.[basePrice]?.[activeCycle];
          if (!plansMap) return null;

          const entries = plansMap || null;
          return entries || null;
        })()
      : null;

  const gst = Math.round(activePrice * 0.18);
  const installationCost =
    activeInstallation === "Free" ? 0 : activeInstallation;
  const fixedPlanTotal = activePrice + gst + installationCost;

  return (
    <>
      <ContactPopup
        isMobile={isMobile}
        activeMbps={activeTab}
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
      {isMobile ? (
        <>
          <section className="py-10 px-4 bg-gray-50 min-h-screen">
            <div className="min-w-[95%] lg:min-w-[90%] mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-red-600">
                Broadband + TV + OTT
              </h1>

              <div className="w-full">
                <PlanTabs isMobile={isMobile} plans={newplans} />
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section
            ref={sectionRef}
            className={`pricing-plan-innovative-section ${
              insideAccordionIndex !== false ? "active" : ""
            }`}
            style={{ margin: "20px 0px" }}
          >
            <div className="container">
              <div className="container-wrap">
                <h1>Broadband + TV + OTT</h1>
                <div className="this-or-that-image-wrap">
                  {/* <img style={{width:"250px", margin:"20px auto 0px auto", display:"block"}} src="https://www.skylink.net.in/wp-content/uploads/2025/07/or-character-with-no-space.png" /> */}
                </div>
                {isMobile ? (
                  <div
                    className="flex pricing-plan-innovative-tags-wrap"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "8px",
                    }}
                  >
                    {["Customize Plan", ...tags].flatMap((tag, tdx, arr) => [
                      <div
                        key={`tag-${tdx}`}
                        className={`pricing-plan-innovative-tag ${
                          activeTab === tag ? "active" : ""
                        }`}
                        onClick={() => {
                          setActiveTab(tag);
                          setOpenChannelAccordionIndex(false);
                        }}
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          flex: "1",
                          maxWidth: "45%",
                        }}
                      >
                        <span className="">
                          {tag === "Fixed Plan"
                            ? "Fixed Plans"
                            : tag === "Customize Plan"
                            ? "Customize Your Plan"
                            : tag}
                        </span>
                      </div>,
                      tdx < arr.length - 1 && (
                        <span key={`or-${tdx}`} className="mx-2 text-gray-500">
                          or
                        </span>
                      ),
                    ])}
                  </div>
                ) : (
                  <div className="desktop-tab-switcher">
                    <div className="flex pricing-plan-innovative-tags-wrap">
                      {["Customize Plan", "Fixed Plan"].map((tag) => (
                        <div
                          key={tag}
                          className={`pricing-plan-innovative-tag ${
                            activeTab === tag ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tag)}
                          style={{ cursor: "pointer" }}
                        >
                          <span>
                            {tag === "Fixed Plan"
                              ? "Fixed Plans"
                              : "Customize Your Plan"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="tab-section-wrap">
                  <div className="accordion-container">
                    {/* CUSTOMIZE PLAN SECTION - NOW ON LEFT */}
                    <div
                      className={`pricing-plan-package-wrap custom-plan ${
                        isMobile
                          ? activeTab === "Customize Plan"
                            ? "tab-active"
                            : "tab-nonactive"
                          : `tab-active default-tab${
                              activeTab === "Customize Plan"
                                ? " colorful"
                                : " gray"
                            }`
                      }`}
                    >
                      <h2
                        onClick={() => setActiveTab("Customize Plan")}
                        style={{ cursor: "pointer" }}
                      >
                        Your Plan
                      </h2>
                      <div className="tab-wrap" style={{ display: "flex" }}>
                        <div className="table-wrap">
                          <table>
                            <tbody>
                              <tr className="speed-tabs-wrapper">
                                <td colSpan="2">
                                  <Speed />
                                  <BilledCycle />
                                  <Channel />
                                  <Ott />
                                </td>
                              </tr>
                              <PlanHighlights />
                            </tbody>
                          </table>
                        </div>
                        <div className="custom-plans">
                          <CustomPlans />
                        </div>
                        <div className="phone-number">
                          <h5>Get in touch with our experts</h5>
                          <h3>
                            {" "}
                            <a
                              href="tel:9944199445"
                              className="text-blue-600 underline hover:text-blue-800"
                            >
                              +91 99441 99445
                            </a>
                          </h3>
                          <h6>24/7 Customer Care Service Available</h6>
                        </div>
                      </div>
                      <CustomPlansMobile />
                    </div>

                    {/* FIXED PLAN SECTION - NOW ON RIGHT */}
                    <div
                      className={`accordion-left-bg ${
                        isMobile
                          ? activeTab === "Fixed Plan"
                            ? "tab-active"
                            : "tab-nonactive"
                          : `tab-active default-tab${
                              activeTab === "Fixed Plan" ? " colorful" : " gray"
                            }`
                      }`}
                    >
                      <h2
                        onClick={() => setActiveTab("Fixed Plan")}
                        style={{ cursor: "pointer" }}
                      >
                        Our Plan
                      </h2>
                      <h3 style={{ marginTop: "0px" }}>
                        Choose Your Billing Cycle
                      </h3>
                      <div className="wrap-for-header">
                        <div className="flex pricing-plan-innovative-tags-wrap inside-price-wrap">
                          {billingCycle
                            .slice()
                            .reverse()
                            .map((cycle, cdx) => (
                              <div
                                key={cdx}
                                className={`pricing-plan-innovative-tag ${
                                  activeCycle === cycle ? "active" : ""
                                }`}
                                onClick={() => {
                                  setActiveCycle(cycle);
                                  setActiveTab("Fixed Plan");
                                  setActivePrice(
                                    plans?.planOptions?.actualPrizeByZone?.[
                                      "Tamil Nadu"
                                    ]?.["Fixed Plan"]?.[activeMbps]?.[
                                      basePrice
                                    ]?.[cycle].price
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                <span>{cycle}</span>
                              </div>
                            ))}
                        </div>
                        <h3 style={{ marginTop: "0px" }}>
                          Choose Your BandWidth
                        </h3>
                        <div className="flex pricing-plan-innovative-tags-wrap inside-price-wrap mbps-wrap-for-header">
                          {Object.entries(
                            plans?.planOptions?.actualPrizeByZone?.[
                              activeState
                            ]?.["Fixed Plan"] || {}
                          ).map(([mbps, plansArray], idx) => {
                            const planCount = Array.isArray(plansArray)
                              ? plansArray.length
                              : Object.values(plansArray).length;

                            return (
                              <div
                                key={idx}
                                className={`pricing-plan-innovative-tag ${
                                  openAccordionIndex === idx ? "active" : ""
                                }`}
                                onClick={() => {
                                  setActiveMbps(mbps);
                                  toggleAccordion(idx);
                                  setActiveTab("Fixed Plan");
                                  const midPlan =
                                    plans?.planOptions?.actualPrizeByZone?.[
                                      "Tamil Nadu"
                                    ]?.["Fixed Plan"]?.[mbps];
                                  const midKey = Object.keys(midPlan || {})
                                    .map(Number)
                                    .sort((a, b) => a - b)[
                                    Math.floor(
                                      Object.keys(midPlan || {}).length / 2
                                    )
                                  ];
                                  const selectedPlan = midPlan?.[midKey];
                                  const newBasePrice =
                                    selectedPlan?.["Monthly"]?.price;
                                  setBasePrice(newBasePrice);
                                  setActivePrice(
                                    plans?.planOptions?.actualPrizeByZone?.[
                                      "Tamil Nadu"
                                    ]?.["Fixed Plan"][mbps]?.[
                                      String(newBasePrice)
                                    ]?.[activeCycle]?.price
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                <span>{mbps.replace(/mbps/i, " Mbps")}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {Object.entries(
                        plans?.planOptions?.actualPrizeByZone?.[activeState]?.[
                          "Fixed Plan"
                        ] || {}
                      ).map(([mbps, plansArray], idx) => {
                        const planDetailArray = plansArray;
                        return (
                          <div
                            key={idx}
                            className="accordion-item mbps-accordion-item"
                          >
                            <AnimatePresence>
                              <motion.div
                                className={`accordion-body ${
                                  openAccordionIndex === idx
                                    ? "accordion-active"
                                    : ""
                                }`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <NewPlanCard
                                  isOpen={isOpen}
                                  setInsideAccordionIndex={
                                    setInsideAccordionIndex
                                  }
                                  isSelected={isSelected}
                                  setActiveMbps={setActiveMbps}
                                  setActivePrice={setActivePrice}
                                  setBasePrice={setBasePrice}
                                  setActiveCycle={setActiveCycle}
                                  setActiveInstallation={setActiveInstallation}
                                  planDetailArray={planDetailArray}
                                  mbps={mbps}
                                  insideAccordionIndex={insideAccordionIndex}
                                  activeCycle={activeCycle}
                                  detailRef={detailRef}
                                  viewCart={viewCart}
                                  setDrawerOpen={setDrawerOpen}
                                  sectionRef={sectionRef}
                                  activeTab={activeTab}
                                  setActiveTab={setActiveTab}
                                  setIsOpen={setIsOpen}
                                  setIsContactOpen={setIsContactOpen}
                                  isContactOpen={isContactOpen}
                                />
                                <PlanCard
                                  isOpen={isOpen}
                                  setInsideAccordionIndex={
                                    setInsideAccordionIndex
                                  }
                                  isSelected={isSelected}
                                  setActiveMbps={setActiveMbps}
                                  setActivePrice={setActivePrice}
                                  setBasePrice={setBasePrice}
                                  setActiveCycle={setActiveCycle}
                                  setActiveInstallation={setActiveInstallation}
                                  planDetailArray={planDetailArray}
                                  mbps={mbps}
                                  insideAccordionIndex={insideAccordionIndex}
                                  activeCycle={activeCycle}
                                  detailRef={detailRef}
                                  viewCart={viewCart}
                                  setDrawerOpen={setDrawerOpen}
                                  sectionRef={sectionRef}
                                  activeTab={activeTab}
                                  setActiveTab={setActiveTab}
                                  setIsOpen={setIsOpen}
                                  setIsContactOpen={setIsContactOpen}
                                  isContactOpen={isContactOpen}
                                />
                                <div
                                  className="inside-div"
                                  style={{ display: "flex" }}
                                ></div>
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        );
                      })}
                      <div className="leftside-content-wrap">
                        <div className="firstset">
                          <h2
                            className="title-class"
                            style={{ margin: "0px 10px" }}
                          >
                            <span className="plan-title">
                              Selected Plan Details
                            </span>
                          </h2>
                        </div>
                        <div
                          className="plan-details-features"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span className="plan-details-feature-list">
                            <span className="feature-list-head">Speed</span>
                            <span className="feature-list-ans">
                              {activeMbps.replace(/mbps/i, " Mbps")}
                            </span>
                          </span>
                          <span className="plan-details-feature-list">
                            <span className="feature-list-head">
                              Internet Price Base on Billing Cycle
                            </span>
                            <span className="feature-list-ans">
                              ₹{activePrice} /{" "}
                              {activeCycle === "Annual"
                                ? 12
                                : activeCycle === "Half-Yearly"
                                ? 6
                                : activeCycle === "Quarterly"
                                ? 3
                                : activeCycle === "Monthly"
                                ? 1
                                : 0}
                            </span>
                          </span>
                          <span className="plan-details-feature-list">
                            <span className="feature-list-head">
                              Internet Charges
                            </span>
                            <span className="feature-list-ans">
                              ₹{basePrice}
                            </span>
                          </span>
                          <span className="plan-details-feature-list">
                            <span className="feature-list-head">
                              Installation Charges
                            </span>
                            <span className="feature-list-ans">
                              + ₹
                              {activeInstallation === "Free"
                                ? 0
                                : activeInstallation}
                            </span>
                          </span>
                          <span className="plan-details-feature-list">
                            <span className="feature-list-head">GST</span>
                            <span className="feature-list-ans">₹{gst}</span>
                          </span>
                        </div>
                        <div className="destop-subscribe-style">
                          <span className="price" style={{ marginTop: "10px" }}>
                            Total: <i className="fas fa-rupee-sign"></i>
                            {fixedPlanTotal}
                          </span>
                          <div className="subscribe-wrap">
                            <button
                              className="subscribe"
                              onClick={() => {
                                setIsOpen(!isOpen);
                                setIsContactOpen(!isContactOpen);
                                console.log("Clicked");
                              }}
                              data-price={activePrice}
                              data-active-tab={activeMbps}
                              data-active-nested-tab={activeCycle}
                            >
                              Subscribe Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
