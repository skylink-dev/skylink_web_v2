import { createSlice } from "@reduxjs/toolkit";
import { basePlans } from "../data/basePlans";
// import { selectivePlans } from "../data/selectivePlans";

const initialState = {
  basePlans,
  selectivePlans: [], // need to work
  selectedPlanType: null, // "base" or "selective"
  selectedPlan: null,
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    selectPlanType: (state, action) => {
      state.selectedPlanType = action.payload;
      state.selectedPlan = null; // reset previous selection
    },
    selectPlan: (state, action) => {
      // Restrict selection to one type only
      if (!state.selectedPlanType) {
        state.selectedPlanType = action.payload.type;
      }

      if (state.selectedPlanType !== action.payload.type) {
        alert(
          "⚠️ You can only select plans from one category (Base or Selective)."
        );
        return;
      }

      state.selectedPlan = action.payload.plan;
    },
    clearSelection: (state) => {
      state.selectedPlan = null;
      state.selectedPlanType = null;
    },
  },
});

export const { selectPlanType, selectPlan, clearSelection } =
  plansSlice.actions;
export default plansSlice.reducer;
