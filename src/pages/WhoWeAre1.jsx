import { Box, Button, Typography } from "@mui/material";
import React from "react";

const WhoWeAre = () => {
  return (
    <div id="who_we_are">
      <Box
        display="flex"
        sx={{
          p: { xs: "30px 50px", md: "80px 150px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },

          alignItems: "center",
          gap: { xs: 5, sm: 10 },
        }}
      >
        <Box display="flex" flexDirection="column" gap={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "800",
              color: "#363435",
              fontSize: { xs: "40px", md: "100px" },
            }}
          >
            Who Are We
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              variant="p"
              sx={{ fontSize: '24px' }}
            // sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
            >
              Experts in Integrated Communication
            </Typography>
            <Typography
              variant="p"
              sx={{
                width: { xs: "100%", sm: "50%" },
                fontSize: '14px'
                // textAlign: { xs: "center", sm: "start", md: "start" }
              }}
            >
              With a decade of experience as a full-service communications
              agency, we have mastered the art & science of integrated branding
              and marketing communications. Our 360-degree approach ranges from
              on-ground study to performance marketing, demonstrating our
              expertise at every level.
            </Typography>

            <Typography
              variant="p"
              sx={{
                width: { xs: "100%", sm: "50%" },
                fontSize: '14px'
                // textAlign: { xs: "center", sm: "start", md: "start" },
              }}
            >
              Our versatile team of young professionals comes from diverse
              backgrounds, sharing a common passion for connecting the dots.
              This allows us to be open to ideas, objective yet emotional, which
              is aided by our deep understanding of consumer behaviour.
            </Typography>
            <Box sx={{ margin: { xs: "auto", sm: "0" } }}>
              {" "}
              <Box
                sx={{
                  backgroundColor: "#2F5325",
                  width: "150px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: { xs: "none", md: "900px" },
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  Let's connect
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default WhoWeAre;