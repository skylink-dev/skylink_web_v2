import { useEffect, useState } from 'react';
import { usePlans } from '../../../src/app/(site)/plans/context/PlansContext';
import CurrentChannel from "./CurrentChannel";
import CurrentOTT from "./CurrentOTT";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContactPopup from '@/app/(site)/plans/component/ContactPopup';

export default function CustomPlans() {
    const {
        planOptions: { ottOptions, pricing },
        activeTab,
        activeNestedTab,
        price,
        activeChannel,
        setActiveChannel,
        activeOtts,
        setActiveTag
    } = usePlans();

    const billingCycleMultipliers = {
        Monthly: 1,
        Quarterly: 3,
        "Half Yearly": 6,
        Yearly: 12,
    };

    const billingAddonMultipliers = {
        Monthly: 1,
        Quarterly: 3,
        "Half Yearly": 6,
        Yearly: 12,
    };
    const billingCycleMultiplier = billingCycleMultipliers[activeNestedTab] || 1;
    const billingAddonCycleMultiplier = billingAddonMultipliers[activeNestedTab] || 1;
    const staticBasePrice = pricing?.[activeTab]?.["Monthly"]?.price || price;
    const basePrice = pricing?.[activeTab]?.[activeNestedTab]?.price || price;

    const getInstallationFee = (speed, billingCycle) => {
        if (speed === "30 Mbps") return 1500;
        if (speed === "50 Mbps" && ["Monthly", "Quarterly"].includes(billingCycle)) return 1000;
        if (
            ["100 Mbps", "200 Mbps", "300 Mbps", "500 Mbps", "1000 Mbps", "2000 Mbps"].includes(speed) &&
            billingCycle === "Monthly"
        ) return 1000;
        return 0;
    };
    const installationCost = getInstallationFee(activeTab, activeNestedTab);
    const channelPrices = {
        "550+ Channels": 149,
        "650+ Channels": 249,
        "950+ Channels": 399,
    };

    const ottPrices = {
        "21+ OTTs": 0,
        "22+ OTTs": 149,
        "29+ OTTs": 249,
        "30+ OTTs": 349,
    };
    const getOttPrice = (activeott) => {
        const basePrice = pricing[activeTab]?.[activeNestedTab]?.ott === activeott ? 0 : ottPrices[activeott];

        if (basePrice === 0) return 0;

        if (billingAddonCycleMultiplier === 6) {
            return basePrice * 0.925;
        } else if (billingAddonCycleMultiplier === 12) {
            return basePrice * 0.85;
        }

        return basePrice;
    };
    const getChannelPrice = (activeChannel) => {
        const basePrice = pricing[activeTab]?.[activeNestedTab]?.tv === activeChannel ? 0 : channelPrices[activeChannel];
        if (basePrice === 0) return 0;

        let finalPrice = basePrice;

        if (billingAddonCycleMultiplier === 6) {
            finalPrice = basePrice * 0.925;
        } else if (billingAddonCycleMultiplier === 12) {
            finalPrice = basePrice * 0.85;
        }

        return finalPrice;
    };
    const getOriginalPrice = () => {
        if (basePrice === 0) return 0;
        let finalPrice = basePrice;
        return finalPrice;
    };
    const getDiscountAmount = () => {
        if (basePrice === 0) return 0;
        const originalTotal = Number(basePrice) + Number(installationCost);
        const gst = originalTotal * 0.18;
        const totalWithGst = originalTotal + gst;
        if (billingAddonCycleMultiplier === 6) {
            const discounted = totalWithGst * 0.925;
            return Math.round(totalWithGst - discounted);
        } else if (billingAddonCycleMultiplier === 12) {
            const discounted = totalWithGst * 0.85;
            return Math.round(totalWithGst - discounted);
        }
        return 0;
    };
    const isDisabled = (option) => {
        const activePricing = pricing[activeTab]?.[activeNestedTab]?.ott;
        const activeIndex = ottOptions.indexOf(activePricing);
        const optionIndex = ottOptions.indexOf(option);
        return optionIndex !== -1 && optionIndex < activeIndex;
    };
    const isDisabledChannel = (option) => {
        const activePricing = pricing[activeTab]?.[activeNestedTab]?.tv;
        return (
            (activePricing === "550+ Channels" && option === "350+ Channels") ||
            (activePricing === "650+ Channels" && ["550+ Channels", "350+ Channels"].includes(option)) ||
            (activePricing === "950+ Channels" && option !== "950+ Channels")
        );
    };
    const getLabel = (option) => {
        const activePricing = pricing[activeTab]?.[activeNestedTab]?.ott;
        if (isDisabled(option)) return "";
        if (ottPrices[option] === 0) {
            return "0";
        }
        return activePricing === option ? "0" : ` ${ottPrices[option]}`;
    };
    const getLabelChannel = (option) => {
        const activePricing = pricing[activeTab]?.[activeNestedTab]?.tv;
        if (isDisabledChannel(option)) return "";
        return activePricing === option ? "0" : `${channelPrices[option]}`;
    };
    const channelPrice = (getChannelPrice(activeChannel) || 0) * billingAddonCycleMultiplier;

    const ottPrice = (getOttPrice(activeOtts) || 0) * billingAddonCycleMultiplier;

    const totalPrice = Number(basePrice) + installationCost + channelPrice + ottPrice;
    const gstAmount = Math.round(totalPrice * 0.18);
    const getFinalPriceWithGst = () => {
        
    const gstAmount = totalPrice * 0.18;
    const priceWithGst = totalPrice + gstAmount;

    if (billingAddonCycleMultiplier === 6) {
        return Math.round(priceWithGst * 0.925); // 7.5% discount
    } else if (billingAddonCycleMultiplier === 12) {
        return Math.round(priceWithGst * 0.85); // 15% discount
    }

    return Math.round(priceWithGst); // no discount
};
    const planMessages = {
        Monthly:
            activeTab === "30 Mbps"
                ? "Installation charges Rs 1500 applicable"
                : activeTab === "50 Mbps"
                    ? "Installation charges Rs 1000 applicable"
                    : ["100 Mbps", "200 Mbps", "300 Mbps", "500 Mbps", "1000 Mbps"].includes(activeTab)
                        ? "Installation charges Rs 1000 applicable"
                        : "",

        Quarterly:
            activeTab === "30 Mbps"
                ? "Installation charges Rs 1500 applicable"
                : activeTab === "50 Mbps"
                    ? "Installation charges Rs 1000 applicable"
                    : "",

        "Half Yearly": "Our half-yearly plan offers a 7.5% discount.",
        Yearly: "Our yearly plan offers a 15% discount.",
    };

    const planMessage = planMessages[activeNestedTab] || "";
    const [isOpen, isOpenChange] = useState(false);
    const [isMobile,setIsMobile] = useState(0);
    const [activeMbps,setActiveMbps]=useState("");
    const [activePrice,setActivePrice]=useState("");
    const [activeCycle,setActiveCycle]=useState("");
    const [isContactOpen,setIsContactOpen]=useState(false);
    
    useEffect(() => {
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Set initially
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
}, []);
    const openPlanDetails = () => {
        if (!isMobile) {
            isOpenChange(prev => !prev);
        }
        else {
            isOpenChange(false);
        }
    }
    return (
        <>
         <ContactPopup isMobile={isMobile} activeMbps={activeTab} activePrice={totalPrice} activeCycle={
            
            billingCycleMultiplier==1?"Monthly":(billingCycleMultipliers==3?"Quaterly":(billingCycleMultiplier==6?"Half Yearly":"Yearly"))
            } isOpen={isContactOpen} setIsOpen={setIsContactOpen}/>
         
        <div className="custom-plan-inner-wrap">
            <div className="firstset">
                <h1 style={{ fontSize: "24px", cursor: "pointer" }} className="title-class" onClick={() => {
                    isOpenChange(prev => !prev);
                    setActiveTag("Customize Plan");
                }}><span className="plan-title">Selected Plan Details</span> {isOpen === true ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</h1>
                <div style={{ "display": "flex" }}>
                    <div className={`plan-details-features transition-all duration-500 ease-in-out ${isOpen ? 'show' : 'hide'}`}>
                        <span className="plan-details-feature-list">
                            <span className="feature-list-head">Speed</span> <span className="feature-list-ans">{activeTab}</span>
                        </span>
                        <span className="plan-details-feature-list">
                            <span className="feature-list-head">Billing Cycle</span> <span className="feature-list-ans">₹{staticBasePrice} * {billingCycleMultiplier}</span>
                        </span>
                        <span className="plan-details-feature-list">
                            <span className="feature-list-head">Installation</span> <span className="feature-list-ans">₹{installationCost}</span>
                        </span>
                        <div className="addon-price-wrap">
                            <h3>
                                <div className="tv-channel-title">{activeChannel || pricing?.[activeTab]?.[activeNestedTab]?.tv} <span className="hd-mention-text">{activeChannel === "650+ Channels" ? "(94+ HD)" : activeChannel === "950+ Channels" ? "(ALL HD)" : ""}
                                </span></div>
                                <span className="feature-list-ans">
                                    <span className="addon-price">
                                        {(() => {
                                            const label = Number(getLabelChannel(activeChannel));
                                            return label === 0 ? (
                                                "Free"
                                            ) : (
                                                <>
                                                    <i className="fas fa-rupee-sign" style={{ fontSize: "10px" }}></i> {label} × {billingAddonCycleMultiplier}
                                                </>
                                            );
                                        })()}
                                    </span>
                                </span>
                            </h3>
                            <div className="tv-channels" style={{ "display": "none" }}><CurrentChannel activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
                                <a href={`https://skylink.net.in/wp-content/uploads/pdf/${activeChannel === "350+ Channels" ? "skylink-mini.pdf" : activeChannel === "550+ Channels" ? "skylink-pro.pdf" : activeChannel === "650+ Channels" ? "skylink-pro.pdf" : "skylink-pro.pdf"}`} target="_blank" rel="noreferrer"> Download Brochure </a>
                            </div>
                        </div>
                        <div className="addon-price-wrap">
                            <h3>
                                {activeOtts || pricing?.[activeTab]?.[activeNestedTab]?.ott}
                                <span className="feature-list-ans">
                                    <span className="addon-price">
                                        {(() => {
                                            const price = Number(getLabel(activeOtts));
                                            return price === 0 ? (
                                                "Free"
                                            ) : (
                                                <>
                                                    <i style={{ fontSize: "10px" }} className="fas fa-rupee-sign"></i> {price} × {billingAddonCycleMultiplier}
                                                </>
                                            );
                                        })()}
                                    </span>
                                </span>
                            </h3>
                            <div style={{ "display": "none" }}>
                                <CurrentOTT activeOtts={String(pricing[activeTab]?.[activeNestedTab]?.ott)?.trim()} activeTab={activeTab} activeNestedTab={activeNestedTab} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-features">
                <div className={`plan-details-features transition-all duration-500 ease-in-out ${isOpen ? 'show' : 'hide'}`}>
                    <span className="plan-details-feature-list">
                        <span className="feature-list-head">Internet Charges</span> <span className="feature-list-ans">₹{getOriginalPrice()}</span>
                    </span>
                    <span className="plan-details-feature-list">
                        <span className="feature-list-head">Discounts</span> <span className="feature-list-ans">- ₹{getDiscountAmount()}</span>
                    </span>
                    <span className="plan-details-feature-list">
                        <span className="feature-list-head">Installation Charges</span> <span className="feature-list-ans">+ ₹{installationCost}</span>
                    </span>
                    <span className="plan-details-feature-list">
                        <span className="feature-list-head">GST</span> <span className="feature-list-ans">+ ₹{gstAmount}</span>
                    </span>
                </div>
            </div>
            <div className="destop-subscribe-style">
                <span className="price" style={{ "marginTop": "10px" }}>
                    Total: <i className="fas fa-rupee-sign"></i> {getFinalPriceWithGst()}.00
                    {planMessage && (
                        <span
                            style={{
                                fontSize: "11px",
                                color: "black",
                                display: "block",
                                marginTop: "5px",
                            }}
                        >
                            {planMessage} * Include GST 18%
                        </span>
                    )}
                </span>
                <div className="subscribe-wrap">
                    <button className="subscribe" data-price={getFinalPriceWithGst()}
                        data-active-tab={activeTab}
                        data-active-nested-tab={activeNestedTab}
                        data-active-channel={activeChannel}
                        data-active-otts={activeOtts}
                        onClick={
                            ()=>{
                                setIsContactOpen(!isContactOpen)
                            }
                        }
                        >Subscribe Now</button>
                    <img style={{ "width": "100%", "display": "block", "height": "360px", "objectFit": "cover", "objectPosition": "top" }}
                        src="https://skylink.net.in/wp-content/uploads/2025/03/plan-webupdates.jpg"
                        alt="Plan Update"
                    />
                </div>
            </div>
        </div>
        </>
    );
}
