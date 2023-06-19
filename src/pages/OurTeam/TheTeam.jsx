import React, { useState } from "react";
import { data } from "./Data";
import { Box, Grid, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, sm: 600, md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
  outline: "none",
};

const TheTeam = () => {

  const [open, setOpen] = React.useState(false);
  const [teamMember, setTeamMember] = useState(null);

  const handleOpen = (id) => {
    const member = data.find((member) => member.id === id);
    setTeamMember(member);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (

    <div>

      <Box
        sx={{
          paddingLeft: { xs: "7vw", md: "10vw" },
          marginTop: "120px",
        }}
      >

        <Box display="flex" flexDirection="column" gap={5}>

          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#363435",
              fontFamily: "Switzer-Variable",
              fontSize: { xs: "3rem", sm: "4rem", md: "7rem" },
            }}
          >
            The Team
          </Typography>

          <Box display="flex" flexDirection="column">

            <Typography variant="p" sx={{ color: "#363435", width: { xs: '90%', md: '50%' }, marginBottom: "20px", fontSize: '0.8rem' }}>
              We are a dynamic and talented group of individuals dedicated to creating innovative and impactful advertising campaigns that drive results for our clients. With a diverse range of expertise and a passion for creativity, our team is here to help you elevate your brand and reach new heights. Our team of experts are the visionary creative directors, skilled copy writers, talented graphic designers ,dedicated account managers, Social & Digital Marketers and impeccable videographers and editors.
            </Typography>

            <Typography variant="p" sx={{ color: "#363435", width: { xs: '90%', md: '50%' }, marginBottom: "20px", fontSize: '0.8rem' }}>
              We have branched out to 7 cities in India, New Delhi, Kolkata, Jaipur, Bhubaneswar, Bhopal and Shillong.
              Collaboratively, our team strives to understand your unique brand identity, goals, and challenges to develop tailored advertising solutions that resonate with your audience. We are passionate about delivering exceptional results and are committed to exceeding your expectations.
            </Typography>

            <Typography variant="p" sx={{ color: "#363435", fontWeight: "bold", fontSize: "2rem" }}>
              Leadership
            </Typography>

            <Typography variant="p">
              "Great things in business are never done by one person; they're done by a team of people"
            </Typography>

            <Typography variant="p" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Steve Jobs
            </Typography>

          </Box>

        </Box>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "20px", width: { xs: "100%", md: "62%" } }}
        >

          {data.map((item) => {
            return (
              <>

                <Grid item xs={6} sm={4} md={4}>

                  <Box
                    sx={{
                      width: { xs: "150px", sm: "180px", md: "230px" },
                      height: { xs: "200px", sm: "200px", md: "250px" },
                      margin: "auto",
                    }}
                    onClick={() => handleOpen(item.id)}
                  >

                    <img
                      src={`images/team members/${item.image}`}
                      alt=""
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "10%" }}
                    />

                  </Box>

                  <Box display="flex" flexDirection="column">

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      {item.name}
                    </Typography>

                    <Typography variant="p" sx={{ textAlign: "center" }}>
                      {item.Designation}
                    </Typography>

                  </Box>

                </Grid>

              </>
            );
          })}

        </Grid>

      </Box>

      {/* Team Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >

        <Fade in={open}>

          {teamMember && (

            <Box sx={style}>

              <Box
                display="flex"
                gap={10}
                width="100%"
                height="100%"
                p={1}
                justifyContent="center"
                alignItems="center"
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
              >

                <Box
                  sx={{
                    width: { xs: "150px", sm: "200px" },
                    height: { xs: "150px", sm: "200px" },
                    marginTop: { xs: "20px", sm: "0px" },
                  }}
                >

                  <img
                    src={`images/team members/${teamMember.image}`}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />

                </Box>

                <Box
                  sx={{
                    width: { xs: 200, sm: 500 },
                    gap: { xs: 2, sm: 15 },
                  }}
                  display="flex"
                  flexDirection="column"
                >

                  <Box
                    display="flex"
                    sx={{
                      justifyContent: {
                        xs: "initial",
                        sm: "space-between",
                      },
                      gap: { xs: 5, sm: 0 },
                    }}
                  >

                    <Box>

                      <Typography
                        variant="h5"
                        sx={{
                          color: "#363435",
                          fontWeight: '400',
                          fontFamily: "Switzer-Variable"
                        }}
                      >{teamMember.name}</Typography>

                      <Typography
                        variant="h5"

                        sx={{
                          color: "#363435",
                          fontWeight: '400',
                          fontFamily: "Switzer-Variable"
                        }}
                      >
                        {teamMember.Designation}
                      </Typography>

                    </Box>

                    <CloseIcon onClick={handleClose} />

                  </Box>

                  <Box>

                    <Typography variant="p">
                      {teamMember.Description}
                    </Typography>

                  </Box>

                </Box>

              </Box>

            </Box>

          )}

        </Fade>

      </Modal>

    </div>

  );

};

export default TheTeam;