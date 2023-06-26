import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";

import logo1 from "../assets/key clients/logo1.jpeg";
import logo2 from "../assets/key clients/logo2.jpeg";
import logo3 from "../assets/key clients/logo3.jpeg";
import logo4 from "../assets/key clients/logo4.jpeg";
import logo5 from "../assets/key clients/logo5.jpeg";
import logo6 from "../assets/key clients/logo6.jpeg";
import logo7 from "../assets/key clients/logo7.jpeg";
import logo8 from "../assets/key clients/logo8.jpeg";
import logo9 from "../assets/key clients/logo9.jpeg";
import logo10 from "../assets/key clients/logo10.jpeg";
import logo11 from "../assets/key clients/logo11.jpeg";
import logo12 from "../assets/key clients/logo12.jpeg";
import logo13 from "../assets/key clients/logo13.jpeg";
import logo14 from "../assets/key clients/logo14.jpeg";
import logo15 from "../assets/key clients/logo15.jpeg";
import logo16 from "../assets/key clients/logo16.jpeg";
import logo17 from "../assets/key clients/logo17.jpeg";
import logo18 from "../assets/key clients/logo18.jpeg";
import logo19 from "../assets/key clients/logo19.jpeg";
import logo20 from "../assets/key clients/logo20.jpeg";
import logo21 from "../assets/key clients/logo21.jpeg";
import logo22 from "../assets/key clients/logo22.jpeg";
import logo23 from "../assets/key clients/logo23.jpeg";
import logo24 from "../assets/key clients/logo24.jpeg";
import logo25 from "../assets/key clients/logo25.jpeg";
import logo26 from "../assets/key clients/logo26.jpeg";
import logo27 from "../assets/key clients/logo27.jpeg";
import logo28 from "../assets/key clients/logo28.jpeg";
import logo29 from "../assets/key clients/logo29.jpeg";
import logo30 from "../assets/key clients/logo30.jpeg";
import logo31 from "../assets/key clients/logo31.jpeg";
import logo32 from "../assets/key clients/logo32.jpeg";
import logo33 from "../assets/key clients/logo33.jpeg";
import logo34 from "../assets/key clients/logo34.jpeg";
import logo35 from "../assets/key clients/logo35.jpeg";
import logo36 from "../assets/key clients/logo36.jpeg";
import logo37 from "../assets/key clients/logo37.jpeg";
import logo38 from "../assets/key clients/logo38.jpeg";
import logo39 from "../assets/key clients/logo39.jpeg";
import logo40 from "../assets/key clients/logo40.jpeg";
import logo41 from "../assets/key clients/logo41.jpeg";
import logo42 from "../assets/key clients/logo42.jpeg";

const KeyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const logos = [
    { src: logo1, width: "80px", height: "80px" },
    { src: logo2, width: "100px", height: "60px" },
    { src: logo3, width: "80px", height: "50px" },
    { src: logo4, width: "90px", height: "60px" },
    { src: logo5, width: "100px", height: "70px" },
    { src: logo6, width: "50px", height: "50px" },
    { src: logo7, width: "80px", height: "60px" },
    { src: logo8, width: "80px", height: "60px" },
    { src: logo9, width: "100px", height: "60px" },
    { src: logo10, width: "90px", height: "60px" },
    { src: logo11, width: "60px", height: "60px" },
    { src: logo12, width: "50px", height: "60px" },
    { src: logo13, width: "60px", height: "60px" },
    { src: logo14, width: "100px", height: "60px" },
    { src: logo15, width: "90px", height: "60px" },
    { src: logo16, width: "80px", height: "60px" },
    { src: logo17, width: "70px", height: "80px" },
    { src: logo18, width: "100px", h6eight: "0px" },
    { src: logo19, width: "60px", height: "60px" },
    { src: logo20, width: "60px", height: "60px" },
    { src: logo21, width: "80px", height: "50px" },
    { src: logo22, width: "60px", height: "70px" },
    { src: logo23, width: "80px", height: "40px" },
    { src: logo24, width: "70px", height: "70px" },
    { src: logo25, width: "70px", height: "80px" },
    { src: logo26, width: "80px", height: "60px" },
    { src: logo27, width: "60px", height: "60px" },
    { src: logo28, width: "80px", height: "50px" },
    { src: logo29, width: "60px", height: "50px" },
    { src: logo30, width: "70px", height: "60px" },
    { src: logo31, width: "80px", height: "60px" },
    { src: logo32, width: "60px", height: "60px" },
    { src: logo33, width: "80px", height: "50px" },
    { src: logo34, width: "60px", height: "60px" },
    { src: logo35, width: "60px", height: "60px" },
    { src: logo36, width: "120px", height: "40px" },
    { src: logo37, width: "120px", height: "40px" },
    { src: logo38, width: "120px", height: "60px" },
    { src: logo39, width: "120px", height: "60px" },
    { src: logo40, width: "120px", height: "60px" },
    { src: logo41, width: "60px", height: "60px" },
    { src: logo42, width: "70px", height: "70px" },
  ];

  const nextCard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % logos.length);
      setIsTransitioning(false);
    }, 500); // Adjust the delay as needed
  };

  const prevCard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + logos.length) % logos.length);
      setIsTransitioning(false);
    }, 100); // Adjust the delay as needed
  };

  const cardSliderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflowX: "auto",
    opacity: isTransitioning ? 0 : 1,
    transition: "opacity 0.5s ease",
  };

  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const cardsPerScreen = isMobileScreen ? 3 : 8;

  const cardContainerStyle = {
    flex: "0 0 100px",
    margin: "10px",
  };

  const navButtonStyle = {
    position: "absolute",
  };

  const prevButtonStyle = {
    ...navButtonStyle,
    left: "10px",
    backgroundColor: "#E0E0E0",
    marginLeft: { xs: "0px", sm: "100px", md: "100px" },
  };

  const nextButtonStyle = {
    ...navButtonStyle,
    right: "10px",
    backgroundColor: "#E0E0E0",
    marginRight: { xs: "0px", sm: "50px" },
  };
  return (
    <div>
      <div style={cardSliderStyle}>
        {logos
          .slice(currentIndex, currentIndex + cardsPerScreen)
          .map((logo, index) => (
            <div key={index} style={cardContainerStyle}>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90px",
                }}
              >
                <Box sx={{ width: logo.width, height: logo.height }}>
                  <img
                    src={logo.src}
                    alt={`logo${currentIndex + index + 1}`}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Paper>
            </div>
          ))}
      </div>
      <IconButton style={prevButtonStyle} onClick={prevCard}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton style={nextButtonStyle} onClick={nextCard}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};

export default KeyClients;