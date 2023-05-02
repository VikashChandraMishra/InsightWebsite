import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import Footer from "../components/Footer";

const WhatWeDo = () => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          p: { xs: 2, sm: "20px 100px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },

          alignItems: "center",
          gap: { xs: 5, sm: 10 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "900",
            color: "#363435",
            fontSize: { xs: "40px", md: "90px" },
          }}
        >
          What We Do
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ p: { xs: 2, sm: "20px 100px" } }}>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon1} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Communication Consultancy
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon2} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Brand Strategy Development
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon3} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Content & Design Services
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon4} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Audio Visual Production
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon5} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Digital Marketing
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon6} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "  enter" }}>
              Social Media Marketing
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon7} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Public Relations
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon8} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Events and Activations
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "120px", md: "150px" },
                height: { xs: "80px", sm: "120px", md: "150px" },
                borderRadius: "50%",
                backgroundColor: "darkgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={icon9} alt="" width="50%" height="50%" />
            </Box>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              Allied Services (Outdoor production, printing etc.)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WhatWeDo;
