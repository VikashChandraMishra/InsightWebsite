import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div id="home">
      <Box
        sx={{
          p: "20px 100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, sm: 10 },
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "900",
            marginBottom: { xs: "0px", md: "100px" },
            color: "#363435",
            fontSize: { xs: "40px", md: "90px" },
            // textAlign: { xs: "center", sm: "start", md: "start" },
          }}
        >
          Connecting The Dots
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ width: { md: "400px" } }}
        >
          <Typography variant="h4">
            Creating effective and inclusive communication
          </Typography>
          <Typography
            variant="p"
            sx={{
              // textAlign: { xs: "center", sm: "start", md: "start" },
              fontSize: "14px",
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
              // textAlign: { xs: "center", sm: "start", md: "start" },
              fontSize: "14px",
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
              width: "150px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: { xs: "none", md: "250px" },
              marginTop: "50px",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
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