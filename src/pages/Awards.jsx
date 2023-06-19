import image from "../assets/award.png";
import { Box, Typography } from "@mui/material";
import "../styles/css/awards-style.css"

const Awards = () => {

  return (
    <div>

      <Box
        sx={{ padding: { xs: "0px", sm: "20px 150px" }, marginTop: "20vh" }}
      >
        <Typography
          variant="h1"
          sx={{ color: "#363435",fontWeight: "990", fontFamily: "Switzer-Variable", textAlign: { xs: "center", md: "unset" }, fontSize: { xs: "3rem", sm: '4rem', md: "6rem" } }}
        >
          Awards
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={10}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            // width: { xs: "100%", md: "90%" },
            marginTop: { xs: "50px", md: "0px" },
          }}
        >

          <Box display="flex" flexDirection="column" gap={2}>

            <Box display="flex" flexDirection="column">

              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Winner of Foxglove Awards 2018-19
              </Typography>

              <Typography variant="p"> Best use of Social Media</Typography>

              <Typography variant="p"> Best Website Design</Typography>

            </Box>

            <Box display="flex" flexDirection="column">

              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                Winner of Foxglove Awards 2020-21
              </Typography>

              <Typography variant="p"> Best Innovation in Digital</Typography>

            </Box>

            <Box display="flex" flexDirection="column">

              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                e4m 40 under 40 Digital Leadership Award
              </Typography>

            </Box>

          </Box>

          <Box sx={{ width: { xs: "330px", md: "600px" }, display: "flex", justifyContent: "center" }}>

            <img id="award-img" src={image} alt="" width="500px" height="100%" />

          </Box>

        </Box>


      </Box>

    </div>
  );
};

export default Awards;
