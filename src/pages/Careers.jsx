import React from "react";
import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Careers = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate(null);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        sx={{
          width: { xs: "90%", sm: "85%" },
          // p: { xs: "10vw 15vw", sm: "3vw " },
          marginLeft: { xs: "6vw", sm: "8vw", md: "12vw" },
          marginTop: { xs: "20vh", md: "20vh" },
        }}
      >
        <Box marginTop="20px" display="flex" flexDirection="column" gap={2}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "800",
              fontFamily: "Switzer-Variable",
              fontSize: { xs: "50px", md: "100px" },
              color: "#454a46",
            }}
          >
            Careers
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.7rem",
              color: "#454a46",
              // fontFamily: "Switzer-Thin",
              fontWeight: "300",
            }}
          >
            Be part of the team. Join us.
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: "300",
              // fontWeight: "600",
              color: "#454a46",
              fontSize: "0.8rem",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <p>
              Are you a creative visionary looking for a place in the dynamic
              world of advertising? Join Insight Brandcom and embark on an
              exciting journey that will elevate your career to new heights!
            </p>
            <p>
              We are seeking individuals with a passion for storytelling,
              design, and strategy to join our talented team of professionals.
              With a proven track record of creating groundbreaking campaigns
              for our clients, we provide the perfect platform for you to
              showcase your skills and make an impact in the industry.
            </p>

            <p>
              Don't miss this opportunity to collaborate with like-minded
              individuals, work on challenging projects, and be at the forefront
              of cutting-edge advertising techniques. To take the first step
              towards an extraordinary career, simply fill out our Google form
              and join us today!
            </p>

            {/* Atlnsight, we help clients navigate, progress and thrive in a world
            of change. We help champion meaningful progress through creative,
            media, data and technology. Come, be part of a team that strives to
            do meaningful work and leave a profound impact on communities. */}
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#454a46",
            }}
          >
            Vacancies
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "2px",
            width: { xs: "95vw", sm: "87vw", md: "75vw" },
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
            {/* <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  color: "#454a46",
                }}
              >
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
                <Link to="/apply">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#2F5325",
                      borderRadius: "8px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      color: "whitesmoke",
                    }}
                  >
                    Apply Now
                  </Button>
                </Link>
              </Box>
            )}
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Experience Designer
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Content Writer
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider /> */}
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Social Media Executive - Guwahati
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Copywriter - Guwahati
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Brand Servicing Manager - Guwahati
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            {/* <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Manager (F & A) - Guwahati
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box> */}
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Direct Sales Manager - Guwahati
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Sales Executive - Guwahati
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            {/* <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Direct Sales Manager - Silchar
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Sales Executive - Silchar
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box> */}
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Social Media Executive / Content Writer - Shillong
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />

            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Social Media Executive - Delhi
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Business Development Manager - Delhi
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Brand Servicing Manager - Kanpur
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Team Leader / Communication Expert - Bhopal
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Content Writer - Noida
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
            <Divider />
            <Box
              sx={{
                padding: "1.2rem 0rem",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "1.4rem",
                  color: "#454a46",
                  fontWeight: "bold",
                }}
              >
                Graphic Designer - Noida
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => { navigate('/apply'); }}
                >
                  Apply Now
                </Button>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Divider />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Careers;
