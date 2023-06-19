import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CaseStudy = ({ title, content, logo, link, logoH, logoW }) => {
  const [limitedContent, setLimitedContent] = useState("");

  useEffect(() => {
    const contentArray = content.split(" ");

    var newContent = "";

    var wordLimit = 30;

    if (contentArray.length < wordLimit) {
      wordLimit = contentArray.length;
    }

    for (let i = 0; i < wordLimit; i++) {
      newContent += contentArray[i] + " ";
    }

    newContent += "...";

    setLimitedContent(newContent);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid item md={3} sm={4} xs={12}>
        <Paper
          elevation={3}
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 2,
            minHeight: { sm: "30vh", md: "50vh" },
            // width: {xs: '70vw', md: '100%'}
          }}
        >
          <div>
            <Box
              sx={{
                height: "80px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={`assets/${logo}`} alt="" height={logoH} width={logoW} />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              sx={{
                marginTop: { md: "20px", sx: "10px" },
              }}
            >
              <Box height="50px">
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  {title}
                </Typography>
              </Box>
              <br />
              <Box height="180px">
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.75rem",
                  }}
                >
                  {/* {limitedContent} */}
                  {content}
                </Typography>
              </Box>
            </Box>
          </div>

          <Link to={link}
            style={{
              textDecoration: 'none'
            }}
          >
            <Box
              variant="contained"
              sx={{
                backgroundColor: "#2F5325",
                borderRadius: "5px",
                textAlign: 'center',
                paddingTop: "2px",
                paddingBottom: "2px",
                color: "whitesmoke",
              }}
              fullWidth
            >
              View more
            </Box>
          </Link>
        </Paper>
      </Grid>
    </>
  );
};

export default CaseStudy;
