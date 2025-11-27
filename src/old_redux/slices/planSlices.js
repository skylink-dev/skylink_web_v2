import { createSlice } from '@reduxjs/toolkit';

const generatePricing = (
  price, dataLimit, channels, otts, billingCycle, installationFee,
  routerCost, speed, duration, categories, tax1, tax2, planName, ottaddon, iptvaddon, hot, simultaneousUsers, basePrice
) => ({
  price,
  dataLimit,
  channels,
  otts,
  billingCycle,
  installationFee,
  routerCost,
  speed,
  duration,
    categories,
  tax1,
  tax2,
    planName,
  ottaddon,
  iptvaddon,
  hot,
  simultaneousUsers,
  basePrice
});

const createBillingCyclePlans = (
  basePrice, dataLimit, channels, otts,  billingCycle, installationFee, routerCost,
  speed, duration, categories,tax1, tax2, planName,  ottaddon, iptvaddon, hot, simultaneousUsers
) => {  
  const is399Plan = basePrice === 399;
  const finalInstallationFee = is399Plan ? 1500 : installationFee;
  return{
  Monthly: generatePricing(
    basePrice,
    dataLimit,
    channels,
    otts,
    "Monthly",
    installationFee,
    routerCost,
    speed,
    1,
        categories,
    tax1,
    tax2,
        planName,
    ottaddon,
    iptvaddon,
    hot,
    simultaneousUsers,
    basePrice
  ),
  Quarterly: generatePricing(
    basePrice * 3,
    dataLimit,
    channels,
    otts,
    "Quarterly",
    finalInstallationFee,
    routerCost,
    speed,
    3,
    categories,
    tax1,
    tax2,
        planName,
    ottaddon,
    iptvaddon,
    hot,
    simultaneousUsers,
    basePrice
  ),
  "Half-Yearly": generatePricing(
    basePrice * 6,
    dataLimit,
    channels,
    otts,
    "Half-Yearly",
    finalInstallationFee,
    routerCost,
    speed,
    6,
        categories,
    tax1,
    tax2,
    planName,
    ottaddon,
    iptvaddon,
    hot,
    simultaneousUsers,
    basePrice
  ),
  Annual: generatePricing(
    basePrice * 12,
    dataLimit,
    channels,
    otts,
    "Annual",
    finalInstallationFee,
    routerCost,
    speed,
    12,
    categories,
    tax1,
    tax2,
    planName,
    ottaddon,
    iptvaddon,
    hot,
    simultaneousUsers,
    basePrice
  )
}};
//   price, dataLimit, channels, otts, billingCycle, installationFee,
//   routerCost, speed, duration,  categories, tax1, tax2, planName,
//  ottaddon, iptvaddon, hot, simultaneousUsers, basePrice
        // "399": createBillingCyclePlans(399, "500GB", "450+ Channels", "21+ OTTs", "Monthly", 1499, 1499, "30 Mbps", "1 Month",  ["All", "Popular"],  "Skylink399", 179, 211,"", "",  "", "3 - 5",),
const pricingByZone = {
  "Tamil Nadu": {
    "Fixed Plan": {
      "30mbps": {
        "399": createBillingCyclePlans(399, "Unlimited", "450+ Channels", "21+ OTTs", "Monthly", 1000, 1499, "30 Mbps", "1 Month", ["All", "Popular"],179,  211, "Skylink399", "ottaddon", "450+ Channels", "", "3-5"),
        "599": createBillingCyclePlans(599, "Unlimited", "550+ Channels", "24+ OTTs", "Monthly", "Free", 1499, "30 Mbps", "1 Month", ["All"],  240, 283, "Skylink599", "", "550+ Channels", "yes", "3 - 5"),
        "799": createBillingCyclePlans(799, "Unlimited", "750+ Channels", "27+ OTTs", "Monthly", "Free" , 1499, "30 Mbps", "1 Month",["All", "Popular"],  240, 283, "Skylink799", "", "750+ Channels", "", "4 - 7")
      },
      "50mbps": {
        "499": createBillingCyclePlans(499, "Unlimited", "450+ Channels", "21+ OTTs", "Monthly", "Free" , 1499, "50 Mbps", "1 Month",  ["All", "Popular"],179, 211,  "Skylink499", "", "450+ Channels", "", "3 - 5"),
        "699": createBillingCyclePlans(699, "Unlimited", "550+ Channels", "24+ OTTs", "Monthly", "Free", 1499, "50 Mbps", "1 Month", ["All"], 240, 283,  "Skylink699", "", "550+ Channels", "yes", "3 - 5"),
        "899": createBillingCyclePlans(899, "Unlimited", "750+ Channels", "27+ OTTs", "Monthly", "Free", 1499, "50 Mbps", "1 Month", ["All", "Popular"], 240, 283,  "Skylink899", "", "750+ Channels", "", "4 - 7")
      },
      "100mbps": {
        "699": createBillingCyclePlans(699, "Unlimited", "450+ Channels", "21+ OTTs", "Broadband", "Free", 1499, "100 Mbps", "1 Month", 179, 211, ["All", "Popular"], "Skylink699", "", "450+ Channels", "", "3 - 5"),
        "899": createBillingCyclePlans(899, "Unlimited", "550+ Channels", "24+ OTTs", "Broadband", "Free" , 1499, "100 Mbps", "1 Month", 240, 283, ["All"], "Skylink899", "", "550+ Channels", "yes", "3 - 5"),
        "1099": createBillingCyclePlans(1099, "Unlimited", "750+ Channels", "27+ OTTs", "Broadband", "Free", 1499, "100 Mbps", "1 Month", 240, 283, ["All", "Popular"], "Skylink1099", "", "750+ Channels", "", "4 - 7")
      },
      "200mbps": {
        "999": createBillingCyclePlans(999, "Unlimited", "550+ Channels", "27+ OTTs", "Broadband", "Free", 1499, "200 Mbps", "1 Month", 179, 211, ["All", "Popular"], "Skylink999", "", "550+ Channels", "yes", "3 - 5"), 
          "1199": createBillingCyclePlans(1199, "Unlimited", "750+ Channels", "27+ OTTs", "Broadband", "Free", 1499, "200 Mbps", "1 Month", 179, 211, ["All", "Popular"], "Skylink999", "", "550+ Channels", "", "3 - 5")
      },
      "300mbps": {
        "1299": createBillingCyclePlans(1299, "Unlimited", "750+ Channels", "27+ OTTs", "Broadband", "Free", 1499, "300 Mbps", "1 Month", 179, 211, ["All", "Popular"], "Skylink1299", "", "750+ Channels", "yes", "3 - 5")
      },
      "500mbps": {
        "2499": createBillingCyclePlans(2499, "Unlimited", "750+ Channels", "27+ OTTs", "Broadband","Free", 1499, "500 Mbps", "1 Month", 179, 211, ["All", "Popular"], "Skylink2499", "", "750+ Channels", "yes", "3 - 5")
      },
      "1000mbps": {
        "3999": createBillingCyclePlans(3999, "Unlimited", "750+ Channels", "27+ OTTs", "Broadband","Free", 1499, "1000 Mbps", "1 Month", 179, 211, ["All", "Popular"], "Skylink3999", "", "750+ Channels", "yes", "3 - 5")
      },
    },
  },
};

const initialPlanOptions = {
  zones: [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  ],
  bundleplans: {
    "Tamil Nadu": ["Broadband", "Broadband + IPTV", "Broadband + OTT", "Broadband + IPTV + OTT"],
    "Puducherry": ["Broadband", "Broadband + IPTV", "Broadband + OTT", "Broadband + IPTV + OTT"],
    "Delhi": ["Broadband", "Broadband + IPTV", "Broadband + OTT", "Broadband + IPTV + OTT"],
  },
  plansname: {
    "Tamil Nadu": {
      Broadband: ["199", "399", "499", "599", "699", "899", "999", "1299", "1499", "1999"],
      "Broadband + IPTV": ["199", "399", "499", "599", "699", "899", "999", "1299", "1499", "1999"],
      "Broadband + OTT": ["199", "399", "499", "599", "699", "899", "999", "1299", "1499", "1999"],
      "Broadband + IPTV + OTT": ["199", "399", "499", "599", "699", "899", "999", "1299", "1499", "1999"],
    },
  },
  actualPrizeByZone: pricingByZone,
};

const initialTamilNaduIndex = initialPlanOptions.zones.indexOf("Tamil Nadu");

const plansSlice = createSlice({
  name: 'plans',
  initialState: {
    planOptions: initialPlanOptions,
    activeZoneIndex: initialTamilNaduIndex >= 0 ? initialTamilNaduIndex : 0,
    activeBundleIndex: 0,
    activePlanNameIndex: 0,
    activeMbpsIndex: "30mbps",
    activeBundle: 'Fixed Plan',
    activeBillingCycle: 'Monthly',
    activePrice:699,
    activePlanPricing: pricingByZone["Tamil Nadu"]["Fixed Plan"]["50mbps"]["699"]["Monthly"]
  },
  reducers: {
    setActiveZoneIndex(state, action) {
       const newIndex = action.payload;
      if (newIndex >= 0 && newIndex < state.planOptions.zones.length) {
        state.activeZoneIndex = newIndex;
        state.activeBundleIndex = 0;
        state.activePlanNameIndex = 0;
        const zoneName = state.planOptions.zones[newIndex];
        const defaultBundle = state.planOptions.bundleplans[zoneName]?.[0];
        const defaultMbps = "30mbps";
        const defaultPlanId = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[defaultBundle]?.[defaultMbps] || {})[0];
        state.activeBundle = defaultBundle;
        state.activeMbpsIndex = defaultMbps;
        state.activePlanPricing =
          state.planOptions.actualPrizeByZone[zoneName]?.[defaultBundle]?.[defaultMbps]?.[defaultPlanId]?.[state.activeBillingCycle] || null;
      }
    },

    setActiveBundleIndex(state, action) {
      const bundle = action.payload;
      const zoneName = state.planOptions.zones[state.activeZoneIndex];
      state.activeBundle = bundle;
      const mbpsList = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[bundle] || {});
      const firstMbps = mbpsList[0];
      const planKeys = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[bundle]?.[firstMbps] || {});
      const selectedPlan = planKeys[0];
      state.activeMbpsIndex = firstMbps;
      state.activePlanNameIndex = 0;
      state.activePlanPricing =
      state.planOptions.actualPrizeByZone[zoneName]?.[bundle]?.[firstMbps]?.[selectedPlan]?.[state.activeBillingCycle] || null;
    },
    setActiveMbpsIndex(state, action) {
const newMbps = action.payload;
      state.activeMbpsIndex = newMbps;
      const zoneName = state.planOptions.zones[state.activeZoneIndex];
      const planGroup = state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[newMbps];
      const firstPlanKey = Object.keys(planGroup || {})[0];
      state.activePlanPricing = planGroup?.[firstPlanKey]?.[state.activeBillingCycle] || null;
      state.activePlanNameIndex = 0;
    },
    setActivePlanNameIndex(state, action) {
      const newIndex = action.payload;
      const zoneName = state.planOptions.zones[state.activeZoneIndex];
      const planList = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[state.activeMbpsIndex] || {});
      const selectedPlan = planList[newIndex];
      state.activePlanNameIndex = newIndex;
      state.activePlanPricing =
        state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[state.activeMbpsIndex]?.[selectedPlan]?.[state.activeBillingCycle] || null;
    },
  setActiveBillingCycle(state, action) {
      const newCycle = action.payload;
      state.activeBillingCycle = newCycle;
      const zoneName = state.planOptions.zones[state.activeZoneIndex];
      const planList = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[state.activeMbpsIndex] || {});
      const selectedPlan = planList[state.activePlanNameIndex] || planList[0];
      state.activePlanPricing =
        state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[state.activeMbpsIndex]?.[selectedPlan]?.[newCycle] || null;
    },

  },
});

export const {
  setActiveZoneIndex,
  setActiveBundleIndex, setActiveMbpsIndex,
  setActivePlanNameIndex, 
  setActiveBillingCycle
} = plansSlice.actions;

export default plansSlice.reducer;