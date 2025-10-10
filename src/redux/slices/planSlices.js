import { createSlice } from '@reduxjs/toolkit';

const generatePricing = (
  basePrice,
  dataLimit,
  channels,
  otts,
  billingCycle,
  installationFee,
  routerCost,
  speed,
  duration,
  planName,
  tax1,
  tax2,
  categories,
  planname,
  ottaddon,
  iptvaddon,
  hot,
  simultaneousUsers
) => {
  const billingCycles = {
    Monthly: 1,
    Quarterly: 3,
    HalfYearly: 6,
    Annual: 12
  };

  const generateCyclePlan = (cycle, months) => ({
    price: basePrice * months,
    dataLimit,
    channels,
    otts,
    billingCycle: cycle,
    installationFee,
    routerCost,
    speed,
    duration: `${months} Month${months > 1 ? "s" : ""}`,
    planName,
    tax1,
    tax2,
    categories,
    planname,
    ottaddon,
    iptvaddon,
    hot,
    simultaneousUsers
  });

  const pricing = {};
  for (const [cycle, months] of Object.entries(billingCycles)) {
    pricing[cycle] = generateCyclePlan(cycle, months);
  }

  return pricing;
};


const pricingByZone = {
  "Tamil Nadu": {
    "Broadband": {
      "199": generatePricing(199, "500GB", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "10 Mbps", "1 Months", "Medium", 100, 118, ["All"], "SKYPLAY199", "", "", "", "2 - 3"),
      "399": generatePricing(399, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "40 Mbps", "1 Months", "Total", 179, 211, ["All", "Popular"], "SKYPLAY399", "", "", "", "3 - 5"),
      "499": generatePricing(499, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Months", "Energy", 240, 283, ["All"], "SKYPLAY499", "", "", "yes", "3 - 5"),
      "599": generatePricing(599, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "75 Mbps", "1 Months", "Ultra", 240, 283, ["All", "Popular"], "SKYPLAY599", "", "", "", "4 - 7"),
      "699": generatePricing(699, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "100 Mbps", "1 Months", "", 240, 283, ["All", "Popular"], "SKYPLAY699", "", "", "", "4 - 7"),
      "899": generatePricing(899, "Unlimited", "", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "150 Mbps", "1 Months", "Medium", 100, 118, ["All"], "SKYPLAY899", "", "Skyplay Premium", "yes", "", "5 - 10"),
      "999": generatePricing(999, "Unlimited", "", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "200 Mbps", "1 Months", "Total", 179, 211, ["All", "Popular"], "SKYPLAY999", "", "Skyplay Premium", "", "5 - 10"),
      "1299": generatePricing(1299, "Unlimited", "", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "300 Mbps", "1 Months", "Energy", 240, 283, ["All"], "SKYPLAY1299", "", "Skyplay Premium", "", "5 - 10"),
    },
    "Broadband + IPTV": {
      "199": generatePricing(199, "500GB", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "10 Mbps", "1 Months", "Medium", 100, 118, ["All"], "SKYPLAY199", "", ["Skyplay Mini", "Skyplay Pro", "Skyplay Premium"], "", "2 - 3"),
      "399": generatePricing(399, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "40 Mbps", "1 Months", "Total", 179, 211, ["All", "Popular"], "SKYPLAY399", "", ["Skyplay Mini", "Skyplay Pro", "Skyplay Premium"], "", "3 - 5"),
      "499": generatePricing(499, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Months", "Energy", 240, 283, ["All"], "SKYPLAY499", "", ["Skyplay Mini", "Skyplay Pro", "Skyplay Premium"], "yes", "3 - 5"),
      "599": generatePricing(599, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "75 Mbps", "1 Months", "Ultra", 240, 283, ["All", "Popular"], "SKYPLAY599", "", ["Skyplay Mini", "Skyplay Pro", "Skyplay Premium"], "", "4 - 7"),
      "699": generatePricing(699, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "100 Mbps", "1 Months", "", 240, 283, ["All", "Popular"], "SKYPLAY699", "", ["Skyplay Mini", "Skyplay Pro", "Skyplay Premium"], "", "4 - 7"),
      "899": generatePricing(899, "Unlimited", "", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "150 Mbps", "1 Months", "Medium", 100, 118, ["All"], "SKYPLAY899", "", "Skyplay Premium", "yes", "", "5 - 10"),
      "999": generatePricing(999, "Unlimited", "", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "200 Mbps", "1 Months", "Total", 179, 211, ["All", "Popular"], "SKYPLAY999", "", "Skyplay Premium", "", "5 - 10"),
      "1299": generatePricing(1299, "Unlimited", "", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "300 Mbps", "1 Months", "Energy", 240, 283, ["All"], "SKYPLAY1299", "", "Skyplay Premium", "", "5 - 10"),
    },
    "Broadband + OTT": {
      "199": generatePricing(199, "500GB", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "10 Mbps", "1 Months", "Medium", 100, 118, ["All"], "Skylink99", ["OTTplay Basic Pack", "OTTplay Lite Pack", "OTTplay Flexi Pack", "OTTplay Mega Pack", "PlayBoxIPTV Lite Pack", "PlayBoxIPTV Flexi Pack", "PlayBoxIPTV Mega Pack", "PlayBoxIPTV Flexi Plus Pack", "PlayBoxIPTV Mega Plus Pack", "Watcho Basic Pack"], "", "", "2 - 3"),
      "399": generatePricing(399, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "40 Mbps", "1 Months", "Total", 179, 211, ["All", "Popular"], "Skylink399", ["OTTplay Basic Pack", "OTTplay Lite Pack", "OTTplay Flexi Pack", "OTTplay Mega Pack", "PlayBoxIPTV Lite Pack", "PlayBoxIPTV Flexi Pack", "PlayBoxIPTV Mega Pack", "PlayBoxIPTV Flexi Plus Pack", "PlayBoxIPTV Mega Plus Pack", "Watcho Basic Pack"], "", "", "3 - 5"),
      "499": generatePricing(499, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Months", "Energy", 240, 283, ["All"], "Skylink499", ["OTTplay Basic Pack", "OTTplay Lite Pack", "OTTplay Flexi Pack", "OTTplay Mega Pack", "PlayBoxIPTV Lite Pack", "PlayBoxIPTV Flexi Pack", "PlayBoxIPTV Mega Pack", "PlayBoxIPTV Flexi Plus Pack", "PlayBoxIPTV Mega Plus Pack", "Watcho Basic Pack"], "", "yes", "3 - 5"),
      "599": generatePricing(599, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "75 Mbps", "1 Months", "Ultra", 240, 283, ["All", "Popular"], "Skylink599", ["OTTplay Basic Pack", "OTTplay Lite Pack", "OTTplay Flexi Pack", "OTTplay Mega Pack", "PlayBoxIPTV Lite Pack", "PlayBoxIPTV Flexi Pack", "PlayBoxIPTV Mega Pack", "PlayBoxIPTV Flexi Plus Pack", "PlayBoxIPTV Mega Plus Pack", "Watcho Basic Pack"], "", "", "4 - 7"),
      "599": generatePricing(599, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "75 Mbps", "1 Months", "Ultra", 240, 283, ["All", "Popular"], "Skylink599", ["OTTplay Basic Pack", "OTTplay Lite Pack", "OTTplay Flexi Pack", "OTTplay Mega Pack", "PlayBoxIPTV Lite Pack", "PlayBoxIPTV Flexi Pack", "PlayBoxIPTV   Mega Pack", "PlayBoxIPTV Flexi Plus Pack", "PlayBoxIPTV Mega Plus Pack", "Watcho Basic Pack"], "", "", "4 - 7"),
      "699": generatePricing(699, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "100 Mbps", "1 Months", "", 240, 283, ["All", "Popular"], "Skylink 699", "PlayBoxIPTV Mega Pack", "", "", "4 - 7"),
      "899": generatePricing(899, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "150 Mbps", "1 Months", "Medium", 100, 118, ["All"], "Skylink 899", "PlayBoxIPTV Mega Pack", "", "yes", "", "5 - 10"),
      "999": generatePricing(999, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "200 Mbps", "1 Months", "Total", 179, 211, ["All", "Popular"], "Skylink 999", "PlayBoxIPTV Mega Pack", "", "", "5 - 10"),
      "1299": generatePricing(1299, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "300 Mbps", "1 Months", "Energy", 240, 283, ["All"], "Skylink 1299", "PlayBoxIPTV Mega Pack", "", "", "5 - 10"),
    },
    "Broadband + IPTV + OTT": {
      "299": generatePricing(499, "1000GB", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "25 Mbps", "1 Months", "Ultra", 240, 283, ["All", "Popular"], "Skylink 423", "", "", "", "2 - 4"),
      "666": generatePricing(666, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "40 Mbps", "1 Months", "", 240, 283, ["All", "Popular"], "Skylink 564", "", "", "yes", "", "3 - 5"),
      "899": generatePricing(899, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband + IPTV", 1499, 1499, "50 Mbps", "1 Months", "Medium", 100, 118, ["All"], "Skylink 762", "", "", "", "3 - 5"),
    }
  },
  "Pondicherry": {},
  "Delhi": {
    "Broadband": {
      "648": generatePricing(648, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "30 Mbps", "1 Month", "Starter", 100, 118, ["All"], "North 549", "", ["Skylink Mini Hindi pack"], "", "2 - 3"),
      "766": generatePricing(766, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Month", "Value", 179, 211, ["All", "Popular"], "North 649", "", ["Skylink Mini Hindi pack"], "", "3 - 5"),
      "825": generatePricing(825, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "100 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 749", "", ["Skylink Mini Hindi pack"], "yes", "4 - 6"),
      "1061": generatePricing(1061, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "200 Mbps", "1 Month", "Pro", 240, 283, ["All"], "Noth 849", "", ["Skylink Mini Hindi pack"], "", "4 - 6"),
      "1533": generatePricing(1533, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "300 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 999", "", ["Skylink Mini Hindi pack"], "", "4 - 6"),
    },
    "Broadband + IPTV": {
      "648": generatePricing(648, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "30 Mbps", "1 Month", "Starter", 100, 118, ["All"], "North 549", "", ["Skylink Mini Hindi pack"], "", "2 - 3"),
      "766": generatePricing(766, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Month", "Value", 179, 211, ["All", "Popular"], "North 649", "", ["Skylink Mini Hindi pack"], "", "3 - 5"),
      "825": generatePricing(825, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "100 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 749", "", ["Skylink Mini Hindi pack"], "yes", "4 - 6"),
      "1061": generatePricing(1061, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "200 Mbps", "1 Month", "Pro", 240, 283, ["All"], "Noth 849", "", ["Skylink Mini Hindi pack"], "", "4 - 6"),
      "1533": generatePricing(1533, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "300 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 999", "", ["Skylink Mini Hindi pack"], "", "4 - 6"),
    },
    "Broadband + OTT": {
      "648": generatePricing(648, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "30 Mbps", "1 Month", "Starter", 100, 118, ["All"], "North 549", "", ["Skylink Mini Hindi pack"], "", "2 - 3"),
      "766": generatePricing(766, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Month", "Value", 179, 211, ["All", "Popular"], "North 649", "", ["Skylink Mini Hindi pack"], "", "3 - 5"),
      "825": generatePricing(825, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "100 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 749", "", ["Skylink Mini Hindi pack"], "yes", "4 - 6"),
      "1061": generatePricing(1061, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "200 Mbps", "1 Month", "Pro", 240, 283, ["All"], "Noth 849", "", ["Skylink Mini Hindi pack"], "", "4 - 6"),
      "1533": generatePricing(1533, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "300 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 999", "", ["Skylink Mini Hindi pack"], "", "4 - 6"),
    },
    "Broadband + IPTV + OTT": {
      "499": generatePricing(499, "1000 GB", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "25 Mbps", "1 Month", "Starter", 100, 118, ["All"], "North 499", "", ["Skylink Hindi Combo SD"], "", "2 - 3"),
      "666": generatePricing(666, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "40 Mbps", "1 Month", "Value", 179, 211, ["All", "Popular"], "North 666", "", ["Skylink Hindi Combo HD"], "yes", "3 - 5"),
      "899": generatePricing(899, "Unlimited", "450+ Channels", "18+ OTTs", "Broadband", 1499, 1499, "50 Mbps", "1 Month", "Pro", 240, 283, ["All"], "North 999", "", ["Skylink Hindi Combo HD"], "North 499", "4 - 6"),
    },
  },
    "Punjab": {},
  "Haryana": {},
  "Chandigarh": {},
  "Himachal Pradesh": {},
  "Jammu & Kashmir": {}
};
pricingByZone["Pondicherry"] = pricingByZone["Tamil Nadu"];
["Punjab", "Haryana", "Chandigarh", "Himachal Pradesh", "Jammu & Kashmir"].forEach(state => {
  pricingByZone[state] = pricingByZone["Delhi"];
});
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
    activeBundle: 'Broadband',
    activePlanPricing: pricingByZone["Tamil Nadu"]["Broadband"]["199"]
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
        const defaultPlanName = state.planOptions.plansname[zoneName]?.[defaultBundle]?.[0];
        state.activeBundle = defaultBundle;
        state.activePlanPricing = state.planOptions.actualPrizeByZone[zoneName]?.[defaultBundle]?.[defaultPlanName] || null;
      }
    },

    setActiveBundleIndex(state, action) {
      state.activeBundle = action.payload;
      const zoneName = state.planOptions.zones[state.activeZoneIndex];
      const planNames = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle] || {});
      const firstPlan = planNames[0];
      state.activePlanPricing = state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[firstPlan] || null;
    },

    setActivePlanNameIndex(state, action) {
      const newIndex = action.payload;
      const zoneName = state.planOptions.zones[state.activeZoneIndex];
      const planNames = Object.keys(state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle] || {});
      const planName = planNames[newIndex];
      state.activePlanNameIndex = newIndex;
      state.activePlanPricing = state.planOptions.actualPrizeByZone[zoneName]?.[state.activeBundle]?.[planName] || null;
    },
  },
});

export const {
  setActiveZoneIndex,
  setActiveBundleIndex,
  setActivePlanNameIndex
} = plansSlice.actions;

export default plansSlice.reducer;