"use client";
import { createContext, useContext, useState } from "react";

function createPlan(
  price,
  data,
  tv,
  ott,
  billingCycle,
  installation,
  routerprice,
  speed,
  plancycle,
  iptvplan,
  iptvprice
) {
  return {
    price: price.toString(),
    data,
    tv,
    ott,
    iptvprice,
    iptvplan,
    routerprice,
    installation,
    benefits: [
      { name: "Installation", lite: installation },
      { name: "Data", lite: data },
      { name: "Speed", lite: speed },
      { name: "TV Channels Free", lite: tv },
      { name: "OTT Free", lite: ott },
      { name: "Billing Cycle", lite: billingCycle },
      { name: "24/7 Elite Support", lite: "Yes" },
    ],
  };
}

function generatePricing(
  basePrice,
  data,
  tv,
  ott,
  billingCycle,
  installation,
  routerprice,
  speed,
  plancycle,
  iptvplan,
  iptvprice,
  iptvgstprice
) {
  const isLowSpeed = ["10 Mbps", "30 Mbps", "50 Mbps"].includes(speed);
  return {
    Starter: createPlan(
      basePrice,
      data,
      tv,
      ott,
      billingCycle,
      installation,
      routerprice,
      speed,
      plancycle,
      iptvplan,
      iptvprice,
      iptvgstprice
    ),
    Lite: createPlan(
      basePrice,
      data,
      tv,
      ott,
      billingCycle,
      installation,
      routerprice,
      speed,
      plancycle,
      iptvplan,
      iptvprice,
      iptvgstprice
    ),
    Max: createPlan(
      basePrice,
      data,
      tv,
      ott,
      billingCycle,
      installation,
      routerprice,
      speed,
      plancycle,
      iptvplan,
      iptvprice,
      iptvgstprice
    ),
    "Max+": createPlan(
      basePrice,
      data,
      tv,
      ott,
      billingCycle,
      installation,
      routerprice,
      speed,
      plancycle,
      iptvplan,
      iptvprice,
      iptvgstprice
    ),
  };
}

const initialPlanOptions = {
  benefitOptions: [
    { name: "Installation", lite: "1499" },
    { name: "Billing Cycle", lite: "1" },
    { name: "24/7 Elite Support", lite: "Yes" },
    { name: "TV Channels", lite: "350+" },
    { name: "OTT", lite: "Yes" },
  ],
  zones: [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  actualPrizeByZone: {
    "Tamil Nadu": {
      Starter: [
        "199",
        "399",
        "499",
        "599",
        "699",
        "899",
        "999",
        "1299",
        "1499",
        "1999",
      ],
      Lite: [
        "199",
        "399",
        "499",
        "599",
        "699",
        "899",
        "999",
        "1299",
        "1499",
        "1999",
      ],
      Max: [
        "199",
        "399",
        "499",
        "599",
        "699",
        "899",
        "999",
        "1299",
        "1499",
        "1999",
      ],
      "Max+": ["499", "699", "899"],
    },
    Puducherry: {
      Starter: [
        "199",
        "399",
        "499",
        "599",
        "699",
        "899",
        "999",
        "1299",
        "1499",
        "1999",
      ],
      Lite: [
        "199",
        "399",
        "499",
        "599",
        "699",
        "899",
        "999",
        "1299",
        "1499",
        "1999",
      ],
      Max: [
        "199",
        "399",
        "499",
        "599",
        "699",
        "899",
        "999",
        "1299",
        "1499",
        "1999",
      ],
      "Max+": ["299", "399", "499"],
    },
    Delhi: [
      "199",
      "399",
      "499",
      "599",
      "699",
      "899",
      "999",
      "1299",
      "1499",
      "1999",
    ],
  },
  billedCycle: ["Monthly", "Quarterly", "Half Yearly", "Yearly"],
  pricingByZone: {
    "Tamil Nadu": {
      Starter: {
        199: generatePricing(
          235,
          "500GB",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "10 Mbps",
          "1 Months",
          "Skylink Basic",
          100,
          118
        ),
        399: generatePricing(
          471,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "30 Mbps",
          "1 Months",
          "Skylink Mini",
          179,
          211
        ),
        499: generatePricing(
          589,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "40 Mbps",
          "1 Months",
          "Skylink Pro",
          240,
          283
        ),
        599: generatePricing(
          707,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "50 Mbps",
          "1 Months",
          "Skylink Pro",
          240,
          283
        ),
        699: generatePricing(
          825,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "100 Mbps",
          "1 Months",
          "Skylink Pro",
          240,
          283
        ),
        899: generatePricing(
          1061,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "150 Mbps",
          "1 Months",
          "Skylink Premium",
          400,
          472
        ),
        999: generatePricing(
          1179,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "200 Mbps",
          "1 Months",
          "Skylink Premium",
          400,
          472
        ),
        1299: generatePricing(
          1533,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "300 Mbps",
          "1 Months",
          "Skylink Premium",
          400,
          472
        ),
        1499: generatePricing(
          1769,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "500 Mbps",
          "1 Months",
          "Skylink Premium",
          400,
          472
        ),
        1999: generatePricing(
          2359,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "Monthly",
          1499,
          1499,
          "1000 Mbps",
          "1 Months",
          "Skylink Premium",
          400,
          472
        ),
      },
      Lite: {
        199: generatePricing(
          235,
          "500GB",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "10 Mbps",
          "3 Months",
          "Skylink Basic",
          100,
          118
        ),
        399: generatePricing(
          471,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "30 Mbps",
          "3 Months",
          "Skylink Mini",
          179,
          211
        ),
        499: generatePricing(
          589,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "40 Mbps",
          "3 Months",
          "Skylink Pro",
          240,
          283
        ),
        599: generatePricing(
          707,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "50 Mbps",
          "3 Months",
          "Skylink Pro",
          240,
          283
        ),
        699: generatePricing(
          825,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "100 Mbps",
          "3 Months",
          "Skylink Premium",
          240,
          283
        ),
        899: generatePricing(
          1061,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "150 Mbps",
          "3 Months",
          "Skylink Premium",
          240,
          283
        ),
        999: generatePricing(
          1179,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "200 Mbps",
          "3 Months",
          "Skylink Premium",
          240,
          283
        ),
        1299: generatePricing(
          1533,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "300 Mbps",
          "3 Months",
          "Skylink Premium",
          400,
          472
        ),
        1499: generatePricing(
          1769,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "500 Mbps",
          "3 Months",
          "Skylink Premium",
          400,
          472
        ),
        1999: generatePricing(
          2359,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "3 Months",
          999,
          1499,
          "1000 Mbps",
          "3 Months",
          "Skylink Premium",
          400,
          472
        ),
      },
      Max: {
        199: generatePricing(
          235,
          "500GB",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          999,
          1499,
          "10 Mbps",
          "6/12 Months",
          "Skylink Basic",
          100,
          118
        ),
        399: generatePricing(
          471,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "30 Mbps",
          "6/12 Months",
          "Skylink Mini",
          179,
          211
        ),
        499: generatePricing(
          589,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "40 Mbps",
          "6/12 Months",
          "Skylink Pro",
          240,
          283
        ),
        599: generatePricing(
          707,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "50 Mbps",
          "6/12 Months",
          "Skylink Pro",
          240,
          283
        ),
        699: generatePricing(
          825,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "100 Mbps",
          "6/12 Months",
          "Skylink Premium",
          240,
          283
        ),
        899: generatePricing(
          1061,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "150 Mbps",
          "6/12 Months",
          "Skylink Premium",
          240,
          283
        ),
        999: generatePricing(
          1179,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "200 Mbps",
          "6/12 Months",
          "Skylink Premium",
          240,
          283
        ),
        1299: generatePricing(
          1533,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "300 Mbps",
          "6/12 Months",
          "SkySkylinkplay Premium",
          400,
          472
        ),
        1499: generatePricing(
          1769,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "500 Mbps",
          "6/12 Months",
          "Skylink Premium",
          400,
          472
        ),
        1999: generatePricing(
          2359,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "6/12 Months",
          0,
          0,
          "1000 Mbps",
          "6/12 Months",
          "Skylink Premium",
          400,
          472
        ),
      },
      "Max+": {
        499: generatePricing(
          299,
          "1000GB",
          "450+ Channels",
          "18 OTTs",
          "1/3/6/12 Months",
          0,
          1499,
          "25 Mbps",
          "1/3/6/12 Months",
          "Skylink Basic",
          124,
          118
        ),
        666: generatePricing(
          471,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "1/3/6/12 Months",
          0,
          1499,
          "40 Mbps",
          "1/3/6/12 Months",
          "Skylink Mini",
          165,
          118
        ),
        899: generatePricing(
          589,
          "Unlimited",
          "450+ Channels",
          "18 OTTs",
          "1/3/6/12 Months",
          0,
          1499,
          "50 Mbps",
          "1/3/6/12 Months",
          "Skylink Pro",
          164,
          118
        ),
      },
    },
  },
  skyplayplan: {
    "Skylink Basic": {
      skyplayiptvprice: 100,
      skyplayiptvpricegst: 118,
      skyplayaddon: 0,
    },
    "Skylink Mini": {
      skyplayiptvprice: 179,
      skyplayiptvpricegst: 211,
      skyplayaddon: 117,
    },
    "Skylink Pro": {
      skyplayiptvprice: 240,
      skyplayiptvpricegst: 283,
      skyplayaddon: 117,
    },
    "Skylink Premium": {
      skyplayiptvprice: 400,
      skyplayiptvpricegst: 472,
      skyplayaddon: 119,
    },
  },
};

const PlansContext = createContext();

export const PlanProvider = ({ children }) => {
  const [planOptions, setPlanOptions] = useState(initialPlanOptions);
  const tamilNaduIndex = planOptions.zones.indexOf("Tamil Nadu");
  const [activeZone, setActiveZone] = useState(
    planOptions.zones[tamilNaduIndex]
  );
  const [activePlanBundle, setActivePlanBundle] = useState(
    planOptions.bundleplans[activeZone]?.[0] || ""
  );
  const defaultPlanName =
    planOptions.plansname[activeZone]?.[activePlanBundle]?.[0] || "";
  const [activePlanName, setActivePlanName] = useState(defaultPlanName);
  const [activePlan, setActivePlan] = useState(
    planOptions?.actualPrizeByZone[activeZone]?.[activePlanBundle]?.[0] || null
  );
  const [activeTab, setActiveTab] = useState(planOptions);
  const [activeNestedTab, setActiveNestedTab] = useState(
    planOptions.billedCycle[0]
  );
  const [price, setPrice] = useState(
    planOptions.actualPrizeByZone[activeZone]?.[activePlanBundle]?.[0] || ""
  );
  const [gstPrice, setGstPrice] = useState(
    planOptions.pricingByZone[activeZone]?.[activePlanBundle]?.[price]
  );
  const [iptvPrice, setIPTVPrice] = useState(
    planOptions.pricingByZone[activeZone]?.[activePlanBundle]?.[price]?.[
      activePlanBundle
    ]?.iptvprice || ""
  );
  const [installationPrice, setInstallationPrice] = useState(
    planOptions.pricingByZone[activeZone]?.[activePlanBundle]?.[price]?.[
      activePlanBundle
    ].installation
  );
  const [stbPrice, setStbPrice] = useState(
    planOptions.pricingByZone[activeZone]?.[activePlanBundle]?.[price]?.[
      activePlanBundle
    ].routerprice
  );
  const [checkCondition, setCheckCondition] = useState(true);
  const [customIptv, setCustomIptv] = useState(
    planOptions.skyplayplan[activePlanName].skyplayiptvprice
  );
  const [addonPrice, setAddonPrice] = useState(
    planOptions.skyplayplan[activePlanName].skyplayaddon
  );
  const [skyplayPlan, setSkyplayPlan] = useState(
    planOptions.pricingByZone[activeZone]?.[activePlanBundle]?.[price]?.[
      activePlanBundle
    ].iptvplan
  );
  const [skyplayPremium, setSkyplayPremium] = useState(false);
  const [watcho, setWatcho] = useState(false);
  return (
    <PlansContext.Provider
      value={{
        planOptions,
        setPlanOptions,
        activeZone,
        setActiveZone,
        activePlanBundle,
        setActivePlanBundle,
        activePlanName,
        setActivePlanName,
        activeTab,
        setActiveTab,
        activeNestedTab,
        setActiveNestedTab,
        price,
        setPrice,
        checkCondition,
        setCheckCondition,
        activePlan,
        setActivePlan,
        gstPrice,
        setGstPrice,
        iptvPrice,
        setIPTVPrice,
        installationPrice,
        setInstallationPrice,
        stbPrice,
        setStbPrice,
        customIptv,
        setCustomIptv,
        skyplayPlan,
        setSkyplayPlan,
        addonPrice,
        setAddonPrice,
        skyplayPremium,
        setSkyplayPremium,
        watcho,
        setWatcho,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export const usePlans = () => useContext(PlansContext);
export default PlansContext;
