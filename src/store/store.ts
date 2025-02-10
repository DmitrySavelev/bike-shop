import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "./bikeSlice";

export const store = configureStore({
  reducer: {
    bikes: bikeReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.bikes.cart));
  localStorage.setItem("count", JSON.stringify(state.bikes.count));
  localStorage.setItem("newPrice", JSON.stringify(state.bikes.newPrice));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
