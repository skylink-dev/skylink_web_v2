"use client"
import React, { useEffect, useRef, useState } from 'react';
import Speed from "../../../../components/plans/Speed"
import BilledCycle from '../../../../components/plans/BilledCycle';
import Channel from '../../../../components/plans/Channel';
import Ott from '../../../../components/plans/Ott';
import PlanHighlights from '../../../../components/plans/PlanHighlights';
import CustomPlans from '../../../../components/plans/CustomPlans';
import CustomPlansMobile from '../../../../components/plans/CustomPlansMobile';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlanAccordionDetails from '../../../../components/plans/PlanAccordionDetails';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usePlans } from '../context/PlansContext';
import "./Tab.css"
export default function Tab() {
    const plans = useSelector(state => state.plans);
    const tags = ["Fixed Plan"];
    const billingCycle = ["Monthly", "Quarterly", "Half-Yearly", "Annual"]
    const [activeState, setActiveState] = useState("Tamil Nadu");
    const {activeTag, setActiveTag } = usePlans()
    const [activeCycle, setActiveCycle] = useState("Annual");
    const [activePrice, setActivePrice] = useState(699 * 12);
    const [activeMbps, setActiveMbps] = useState("50mbps");
    const [selectedPlanIndices, setSelectedPlanIndices] = useState(["30mbps-1"]);
    const [activeInstallation, setActiveInstallation] = useState(0)
    const [openAccordionIndex, setOpenAccordionIndex] = useState(1);
    const [insideAccordionIndex, setInsideAccordionIndex] = useState(false);
    const [openChannelAccordionIndex, setOpenChannelAccordionIndex] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [basePrice, setBasePrice] = useState(699);
    const [isMobile,setIsMobile] = useState(0);
    const detailRef = useRef(null);
    // const drawerRef = useRef(null);
    const sectionRef = useRef(null);
    // const exitY = typeof window !== "undefined" ? window.innerHeight + 43 : '100%';
    const customerSelectedPlanKey = "selectedplan-599";
    useEffect(() => {
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Set initially
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
}, []);
    
    const togglePlanSelection = (key) => {
        setSelectedPlanIndices((prev) => {
            if (prev.includes(key)) {
                return prev.filter(i => i !== key);
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
        const zonePlans = plans?.planOptions?.actualPrizeByZone?.[activeState]?.[activeTag]?.[activeCycle] || {};
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
                return planInfo?.planname === customerSelectedPlanKey.replace("selectedplan-", "");
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
    }, [plans, activeState, activeTag, activeCycle]);
    const isSelected = (key) => {
        const selected = selectedPlanIndices.includes(key);
        return selected;
    };
    const toggleAccordion = (index) => {
        setOpenAccordionIndex(prev => (prev === index ? index : index));
    };
    const viewCart = (e) => {
        e.stopPropagation();
        setDrawerOpen(true);
    };
    const selectedPlan =
        selectedPlanIndices.length === 1
            ? (() => {
                const [mbps, index] = selectedPlanIndices[0].split("-");
                const currentMbps = activeMbps.replace(/\s+/g, '').toLowerCase()
                const plansMap = plans?.planOptions?.actualPrizeByZone?.[activeState]?.[activeTag]?.[currentMbps]?.[basePrice]?.[activeCycle];
                if (!plansMap) return null;

                const entries = plansMap || null;
                return entries || null;
            })()
            : null;
    const gst = Math.round(activePrice * 0.18);
    const installationCost = activeInstallation === 'Free' ? 0 : activeInstallation;
    const fixedPlanTotal = activePrice + gst + installationCost;
    return (
        <section ref={sectionRef} className={`pricing-plan-innovative-section ${insideAccordionIndex !== false ? 'active' : ''}`} style={{ margin: "20px 0px" }}>
            <div className="container">
                <div className="container-wrap">
                    <h1>Broadband + TV + OTT</h1>
                    <div className="this-or-that-image-wrap">
                        <img style={{width:"250px", margin:"20px auto 0px auto", display:"block"}} src="https://www.skylink.net.in/wp-content/uploads/2025/07/or-character-with-no-space.png" />
                    </div>
                    {isMobile ? (
                        <div className="flex pricing-plan-innovative-tags-wrap">
                            {[...tags, 'Customize Plan'].flatMap((tag, tdx, arr) => [
                                <div
                                    key={`tag-${tdx}`}
                                    className={`pricing-plan-innovative-tag ${activeTag === tag ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveTag(tag);
                                        setOpenChannelAccordionIndex(false);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span>{tag === 'Fixed Plan' ? 'Fixed Our Plan' : tag === 'Customize Plan' ? 'Customize Your Plan' : tag}</span>
                                </div>,
                                tdx < arr.length - 1 && (
                                    <span key={`or-${tdx}`} className="mx-2 text-gray-500">or</span>
                                )
                            ])}
                        </div>) : (<div></div>)}
                    <div className='tab-section-wrap'>
                        <div className="accordion-container">
                            <div className={`accordion-left-bg ${isMobile ? (activeTag === 'Fixed Plan' ? 'tab-active' : 'tab-nonactive') : `tab-active default-tab${activeTag === 'Fixed Plan' ? ' colorful' : ' gray'}`}`}>
                                <h2 onClick={() => setActiveTag("Fixed Plan")} style={{ "curson": "pointer" }}>Choose Our Fixed Plan</h2>
                                <h3 style={{ marginTop: "0px" }}>Choose Your Billing Cycle</h3>
                                <div className="wrap-for-header"><div className="flex pricing-plan-innovative-tags-wrap inside-price-wrap">
                                    {billingCycle.slice().reverse().map((cycle, cdx) => (
                                        <div
                                            key={cdx}
                                            className={`pricing-plan-innovative-tag ${activeCycle === cycle ? 'active' : ''}`}
                                            onClick={() => {
                                                setActiveCycle(cycle);
                                                setActiveTag("Fixed Plan")
                                                setActivePrice(plans?.planOptions?.actualPrizeByZone?.["Tamil Nadu"]?.["Fixed Plan"]?.[activeMbps]?.[basePrice]?.[cycle].price)
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <span>{cycle}</span>
                                        </div>
                                    ))}
                                </div>
                                    <h3 style={{ marginTop: "0px;" }}>Choose Your BandWidth</h3>
                                    <div className="flex pricing-plan-innovative-tags-wrap inside-price-wrap mbps-wrap-for-header">
                                        {Object.entries(plans?.planOptions?.actualPrizeByZone?.[activeState]?.["Fixed Plan"] || {}).map(
                                            ([mbps, plansArray], idx) => {
                                                const planCount = Array.isArray(plansArray)
                                                    ? plansArray.length
                                                    : Object.values(plansArray).length;

                                                return (
                                                    <div key={idx}
                                                        className={`pricing-plan-innovative-tag ${openAccordionIndex === idx ? 'active' : ''}`}
                                                        onClick={() => {
                                                            setActiveMbps(mbps);
                                                            toggleAccordion(idx);
                                                            setActiveTag("Fixed Plan")
                                                            const midPlan = plans?.planOptions?.actualPrizeByZone?.["Tamil Nadu"]?.["Fixed Plan"]?.[mbps];
                                                            const midKey = Object.keys(midPlan || {}).map(Number).sort((a, b) => a - b)[Math.floor(Object.keys(midPlan || {}).length / 2)];
                                                            const selectedPlan = midPlan?.[midKey];
                                                            const newBasePrice = selectedPlan?.["Monthly"]?.price;
                                                            setBasePrice(newBasePrice);
                                                            setActivePrice(plans?.planOptions?.actualPrizeByZone?.["Tamil Nadu"]?.["Fixed Plan"][mbps]?.[String(newBasePrice)]?.[activeCycle]?.price);
                                                            console.log(plans?.planOptions?.actualPrizeByZone?.["Tamil Nadu"]?.["Fixed Plan"][mbps]?.[String(newBasePrice)]?.[activeCycle]?.price);
                                                        }}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <span>{mbps.replace(/mbps/i, " Mbps")}</span>
                                                    </div>

                                                );
                                            }
                                        )
                                        }
                                    </div>
                                </div>
                                {Object.entries(plans?.planOptions?.actualPrizeByZone?.[activeState]?.["Fixed Plan"] || {}).map(
                                    ([mbps, plansArray], idx) => {
                                        const planDetailArray = plansArray;
                                        const planCount = Array.isArray(plansArray)
                                            ? plansArray.length
                                            : Object.values(plansArray).length;
                                        return (<>
                                            <div key={idx} className="accordion-item mbps-accordion-item">
                                                {/* <button
                                                    className={`accordion-header w-full text-left py-4 flex items-center justify-between ${openAccordionIndex === idx ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setActiveMbps(mbps);
                                                        toggleAccordion(idx);
                                                        setActiveTag("Fixed Plan")
                                                    }}
                                                >
                                                    <span className="font-semibold">{mbps.replace(/mbps/i, " Mbps")} <span className="plan-count-hide">{planCount > 1 && `(${planCount} Plans)`}</span></span>
                                                    {openAccordionIndex === idx ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                                </button> */}
                                                <AnimatePresence>
                                                    <motion.div
                                                        className={`accordion-body ${openAccordionIndex === idx ? 'accordion-active' : ''}`}
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >

                                                        <div className="inside-div" style={{ display: "flex" }}>
                                                            {Object.entries(planDetailArray).reverse().map((plan, planIdx) => {
                                                                const key = `${mbps}-${planIdx}`;
                                                                const isOpen = insideAccordionIndex === key;
                                                                const planInfo = plan[1][activeCycle];
                                                                return (
                                                                    <div
                                                                        key={key}
                                                                        className={`pricing-plan-package-item ${isSelected(key) ? 'active' : ''} ${planInfo.hot === 'yes' ? 'active' : ''}`}
                                                                        onClick={
                                                                            isMobile
                                                                                ? () => {
                                                                                    setInsideAccordionIndex(prev => (prev === key ? false : key));
                                                                                    setDrawerOpen(false);
                                                                                    setActiveMbps(planInfo.speed)
                                                                                    setActivePrice(planInfo.price)
                                                                                    setBasePrice(planInfo.basePrice)
                                                                                    setActiveCycle(planInfo.billingCycle)
                                                                                    setActiveInstallation(planInfo.installationFee)
                                                                                }
                                                                                : undefined
                                                                        }
                                                                    >
                                                                        <div className="gradient-color"></div>
                                                                        {planInfo.hot === "yes" && (
                                                                            <div className="ad-card">
                                                                                <img alt="recommened" className="recommend" src="https://www.skylink.net.in/wp-content/uploads/2025/07/skylink-recommened.png" />
                                                                                <img alt="star" className="star" src="https://www.skylink.net.in/wp-content/uploads/2025/07/skylink-star.png" />
                                                                            </div>
                                                                        )}
                                                                        <div className="pricing-separate-files">
                                                                            <div className="mobile-alignmentfor-planname">
                                                                                <div className="speed-wrap">
                                                                                    <div className="speed-icon" style={{ "display": "none" }}>
                                                                                        <img
                                                                                            alt="tv-logo-speed-brand"
                                                                                            loading="lazy"
                                                                                            width="25"
                                                                                            height="25"
                                                                                            src="https://skyplay.in/assets/speed-brand.svg"
                                                                                            style={{ color: "transparent" }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="ott-counts mobile-only">{planInfo.speed + " + " + planInfo.otts}</div>
                                                                                    <div className="speed-texts">{isMobile ? (
                                                                                        <>
                                                                                            ₹{planInfo.basePrice}
                                                                                            <span style={{ "display": "flex", alignItems: "center" }}><span className="multiply-symbol">X</span>{" "}
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
                                                                                        <div className="speed-container"><span className="speed-container-wrap"><span className="speed-container-title">Speed</span>
                                                                                            <span className="speed-container-price"><div className="speed-container-unit">{planInfo.speed.split(" ")[0]}</div><div className="speed-container-mbps">{planInfo.speed.split(" ")[1]}</div></span>
                                                                                        </span><div className="data-limit">{planInfo.dataLimit} Data</div></div>
                                                                                    )}</div>
                                                                                    <div className="specialInfocontainer">
                                                                                        <div className="specialInfowrap">
                                                                                            <span className="specialInfowraptitle">Validity</span>
                                                                                            <span className="specialInfowrapvalue"><div>{
                                                                                                planInfo.billingCycle === "Monthly"
                                                                                                    ? "1 Month"
                                                                                                    : planInfo.billingCycle === "Quarterly"
                                                                                                        ? "3 Months"
                                                                                                        : planInfo.billingCycle === "Half-Yearly"
                                                                                                            ? "6 Months"
                                                                                                            : planInfo.billingCycle === "Annual"
                                                                                                                ? "12 Months"
                                                                                                                : ""
                                                                                            }</div></span>
                                                                                        </div>
                                                                                        <div className="specialInfowrap">
                                                                                            <span className="specialInfowraptitle">Data</span>
                                                                                            <span className="specialInfowrapvalue">{planInfo.dataLimit}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <button
                                                                                        className="details-link mobile-only"
                                                                                        onClick={() => {
                                                                                            setInsideAccordionIndex(true)
                                                                                            setDrawerOpen(false);
                                                                                            setActiveMbps(planInfo.speed)
                                                                                            setActivePrice(planInfo.price)
                                                                                            setBasePrice(planInfo.basePrice)
                                                                                            setActiveCycle(planInfo.billingCycle)
                                                                                            setActiveInstallation(planInfo.installationFee)
                                                                                        }}
                                                                                    >
                                                                                        {insideAccordionIndex === key ? <KeyboardArrowRightIcon></KeyboardArrowRightIcon> : <KeyboardArrowRightIcon></KeyboardArrowRightIcon>}</button>
                                                                                </div>
                                                                                <div className="mobile-hide">
                                                                                    <button
                                                                                        className="details-link"
                                                                                        onClick={() => {
                                                                                            setInsideAccordionIndex(prev => {
                                                                                                const isOpen = prev === key;
                                                                                                const newIndex = isOpen ? false : key;
                                                                                                if (!isOpen) {
                                                                                                    setDrawerOpen(false);
                                                                                                    setActiveMbps(planInfo.speed);
                                                                                                    setActivePrice(planInfo.price);
                                                                                                    setBasePrice(planInfo.basePrice);
                                                                                                    setActiveCycle(planInfo.billingCycle);
                                                                                                    setActiveInstallation(planInfo.installationFee)
                                                                                                }
                                                                                                return newIndex;
                                                                                            });
                                                                                        }}
                                                                                    >
                                                                                        More Detail
                                                                                    </button>                                                                                </div><div className="pricing-plan-package-details mobile-only"><div className="iconslist" style={{ "display": "flex", "columnGap": "12px" }}><div className="info-details tv-container"><div className="image-wrap w-100 flex gap-2 my-2">
                                                                                        {planInfo?.channels === "350+ Channels" && (
                                                                                            <>
                                                                                                <img alt="news7" src="https://www.skylink.net.in/wp-content/uploads/2025/06/Logo_of_News7_Tamil_Logo.jpg" width="35" height="35" />
                                                                                                <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                                                                                            </>
                                                                                        )}
                                                                                        {planInfo?.channels === "550+ Channels" && (
                                                                                            <>
                                                                                                <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                                                                                                <img alt="vijay" src="https://skyplay.in/assets/vijay-tv.png" width="35" height="35" />
                                                                                            </>
                                                                                        )}
                                                                                        {planInfo?.channels === "750+ Channels" && (
                                                                                            <>
                                                                                                <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                                                                                                <img alt="vijay" src="https://skyplay.in/assets/vijay-tv.png" width="35" height="35" />
                                                                                            </>
                                                                                        )}<span className='count-of-logo'>+10 more</span>
                                                                                    </div>
                                                                                    </div>
                                                                                        <div className="info-details tv-container">
                                                                                            <div className="image-wrap w-100 flex gap-2 my-2">
                                                                                                {planInfo?.otts === "21+ OTTs" && (
                                                                                                    <>
                                                                                                        <img alt="sunnxt" src="https://skyplay.in/assets/sunnxt.png" width="35" height="35" />
                                                                                                        <img alt="zee5" src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" width="35" height="35" />
                                                                                                    </>
                                                                                                )}
                                                                                                {planInfo?.otts === "24+ OTTs" && (
                                                                                                    <>
                                                                                                        <img alt="sunnxt" src="https://skyplay.in/assets/sunnxt.png" width="35" height="35" />
                                                                                                        <img alt="zee5" src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" width="35" height="35" />

                                                                                                    </>
                                                                                                )}<span className='count-of-logo'>+10 more</span>
                                                                                            </div></div></div><button
                                                                                                className="subscribe-button mt-2"
                                                                                                onClick={(e) => {
                                                                                                    setDrawerOpen(true);
                                                                                                    setActiveMbps(planInfo.speed)
                                                                                                    setActivePrice(planInfo.price)
                                                                                                    setActiveInstallation(planInfo.installationFee)
                                                                                                    setBasePrice(planInfo.basePrice)
                                                                                                    setActiveCycle(planInfo.billingCycle)
                                                                                                    
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
                                                                                </div></div>
                                                                            <div className="pricing-plan-package-details">
                                                                                <div style={{ "display": "flex", "alignItems": "end" }} className="mobile-hide">
                                                                                    <span className="special-price-wrap">₹{planInfo.price}</span> / <div style={{ "fontSize": "12px" }}>{
                                                                                        planInfo.billingCycle === "Monthly"
                                                                                            ? "1 Mon"
                                                                                            : planInfo.billingCycle === "Quarterly"
                                                                                                ? "3 Mon"
                                                                                                : planInfo.billingCycle === "Half-Yearly"
                                                                                                    ? "6 Mon"
                                                                                                    : planInfo.billingCycle === "Annual"
                                                                                                        ? "12 Mon"
                                                                                                        : ""
                                                                                    }</div></div>

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
                                                                                    />) :
                                                                                    (<PlanAccordionDetails
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
                                                                                    />)
                                                                                }
                                                                            </div>
                                                                            <img className="red-line-wrap" src="https://www.skylink.net.in/wp-content/uploads/2025/07/red-line.png" />
                                                                            <hr style={{ marginTop: "20px", color: "#dddddd" }} />
                                                                            <div className="pricing-plan-package-details">
                                                                                <span className="mobile-hide"><span className="special_price_wrap">₹{planInfo.basePrice} <span className="after-price-special-font-styling">X {
                                                                                    planInfo.billingCycle === "Monthly"
                                                                                        ? "1 Month"
                                                                                        : planInfo.billingCycle === "Quarterly"
                                                                                            ? "3 Months"
                                                                                            : planInfo.billingCycle === "Half-Yearly"
                                                                                                ? "6 Months"
                                                                                                : planInfo.billingCycle === "Annual"
                                                                                                    ? "12 Months"
                                                                                                    : ""
                                                                                }</span></span></span>
                                                                            </div>
                                                                            <button
                                                                                className={`subscribe-button ${!isMobile ? "open-popup" : ""} mt-2`}
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    setDrawerOpen(true);
                                                                                    setActiveMbps(planInfo.speed)
                                                                                    setActivePrice(planInfo.price)
                                                                                    setBasePrice(planInfo.basePrice)
                                                                                    setActiveCycle(planInfo.billingCycle)
                                                                                    setActiveTag("Fixed Plan")
                                                                                    setActiveInstallation(planInfo.installationFee)
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
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div></>)
                                    }
                                )}
                                <div className="leftside-content-wrap">
                                    <div className="firstset">
                                        <h2 className="title-class" style={{ margin: "0px 10px" }}><span className="plan-title">Selected Plan Details</span></h2>
                                    </div>
                                    <div className='plan-details-features' style={{ boxSizing: "border-box" }}>
                                        <span className="plan-details-feature-list"><span className="feature-list-head">Speed</span> <span className="feature-list-ans">{activeMbps.replace(/mbps/i, " Mbps")}</span></span>
                                        <span className="plan-details-feature-list"><span className="feature-list-head">Internet Price Base on Billing Cycle</span> <span className="feature-list-ans">₹{activePrice} / {activeCycle === "Annual" ? 12 : activeCycle === "Half-Yearly" ? 6 : activeCycle === "Quarterly" ? 3 : activeCycle === "Monthly" ? 1 : 0}</span></span>
                                        <span className="plan-details-feature-list"><span className="feature-list-head">Internet Charges</span> <span className="feature-list-ans">₹{basePrice}</span></span>
                                        <span className="plan-details-feature-list"><span className="feature-list-head">Installation Charges</span> <span className="feature-list-ans">+ ₹{activeInstallation === "Free" ? 0 : activeInstallation}</span></span>
                                        <span className="plan-details-feature-list"><span className="feature-list-head">GST</span> <span className="feature-list-ans">₹{gst}</span></span>
                                    </div>
                                    <div className="destop-subscribe-style">
                                        <span className="price" style={{ marginTop: "10px" }}>Total: <i className="fas fa-rupee-sign"></i>{fixedPlanTotal}</span>
                                        <div className="subscribe-wrap"><button className="subscribe" data-price={activePrice} data-active-tab={activeMbps} data-active-nested-tab={activeCycle}>Subscribe Now</button></div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='or-section'><span className='or-text'>_OR_</span></div> */}
                            <div className={`pricing-plan-package-wrap custom-plan ${isMobile ? (activeTag === 'Customize Plan' ? 'tab-active' : 'tab-nonactive') : `tab-active default-tab${activeTag === 'Customize Plan' ? ' colorful' : ' gray'}`}`}>
                                <h2 onClick={() => setActiveTag("Customize Plan")} style={{ "curson": "pointer" }}> Customize Your Plan</h2>
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
                                        <h3> <a href="tel:9944199445" className="text-blue-600 underline hover:text-blue-800">
                                            +91 99441 99445
                                        </a></h3>
                                        <h6>24/7 Customer Care Service Available</h6>
                                    </div>
                                </div>
                                <CustomPlansMobile />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
