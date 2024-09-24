import React from "react";
import Ellips from "../../assets/Ellipse.svg";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DocImg from "../../assets/doctor.png";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ height }) => {

    const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { lg: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src={Ellips}
          alt="Back"
          style={{
            width: "100%",
            position: "absolute",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            display: "flex",
            zIndex: 1,
            position: "relative",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <Button
            startIcon={<HealthAndSafetyIcon />}
            variant="contained"
            sx={{
              borderRadius: "30px",
              bgcolor: "#fff",
              color: "black",
              border: " 1px solid #B4B4B4",
              width: "fit-content",
              boxShadow: 0,
              ":hover": {
                bgcolor: "#fff",
                boxShadow: 0,
              },
              marginBottom: "1rem",
            }}
          >
            Health Matters
          </Button>
          <Typography
            fontSize={{ lg: 54, xs: 44 }}
            fontWeight={600}
            sx={{
              color: "#1678F2",
            }}
          >
            One Step Solution
          </Typography>
          <Typography
            fontSize={{ lg: 54, xs: 44 }}
            fontWeight={600}
            sx={{
              color: "black",
            }}
          >
            For All Your Skin Need
          </Typography>

          <Typography fontSize={16} fontWeight={400} color="#8A8585">
            Using AI Check Your Skin Disease and Get Instant Result with minimum
            Efforts.
          </Typography>
          <Typography variant="body2" color="red">
            Note : The scan result is not a diagnosis. To obtain an accurate
            diagnosis and a recommendation for treatment - consult your doctor.
          </Typography>
          <Button
            variant="contained"
            startIcon={<OpenInNewIcon />}
            sx={{
              bgcolor: "#fff",
              color: "#8A8585",
              width: "fit-content",
              borderRadius: "30px",
              marginTop: "50px",
              ":hover": {
                bgcolor: "#fff",
              },
            }}
            onClick={() => navigate("/dashboard")}
          >
            Check Here
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "40%",
          position: "relative",
        }}
      >
        <img
          src={Ellips}
          style={{
            width: "10%",
            position: "absolute",
            zIndex: 0,
          }}
        />

        <img
          src={DocImg}
          style={{
            height: height,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
