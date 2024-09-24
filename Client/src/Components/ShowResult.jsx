import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";

const ShowResult = ({ imageURL }) => {
  const [isConfidence, setConfidence] = useState("");
  const [ColorLevel, setColorLevel] = useState("");

  const { predictedClass, confidence, error } = useSelector(state => state.prediction)


  const [open, setOpen] = React.useState(false);

  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    let level = Math.floor(confidence * 100);
    setConfidence(level);
    if (level < 99) {
      setOpen(true);
    }
    setColorLevel(level <= 60 ? "#E64A4A" : level < 90 ? "#f1c80b" : "#1678F2");
  }, [confidence, predictedClass]);
  return (
    <>
      {error && (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Error Wrong Image Provided
          </Alert>
        </Snackbar>
      ) }
      
      <Paper
        sx={{
          userSelect: "none",
          height: "auto",
          width: "400px",
          borderRadius: "8px",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.24)",
          padding: "10px",
          transition: "all 0.3s ease",
          ":active": {
            transform: "scale(0.9)",
          },
          ":hover": {
            filter: "brightness(108%)",
          },
        }}
      >
        <img
          src={imageURL}
          alt="image"
          style={{
            borderRadius: "8px",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <Typography>
          You Have{" "}
          <span
            style={{
              color: error ? "red" : "#1678F2",
              fontWeight: 600,
            }}
          >
            {predictedClass}
          </span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>Confidence</span>
          <span>{isConfidence} %</span>
        </Typography>

        {error ? (
          <Typography variant="subtitle2">
            Please click on Restet button ⏬ and Upload Correct Image
          </Typography>
        ) : (
          <>
            <Box
              sx={{
                height: "4px",
                width: "100%",
                backgroundColor: "#eee",
                borderRadius: "8px",
                position: "relative",
                marginBottom: "1rem",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: `${isConfidence}%`,
                  backgroundColor: `${ColorLevel}`,
                  height: "100%",
                  borderRadius: "8px",
                },
              }}
            ></Box>
          </>
        )}
      </Paper>
    </>
  );
};

export default ShowResult;
