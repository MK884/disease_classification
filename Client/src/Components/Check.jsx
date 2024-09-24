import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ShowResult from "./ShowResult";
import { useModel } from "../../toolkit/hook/useModel.js";
import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "../../toolkit/predictionSlice.js";



const Check = () => {

  const formData = new FormData();
  const classifyImage = useModel();
  const dispatch = useDispatch();

  const { predictions, isReady } = useSelector(state => state.prediction)

  const dropImage = () => {
    document.querySelector(".input-field").click();
  };
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [filename, setFileName] = useState("No file Selected");
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    let uploadedFile = e.target.files[0];
    uploadedFile && setFileName(uploadedFile.name);
    if (uploadedFile) {
      setImage(uploadedFile);
      setImageURL(URL.createObjectURL(uploadedFile));
    }
  };

  
  const uploadImage = async () => {
    try {
      formData.append("file", image);
      await classifyImage(formData);
      // console.log(predictions.payload);

      console.log("clear");
      // console.log(state);
     
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setResult(isReady)
    predictions && console.log(predictions.payload);
  }, [predictions,isReady]);

  const setResultHandler = () =>{
    dispatch(resetAll())
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {result ? (
          <>
            <ShowResult
              imageURL={imageURL}
            />
            <Button
              variant="contained"
              onClick={() => {
                setImage(null);
                setResultHandler();
              }}
            >
              Reset
            </Button>
          </>
        ) : image ? (
          <>
            <img src={imageURL} width={200} height={200} alt="image" />
            <Typography>{filename}</Typography>
            <Button
              fontWeight={700}
              color="success"
              variant="contained"
              fullWidth
              sx={{
                margin: "20px",
              }}
              onClick={uploadImage}
            >
              Get Your Result
            </Button>
          </>
        ) : (
          <>
            <Typography fontWeight={700} fontSize={26}>
              Upload Your Skin Photo
            </Typography>
            <Box
              component={"form"}
              onClick={() => dropImage()}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px dashed #1475cf",
                height: "30rem",
                width: "100%",
                borderRadius: "8px",
                cursor: "pointer",
                userSelect: "none",
                flexDirection: "column",
              }}
            >
              <input
                type="file"
                accept="image/*"
                className="input-field"
                hidden
                multiple="true"
                onChange={handleFileChange}
              ></input>
              <CloudUploadIcon
                sx={{
                  color: "#1475cf",
                  fontSize: "8rem",
                }}
              />
              <Typography>Click here to Upload Browse Media </Typography>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            ></Box> */}
          </>
        )}
      </Container>
    </>
  );
};

export default Check;
