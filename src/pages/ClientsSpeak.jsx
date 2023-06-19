import { Box, Typography } from "@mui/material";
import Flickity from "react-flickity-component";
import "../styles/css/clients-speak.css";
import purabiLogo from "../assets/Image 39.png";
import logo2 from "../assets/Image 43.png";
import apolloLogo from "../assets/apollo.png";
import bajajLogo from "../assets/bajaj.png";

const flickityOptions = {
    initialIndex: 2,
};

const ClientsSpeak = () => {
    return (
        <Box
            sx={{
                padding: { xs: "0px", sm: "20px 150px" },
                marginTop: "15vh",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontWeight: "800",
                    fontFamily: "Switzer-Variable",
                    // color: "#454a46",
                    color: "#363435",
                    textAlign: { xs: "center", md: "unset" },
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "6rem" },
                    marginBottom: "5vh",
                }}
            >
                Clients Speak
            </Typography>

            <Flickity
                className={""} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        bgcolor: "#2F5325",
                        width: { sx: "70%", md: "25vw" },
                        height: "45vh",
                        color: "white",
                        borderRadius: "12px",
                        margin: "0px 10px",
                        padding: "15px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.9rem",
                        }}
                    >
                        “It was great to be associated with this agency since past 3+ years.
                        The engagement / execution of the campaigns are smooth, we get
                        prompt response on the queries. But we need quantum improvement on
                        creative making”
                    </Typography>


                    <Box>
                        <img
                            src={bajajLogo}
                            alt=""
                            height="50px"
                            width="50px"
                            style={{ borderRadius: "5px" }}
                        />
                        <Typography
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                fontFamily: "Switzer-Variable",
                                fontWeight: "200",
                                fontSize: "0.8rem",
                            }}
                        >
                            <b>Kanishka Banerjee</b>
                            <span>Regional Sales Manager</span>
                            <span>Bajaj Auto, Guwahati</span>
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        bgcolor: "#3d732e",
                        width: { sx: "70%", md: "25vw" },
                        height: "45vh",
                        color: "white",
                        borderRadius: "12px",
                        margin: "0px 10px",
                        padding: "15px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.9rem",
                        }}
                    >
                        “My overall experience with the agency in past 6 months was very
                        good. Very pro-active in nature. Expectations from the agency is
                        quite high. The agency should now focus on building the team in
                        Delhi for smoother operations”
                    </Typography>
                    <Box>
                        <img
                            src={logo2}
                            alt=""
                            height="50px"
                            width="50px"
                            style={{ borderRadius: "5px" }}
                        />
                        <Typography
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                fontFamily: "Switzer-Variable",
                                fontWeight: "200",
                                fontSize: "0.8rem",
                            }}
                        >
                            <b>Dr. Navdeep Singh Suhag</b>
                            <span>Deputy Director</span>
                            <span>Competition Commission of India</span>
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        bgcolor: "#5ba349",
                        width: { sx: "70%", md: "25vw" },
                        height: "45vh",
                        color: "white",
                        borderRadius: "12px",
                        margin: "0px 10px",
                        padding: "15px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.9rem",
                        }}
                    >
                        “Insight understands and can comprehend our ideas and the output level increases. Be it an adaptation of Central creative, or a new creative, Insight started showing best results. As a Digital agency also, Insight Brandcom is doing satisfactory work and I am sure, together we will do many good works in future."
                    </Typography>

                    <Box>
                        <img
                            src={apolloLogo}
                            alt=""
                            height="50px"
                            width="50px"
                            style={{ borderRadius: "5px" }}
                        />
                        <Typography
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                fontFamily: "Switzer-Variable",
                                fontWeight: "200",
                                fontSize: "0.8rem",
                            }}
                        >
                            <b>Uday Sankar Borkataki</b>
                            <span>Deputy General Manager & Head- Marketing</span>
                            <span>Apollo Hospitals, Guwahati</span>
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        bgcolor: "#82b376",
                        width: { sx: "70%", md: "25vw" },
                        height: "45vh",
                        color: "white",
                        borderRadius: "12px",
                        margin: "0px 10px",
                        padding: "15px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.9rem",
                        }}
                    >
                        “Insight Brandcom has a good understanding of consumer insight,
                        which helps our brand to associate with the right TG. Their young
                        team members are quite agile and witty”
                    </Typography>

                    <Box>
                        <img
                            src={purabiLogo}
                            alt=""
                            width="50px"
                            height="50px"
                            style={{ borderRadius: "5px" }}
                        />
                        <Typography
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                fontFamily: "Switzer-Variable",
                                fontWeight: "200",
                                fontSize: "0.8rem",
                            }}
                        >
                            <b>Syed Mujaddid Hussain</b>
                            <span>Manager – Marketing</span>
                            <span>
                                West Assam Milk Producers Cooperative Union Ltd (WAMUL)
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Flickity>
        </Box>
    );
};

export default ClientsSpeak;