import React from "react";
import Logo from "../../assets/Image 9.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/Image 11.png";
import img2 from "../../assets/Image 12.png";
import img3 from "../../assets/Image 13.png";
import img4 from "../../assets/Image 14.png";
import img5 from "../../assets/Image 25.png";
import img6 from "../../assets/Image 22.png";

const CaseStudy4 = () => {
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
            CCI
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            Competition Commission Of India
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
            The social media presence of the entity was found to be lacking,
            with a low engagement rate of only 1.8%. Despite having a presence
            on various social media platforms, it was observed that the
            engagement rate remains low. Furthermore, there seems to be a gap in
            the form of the absence of Facebook and Instagram handles. The
            content shared by the entity on social media also lacks engagement
            and fails to inform or entertain the audience, as there are no
            engaging or informative Gifs or Videos.
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
            The Journey
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#363435",
              fontSize: { xs: "0.9rem", md: "0.8rem" },
            }}
          >
            The responsibilities included the creation and maintenance of
            official handles for CCI on various social media platforms. We also
            developed a content strategy and created customised brand hashtags
            for the same. In addition, content and creatives in English and
            Hindi for social media and digital platforms were created. Live
            webcasts of events on Facebook and YouTube were recommended.
            Effective online reputation management and query management is also
            carried out to enhance the brand's position. Finally, all social
            media handles are now verified with a blue tick.
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
            }}
          >
            Within a span of four months, we managed to achieve a reach of over
            one million on social media platforms. The overall engagement rate
            also witnessed an average increase of 10.46%, which is a significant
            accomplishment. Furthermore, the press and media outlets have begun
            to engage with CCI through its social media platform, which
            gradually has become the primary source of news and updates related
            to CCI. CCI's social media presence was not only successful in
            reaching out to its target audience but also managed to attract the
            attention of the press and media.
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
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "300px" },
              }}
            >
              <img src={img1} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "300px" },
              }}
            >
              <img src={img2} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "300px" },
              }}
            >
              <img src={img3} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "300px" },
              }}
            >
              <img src={img4} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "300px" },
              }}
            >
              <img src={img5} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "300px" },
              }}
            >
              <img src={img6} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy4;
