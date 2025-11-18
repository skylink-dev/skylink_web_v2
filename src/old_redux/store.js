import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import plansReducer from './slices/planSlices'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    plans: plansReducer,
  },
});

export default store;