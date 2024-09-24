import React from "react";
import Svg from "../../Components/Svg";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'


const StarterSection = () => {

    const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        width: "100%",
        justifyContent: "space-between",
        marginY: "5rem",
        gap: { lg: 0, xs: "2rem" },
        alignItems: "center",
      }}
    >
      <Box>
        <Typography fontSize={32} fontWeight={700}>
          What Do you Know in 1 minute?
        </Typography>
        <Typography variant="body2">
          Risks Detection and Assessment of 4 diseases:
        </Typography>
        <Box
          sx={{
            marginTop: "1rem",
          }}
        >
          <Typography>
            <span
              style={{
                color: "green",
              }}
            >
              ✔
            </span>{" "}
            Eczema
          </Typography>
          <Typography>
            <span
              style={{
                color: "green",
              }}
            >
              ✔
            </span>{" "}
            Melanoma
          </Typography>
          <Typography>
            <span
              style={{
                color: "green",
              }}
            >
              ✔
            </span>{" "}
            Basal Cell Carcinoma
          </Typography>
          <Typography>
            <span
              style={{
                color: "green",
              }}
            >
              ✔
            </span>{" "}
            Melanocytic Nevi
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          color="warning"
          onClick={() => navigate("/dashboard")}
          sx={{
            borderRadius: "10px",
            marginTop: 7,
          }}
        >
          Check your Skin Now
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: "rgba( 59, 197, 206, 0.95 )",
            boxShadow: "0 8px 32px 0 rgba( 59, 197, 206, 0.95 )",
            backdropFilter: "blur(13px)",
            borderRadius: "10px",
            borderColor: "1px solid rgba( 255, 255, 255, 0.18 )",
            height: "auto",
            width: "25rem",
            padding: "1rem 2rem 1rem 3rem",
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography sx={{ fontWeight: "bold", width: "65%" }}>
            AI Dermatologist is based on Artificial Intelligence technologies
          </Typography>
          <Svg />
        </Box>
      </Box>
    </Box>
  );
};

export default StarterSection;
