import { configureStore } from "@reduxjs/toolkit";
import predictionReducer from "./predictionSlice.js";

export const store = configureStore({
  reducer: {
    prediction: predictionReducer
  },
});
