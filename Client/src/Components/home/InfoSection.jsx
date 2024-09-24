import { Typography,Box } from "@mui/material";
import React from "react";


const InfoSection = () => {
  return (
    <Box
      sx={{
        marginY: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <Box
          sx={{
            width: { lg: "40%", xs: "100%" },
          }}
        >
          <img src="https://ai-derm.com/assets/man-318621c4.webp" />
        </Box>
        <Box>
          <Typography fontSize={32} fontWeight={700}>
            AI Dermatologist can save your life
          </Typography>
          <Typography>
            One of the most dangerous diseases that AI Dermatologist can help
            identify is skin cancer.
          </Typography>
          <Typography fontWeight={700}>
            Skin cancer is the most common cancer in the United States and
            worldwide.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoSection;
