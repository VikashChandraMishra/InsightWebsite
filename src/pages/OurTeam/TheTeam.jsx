import React, { useState } from "react";
import { data } from "./Data";
import { Box, Grid, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
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

  const [id, setId] = useState(null);

  return (
    <div>
      <Box
        sx={{
          padding: { xs: 2, sm: "20px 100px" },
        }}
      >
        <Box display="flex" flexDirection="column" gap={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#363435",
              fontSize: { xs: "40px", md: "90px" },
            }}
          >
            The Team
          </Typography>
          <Box display="flex" flexDirection="column">
            <Typography variant="p">
              "Great things in buimess are not done by one person they're done
              by a team or people"
            </Typography>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Steve Jobs
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          {data.map((item) => {
            return (
              <>
                <Grid item xs={6} sm={4} md={2.4}>
                  <Box
                    sx={{
                      width: { xs: "150px", sm: "200px" },
                      height: { xs: "200px", sm: "250px" },
                      margin: "auto",
                    }}
                    onClick={() => handleOpen(item.id)}
                  >
                    <img
                      src={`images/team/${item.image}`}
                      alt=""
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "10px" }}
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
                    height: { xs: "200px", sm: "250px" },
                    marginTop: { xs: "20px", sm: "0px" },
                  }}
                >
                  <img
                    src={`images/team/${teamMember.image}`}
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
                      <Typography variant="h5">{teamMember.name}</Typography>
                      <Typography variant="h5">
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
