import { Box, Typography } from "@mui/material";

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

        <Box
          display="flex"
          flexDirection="column"
        >

          <Typography
            variant="p"
            sx={{
              fontWeight: "800",
              color: "#363435",
              fontSize: { xs: "60px", md: "120px" },
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
              paddingTop: "2rem"
            }}
          >

            <Typography
              variant="p"
              sx={{
                color: "#363435",
                fontWeight: "300",
                fontSize: { xs: "1.5rem", md: "2rem" },
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
                    fontSize: "0.9rem"
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
                    fontSize: "0.9rem"
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

            </Box>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                height: {xs: "20vh", md:"10vh"},
                gap: { xs: 2, sm: 5 },
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography
                 variant="p"
                 sx={{
                  fontSize: "0.8rem",
                  color: "#363435",
                }}
                 >
                  4A, Royale Arcade, B.Baruah Road, Ulubari, Guwahati- 781007,
                  Assam
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography 
                variant="p"
                sx={{
                  fontSize: "0.8rem",
                  color: "#363435",
                }}
                >
                  MIG 73, 1st Floor, BDA Colony, Phase I, Pokhariput
                  <br />
                  SBI ATM Bhubaneshwar -751030, Orissa
                </Typography>

              </Box>

            </Box>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
                height: {xs: "20vh", md:"10vh"},
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography 
                variant="p"
                sx={{
                  fontSize: "0.8rem",
                  color: "#363435",
                }}
                >
                  28 Senhati Co-operative Colony. Kolkata-700034, West Bengal
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography 
                variant="p"
                sx={{
                  fontSize: "0.8rem",
                  color: "#363435",
                }}
                >
                  B-34, Place Orchard, Phase-2, Kolar Road, Bhopal, Madhya
                  Pradesh
                </Typography>

              </Box>

            </Box>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
                height: {xs: "20vh", md:"10vh"},
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  The Galleria, 1st Floor DG 125B, Mayur Vihar DC Plot No.1B
                  Phase 1 New Delhi 110091.
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  Qualapatty, Shillong, East Khasi Hills Meghalaya
                </Typography>

              </Box>

            </Box>

            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
                height: {xs: "20vh", md:"10vh"},
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
                  Insight Brandcom Private Limited
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#363435",
                  }}
                >
                  91 A Jagdamba Nagar Ajmer Road, Jaipur-302006, Rajasthan.
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