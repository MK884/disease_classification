import React from "react";
import { accuracyOptions } from "./BarChart.config";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Box, Paper } from "@mui/material";



const AccuracyChart = () => {

    const { isReady, error } = useSelector(state => state.prediction)


  const series = [
    {
      name: "Accuracy",
      data: [70, 70, 75, 78, 91, 85.23, 87, 92.25],
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: isReady && !error ? "block" : "none",
          transition: "display 0.2s ease-in-out",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "fit-content",
            my: 13,
            p: 2,
          }}
        >
          <Chart
            options={accuracyOptions}
            series={series}
            type="bar"
            width={950}
            height={350}
          />
        </Paper>
      </Box>
    </>
  );
};

export default AccuracyChart;
