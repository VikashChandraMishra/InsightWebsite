import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 400, xs: 260 },
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const WhatWeDo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);

  const [open8, setOpen8] = React.useState(false);
  const handleOpen8 = () => setOpen8(true);
  const handleClose8 = () => setOpen8(false);

  const [open9, setOpen9] = React.useState(false);
  const handleOpen9 = () => setOpen9(true);
  const handleClose9 = () => setOpen9(false);

  return (
    <>
      <Box
        display="flex"
        sx={{
          p: { xs: 2, sm: "20px 150px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          marginTop: "100px",
          alignItems: "center",
          gap: { xs: 5, sm: 10 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            fontFamily: "Switzer-Variable",
            color: "#363435",
            // color: "#454a46",
            fontSize: { xs: "3rem", sm: "4rem", md: "7rem" },
          }}
        >
          What We Do
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ p: { xs: 2, sm: "20px 150px" }, width: { md: "70%" } }}
      >
        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen}
            >
              <Box sx={{ height: { md: "40px" }, width: { md: "40px" } }}>
                <img src={icon1} alt="" width="100%" height="100%" />
              </Box>
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Communication Consultancy
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen1}
            >
              <Box sx={{ height: { md: "40px" }, width: { md: "30px" } }}>
                <img src={icon2} alt="" width="100%" height="100%" />
              </Box>
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Brand Strategy Development
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen2}
            >
              <Box sx={{ height: { md: "50px" }, width: { md: "35px" } }}>
                <img src={icon3} alt="" width="100%" height="100%" />
              </Box>
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Content & Design Services
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen3}
            >
              <Box sx={{ height: { md: "25px" }, width: { md: "50px" } }}>
                <img src={icon4} alt="" width="100%" height="100%" />
              </Box>
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Audio Visual Production
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen4}
            >
              <img src={icon5} alt="" width="40%" height="40%" />
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Digital Marketing
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen5}
            >
              <Box sx={{ height: { md: "40px" }, width: { md: "30px" } }}>
                <img src={icon6} alt="" width="100%" height="100%" />
              </Box>
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Social Media Marketing
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen6}
            >
              <img src={icon7} alt="" width="40%" height="40%" />
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Public Relations
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen7}
            >
              <img src={icon8} alt="" width="40%" height="40%" />
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Events and Activations
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen8}
            >
              <img src={icon9} alt="" width="40%" height="40%" />
            </Box>

            <Typography
              variant="p"
              sx={{ textAlign: "center", fontSize: "0.8rem" }}
            >
              <b>Allied Services</b> (Outdoor production, printing etc.)
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2.4} sm={3} xs={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{
                width: { xs: "70px", sm: "90px", md: "105px" },
                height: { xs: "70px", sm: "90px", md: "105px" },
                borderRadius: "50%",
                backgroundColor: "#2F5325",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleOpen9}
            >
              <img src={icon10} alt="" width="60%" height="60%" />
            </Box>

            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Integrated marketing communication
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            backgroundColor: "#2F5325",
            width: "150px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: { xs: "100px", md: "1050px" },
            marginTop: "50px",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "white", fontFamily: "Switzer-ExtraLight" }}
          >
            Let's connect
          </Typography>
        </Box>
      </Link>
      {/* Modal 1  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Insight Brandcom offers its expertise to organizations and brands
              in effectively communicating their messages to their target
              audiences. We specialize in developing comprehensive communication
              strategies, communication need assessment, refining brand
              messaging, implementation plan with recommended medium of
              communication and enhancing overall communication efforts to
              achieve specific objectives. Our consulting services encompass
              strategic guidance and actionable insights tailored to the unique
              needs and goals of each client.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 2 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Insight Brandcom is a leading provider of comprehensive brand and
              strategy development. We work closely with our clients to develop
              a strong and compelling brand strategy that aligns with their
              vision, values, and target audience. Our team of skilled experts
              specializes in various aspects of brand development, including
              market research, competitor analysis, and brand positioning,
              messaging, and visual identity. We conduct thorough market study
              to identify key trends, consumer preferences, and industry
              insights, enabling us to create strategies that communicates the
              brand&#39;s essence and creates a lasting impression on consumers.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 3 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open2}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Insight offers comprehensive Content &amp; Design Services to meet
              the diverse needs of businesses. We provide a range of services
              including copywriting and content creation. Our expert writers
              have a deep understanding of different industries and can craft
              compelling content tailored to your target audience. When it comes
              to design, our talented panel of artists and designers create
              visually stunning, intuitive and impactful designs. From logos,
              brochures, hoardings, print ads to content for social media, our
              designs are meticulously crafted to convey your brand message in a
              visually impactful manner.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 4 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open3}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Using state-of-the-art audio and visual equipment and creative
              instincts, we deliver stunning visuals, crystal-clear sound, and
              precise lighting to enhance the impact of your message and story.
              From conceptualization to post-production, we handle all stages of
              the project, meticulously attending to details and incorporating
              the latest industry trends.With our extensive expertise and
              cutting-edge technology, we deliver immersive and captivating
              audio-visual experiences for a wide range of events and projects.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 5 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open4}
        onClose={handleClose4}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open4}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Our agency specializes in providing comprehensive digital
              marketing solutions to help businesses establish a strong online
              presence and achieve their marketing goals. With a deep
              understanding of the digital landscape and the latest marketing
              trends, we offer a range of services tailored to suit the unique
              needs of each client. Our services include performance marketing,
              Influencer campaign, SEO, native ads, digital PR, Email Marketing,
              Chat bot integration, AR/VR services and live streaming. By
              leveraging these channels effectively, we help businesses engage
              with their audience, build brand loyalty, and drive conversions.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 6 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open5}
        onClose={handleClose5}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open5}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Our team of experienced social media experts is well-versed in the
              latest trends, strategies, and best practices across various
              platforms such as Facebook, Instagram, Twitter, Quora, LinkedIn,
              and YouTube. We work closely with our clients and platforms to
              develop tailored social media marketing plans that align with
              their business goals, target audience, and industry niche.We are
              dedicated to helping our clients enhance their online presence,
              increase brand awareness, drive platform growth, and ultimately
              increase brand engagement.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 7 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open6}
        onClose={handleClose6}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open6}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              We understand the power of positive public perception and its
              impact on the success of our clients. Our agency works closely
              with businesses to develop tailored PR strategies that align with
              their goals and objectives. Whether it&#39;s launching a new
              product, managing a crisis, or building long-term brand
              visibility, we have the expertise and experience to deliver
              results. Our range of PR services includes media relations,
              strategic communications, crisis management, reputation management
              and thought leadership.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 8 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open7}
        onClose={handleClose7}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open7}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Our agency specializes in providing top-notch Events and
              Activations services, creating unforgettable experiences that
              captivate audiences and leave a lasting impression. We understand
              that successful events and activations require meticulous
              planning, creativity, and flawless execution, and we pride
              ourselves on delivering all of these elements to our projects. Our
              comprehensive range of services includes event conceptualization,
              theme development, venue selection, logistical planning, vendor
              management, production and technical support, branding and signage
              and on-site coordination. We take care of every aspect of the
              event, ensuring a seamless and stress-free experience for you and
              your attendees.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 9 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open8}
        onClose={handleClose8}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open8}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              We specializes in providing a wide range of allied services,
              including outdoor display production and printing solutions. We
              understand the importance of effective outdoor advertising and
              marketing materials, and we strive to deliver high-quality
              products from LED to retro reflective signages that meet our
              clients&#39; needs. From hoardings, signages, banners, flipbook to
              posters and other promotional materials, we can handle various
              printing and production needs with precision and efficiency.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* Modal 10 */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open9}
        onClose={handleClose9}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open9}>
          <Box sx={style}>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              We offer integrated marketing communications approach that spreads
              across multiple platforms, using a mix of brand elements across
              multiple communication medium, but catering to a singular central
              idea. We understand that effective communication is crucial for
              any business to succeed in today&#39;s competitive market. Our
              approach is designed to create a seamless and consistent brand
              experience across all channels and consumer touchpoints. We
              develop marketing strategy that covers print, digital &amp; social
              media, outdoor, electronic, engagement and other traditional
              media.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default WhatWeDo;