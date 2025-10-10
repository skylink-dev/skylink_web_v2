import React, { useEffect, useMemo, useState } from "react";
import { usePlans } from '../../../src/app/(site)/plans/context/PlansContext';
import CurrentChannel from "./CurrentChannel";
import CurrentOTT from "./CurrentOTT";

export default function PlanHighlights() {
    const {
        planOptions: { pricing },
        activeTab,
        activeNestedTab,
        activeChannel,
        setActiveChannel,
        activeOtts,
        price
    } = usePlans();
    const calculateAddonPrice = (type, quantity) => {
        const pricingMap = {
            "550+ Channels": 149,
            "650+ Channels": 249,
            "950+ Channels": 399,
            "21+ OTTs": 0,
            "22+ OTTs": 149, 
            "29+ OTTs":249, 
            "30+ OTTs":349
        };
        return pricingMap[type] ? pricingMap[type] * quantity : 0;
    };
    const [colSpan, setColSpan] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setColSpan(window.innerWidth <= 1024 ? 2 : 1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const calculatePlanPrice = useMemo(() => {
        const basePrice = pricing[activeTab]?.[activeNestedTab]?.price || price;
        const installationCharge =
            (activeTab === "30 Mbps" && ["Monthly", "Quarterly", "Half Yearly", "Yearly"].includes(activeNestedTab))
                ? 1500
                : (activeTab === "50 Mbps" && ["Monthly", "Quarterly"].includes(activeNestedTab))
                    ? 1000
                    : (["100 Mbps", "200 Mbps", "300 Mbps", "500 Mbps", "1000 Mbps"].includes(activeTab) && activeNestedTab === "Monthly")
                        ? 1000
                        : 0;
        const channelPrice = calculateAddonPrice(activeChannel, activeNestedTab === "Monthly" ? 1 : activeNestedTab === "Quarterly" ? 3 : activeNestedTab === "Half Yearly" ? 6 : activeNestedTab === "Yearly" ? 12 : 0);
        const ottPrice = calculateAddonPrice(activeOtts,
            activeNestedTab === "Monthly" ? 1 :
                activeNestedTab === "Quarterly" ? 3 :
                    activeNestedTab === "Half Yearly" ? 6 :
                        activeNestedTab === "Yearly" ? 12 : 0
        );
        let subtotal = Number(basePrice) + installationCharge + channelPrice + ottPrice;
        let gst = subtotal * 0.18;
        let total = Math.round(subtotal + gst);
        if (activeNestedTab === "Half Yearly") {
                total = total - (total * 0.075);
        } else if (activeNestedTab === "Yearly") {
            total = total - (total * 0.15); // 15% off → subtract 15% of total
        }
        return Math.round(total);
    }, [activeTab, activeNestedTab, activeChannel, activeOtts, price, pricing]);
    const getPlanMessage = () => {
        if ((["30 Mbps"].includes(activeTab) && ["Monthly", "Quarterly"].includes(activeNestedTab)) ||
            activeNestedTab === "Monthly") {
            return "Installation charges Rs 1500 applicable";
        }
        if ((["50 Mbps"].includes(activeTab) && ["Monthly", "Quarterly"].includes(activeNestedTab)) ||
            activeNestedTab === "Monthly") {
            return "Installation charges Rs 1000 applicable";
        }
        if (activeNestedTab === "Half Yearly") {
            return "Our half-yearly plan offers a 7.50% discount.";
        }
        if (activeNestedTab === "Yearly") {
            return "Our yearly plan offers a 15% discount.";
        }
        return "";
    };
    return (
        <>
            <tr className="benefitswrap" style={{ "display": "none" }}>
                <td colSpan="2">
                    <div className="benifts-tabs">
                        <h3>Plan Highlights</h3>
                    </div>
                </td>
            </tr>
            <tr className="features-row">
                <td colSpan={2}>
                    <div className="featuresContainer">
                        <h3>Plan Highlights</h3>
                        <div className="features">
                            <div className="featuresWrap">
                            <div className="table-channel">
                                        <div className="tv-channels"> 
                                            <img alt="speed-icon" src="https://www.skylink.net.in/wp-content/uploads/2025/04/speed-icon.svg" />
                                        </div>
                            </div>
                            <div className="content-wrap">
                            <div className="featuresDescription">{activeTab}</div>
                            <div className="featuresTitle">Speed</div></div></div>
                            {pricing[activeTab]?.[activeNestedTab]?.benefits.map((benefit, index) => (
                                <div className="featuresWrap" key={`${activeTab}-benefit-${index}`}>
                                    <div className="table-channel">
                                        {benefit.name === "TV Channels" && (
                                            <div className="tv-channels tv-wrap"><CurrentChannel benefit={benefit} activeChannel={activeChannel} setActiveChannel={setActiveChannel} /></div>
                                        )}
                                        {/* {benefit.name.startsWith("Billing Cycle") && (
                                        <div className="tv-channels"> <img alt="billing-cycle" src="https://www.skylink.net.in/wp-content/uploads/2025/04/billing-cycle.svg" /></div>)
                                        } */}
                                        {benefit.name.startsWith("24/7 Elite Support") && (
                                        <div className="tv-channels"> <img alt="elite-support" src="https://www.skylink.net.in/wp-content/uploads/2025/04/elite-support.svg" /></div>)
                                        }
                                        {/* {benefit.name.startsWith("Installation") && (
                                        <div className="tv-channels"> <img alt="installation" src="https://www.skylink.net.in/wp-content/uploads/2025/04/installation.svg" /></div>)
                                        } */}
                                        {benefit.name.startsWith("OTT") && ["21+ OTTs", "22+ OTTs", "29+ OTTs", "30+ OTTs"].includes(String(pricing[activeTab]?.[activeNestedTab]?.ott)?.trim()) && (
                                            <div className="tv-wrap">
                                            <CurrentOTT activeOtts={String(pricing[activeTab]?.[activeNestedTab]?.ott)?.trim()} activeTab={activeTab} activeNestedTab={activeNestedTab} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="content-wrap">
                                    <div className="featuresDescription"><div className="" key={`${activeTab}-benefit-${index}`}>{benefit.lite}</div></div>
                                    <div className="featuresTitle">{benefit.name}</div>
                                    </div>
                                </div>
                            ))}

                            {/* {[
                                { title: "Channels Addon Pack", price: calculateAddonPrice(activeChannel, 1) },
                                { title: "OTT's Addon Pack", price: calculateAddonPrice(activeOtts, 1) }
                            ].map((item, index) => (
                                <div className="featuresWrap" key={index}>
                                    <div className="table-channel">
                                    {item.title.startsWith("Channels Addon Pack") && (
                                        <div className="tv-channels"> <img alt="television" src="https://www.skylink.net.in/wp-content/uploads/2025/04/telivision.svg" /></div>)
                                        }
                                         {item.title.startsWith("OTT's Addon Pack") && (
                                        <div className="tv-channels"> <img alt="film-roll" src="https://www.skylink.net.in/wp-content/uploads/2025/04/film-roll.svg" /></div>)
                                        }
                                        </div>
                                        <div className="featuresDescription"><i className="fas fa-rupee-sign" style={{ fontSize: "10px" }}></i> {item.price}</div>
                                    <div className="featuresTitle">{item.title}</div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </td>
            </tr>
            <tr style={{ "display": "none" }}>
                <td className="padding-0 highlights-page-image">
                    <img width="100%" style={{ "width": "100%" }} src="https://skylink.net.in/wp-content/uploads/2025/03/dummy-banner.png" alt="Plan Banner" />
                </td>
                <td className="pricing-features-wrap" colSpan={colSpan}>
                    <div className="pricing-features">
                        <span className="price">
                            Price: <i className="fas fa-rupee-sign"></i> {calculatePlanPrice} <span className="gst-text">* Exclude GST 18%</span>
                            <span
                                style={{
                                    fontSize: "14px",
                                    color: "black",
                                    display: "block",
                                    marginTop: "10px"
                                }}
                            >
                                {getPlanMessage()}
                            </span>
                        </span>
                    </div>
                    <button className="subscribe new" data-price={calculatePlanPrice} data-active-tab={activeTab} data-active-nested-tab={activeNestedTab} data-active-channel={activeChannel} data-active-otts={activeOtts}>Subscribe Now</button>
                </td>
            </tr>
        </>
    );
}
