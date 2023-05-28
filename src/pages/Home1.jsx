import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div id="home">
      <Box
        sx={{
          marginTop: "15vh",
          marginLeft: "15vw",
          marginRight: "15vw",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, sm: 10 },
          // marginTop: "20vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "900",
            marginBottom: { xs: "0px", md: "10vh" },
            color: "#363435",
            fontSize: { xs: "40px", md: "90px" },
            fontFamily: "Switzer-Variable"
            // textAlign: { xs: "center", sm: "start", md: "start" },
          }}
        >
          Connecting The Dots
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            width: { md: "27.5vw" },
            marginTop: { xs: "0vh", md: "15vh" }
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: '1.5rem',
              color: "#454a46",
              fontWeight: "300",
              width: { md: '20vw' }
            }}
          >
            Creating effective and inclusive communication
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              // textAlign: { xs: "center", sm: "start", md: "start" },
              fontSize: "0.7rem",
            }}
          >
            Connecting the dots is crucial in today's complex and rapidly
            changing world, where we are constantly bombarded with information.
            It allows us to make connections that spark creativity and
            innovation. Enabling us to think critically, make informed
            decisions, and develop simple, yet innovative solutions to complex
            problems.
          </Typography>

          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              // textAlign: { xs: "center", sm: "start", md: "start" },
              fontSize: "0.7rem",
            }}
          >
            At Insight Brandcom, that's our philosophy. We work with brands on
            their journey by <b>creating compelling</b> and
            <b> integrated communications </b>. Fusing together an elixir of
            <i>
              <b> strategy, creativity and technology </b>
            </i>
            to connect the dots, we weave a tapestry of{" "}
            <b> compelling stories </b> that help organisations achieve their
            goals. Know more
          </Typography>
          <Box
            sx={{
              backgroundColor: "#2F5325",
              width: "120px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: { xs: "none", md: "15vw" },
              marginTop: "10vh",
              cursor: "pointer",
            }}
          >
            <Typography variant="p" sx={{
              color: "white",
              fontFamily: 'Switzer-Extralight',
              p: "0.1rem",
              fontSize: '1.2rem'
            }}>
              Know more
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <Box marginTop="100px">
        <WhoWeAre />
      </Box> */}
      {/* <Box marginTop="100px">
        <WhatWeDo />
      </Box> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;