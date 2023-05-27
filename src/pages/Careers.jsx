import React from "react";
import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
const Careers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        sx={{
          width: { xs: "90%", sm: "85%" },
          p: { xs: "10px 20px", sm: "20px 100px" },
        }}
      >
        <Box marginTop="20px" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h1" sx={{ 
            fontWeight: "bold",
            fontFamily: "Switzer-Variable",
            fontSize: {xs:"50px", md: "100px"}
            }}>
            Careers
          </Typography>
          <Typography variant="p"
          sx={{
            fontSize: "1.5rem"
          }}
          >Be part of the team. Join us.</Typography>

          <Typography variant="p"
          sx={{
            // fontWeight: "600",
            fontSize: "0.8rem",
            width: {xs: "100%", md: "50%"}
          }}
          >
            Are you a creative visionary looking for a place in the dynamic world of advertising? Join oInsight Brandcom and embark on an exciting journey that will elevate your career to new heights!

            We are seeking individuals with a passion for storytelling, design, and strategy to join our talented team of professionals. With a proven track record of creating groundbreaking campaigns for our clients, we provide the perfect platform for you to showcase your skills and make an impact in the industry.

            Don't miss this opportunity to collaborate with like-minded individuals, work on challenging projects, and be at the forefront of cutting-edge advertising techniques. To take the first step towards an extraordinary career, simply fill out our Google form and join us today!

            {/* Atlnsight, we help clients navigate, progress and thrive in a world
            of change. We help champion meaningful progress through creative,
            media, data and technology. Come, be part of a team that strives to
            do meaningful work and leave a profound impact on communities. */}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Vacancies
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Senior Visualizer
              </Typography>
              <KeyboardArrowDownIcon onClick={() => handleOpen(true)} />
            </Box>
            <Divider />
            {open && (
              <Box
                marginTop="20px"
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Company Description
                </Typography>
                <Typography variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numguam eius modi tempora incidunt ut
                </Typography>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Job Description
                </Typography>
                <Typography variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numguam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </Typography>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Required Qualifications
                </Typography>
                <Typography variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "darkgreen", alignSelf: "start" }}
                >
                  Apply for the position
                </Button>
              </Box>
            )}
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Experience Designer
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider />
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Content Writer
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Careers;