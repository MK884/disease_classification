import React from "react";
import AI from "../../assets/AI.png";
import { Typography, Box } from "@mui/material";



const AiSection = ({height}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        width: "100%",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center",
      }}
    >
      <img
        src={AI}
        alt="AI"
        style={{
          width: height,
        }}
      />
      <Box
        sx={{
          width: { lg: "90%", xs: "100%" },
        }}
      >
        <Typography fontSize={32} fontWeight={700}>
          How does Artificial Intelligence analyze images?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginY: "1rem",
          }}
        >
          AI Dermatologist uses a deep machine learning algorithm
          (AI-algorithm). The human ability to learn from examples and
          experiences has been transferred to a computer. For this purpose, the
          neural network has been trained using a dermoscopic imaging database
          containing tens of thousands of examples that have confirmed diagnosis
          and assessment by dermatologists.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginY: "1rem",
          }}
        >
          The AI is able to distinguish between benign and malignant tumors,
          similar to the ABCDE rule (5 main signs of oncology: asymmetry,
          boundary, color, diameter, and change over time). The difference
          between them is that the algorithm can analyze thousands of features,
          but not only 5 of them. Of course, only a machine can detect that
          amount of evidence.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginY: "1rem",
          }}
        >
          Due to the productive cooperation with doctors, the quality of the
          algorithm performance is constantly being improved. Based on growing
          experience and its own autonomous rules, the AI is able to distinguish
          between benign and malignant tumors, find risks of human
          papillomavirus, and classify different types of acne…
        </Typography>
      </Box>
    </Box>
  );
};

export default AiSection;
