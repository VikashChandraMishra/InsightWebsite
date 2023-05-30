import React, { useState, useEffect } from "react";
import Logo from "../assets/insightLogo.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 999,
          background: isScrolled ? "rgba(255, 255, 255, 0.6)" : "transparent",
          boxShadow: isScrolled ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
      >
        <Box
          sx={{ p: { xs: "20px 50px", md: "20px 150px" } }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <img src={Logo} alt="" width="90px" height="40px" />
          </Link>

          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={handleMenuOpen}
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <Box display="flex" flexDirection="column" gap={0.5}>
              <Box
                sx={{
                  height: "2px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              ></Box>
              <Box
                sx={{
                  height: "2px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              ></Box>
              <Box
                sx={{
                  height: "2px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              ></Box>
              <Box
                sx={{
                  height: "2px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              ></Box>
            </Box>
          </motion.div>
          {isOpen && <Menu onClose={handleMenuClose} />}
        </Box>
      </Box>
      {/* Add a placeholder element to maintain the height of the navbar */}
      <div style={{ height: isScrolled ? "80px" : "0" }} />
    </div>
  );
};

export default Navbar;