import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import {
  AiSection,
  HeroSection,
  StarterSection,
  InfoSection,
  FeaturesSection,
} from "../Components/home";

const Home = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1280px)"); // Example breakpoint for large screens

  // Define the height based on the screen size
  const height = isLargeScreen ? "40rem" : "22rem";

  return (
    <>
      <Container>
        <HeroSection height={height} />

        <StarterSection />

        <InfoSection />

        <FeaturesSection />
        <AiSection height={height} />
      </Container>

      
    </>
  );
};

export default Home;
