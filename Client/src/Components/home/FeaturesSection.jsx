import { Typography, Box } from "@mui/material";
import React from "react";
import FeatureCard from "../FeatureCard";
import Skin from "../../assets/skin.png";
import Guidence from "../../assets/inspiration.png";
import Analytics from "../../assets/analytics.png";



const FeaturesSection = () => {

    const Features = [
        {
          id: 1,
          icon: Guidence,
          title: "Useful Guide",
          desc: "Follow the Guidence to reduce the risks",
        },
        {
          id: 2,
          icon: Skin,
          title: "3+ Diseases",
          desc: "Four Disease Offers",
        },
        {
          id: 3,
          icon: Analytics,
          title: "Analytics Services",
          desc: "Get your analytics information",
        },
      ];
  return (
    <Box>
      <Typography color="#3A8EF6" fontWeight={600} fontSize={24}>
        FEATURES WE PROVIDE
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        {Features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            icon={feature.icon}
            desc={feature.desc}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSection;
