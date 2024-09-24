import { Box, Paper, Typography, Button } from "@mui/material";
import React from "react";
import { closeGuide } from "../../toolkit/predictionSlice";
import uploadImage from "../assets/upload.png";
import click from "../assets/click.png";
import result from "../assets/result.png";
import { useDispatch } from "react-redux";

const Popup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          height: "100%",
          width: "100%",
          bgcolor: "rgb(0, 0, 0, 0.3)",
          zIndex: 999,
        }}
      >
        <Paper
          sx={{
            bgcolor: "#fff",
            height: "500px",
            width: "max-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            borderRadius: 4,
            p: 4,
          }}
        >
          <Typography variant="h4" textAlign="center">
            Guide to skin Disease Classification
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
              my: 2,
              gap: 4,
            }}
          >
            <Box>
              <Typography textAlign="center">1. Upload Image</Typography>
              <img
                src={uploadImage}
                alt="upload"
                style={{
                  height: "200px",
                  width: "350px",
                  borderRadius: "8px",
                  border: " 1px solid #dadada",
                  marginTop: "1rem",
                  overflow: "hidden",
                }}
              />
            </Box>
            <Box>
              <Typography textAlign="center">2. Click to Get Result</Typography>
              <img
                src={click}
                alt="upload"
                style={{
                  height: "200px",
                  width: "350px",
                  borderRadius: "8px",
                  border: " 1px solid #dadada",
                  marginTop: "1rem",
                  overflow: "hidden",
                }}
              />
            </Box>

            <Box>
              <Typography textAlign="center">3. Result</Typography>
              <img
                src={result}
                alt="upload"
                style={{
                  height: "200px",
                  width: "350px",
                  borderRadius: "8px",
                  border: " 1px solid #dadada",
                  marginTop: "1rem",
                  overflow: "hidden",
                }}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              bottom: 15,
              position: "absolute",
              left: "50%",
              translate: "-50% -50%",
            }}
            onClick={() => dispatch(closeGuide())}
          >
            Got It
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Popup;
