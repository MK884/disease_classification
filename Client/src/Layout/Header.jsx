import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.svg";
const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        width="100%"
        sx={{
          bgcolor: "#fff",
          height: "5rem",
        }}
      >
        <Container>
          <Toolbar
            sx={{
              padding: "10px",
              display: "flex",
              height: "4rem",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                height: "3.5rem",
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
