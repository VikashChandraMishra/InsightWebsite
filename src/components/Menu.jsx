import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Menu = ({ onClose }) => {

  return (

    <div>
      {/* Menu */}

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: "4rem",
          width: "100vw",
          background: "#fff",
          zIndex: 999,
          overflow: "hidden",
        }}
      >

        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "12rem",
            padding: "1rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            zIndex: 999,
          }}
        >
          <CloseIcon />
        </motion.div>

        <Box
          sx={{
            p: { xs: 5, md: 10 }
          }}
          display="flex"
          flexDirection="column"
          gap={1}
        >

          {/* Home */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
              marginTop: "5vh"
            }}
          >

            <RouterLink
              to="/"
              style={{
                textDecoration: "none",
                color: "black"
              }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                HOME
              </Typography>

            </RouterLink>

          </motion.div>

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            {/* <ScrollLink
              to="who_we_are"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > */}

            <RouterLink
              to="/who-we-are"
              style={{ textDecoration: "none", color: "black" }}
            >

              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                WHO ARE WE
              </Typography>

            </RouterLink>
            {/* </ScrollLink> */}
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            {/* <ScrollLink
              to="what_we_do"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            > */}
            <RouterLink
              to="/what-we-do"
              style={{ textDecoration: "none", color: "black" }}
            >

              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                WHAT WE DO
              </Typography>

            </RouterLink>
            {/* </ScrollLink> */}
          </motion.div>

          {/* Our Work */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/our-work"
              style={{ textDecoration: "none", color: "black" }}
            >

              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                OUR WORK
              </Typography>

            </RouterLink>

          </motion.div>

          {/* Case Studies */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/case-studies"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                CASE STUDIES
              </Typography>
            </RouterLink>
          </motion.div>

          {/* Clients Speak */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/clients-speak"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                OUR KEY CLIENTS
              </Typography>
            </RouterLink>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/awards"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                AWARDS
              </Typography>
            </RouterLink>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/team"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                THE TEAM
              </Typography>
            </RouterLink>
          </motion.div>

          {/* Careers */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/careers"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                CAREERS
              </Typography>
            </RouterLink>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="p"
                sx={{
                  "&:hover": {
                    color: "darkgreen",
                    fontWeight: "bold"
                  },
                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem"
                  },
                  fontFamily: "Switzer-Variable",
                  fontWeight: "200"
                }}
                onClick={onClose}
              >
                CONTACT US
              </Typography>
            </RouterLink>
          </motion.div>

        </Box>

      </motion.div>

    </div>
  );
};

export default Menu;
