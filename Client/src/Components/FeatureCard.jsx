import React from "react";
import { Paper, Typography } from "@mui/material";
import "./Card.css";

const FeatureCard = ({ title, icon, desc }) => {
  return (
    <>
      <Paper
        className="card"
        sx={{
          display: "flex",
          height: "230px",
          width: "230px",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.24)",
          borderRadius: "10px",
          padding: "10px",
          transition: "all 0.3s ease",
          ":hover": {
            height: "270px",
          },
        }}
      >
        <img
          src={icon}
          style={{
            height: "6rem",
          }}
        />

        <Typography
          fontWeight={600}
          sx={{
            marginTop: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          color="#8A8585"
          className="text"
          fontSize={"13px"}
          sx={{
            textAlign: "center",
            width: "80%",
            marginTop: "10px",
            transition: "all 0.3s ease",
            opacity: 0,
            maxHeight: 0,
            display: "hidden",
          }}
        >
          {desc}
        </Typography>
      </Paper>
    </>
  );
};

export default FeatureCard;
