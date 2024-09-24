export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
import { useDispatch } from "react-redux";
import { addPrediction } from "../predictionSlice";
import axios from "axios";

export const useModel = () => {
  const dispatch = useDispatch();

  const classifyImage = async (formData) => {
    try {
      const res = await axios.post("/classify", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // console.log(res);

      if (res.data.confidence != 0) {
        dispatch(
          addPrediction({
            type: UPLOAD_IMAGE_SUCCESS,
            payload: Object.values(res.data.class_predictions),
            predictedClass: res.data.predicted_class,
            confidence: res.data.confidence,
          })
        );
      } else {
        dispatch(
          addPrediction({
            type: UPLOAD_IMAGE_FAILURE,
            predictedClass: res.data.predicted_class,
            confidence: res.data.confidence,

          })
        );
      }
    } catch (error) {
      dispatch(
        addPrediction({
          type: UPLOAD_IMAGE_FAILURE,
          payload: error.message,
        })
      );
    }
  };

  return classifyImage;
};
