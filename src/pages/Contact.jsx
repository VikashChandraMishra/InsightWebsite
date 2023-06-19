import { Box, Grid, Typography } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <Box
        display="flex"
        sx={{
          p: { xs: "30px", sm: "20px 150px" },
          display: "flex",
          marginTop: "15vh",
          justifyContent: { xs: "center", sm: "start" },
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column">
          <Typography
            variant="p"
            sx={{
              fontWeight: "800",
              color: "#363435",
              fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem" },
              fontFamily: "Switzer-Variable",
            }}
          >
            Contact Us
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{
              paddingTop: "2rem",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#363435",
                fontWeight: "300",
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" },
              }}
            >
              For projects and collaboration
            </Typography>

            <Box
              display="flex"
              gap={9}
              sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
            >
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="p"
                  sx={{
                    color: "#363435",
                    fontSize: "0.9rem",
                  }}
                >
                  Email us at
                </Typography>

                <Box
                  sx={{
                    width: { xs: "280px", sm: "200px", md: "200px" },
                    backgroundColor: "#2F5325",
                    borderRadius: "8px",
                    p: 1,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    info@insightbrandcom.com
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="p"
                  sx={{
                    color: "#363435",
                    fontSize: "0.9rem",
                  }}
                >
                  Call us at
                </Typography>

                <Box
                  sx={{
                    width: { xs: "280px", sm: "200px", md: "200px" },
                    backgroundColor: "#2F5325",
                    borderRadius: "8px",
                    p: 1,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    +91 361 2522 444
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  variant="p"
                  sx={{
                    color: "#363435",
                    fontSize: "0.9rem",
                  }}
                >
                  Or, call us at
                </Typography>

                <Box
                  sx={{
                    width: { xs: "280px", sm: "200px", md: "200px" },
                    backgroundColor: "#2F5325",
                    borderRadius: "8px",
                    p: 1,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "0.8rem",
                    }}
                  >
                    +91 9706089025
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Grid
              container
              sx={{
                width: { xs: "100%", md: "500px" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                md={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "0.8rem",
                  }}
                >
                  Headquaters
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "0.8rem",
                  }}
                >
                  Insight Brandcom Private Limited
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "0.8rem",
                  }}
                >
                  4A, Royale Arcade, B.Baruah Road,
                  <br />
                  Ulubari, Guwahati- 781007, Assam
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  Branch Locations
                </Typography>
              </Grid>
            </Grid>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
                height: { xs: "20vh", md: "10vh" },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Kolkata
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  28 Senhati Co-operative Colony. 700034, West Bengal
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  New Delhi
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  The Galleria, 1st Floor DG 125B, Mayur Vihar, DC Plot No.1B, Phase 1, 110091
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
                height: { xs: "20vh", md: "10vh" },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Jaipur
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  91 A Jagdamba Nagar Ajmer Road, 302006, Rajasthan
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Bhopal
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  B-34, Place Orchard, Phase-2, Kolar Road, Madhya Pradesh
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
                height: { xs: "20vh", md: "10vh" },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Bhubaneshwar
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  MIG 73, 1st Floor, BDA Colony, Phase I, Pokhariput SBI ATM r
                  -751030, Orissa
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Shillong
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Qualapatty, East Khasi Hills, 793001, Meghalaya
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;