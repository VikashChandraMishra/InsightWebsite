import React from "react";
import Logo from "../../assets/DOA.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/DOA 1.png";
import img2 from "../../assets/DOA 2.png";
import img3 from "../../assets/DOA 3.png";

const CaseStudy5 = () => {
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
        <Box
          sx={{
            width: { xs: "250px", sm: "350px" },
          }}
        >
          <img src={Logo} width="100%" height="100%" alt="" />
        </Box>
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
            Department of Agriculture
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
            There were significant obstacles in the form of a lack of awareness,
            schemes, and benefits that were unknown to the farmers.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#363435",
              fontSize: "1.7rem",
              fontFamily: "Switzer-Variable",
              fontWeight: "300",
            }}
          >
            The Journey - Krishok Hojagota Abhijan: A Roadshow by the
            Directorate of Agriculture
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },

              fontFamily: "Switzer-Variable",
              fontWeight: "300",
            }}
          >
            Initiated by the Directorate of Agriculture, a drive was conducted
            for 45 days to raise awareness and to tackle the lack of awareness,
            impart information about schemes and benefits to the farmers. 20
            vehicles were installed with large-sized LED screens that moved
            across all 33 districts of the State. The LED vans displayed
            audio-visuals based on the demographic and linguistic patterns of
            the region in Assam on different kinds of farming techniques and
            mechanisms along with showcasing various schemes, technological
            inventions, upliftment, and introduction of machinery to boost
            agricultural sector of Assam.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },

              fontFamily: "Switzer-Variable",
              fontWeight: "300",
            }}
          >
            Notable schemes included the National Food Security Mission 2020-21,
            Soil Health Card Programme, PMFBY (Pradhan Mantri Fasal Bima
            Yojana), and Targeting Rice Fallow Areas TRFA (Pulse) 2019-20. The
            entire roster of District Agriculture Officers was involved in the
            process, coordinating with the Vehicle (Van) Driver and support
            staff on the daily basis and guiding them as to where to target the
            procedure for maximum impact and reach. Daily reports were shared by
            the Driver and support staff along with photos that were timestamped
            and location stamped.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#363435",
              fontSize: "1.7rem",
              fontFamily: "Switzer-Variable",
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

              fontFamily: "Switzer-Variable",
              fontWeight: "300",
            }}
          >
            The entire rural drive under D.O.A was a huge success. The activity
            helped increase awareness and knowledge of the farmers in different
            aspects such as the use of machinery, and agricultural techniques
            along with a profound understanding of the schemes and benefits
            provided to farmers overall.
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },

              fontFamily: "Switzer-Variable",
              fontWeight: "300",
            }}
          >
            In 45 days of the initiative, the activity reached out to more than
            80% of the farming population of rural Assam (27.2 lakh farmers)
            inclusive of households small & large, making them aware of the
            facets mentioned above.
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
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy5;
