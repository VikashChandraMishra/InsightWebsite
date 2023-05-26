import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Box
        display="flex"
        sx={{
          p: { xs: "0px", sm: "20px 100px" },
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column" gap={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#363435",
              fontSize: { xs: "40px", md: "120px" },
            }}
          >
            Contact us
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h4">For Projects and Collboration</Typography>
            <Box
              display="flex"
              gap={5}
              sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
            >
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="p">Email us at</Typography>
                <Box
                  sx={{
                    backgroundColor: "#2F5325",
                    borderRadius: "10px",
                    p: 1,
                  }}
                >
                  <Typography variant="p" sx={{ color: "white" }}>
                    info@insightbrandcom.com
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="p">Call us at</Typography>
                <Box
                  sx={{
                    backgroundColor: "#2F5325",
                    borderRadius: "10px",
                    p: 1,
                  }}
                >
                  <Typography variant="p" sx={{ color: "white" }}>
                    +91 361 2522 444
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Assam
                </Typography>
                <Typography variant="p">
                  Insight Brandcom Private Limited Business Address: 4A, Royale
                  Arcade II, B.Baruah Road, Ulubari, Guwahati, 781007
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  West Bengal
                </Typography>
                <Typography variant="p">
                  M/S Insight Brandcom Private Limited Business Address: 28
                  Senhati Co-operative Colon, Kolkata, 700034
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: { xs: 2, sm: 5 },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Rajasthan
                </Typography>
                <Typography variant="p">
                  M/S Insight Brandcom Private Limited Business Address: 91A
                  Jagdamba Nagar Ajmer Road, Jaipur, 302006
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                height="120px"
                width="250px"
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Jharkhand
                </Typography>
                <Typography variant="p">
                  M/S Insight Brandcom Private Limited Business Address: Nemi
                  Chand Gali, Main Road, Hazaribagh, Jharkhand - 825301
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