import React from "react";
import Logo from "../../assets/NHM.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/NHM 1.png";
import img2 from "../../assets/NHM2.png";
import img3 from "../../assets/NHM 3.png";
import img4 from "../../assets/NHM 4.png";

const CaseStudy7 = () => {
  return (
    <div>
      <Box
        sx={{
          width: { xs: "80vw", sm: "80vw" },
          paddingLeft: { xs: "10vw", sm: "10vw", md: "12vw" },
          paddingTop: { md: "3vh" },
          marginTop: "100px",
        }}
      >
        <img src={Logo} width="100px" alt="" />
        <Box
          marginTop="20px"
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            width: { md: "40vw" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "900",
              fontFamily: "Switzer-Variable",
              color: "#363435",
            }}
          >
            National Health Mission (NHM)
          </Typography>

          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: "1.7rem",
              fontWeight: "300",
            }}
          >
            Challenges
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },
            }}
          >
            To get citizens of Assam to take note of the day, especially
            youngsters
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: "1.7rem",
              fontWeight: "300",
            }}
          >
            The Journey
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },
            }}
          >
            The campaign started 7 days before the yoga day that is 21st June
            2021. Every day a half page ad was released highlighting one Asana,
            benefits and technique to perform the Asana. The ad was attractive
            and in colour. Anyone reading the paper will definitely take note of
            the ad. There was a Yoga Contest that was advertised everyday asking
            people to perform any one asana of their choice and record
            themselves. Uploaded videos would be scanned and one would be
            selected as a winner.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },
            }}
          >
            A full-page ad was released on International Day of Yoga, the 21st
            of June, asking people to stay tuned for the winner's announcement
            on their page, promoting followers.
          </Typography>

          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: "1.7rem",
              fontWeight: "300",
            }}
          >
            Impact
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },
            }}
          >
            The campaign effectively reached out to many citizens across the
            State, resulting in entries. A winner was selected and rewarded. We
            were glad to note that many youngsters took note of the day. The
            hoarding at a prime location and everyday ads on the newspaper
            helped promote awareness and appreciation.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          p: { xs: "0px", sm: "20px 150px" },
          width: { xs: "100%", sm: "450px", md: "950px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img src={img1} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img src={img2} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img src={img3} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img src={img4} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy7;
