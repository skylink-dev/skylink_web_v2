import { createContext, useContext, useState } from "react";

const PlansContext = createContext();
export const PlanProvider = ({ children }) => {
  const [planOptions, setPlanOptions] = useState({
    benefitOptions: [
      { name: "TV Channels", lite: "350+" },
      { name: "OTT", lite: "Yes" },
    ],
    speeds: [
      "30 Mbps",
      "50 Mbps",
      "100 Mbps",
      "200 Mbps",
      "300 Mbps",
      "500 Mbps",
      "1000 Mbps",
      "2000 Mbps",
    ],
    ottOptions: ["21+ OTTs", "22+ OTTs", "29+ OTTs", "30+ OTTs"],
    tvChannel: [
      "350+ Channels",
      "550+ Channels",
      "650+ Channels",
      "950+ Channels",
    ],
    billedCycle: ["Monthly", "Quarterly", "Half Yearly", "Yearly"],
    pricing: {
      "30 Mbps": generatePricing(
        399,
        "Unlimited",
        "350+ Channels",
        "21+ OTTs",
        "30 Mbps",
        1500
      ),
      "50 Mbps": generatePricing(
        499,
        "Unlimited",
        "350+ Channels",
        "22+ OTTs",
        "50 Mbps",
        1000
      ),
      "100 Mbps": generatePricing(
        699,
        "Unlimited",
        "350+ Channels",
        "22+ OTTs",
        "100 Mbps",
        1000
      ),
      "200 Mbps": generatePricing(
        999,
        "Unlimited",
        "550+ Channels",
        "29+ OTTs",
        "200 Mbps",
        1000
      ),
      "300 Mbps": generatePricing(
        1299,
        "Unlimited",
        "550+ Channels",
        "29+ OTTs",
        "300 Mbps",
        1000
      ),
      "500 Mbps": generatePricing(
        2499,
        "Unlimited",
        "650+ Channels",
        "29+ OTTs",
        "500 Mbps",
        1000
      ),
      "1000 Mbps": generatePricing(
        3999,
        "Unlimited",
        "650+ Channels",
        "29+ OTTs",
        "1000 Mbps",
        1000
      ),
      "2000 Mbps": generatePricing(
        9999,
        "Unlimited",
        "650+ Channels",
        "29+ OTTs",
        "2000 Mbps",
        1000
      ),
    },
  });
  function generatePricing(basePrice, data, tv, ott, speed, installationFee) {
    // const isLowSpeed = ["30 Mbps", "50 Mbps"].includes(speed);
    // const isHighSpeed = ["100 Mbps", "200 Mbps", "300 Mbps", "500 Mbps", "1000 Mbps"].includes(speed);
    const halfDiscount = Math.round(basePrice * 6);
    const fullDiscount = Math.round(basePrice * 12);

    const getInstallationFee = (billingCycle) => {
      if (speed === "30 Mbps") return 1500;
      if (
        speed === "50 Mbps" &&
        ["Monthly", "Quarterly"].includes(billingCycle)
      )
        return 1000;
      if (
        [
          "100 Mbps",
          "200 Mbps",
          "300 Mbps",
          "500 Mbps",
          "1000 Mbps",
          "2000 Mbps",
        ].includes(speed) &&
        billingCycle === "Monthly"
      )
        return 1000;
      return 0;
    };

    return {
      Monthly: createPlan(
        basePrice,
        data,
        tv,
        ott,
        "Monthly",
        getInstallationFee("Monthly")
      ),
      Quarterly: createPlan(
        basePrice * 3,
        "Unlimited",
        tv,
        ott,
        "Quarterly",
        getInstallationFee("Quarterly")
      ),
      "Half Yearly": createPlan(
        halfDiscount,
        "Unlimited",
        tv,
        ott,
        "Half Yearly",
        getInstallationFee("Half Yearly")
      ),
      Yearly: createPlan(
        fullDiscount,
        "Unlimited",
        tv,
        ott,
        "Yearly",
        getInstallationFee("Yearly")
      ),
    };
  }
  function createPlan(price, data, tv, ott) {
    return {
      price: price.toString(),
      data,
      tv,
      ott,
      benefits: [
        { name: "TV Channels", lite: tv },
        { name: "OTT", lite: ott },
      ],
    };
  }
  const [activeSpeed, setActiveSpeed] = useState(planOptions.speeds[0]);
  const [checkCondition, setCheckCondition] = useState(true);
  const [activeNestedTab, setActiveNestedTab] = useState(
    planOptions.billedCycle[0]
  );
  const [activeChannel, setActiveChannel] = useState(planOptions.tvChannel[0]);
  const [activeOtts, setActiveOtts] = useState(planOptions.ottOptions[0]);
  const [price, setPrice] = useState(
    planOptions.pricing?.["30 Mbps"]?.["Monthly"]?.price || 0
  );
  const [activeTab, setActiveTab] = useState("Customize Plan");
  const [activeTag, setActiveTag] = useState("Fixed Plan");
  return (
    <PlansContext.Provider
      value={{
        activeSpeed,
        setActiveSpeed,
        planOptions,
        setPlanOptions,
        activeTab,
        setActiveTab,
        checkCondition,
        setCheckCondition,
        activeNestedTab,
        setActiveNestedTab,
        activeChannel,
        setActiveChannel,
        activeOtts,
        setActiveOtts,
        price,
        setPrice,
        activeTag,
        setActiveTag,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};
export const usePlans = () => useContext(PlansContext);
export default PlansContext;
