import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "./bikeSlice";

export const store = configureStore({
  reducer: {
    bikes: bikeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
