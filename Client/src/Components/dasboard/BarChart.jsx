import Chart from "react-apexcharts";
import { predictionsOptions } from "./BarChart.config";
import { useSelector } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BarChart = () => {
    const { predictions, isReady, error } = useSelector(state => state.prediction)

    const [ _predictions, setPredictions]  = useState();


    const [ Ready, setReady] = useState(false);

  const series = [
    {
      data: predictions &&  predictions.payload.map(value => Math.floor(value * 100)),
    },
  ];

  useEffect(()=>{
    // isReady && setReady(isReady)
    if(isReady && !error){
      setReady(true);
    }else{
      setReady(false);
    }

    if(predictions !== null){
      setPredictions(predictions)
      console.log("pred =>"+predictions.payload);
    }
  },[isReady,predictions,error])

  return (
    <>
    <Box
        sx={{
            display: isReady && !error ? 'block' : 'none',
            transition:'display 0.2s ease-in-out',
        }}
    >
    <Typography
        sx={{
          my: 4,
        }}
        fontSize={28}
        fontWeight={600}
      >
        Analytics
      </Typography>
      <Paper
        sx={{
          p: 4,
          width: "fit-content",
          my: 4,
          borderRadius: 2,
        }}
      >
        <Chart
        options={predictionsOptions}
        series={series}
        type="bar"
        width={600}
        height={320}
      />
      </Paper>
      </Box>
    </>
  );
};


export default BarChart
