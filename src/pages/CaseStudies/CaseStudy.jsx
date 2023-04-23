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

            newContent += contentArray[i] + ' ';

        }

        newContent += "...";

        setLimitedContent(newContent);

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Grid item md={3} sm={4} xs={12}>

                <Paper
                    elevation={3}
                    sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'space-between',
                        gap: 2,
                        height: '55vh',
                        // width: {xs: '70vw', md: '100%'}
                    }}
                >
                    <div>
                        <img src={`assets/${logo}`} alt="" height={logoH} width={logoW} />

                        <Box
                            display="flex"
                            flexDirection="column"
                            sx={{
                                marginTop: { md: '20px', sx: '10px' }
                            }}
                        >

                            <Typography variant="p" sx={{ fontWeight: "bold" }}>
                                {title}
                            </Typography>
                            <br />
                            <Typography variant="p">
                                {limitedContent}
                            </Typography>

                        </Box>

                    </div>

                    <Link to={link}>

                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "#2F5325" }}
                            fullWidth
                        >
                            View more
                        </Button>

                    </Link>

                </Paper>

            </Grid>
        </>
    )
}

export default CaseStudy;