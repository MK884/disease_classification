import React, { useEffect } from "react";
import Check from "../Components/Check";
import { Box, Paper, Typography } from "@mui/material";
import BarChart from "../Components/dasboard/BarChart";
import { useSelector } from "react-redux";
import { guides, DiseaseLinks } from "../data/data.js";
import AccuracyChart from "../Components/dasboard/AccuracyChart.jsx";

const Dashboard = () => {
  const { isReady, predictedClass, error } = useSelector(
    (state) => state.prediction
  );

  const isResultReady = isReady;

  return (
    <Box>
      
      
      <Box
        sx={{
          display: isResultReady && "flex",
          width: "100%",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Paper
          sx={{
            p: 2,
            borderRadius: 3,
            minWidth: "40%",
            maxWidth: "100%",
          }}
        >
          <Check />
        </Paper>
        <Paper
          sx={{
            width: "100%",
            display: isResultReady ? "block" : "none",
            p: 3,
            overflow: "hidden",
            borderRadius: 3,
            flexWrap: "wrap",
          }}
        >
          <Typography fontWeight={700} fontSize={26}>
          Guidance:-
          </Typography>
          <Typography fontSize={18} fontWeight={600} color="red">
            You have {predictedClass}
          </Typography>

          {error ? (
            <Typography variant="body2" my={1}>
              Our model is not able to classify diseases accurately, there could
              be various reasons contributing to this issue. Here are some
              potential reasons
            </Typography>
          ) : (
            <Typography variant="body2" my={1}>
              Certainly! Here are some precautions individuals can take to
              reduce their risk of {predictedClass}:{" "}
            </Typography>
          )}

          <Typography my={2}>
            <ul style={{ listStyleType: "decimal" }}>
              {predictedClass &&
                Object.entries(guides[predictedClass]).map(([key, value]) => (
                  <li key={key}>
                    <span style={{ fontWeight: "bold" }}>{key}:</span>
                    <span>{value}</span>
                  </li>
                ))}
            </ul>
          </Typography>
          {predictedClass && (
            <a
              target="_blank"
              href={DiseaseLinks[predictedClass]}
              style={{
                color: "#1678F2",
                textDecoration: "none",
              }}
            >
              Know more about {predictedClass}
            </a>
          )}
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: "100%",
          // flex:1,
          flexGrow: 1,
        }}
      >
        <BarChart />
        <AccuracyChart />
      </Box>
    </Box>
  );
};

export default Dashboard;
