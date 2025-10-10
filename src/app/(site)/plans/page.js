'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AnimatePresence, motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import CustomIptvSlider from '@/components/customSlider';
import CustomSliderOtt from '@/components/CustomSliderOtt';


const ReactSelectWithSearch = dynamic(
    () => import('@/components/SelectField'),
    { ssr: false }
);
const Drawyer = dynamic(() => import('@/components/Drawyer'));

export default function Page() {
    const plans = useSelector(state => state.plans);
    const tags = [
        "Broadband",
        "Broadband + IPTV",
        "Broadband + OTT",
        "Broadband + IPTV + OTT"
    ];

    const [activeState, setActiveState] = useState("Tamil Nadu");
    const [activeTag, setActiveTag] = useState("Broadband");
    const [selectedPlanIndices, setSelectedPlanIndices] = useState([]);
    const [activeBillingCycle, setActiveBillingCycle] = useState("Monthly");
    const plansDetails = plans?.planOptions?.actualPrizeByZone[activeState]?.[activeTag];
    const [openChannelAccordionIndex, setOpenChannelAccordionIndex] = useState(false);
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Run once on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const innerSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    useEffect(() => {
        if (plansDetails && Object.keys(plansDetails).length > 0) {
            const keys = Object.keys(plansDetails);
            const hotIndex = keys.findIndex(
                key => plansDetails[key]?.[activeBillingCycle]?.hot === "yes"
            );
            if (hotIndex !== -1) {
                setSelectedPlanIndices([hotIndex]);
            } else {
                setSelectedPlanIndices([]);
            }
        } else {
            setSelectedPlanIndices([]);
        }
        setOpenChannelAccordionIndex(false);
    }, [plansDetails, activeTag, activeBillingCycle]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
        }
    }, [plansDetails, activeTag]);

    const togglePlanSelection = (index) => {
        setSelectedPlanIndices(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index);
            } else {
                if (prev.length >= 3) {
                    alert("You can select up to 3 plans only");
                    return prev;
                }
                return [...prev, index];
            }
        });
    };

    const isSelected = (index) => selectedPlanIndices.includes(index);

    const generatePdf = async () => {
        if (selectedPlanIndices.length < 2) {
            alert("Please select at least two plans to generate PDF.");
            return;
        }
        if (selectedPlanIndices.length > 3) {
            alert("You can only compare up to 3 plans.");
            return;
        }
      const selectedPlans = selectedPlanIndices.map(idx => {
    const keys = Object.keys(plansDetails);
    const key = keys[idx];
    return plansDetails[key]?.[activeBillingCycle] || null;
});
        
        try {
            const res = await fetch("https://skyplay.in/api/generate-pdf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: `Plan Comparison - ${activeTag}`,
                    plans: selectedPlans,
                }),
            });

            if (!res.ok) throw new Error("Failed to generate PDF");

            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `plan-comparison-${activeTag}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("PDF Error:", error.message);
            alert("Failed to download PDF. Please try again.");
        }
    };

    const outerSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const selectedPlan =
        selectedPlanIndices.length === 1 &&
        plansDetails &&
        (() => {
            const keys = Object.keys(plansDetails);
            const key = keys[selectedPlanIndices[0]];
            return plansDetails[key]?.[activeBillingCycle] || null;
        })();
    const viewCart = () => {
        if (selectedPlanIndices.length !== 1) {
            alert("Please select exactly one plan to view the summary.");
            return;
        }
        setDrawerOpen(true);
    };
    const next = () => sliderRef.current && sliderRef.current.slickNext();
    const prev = () => sliderRef.current && sliderRef.current.slickPrev();
    const stateOptions = Object.keys(plans.planOptions.actualPrizeByZone).map((state) => ({
        value: state,
        label: state,
    }));
    return (
        <>
            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                <div className="contact aem-GridColumn aem-GridColumn--default--12 tab-section-header" style={{ margin: "10px 0px 30px 0px" }}>
                    <div className="contact-phone">
                        <h2>
                            Where <Image width={80} height={40} src="/assets/fire-tv-logo.png" alt="tv-logo" style={{ marginTop: "10px" }} /> Meets Skyplay <br /> Zero Touch Installation
                        </h2>
                    </div>
                </div>
            </div>

            <section className="pricing-plan-innovative-section" style={{ margin: "20px 0px" }}>
                <div className="container">
                    <div className="container-wrap">
                        <div style={{ marginBottom: "20px" }} className='flex items-center justify-between'>
                            <ReactSelectWithSearch
                                options={stateOptions}
                                activeState={activeState}
                                setActiveState={setActiveState}
                            />
                        </div>

                        <div className="flex pricing-plan-innovative-tags-wrap">
                            {tags.map((tag, idx) => (
                                <div
                                    key={idx}
                                    className={`pricing-plan-innovative-tag ${activeTag === tag ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedPlanIndices([]);
                                        setActiveTag(tag);
                                        setOpenChannelAccordionIndex(false);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="flex pricing-plan-innovative-tags-wrap">
                            {["Monthly", "Quarterly", "HalfYearly", "Annual"].map((cycle) => (
                                <div
                                    key={cycle}
                                    className={`pricing-plan-innovative-tag ${activeBillingCycle === cycle ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveBillingCycle(cycle)
                                        setSelectedPlanIndices([]);
                                        setOpenChannelAccordionIndex(false);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {cycle}
                                </div>
                            ))}
                        </div>
                        <div className="pricing-plan-package-wrap">
                            {plansDetails && Object.values(plansDetails).length > 0 ? (
                                (() => {
                                    const Wrapper = isMobile ? 'div' : Slider;
                                    const wrapperProps = isMobile
                                        ? { className: 'grid gap-4' }
                                        : { ...outerSliderSettings, ref: sliderRef };
                                    return (
                                        <Wrapper {...wrapperProps}>
                                            {Object.values(plansDetails).map((planSet, index) => {
                                                const plan = planSet?.[activeBillingCycle];
                                                if (!plan) return null; return (
                                                    <div key={index} className={`pricing-plan-package-item ${(isMobile && plan.hot) || (!isMobile && isSelected(index)) ? 'active' : ''}`}>
                                                        <div className="gradient-color"></div>
                                                        {plan.hot === "yes" && <div className="ad-card">Hot</div>}
                                                        <div className="plan-container-wrap"><h3 className='plan-name'>{plan.planname}</h3>
                                                            <div className="speed-wrap flex">
                                                                <div className="speed-icon">
                                                                    <Image width={25} height={25} alt="tv-logo-speed-brand" src="/assets/speed-brand.svg" />
                                                                </div>
                                                                <div className="speed-texts">{plan.speed}</div>
                                                            </div>
                                                            <button className="details-link" onClick={() =>
                                                                setOpenChannelAccordionIndex(prev => !prev)
                                                            }>
                                                                More Detail {openChannelAccordionIndex === true ? <RemoveIcon /> : <AddIcon />}
                                                            </button>
                                                            <AnimatePresence initial={false}>
                                                                {openChannelAccordionIndex === true && (
                                                                    <motion.div
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: 'auto', opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        transition={{ duration: 0.4, ease: 'linear' }}
                                                                        className="accordion-specification-wrap overflow-hidden"
                                                                    >
                                                                        {console.log(plan.channels + "" + activeState)}
                                                                        <ul>
                                                                            <li>
                                                                                {plan.channels === "450+ Channels" && (activeState === "Tamil Nadu" || activeState === "Pondicherry") ? (
                                                                                    <div className="info-details">
                                                                                        <div className='flex items-center' style={{ columnGap: "10px" }}>
                                                                                            <span className="tick-icon"><DoneIcon fontSize="small" /></span>
                                                                                            {plan.channels} - Free
                                                                                        </div>
                                                                                        <div className="image-wrap w-100">
                                                                                            <Image alt="tune6" width={40} height={40} src="/assets/tune6.png" />
                                                                                            <Image alt="ddtamil" width={40} height={40} src="/assets/dd-tamil.jpg" />
                                                                                            <Image alt="mktunes" width={40} height={40} src="/assets/mktunes.webp" />
                                                                                            <Image alt="polimer" width={40} height={40} src="/assets/polimer.jpeg" />
                                                                                        </div>
                                                                                        <Link href="/assets/pdf/iptv-skyplay-basic-channel-lists.pdf" download>Download</Link>
                                                                                    </div>
                                                                                ) : null}
                                                                                {plan.channels === "450+ Channels" && ["Delhi", "Punjab", "Haryana", "Chandigarh", "Himachal Pradesh", "Jammu & Kashmir"].includes(activeState) ? (
                                                                                    <div className="info-details">
                                                                                        <div className='flex items-center' style={{ columnGap: "10px" }}>
                                                                                            <span className="tick-icon"><DoneIcon fontSize="small" /></span>
                                                                                            {plan.channels} - Free
                                                                                        </div>
                                                                                        <div className="image-wrap w-100">
                                                                                            <Image alt="tune6" width={40} height={40} src="/assets/shemaroome.png" />
                                                                                            <Image alt="ddtamil" width={40} height={40} src="/assets/cnbc-tv.png" />
                                                                                            <Image alt="mktunes" width={40} height={40} src="/assets/news-18-hindhi.png" />
                                                                                            <Image alt="polimer" width={40} height={40} src="/assets/india-tv.png" />
                                                                                        </div>
                                                                                        <Link href="/assets/pdf/iptv-skyplay-basic-channel-lists.pdf" download>Download</Link>
                                                                                    </div>
                                                                                ) : null}
                                                                                {Array.isArray(plan.iptvaddon) && plan.iptvaddon.filter(item => item && item.trim() !== "").length > 0 ? (
                                                                                    <CustomIptvSlider iptvaddons={plan.iptvaddon} />
                                                                                ) : typeof plan.iptvaddon === "string" && plan.iptvaddon.trim() !== "" ? (
                                                                                    <div className="info-details">
                                                                                        <h2 className="mt-4 font-semibold">{plan.iptvaddon} - <strong
                                                                                            style={{ color: isSelected(index) ? 'white' : 'red' }}>₹235</strong> Free</h2>
                                                                                        <div className="image-wrap w-100 flex gap-2">
                                                                                            <Image alt="sun-tv" width={40} height={40} src="/assets/sun-tv.png" />
                                                                                            <Image alt="zee" width={40} height={40} src="/assets/zee-tamizh.png" />
                                                                                            <Image alt="vijay" width={40} height={40} src="/assets/vijay-tv.png" />
                                                                                            <Image alt="sports" width={40} height={40} src="/assets/star-sports.png" />
                                                                                            <div className="channel-count">+ 1k</div>
                                                                                        </div>
                                                                                        <Link href="/assets/pdf/iptv-skyplay-premium-channel-lists.pdf" download>Download</Link>
                                                                                    </div>
                                                                                ) : null}
                                                                            </li>
                                                                            <li>
                                                                                <div className="info-details">
                                                                                    <div className='flex items-center' style={{ columnGap: "10px", marginTop: "10px" }}>
                                                                                        <span className="tick-icon"><DoneIcon fontSize="small" /></span>
                                                                                        {plan.otts} - Free
                                                                                    </div>
                                                                                    <div className="image-wrap w-100">
                                                                                        <Image alt="fancode" width={40} height={40} src="/assets/fancode.png" />
                                                                                        <Image alt="om-tv" width={40} height={40} src="/assets/om-tv.png" />
                                                                                        <Image alt="hungama" width={40} height={40} src="/assets/hungama.png" />
                                                                                        <Image alt="rajdigital" width={40} height={40} src="/assets/rajdigital-tv.png" />
                                                                                    </div>
                                                                                    <Link href="/assets/pdf/iptv-skyplay-premium-channel-lists.pdf" download>Download</Link>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                {Array.isArray(plan.ottaddon) && plan.ottaddon.filter(item => item && item.trim() !== "").length > 0 ? (
                                                                                    <CustomSliderOtt ottaddons={plan.ottaddon} />
                                                                                ) : typeof plan.ottaddon === "string" && plan.ottaddon.trim() !== "" ? (
                                                                                    <div className="info-details" style={{ "marginTop": "10px" }}>
                                                                                        <h2 className="mt-4 font-semibold" style={{ "lineHeight": "16px" }}>{plan.ottaddon} - <strong
                                                                                            style={{ color: isSelected(index) ? 'white' : 'red' }}>₹199</strong> Free</h2>
                                                                                        <div className="image-wrap w-100 flex gap-2">
                                                                                            <Image src="/assets/rajdigital-tv.png" alt="Raj Digital Tv" width={60} height={60} />
                                                                                            <Image src="/assets/aha-logo.png" alt="Aha" width={60} height={60} />
                                                                                            <Image src="/assets/sony-liv.jpg" alt="Sony liv" width={60} height={60} />
                                                                                            <Image src="/assets/hungama.png" alt="Hungama" width={60} height={60} />
                                                                                            <div className="channel-count">29+</div>
                                                                                        </div>
                                                                                        <Link href="/assets/pdf/iptv-skyplay-premium-channel-lists.pdf" download>Download</Link>
                                                                                    </div>
                                                                                ) : null}</li>
                                                                            <li>
                                                                            </li>
                                                                        </ul>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                        <hr style={{ marginTop: "20px", color: "#dddddd" }} />
                                                        <div className="action-wrap-container">
                                                            <div className="pricing-plan-package-details">
                                                                ₹{plan.price} / Month
                                                            </div>
                                                            <button className="subscribe-button" onClick={() => togglePlanSelection(index)}>
                                                                {isSelected(index)
                                                                    ? <span className='flex items-center justify-center'><DoneIcon style={{ marginRight: "10px" }} />Selected</span>
                                                                    : "Select"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Wrapper>
                                    );
                                })()
                            ) : (
                                <div className="no-plans-msg">No plans available for {activeTag}</div>
                            )}
                        </div>
                        <div className="mobile-button-wrap">
                            <button className="view-all-button" onClick={viewCart}>Access Your Plan Summary</button>
                            <button className="generate-pdf-button" onClick={generatePdf} style={{ marginTop: "20px" }}>View Comparison Summary</button>
                        </div>
                    </div>
                </div>
                <Drawyer isOpen={isDrawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    planData={selectedPlan} isDrawerOpen={setDrawerOpen}></Drawyer>
            </section>
        </>
    );
}
