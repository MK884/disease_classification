import { createSlice } from "@reduxjs/toolkit";

import {
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
} from "./hook/useModel.js";

export const predictionSlice = createSlice({
  name: "prediction",
  initialState: {
    predictions: null,
    isReady: false,
    predictedClass: null,
    confidence: null,
    error: false,
    isOpen:true
  },
  reducers: {
    addPrediction: (state, action) => {
      if (action.payload.type === UPLOAD_IMAGE_SUCCESS) {
        state.isReady = true;
        state.predictions = action.payload;
        state.predictedClass = action.payload.predictedClass;
        state.confidence = action.payload.confidence;
      }else{
        state.error = true;
        state.isReady = true;
        state.confidence = action.payload.confidence;
        state.predictedClass = action.payload.predictedClass;
      }
    },
    resetAll: (state) => {
      state.isReady = false;
      state.predictions = null;
      state.predictedClass = null;
      state.error = false,
      state.confidence = null
    },
    closeGuide: (state)=>{
      state.isOpen = false;
    }
  },
});

export const { addPrediction, resetAll, closeGuide } = predictionSlice.actions;

export default predictionSlice.reducer;
