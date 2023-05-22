import React, { useState } from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { data } from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JJMLogo from "../../assets/Group 52.png";
import NHMLogo from "../../assets/NHM.png";
import Modal from "@mui/material/Modal";
import img1 from "../../assets/JJMM1.png";
import img2 from "../../assets/JJMM2.png";
import img3 from "../../assets/JJMM3.png";
import img4 from "../../assets/Banner_Assamese.png";
import img5 from "../../assets/Hoarding_Assamese.png";
import img6 from "../../assets/Poster_English.png";
import CloseIcon from "@mui/icons-material/Close";

// Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, sm: 400, md: "100vw" },
  height: "100vh",
  background: "none",
  outline: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  p: 4,
};

const OurWork = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id, setId] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box sx={{ padding: "20px 50px" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "#363435",
            fontSize: { xs: "40px", md: "90px" },
          }}
        >
          Our Work{" "}
        </Typography>

        <Typography variant="h6">
          We create brand experiences the clients love
        </Typography>

        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item md={3} sm={6} xs={12}>
              <Paper
                elevation={5}
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 2,
                  p: 2,
                  marginTop: "20px",
                  height: "30vh",
                }}
              >
                <img
                  src={`assets/${item.logo}`}
                  alt={item.name}
                  width={item.logoW}
                  height={item.logoH}
                />

                <Typography variant="body1">{item.name}</Typography>

                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#2F5325" }}
                  fullWidth
                  onClick={handleOpen}
                >
                  View More
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal open={open}>
        <Box sx={style}>
          <Box
            display="flex"
            gap={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              marginTop: "100px",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            <Box
              backgroundColor="white"
              p={2}
              borderRadius="10px"
              margin="auto"
            >
              <img src={JJMLogo} alt="" width="70px" height="70px" />
            </Box>
            <Box>
              <Typography
                variant="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Jal Jeevan Mission Meghalaya
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" sx={{ color: "white" }}>
                Insight brandcom is currently providing social media management,
                creative services, and communicaiton need assesment survey for
                Jal Jeevan Misson in Meghalaya
              </Typography>
            </Box>
          </Box>
          <Box p={2} margin="auto" width="600px" marginBottom="100px">
            <Slider {...settings}>
              <div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img1}
                    alt="slider-img"
                    width="500px"
                    height="400px"
                  />
                </Box>
              </div>
              <div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img2}
                    alt="slider-img"
                    width="250px"
                    height="400px"
                  />
                </Box>
              </div>
              <div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img3}
                    alt="slider-img"
                    width="250px"
                    height="400px"
                  />
                </Box>
              </div>
            </Slider>
          </Box>
        </Box>
      </Modal>

      <Modal open={open}>
        <Box sx={style}>
          <Box
            display="flex"
            gap={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              marginTop: "100px",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            <Box
              backgroundColor="white"
              p={2}
              borderRadius="10px"
              margin="auto"
            >
              <img src={NHMLogo} alt="" width="90px" height="70px" />
            </Box>
            <Box>
              <Typography
                variant="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Jal Jeevan Mission Meghalaya
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" sx={{ color: "white" }}>
                Insight brandcom is currently providing social media management,
                creative services, and communicaiton need assesment survey for
                Jal Jeevan Misson in Meghalaya
              </Typography>
            </Box>
            <CloseIcon onClick={handleClose}/>
          </Box>
          <Box p={2} margin="auto" width="600px" marginBottom="100px">
            <Slider {...settings}>
              <div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img4}
                    alt="slider-img"
                    width="500px"
                    height="400px"
                  />
                </Box>
              </div>
              <div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img5}
                    alt="slider-img"
                    width="550px"
                    height="400px"
                  />
                </Box>
              </div>
              <div>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img6}
                    alt="slider-img"
                    width="350px"
                    height="400px"
                  />
                </Box>
              </div>
            </Slider>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default OurWork;
