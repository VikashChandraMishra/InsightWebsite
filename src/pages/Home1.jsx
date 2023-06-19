import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Our Key Clients.png";

const Home = () => {

  const navigate = useNavigate(null);

  const goToContactPage = () => {
    navigate('/contact');
  }

  return (

    <div id="home">

      <Box
        sx={{
          marginTop: "15vh",
          marginLeft: "15vw",
          marginRight: "15vw",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, sm: 10 },
        }}
      >

        <Typography
          variant="h1"
          sx={{
            fontWeight: "900",
            marginBottom: { xs: "0px", md: "10vh" },
            color: "#363435",
            // color: "#454a46",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "6rem" },
            fontFamily: "Switzer-Variable"
          }}
        >
          Connecting The Dots
        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            width: { md: "27.5vw" },
            marginTop: { xs: "0vh", md: "15vh" }
          }}
        >

          <Typography
            variant="p"
            sx={{
              fontSize: '1.5rem',
              // color: "#454a46",
              color: "#363435",
              fontWeight: "300",
              width: { md: '20vw' }
            }}
          >
            Creating effective and inclusive communication
          </Typography>

          <Typography
            variant="p"
            sx={{
              // color: "#454a46",
              color: "#363435",
              fontSize: "0.7rem",
            }}
          >
            Connecting the dots is crucial in today's complex and rapidly
            changing world, where we are constantly bombarded with information.
            It allows us to make connections that spark creativity and
            innovation. Enabling us to think critically, make informed
            decisions, and develop simple, yet innovative solutions to complex
            problems.
          </Typography>

          <Typography
            variant="p"
            sx={{
              // color: "#454a46",
              color: "#363435",
              fontSize: "0.7rem",
            }}
          >
            At Insight Brandcom, that's our philosophy. We work with brands on
            their journey by <b>creating compelling</b> and
            <b> integrated communications </b>. Fusing together an elixir of
            <i>
              <b> strategy, creativity and technology </b>
            </i>
            to connect the dots, we weave a tapestry of{" "}
            <b> compelling stories </b> that help organisations achieve their
            goals.
          </Typography>

          <Box
            sx={{
              backgroundColor: "#2F5325",
              width: "140px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: { xs: "none", md: "15vw" },
              marginTop: "10vh",
              cursor: "pointer",
            }}
          >

            <Typography
              variant="p"
              sx={{
                color: "white",
                fontFamily: 'Switzer-Extralight',
                p: "0.1rem",
                fontSize: '1.2rem'
              }}
              onClick={goToContactPage}
            >
              Let's Connect
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop="100px"
      >

        <Typography variant="p" sx={{ fontWeight: "bold", fontFamily: "Switzer-Variable", fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, fontWeight: 900, color: "#363435" }}>
          Our Key Clients
        </Typography>

        <Box
          sx={{
            borderRadius: "30px",
            height: { xs: "350px", sm: "500px", md: "800px" },
            width: { xs: "90%", sm: "90%", md: "90%" },
            marginTop: "50px",
          }}
        >
          <img
            src={img1}
            alt=""
            width="100%"
            height="100%"
            style={{ borderRadius: "50px" }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;