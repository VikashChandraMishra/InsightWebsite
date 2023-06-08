import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { data } from "./Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JJMLogo from "../../assets/JJM.png";
import NHMLogo from "../../assets/NHM.png";
import Modal from "@mui/material/Modal";
import img1 from "../../assets/Press ad 1.png";
import img2 from "../../assets/Post 1 copy.png";
import img3 from "../../assets/Post 3_1 copy.png";
import img4 from "../../assets/Banner_Assamese.png";
import img5 from "../../assets/Hoarding_Assamese.png";
import img6 from "../../assets/Poster_English.png";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Modal Style
const style = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const OurWork = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewMore = (item) => {
    setSelectedItem(item);
    console.log(item)
    handleOpen();
  };

  return (
    <>
      <Box
        sx={{
          padding: { xs: "20px", md: "20px 150px" },
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "#363435",
            fontSize: { xs: "40px", md: "7rem" },
            fontFamily: "Switzer-Variable",
          }}
        >
          Our Work{" "}
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: "1.5rem",
            color: "#363435",
          }}
        >
          We create brand experiences the clients love
        </Typography>

        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid
              item
              md={3}
              sm={6}
              xs={12}
              onClick={() => handleViewMore(item)}
              sx={{
                cursor: "pointer"
              }}
            >
              <Paper
                elevation={5}
                key={item.id}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                  justifyContent: "flex-start",
                  gap: 2,
                  p: 2,
                  marginTop: "20px",
                  height: "25vh",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <img
                  src={`assets/${item.logo}`}
                  alt={item.name}
                  width={item.logoW}
                  height={item.logoH}
                />

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    // marginTop: `${item.labelMarginTop}`
                  }}
                >
                  {item.name}
                </Typography>
              </Paper>
              <Box
                sx={{
                  backgroundColor: "#2F5325",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  // marginTop: "100px",
                  // p: 0.3,
                  marginTop: "-3px",
                  position: "relative",
                  zIndex: 0,
                  p: "5px 15px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "white", fontSize: "14px" }}
                >
                  View more
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {
        open ?
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                gap={2}
                width="80%"
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
              >
                <Box
                  sx={{
                    // backgroundColor: "white",
                    // height: "100px",
                    // width: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1,
                    borderRadius: "10px",
                  }}
                >
                  <img src={`assets/${selectedItem.logo}`} alt="" width={selectedItem.logoW} height={selectedItem.logoH} />
                </Box>
                <Box>
                  <Typography
                    variant="p"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {selectedItem.name}
                  </Typography>
                </Box>
              </Box>
              {/* <Box>
                  <Typography variant="p" sx={{ color: "white", fontSize: "13px" }}>
                    Insight brandcom is currently providing social media management,
                    creative services, and communicaiton need assesment survey for
                    Jal Jeevan Misson in Meghalaya
                  </Typography>
                </Box> */}

              <Carousel
                showThumbs={false}
                showIndicators={false}
                // selectedItem={selectedItem ? selectedItem.id - 1 : 0}
                selectedItem={0}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <IconButton
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{
                        zIndex: 2,
                        position: "absolute",
                        top: "50%",
                        left: "2%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        // backgroundColor: "rgb(255, 255, 255, 0.5)", 
                        backgroundColor: "black"
                      }}
                    >
                      <ArrowBackIosIcon sx={{ color: "white" }} />
                    </IconButton>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <IconButton
                      onClick={onClickHandler}
                      title={label}
                      style={{
                        zIndex: 2,
                        position: "absolute",
                        top: "50%",
                        right: "2%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        // backgroundColor: "rgb(255, 255, 255, 0.5)",
                        backgroundColor: "black"
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ color: "white" }} />
                    </IconButton>
                  )
                }
              >
                <div>
                  {/* <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    gap={2}
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      p: "0px 100px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "white",
                        height: "100px",
                        width: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 1,
                        borderRadius: "10px",
                      }}
                    >
                      <img src={`assets/${selectedItem.logo}`} alt="" width={selectedItem.logoW} height={selectedItem.logoH} />
                    </Box>
                    <Box display="flex" alignItems="start">
                      <Typography
                        variant="p"
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                      >
                        {selectedItem.name}
                      </Typography>
                    </Box>
                  </Box> */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        textAlign: "center",
                        // paddingBottom: "3px"
                        // width: { sx: "300px", md: "550px" }
                      }}
                    >
                      {selectedItem.imgLabel[0]}
                    </Typography>
                  </Box>
                  <img
                    src={`assets/${selectedItem.img1}`}
                    alt="1"
                    style={{
                      maxHeight: `${selectedItem.imgH[0]}`,
                      maxWidth: `${selectedItem.imgW[0]}`,
                      margin: "auto",
                      display: "block",
                    }}
                  />
                </div>

                <div>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        textAlign: "center",
                        // width: { sx: "300px", md: "550px" }
                      }}
                    >
                      {selectedItem.imgLabel[1]}
                    </Typography>
                  </Box>
                  <img
                    src={`assets/${selectedItem.img2}`}
                    alt="2"
                    style={{
                      maxHeight: `${selectedItem.imgH[1]}`,
                      maxWidth: `${selectedItem.imgW[1]}`,
                      margin: "auto",
                      display: "block",
                    }}
                  />
                </div>
                <div>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        textAlign: "center",
                        // width: { sx: "300px", md: "550px" }
                      }}
                    >
                      {selectedItem.imgLabel[2]}
                    </Typography>
                  </Box>
                  <img
                    src={`assets/${selectedItem.img3}`}
                    alt="3"
                    style={{
                      maxHeight: `${selectedItem.imgH[2]}`,
                      maxWidth: `${selectedItem.imgW[2]}`,
                      margin: "auto",
                      display: "block",
                    }}
                  />
                </div>

                {
                  selectedItem.img4 ?
                    <div>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="p"
                          sx={{
                            color: "white",
                            fontSize: "16px",
                            textAlign: "center",
                            // width: { sx: "300px", md: "550px" }
                          }}
                        >
                          {selectedItem.imgLabel[3]}
                        </Typography>
                      </Box>
                      <img
                        src={`assets/${selectedItem.img4}`}
                        alt="4"
                        style={{
                          maxHeight: `${selectedItem.imgH[3]}`,
                          maxWidth: `${selectedItem.imgW[3]}`,
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </div>
                    :
                    <div>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="p"
                          sx={{
                            color: "white",
                            fontSize: "16px",
                            textAlign: "center",
                            // width: { sx: "300px", md: "550px" }
                          }}
                        >
                          {selectedItem.imgLabel[1]}
                        </Typography>
                      </Box>
                      <img
                        src={`assets/${selectedItem.img2}`}
                        alt="2"
                        style={{
                          maxHeight: `${selectedItem.imgH[1]}`,
                          maxWidth: `${selectedItem.imgW[1]}`,
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </div>

                }

                {
                  selectedItem.img5 ?
                    <div>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="p"
                          sx={{
                            color: "white",
                            fontSize: "16px",
                            textAlign: "center",
                            // width: { sx: "300px", md: "550px" }
                          }}
                        >
                          {selectedItem.imgLabel[4]}
                        </Typography>
                      </Box>
                      <img
                        src={`assets/${selectedItem.img5}`}
                        alt="5"
                        style={{
                          maxHeight: `${selectedItem.imgH[4]}`,
                          maxWidth: `${selectedItem.imgW[4]}`,
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </div>
                    :
                    <div>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="p"
                          sx={{
                            color: "white",
                            fontSize: "16px",
                            textAlign: "center",
                            // width: { sx: "300px", md: "550px" }
                          }}
                        >
                          {selectedItem.imgLabel[4]}
                        </Typography>
                      </Box>
                      <img
                        src={`assets/${selectedItem.img1}`}
                        alt="1"
                        style={{
                          maxHeight: `${selectedItem.imgH[4]}`,
                          maxWidth: `${selectedItem.imgW[4]}`,
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </div>
                }

              </Carousel>

              <CloseIcon
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
                onClick={handleClose}
              />
            </Box>
          </Modal>
          : ""
      }

    </>
  );
};

export default OurWork;
