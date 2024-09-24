import {
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Logo from "../../assets/Logo.svg";
import IconM from "../../assets/IconM.png";
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';

const Slider = () => {
  const lists = [
    {
      id: 1,
      title: "Home",
      icon: <DashboardOutlinedIcon />,
    },
    
  ];


  const [ sliderwidth, setSliderWidth] = useState(240)

  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <>
      <Paper
        sx={{
          width: sliderwidth,
          overflow: "hidden",
          position:'relative',
          transition:"width 0.3s ease-in-out ",
        }}
        variant="elevation"
        color="#111"
      >
        <Box
          sx={{
            width: "fit-content",
            height: "fit-content",
            margin: 1,
          }}
        >
          <img
            src={sliderwidth === 80 ? IconM : Logo}
            style={{
              width: "100%",
            }}
          />
        </Box>
        <Divider variant="middle" />
        {lists.map((list) => (
          <Tooltip
          title={list.title}
          placement="right"
          key={list.id}          
          >
          <ListItem
            key={list.id}
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                borderRadius: "12px",
                padding: ".8rem",
                width: "100%",
                bgcolor: selectedIndex === list.id && "#2C62EE",

                "&:hover": {
                  bgcolor: selectedIndex === list.id ? "#2C62EE" : "#D8E3FF",
                },
              }}
              selected={selectedIndex === list.id}
              onClick={() => {
                setSelectedIndex(list.id);
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedIndex === list.id && "#fff",
                  justifyContent: "center",
                }}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: selectedIndex === list.id ? "bold" : "normal",
                  color: selectedIndex === list.id ? "#fff" : "#111",
                  textAlign: "start",
                  display: sliderwidth === 80 ? "none" : "block",
                }}
              >
                {list.title}
              </ListItemText>
            </Button>
          </ListItem>
          </Tooltip>
        ))}
        <Box
          sx={{
            position:'absolute',
            bottom:0,
            height:'3rem',
            bgcolor:'#FFDBDB',
            width:'100%',
            color:'white',
            textAlign:'center',
            cursor:'pointer'

          }}
          onClick={()=>setSliderWidth((prev) => prev === 240 ? 80 : 240)}
        >
          <CloseFullscreenRoundedIcon fontSize="medium" sx={{
            marginY:'1rem',
            color:'#F93333'
          }} />
        </Box>
      </Paper>
    </>
  );
};

export default Slider;
