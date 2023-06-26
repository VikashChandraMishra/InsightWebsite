import React from "react";
import Logo from "../../assets/ACCF.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/20220426_213406.png";
import img2 from "../../assets/WhatsApp Image 2023-03-16 at 17.36.45.png";
import img3 from "../../assets/20220426_213231.png";
import img4 from "../../assets/WhatsApp Image 2023-03-16 at 17.36.47(1).png";
const CaseStudy1 = () => {
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
        <img src={Logo} width="200px" alt="" />
        <Box
          marginTop="10px"
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            width: { md: "40vw" },
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              fontSize: "2.1rem",
            }}
          >
            Assam Cancer Care Foundation
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.8rem",
              fontWeight: "300",
              color: "#454a46",
            }}
          >
            Challenges
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            The new centres are located at Dibrugarh, Barpeta, Jorhat,
            Kokrajhar, Lakhimpur, Tezpur, Darrang and Tinsukia, and will offer
            diagnostic and day care services, including chemotherapy towards
            treatment and palliative care of cancer cases.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            This launch was going to happen simultaneously at all the districts
            at the same time. Assam Medical College, Dibrugarh was also
            celebrating their 75th years of establishment.
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.8rem",
              fontWeight: "300",
              color: "#454a46",
            }}
          >
            The Journey: Launch of Cancer Care Centres in 7 locations
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            To combat our challenge of preparing an exhibit to announce and
            glorify the 7 cancer hospitals, we created a wall of glory. This
            wall showcased the geography of the newly inaugurated hospitals and
            the ones yet to be inaugurated.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            We created colourful standees that were informative and attractive.
            There were installations and audio visuals that highlighted the
            facilities of each Cancer hospital.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            We planned and created an installation that showcased all the cancer
            centres in different regions. We creatively represented it with a
            backlit river panel with the information listed out alongside. Other
            details of the project were showcased with standees and banners that
            not just welcomed our Hon'ble Prime Minister but also delighted him.
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.8rem",
              fontWeight: "300",
              color: "#454a46",
            }}
          >
            Impact
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            We thank the Government of Assam and Assam Cancer Care Foundation
            (ACCF) for entrusting us with the responsibility of the Cancer Care
            exhibition held in Dibrugarh For Hon'ble Prime Minister. This was
            followed by the launch of 7 State-of-the-art Cancer Care Centres,
            and the Foundation Laying Ceremony of 7 new Cancer Care Centres by
            Shri Narendra Modi.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#454a46",
              fontSize: { xs: '0.9rem', md: "0.8rem" },
            }}
          >
            A huge congratulations to the ACCF team for coordinating and pulling
            this off with us. We are delighted that it was a huge success.
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
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "350px", sm: "450px", md: "480px" },
              }}
            >
              <img src={img1} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "350px", sm: "450px", md: "480px" },
              }}
            >
              <img src={img2} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "350px", sm: "450px", md: "480px" },
              }}
            >
              <img src={img3} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "350px", sm: "450px", md: "480px" },
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

export default CaseStudy1;
