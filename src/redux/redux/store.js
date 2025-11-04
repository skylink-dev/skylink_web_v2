import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import plansReducer from "./slices/planSlices";
import newPlanReducer from "./slices/newPlanSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    plans: plansReducer,
    newPlan: newPlanReducer,
  },
});

export default store;
