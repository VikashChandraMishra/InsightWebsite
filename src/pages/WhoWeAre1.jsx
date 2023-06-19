import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const WhoWeAre = () => {

  return (

    <div id="who_we_are">

      <Box
        display="flex"
        sx={{
          p: { xs: "30px 50px", md: "10vh 12vw" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          marginTop: "15vh",
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
              // color: "#454a46",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "7rem" },
              fontFamily: "Switzer-Variable"
            }}
          >
            Who Are We
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>

            <Typography
              variant="p"
              sx={{
                fontSize: { xs: '1.2rem', md:'1.5rem'},
                color: "#363435",
                // color: "#454a46",
              }}
            >
              Experts in Integrated Communication
            </Typography>

            <Typography
              variant="p"
              sx={{
                width: { xs: "100%", sm: "100%", md: "50%" },
                fontSize: '0.8rem',
                color: "#363435",
                // color: "#454a46",
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
                width: { xs: "100%", sm: "100%", md: "50%" },
                fontSize: '0.8rem',
                // color: "#363435",
                color: "#454a46",

              }}
            >
              Our versatile team of young professionals comes from diverse
              backgrounds, sharing a common passion for connecting the dots.
              This allows us to be open to ideas, objective yet emotional, which
              is aided by our deep understanding of consumer behaviour.
            </Typography>

            <Box sx={{ margin: { xs: "auto", sm: "0" } }}>
              {" "}

              <Link
                to="/contact"
                style={{
                  textDecoration: "none"
                }}
              >

                <Box
                  sx={{
                    backgroundColor: "#2F5325",
                    width: "150px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: { xs: "none", md: "65vw" },
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >

                  <Typography variant="h6" sx={{ color: "white", fontFamily: 'Switzer-Extralight' }}>
                    Let's connect
                  </Typography>

                </Box>

              </Link>

            </Box>

          </Box>

        </Box>

      </Box>

    </div >
  );
};

export default WhoWeAre;