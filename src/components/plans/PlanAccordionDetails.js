'use client';
import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DoneIcon from '@mui/icons-material/Done';
import CustomIptvSlider from './CustomIptvSlider';
import CloseIcon from '@mui/icons-material/Close';


export default function PlanAccordionDetails({ open, plan, planindex, isSelected, insideAccordionIndex, setInsideAccordionIndex, setDrawerOpen, viewCart, sectionRef }) {
  const isValidArray = (arr) => Array.isArray(arr) && arr.filter(item => item && item.trim() !== "").length > 0;
  const detailRefAdd = useRef(null);
  const clickedInsideRef = useRef(false);
  const handleClose = (e) => {
    const allAccordions = document.querySelectorAll('.accordion-specification-wrap');
    allAccordions.forEach((el) => {
      el.classList.remove('accordion-specification-active');
    });
    if (sectionRef.current) {
      setInsideAccordionIndex(false);
    }
  };
  const handleStayAccordion = (event) => {
    event.stopPropagation();
  };
  //   useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     const path = e.composedPath?.() || [];

  //     console.log("detailRefAdd.current:", detailRefAdd.current);
  //     console.log("path.includes(detailRefAdd.current):", path.includes(detailRefAdd.current));

  //     if (!path.includes(detailRefAdd.current)) {
  //     }
  //     else{
  //       alert("inside");
  //     }

  //     // ✅ No "else" block — no alert or logic for outside
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);



  const getFinalPrice = (plan, billingType) => {
    const gstRate = 0.18;
    let discountRate = 0;
    if (billingType === 'Annual') {
      discountRate = 0.15;
    } else if (billingType === 'Half-Yearly') {
      discountRate = 0.075;
    }
    const parseFee = (fee) => {
      if (fee === 'Free' || fee === undefined || fee === null || fee === '') return 0;
      const num = Number(fee);
      return isNaN(num) ? 0 : num;
    };
    const installationFee = parseFee(plan.installationFee);
    const base = plan.price + installationFee;
    const discounted = base * (1 - discountRate);

    const finalWithGst = discounted * (1 + gstRate);
    return Math.round(finalWithGst);
  };

  const getDiscountAmount = (plan, billingType) => {
    let discountRate = 0;

    if (billingType === 'Annual') {
      discountRate = 0.15;
    } else if (billingType === 'Half-Yearly') {
      discountRate = 0.075;
    }

    const parseFee = (fee) => {
      if (fee === 'Free' || fee === undefined || fee === null || fee === '') return 0;
      const num = Number(fee);
      return isNaN(num) ? 0 : num;
    };

    const installationFee = parseFee(plan.installationFee);
    const base = plan.price + installationFee;

    const discountAmount = base * discountRate;

    return Math.round(discountAmount); // return only discount ₹ amount
  };
  const getGstAmount = (plan, billingType) => {
    const gstRate = 0.18;
    let discountRate = 0;

    if (billingType === 'Annual') {
      discountRate = 0.15;
    } else if (billingType === 'Half-Yearly') {
      discountRate = 0.075;
    }

    const parseFee = (fee) => {
      if (fee === 'Free' || fee === undefined || fee === null || fee === '') return 0;
      const num = Number(fee);
      return isNaN(num) ? 0 : num;
    };

    const installationFee = parseFee(plan.installationFee);
    const base = plan.price + installationFee;

    const discounted = base * (1 - discountRate);
    const gstAmount = discounted * gstRate;

    return Math.round(gstAmount);
  };
  return (
    <AnimatePresence initial={false}>
      <motion.div
        ref={detailRefAdd}
        data-index={planindex}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'linear' }}
        className={`accordion-specification-wrap overflow-hidden ${open === true ? 'accordion-specification-active' : ''}`}
        onClick={handleStayAccordion}
      >
        <div className="mobile-only">
          <div className="close-icon" onClick={handleClose}><CloseIcon></CloseIcon></div>
          <h1 style={{ fontSize: "18px", margin: "0px", textAlign: "left" }} className="font-color">Selected Plan Details </h1>
          <div className="plan-details-features">
            <span className="plan-details-feature-list">
              <span className="feature-list-head">Speed</span> <span className="feature-list-ans">{plan.speed}</span>
            </span>
            <span className="plan-details-feature-list">
              <span className="feature-list-head">Billing Cycle</span> <span className="feature-list-ans">₹{plan.basePrice} * {
                plan.billingCycle === "Monthly"
                  ? "1"
                  : plan.billingCycle === "Quarterly"
                    ? "3"
                    : plan.billingCycle === "Half-Yearly"
                      ? "6"
                      : plan.billingCycle === "Annual"
                        ? "12"
                        : ""
              }</span>
            </span>
            <span className="plan-details-feature-list">
              <span className="feature-list-head">Installation Charges</span> <span className="feature-list-ans">{plan.installationFee}</span>
            </span>
            <ul style={{ marginTop: "15px" }}>
              {/* IPTV Addon */}
              <li>
                {isValidArray(plan.iptvaddon) ? (
                  <CustomIptvSlider iptvaddons={plan.iptvaddon} />
                ) : typeof plan.iptvaddon === "string" && plan.iptvaddon.trim() !== "" ? (

                  <div className="info-details">
                    <h2 className="mt-4 font-semibold">
                      {plan.channels} <strong style={{ color: isSelected(planindex) ? 'white' : 'red' }}></strong>
                    </h2>
                    {plan?.channels === "450+ Channels" && (
                      <>
                        <div className="image-wrap w-100 flex gap-2 my-2">
                          <img alt="polimer" src="https://www.skylink.net.in/wp-content/uploads/2025/06/519-POLIMER-TV.png" width="35" height="35" />
                          <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                          <img alt="vijay" src="https://skyplay.in/assets/vijay-tv.png" width="35" height="35" />
                        </div>
                      </>
                    )}

                    {(plan?.channels === "550+ Channels" || plan?.channels === "750+ Channels") && (
                      <>
                        <div className="image-wrap w-100 flex gap-2 my-2">
                          <img alt="sun-tv" src="https://skyplay.in/assets/sun-tv.png" width="35" height="35" />
                          <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                          <img alt="vijay" src="https://skyplay.in/assets/vijay-tv.png" width="35" height="35" />
                        </div>
                      </>
                    )}

                  </div>
                ) : null}
              </li>

              {/* OTTs */}
              <li>
                <div className="info-details">
                  <div className='flex items-center mt-2' style={{ columnGap: "10px" }}>
                    <span className="tick-icon"><DoneIcon fontSize="small" /></span>
                    {plan.otts}
                  </div>
                  <div className="image-wrap w-100 flex gap-2 my-2">
                    <img alt="sunnxt" src="https://skyplay.in/assets/sunnxt.png" width="35" height="35" />
                    <img alt="hotstar" src="https://www.skylink.net.in/wp-content/uploads/2025/02/jio-hotstrar.webp" width="35" height="35" />
                    <img alt="zee5" src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" width="35" height="35" />
                    <img alt="aha" src="https://skyplay.in/assets/aha-logo.png" width="35" height="35" />
                  </div>
                </div>
              </li>
            </ul>
            <span className="plan-details-feature-list">
              <span className="feature-list-head">Internet Charges</span> <span className="feature-list-ans">₹{plan.basePrice}</span>
            </span>
            <span className="plan-details-feature-list">
              <span className="feature-list-head">Discounts</span> <span className="feature-list-ans">{getDiscountAmount(plan, plan.billingCycle) > 0 ? (
                <span>- ₹{getDiscountAmount(plan, plan.billingCycle)}</span>) : "Free"}</span>
            </span>
            <span className="plan-details-feature-list">
              <span className="feature-list-head">GST</span> <span className="feature-list-ans">+ ₹{getGstAmount(plan, plan.billingCycle)}</span>
            </span>
            <span className="price font-color" style={{ "marginTop": "20px" }}>
              Total: <span><i className="fas fa-rupee-sign"></i>{getFinalPrice(plan, plan.billingCycle)}</span>
            </span>
          </div>
        </div>
        <ul style={{ marginTop: "15px" }} className='mobile-hide'>
          {/* IPTV Addon */}
          <li>
            {isValidArray(plan.iptvaddon) ? (
              <CustomIptvSlider iptvaddons={plan.iptvaddon} />
            ) : typeof plan.iptvaddon === "string" && plan.iptvaddon.trim() !== "" ? (

              <div className="info-details">
                <h2 className="mt-4 font-semibold">
                  <span>
                    <span className="channel-number">+ {plan.channels.split('+')[0]}</span>{' '}
                    <span className="channel-label">TV Channels</span>
                  </span> <strong style={{ color: isSelected(planindex) ? 'white' : 'red' }}></strong>
                </h2>
                {plan?.channels === "450+ Channels" && (
                  <>
                    <div className="image-wrap w-100 flex gap-2 my-2">
                      <img alt="news7" src="https://www.skylink.net.in/wp-content/uploads/2025/06/Logo_of_News7_Tamil_Logo.jpg" width="35" height="35" />
                      <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                      <img alt="vijay" src="https://skyplay.in/assets/vijay-tv.png" width="35" height="35" />
                    </div>
                  </>
                )}

                {(plan?.channels === "550+ Channels" || plan?.channels === "750+ Channels") && (
                  <>
                    <div className="image-wrap w-100 flex gap-2 my-2">
                      <img alt="sun-tv" src="https://skyplay.in/assets/sun-tv.png" width="35" height="35" />
                      <img alt="zee" src="https://skyplay.in/assets/zee-tamizh.png" width="35" height="35" />
                      <img alt="vijay" src="https://skyplay.in/assets/vijay-tv.png" width="35" height="35" />
                    </div>
                  </>
                )}

              </div>
            ) : null}
          </li>

          {/* OTTs */}
          <li>
            <div className="info-details">
              <div className='flex items-center mt-2' style={{ columnGap: "10px" }}>
                <span className="tick-icon"><DoneIcon fontSize="small" /></span>
                <span className='ott-text-icons'>
                  + <span>{plan.otts.split('+')[0]}</span> <span>OTTs</span>
                </span>
              </div>
              <div className="image-wrap w-100 flex gap-2 my-2">
                <img alt="sunnxt" src="https://skyplay.in/assets/sunnxt.png" width="35" height="35" />
                <img alt="zee5" src="https://www.skylink.net.in/wp-content/uploads/2023/08/ZEE5-Logo-700x394-1.png" width="35" height="35" />
                <img alt="aha" src="https://skyplay.in/assets/aha-logo.png" width="35" height="35" />
              </div>
            </div>
          </li>
        </ul>
        <div className="mobile-only">
          <button className="view-all-button open-popup" onClick={handleClose}>Buy Now</button></div>
      </motion.div>
    </AnimatePresence>
  );
}
