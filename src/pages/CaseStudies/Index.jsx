import React from "react";
// import CaseStudy1 from "./CaseStudy1";
// import CaseStudy2 from "./CaseStudy2";
// import CaseStudy3 from "./CaseStudy3";
// import Logo1 from "../../assets/ACCF.png";
// import Logo2 from "../../assets/APART Logo2.png";
// import Logo3 from "../../assets/path2.png";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { caseStudies } from "./Data";
import CaseStudy from "./CaseStudy";

const Index = () => {
  return (
    <div>

      <Box>

        <Box sx={{ p: { xs: 6, md: "20px 100px" } }}>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Switzer', sans-serif",
              fontWeight: "bold",
              color: "#363435",
              fontSize: { xs: "40px", md: "90px" },
            }}
          >
            Case Studies
          </Typography>

          <Grid container spacing={3} sx={{ marginTop: "20px" }}>

            {
              caseStudies.map(({ title, content, logo, link, logoH, logoW }) => {
                return <CaseStudy title={title} content={content} logo={logo} logoH={logoH} logoW={logoW} link={link} />
              })
            }

          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Index;
