import { Box, Typography } from '@mui/material';
import Flickity from 'react-flickity-component'
import "../styles/css/clients-speak.css";

const flickityOptions = {
    initialIndex: 2
}

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
                    textAlign: { xs: "center", md: "unset" },
                    fontSize: { xs: "6rem" },
                    marginBottom: "5vh"
                }}
            >
                Clients Speak
            </Typography>

            <Flickity
                className={''} // default ''
                elementType={'div'} // default 'div'
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
                        padding: "15px"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.8rem",
                        }}
                    >
                        “It was great to be associated with this agency since past 3+ years. The engagement / execution of the campaigns are smooth, we get prompt response on the queries. But we need quantum improvement on creative making”
                    </Typography>

                    <Typography
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.7rem"
                        }}
                    >

                        <b>
                            Kanishka Banerjee
                        </b>
                        <span>
                            Regional Sales Manager
                        </span>
                        <span>
                            Bajaj Auto, Guwahati
                        </span>
                    </Typography>

                </Box>

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
                        padding: "15px"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.8rem",
                        }}
                    >
                        “My overall experience with the agency in past 6 months was very good. Very pro-active in nature. Expectations from the agency is quite high. The agency should now focus on building the team in Delhi for smoother operations”
                    </Typography>

                    <Typography
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.7rem"
                        }}
                    >

                        <b>
                            Dr. Navdeep Singh Suhag
                        </b>
                        <span>
                            Director (IAS)
                        </span>
                        <span>
                            Competition Commission of India
                        </span>
                    </Typography>

                </Box>

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
                        padding: "15px"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.8rem",
                        }}
                    >
                        “Its been more than 5 years, Insight Brandcom is associated with us as Creative agency and subsequently Digital agency as well. Insight understands and can comprehend our ideas and the output level increased. Be it an adaptation of Central creative, or a new creative, Insight started showing best results. Must mention, the Annual New Year Calendar work got appreciation from Top leadership of our organisation. As a Digital agency also, Insight Brandcom is doing satisfactory work and I am sure, together we will do many good works. Our social media handles are now getting popular, having good followers and it's constantly growing.”
                    </Typography>

                    <Typography
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.7rem"
                        }}
                    >
                        <b>
                            Uday Sankar Borkataki
                        </b>
                        <span>Deputy General Manager & Head- Marketing</span>
                        <span>Apollo Hospitals, Guwahati</span>
                    </Typography>

                </Box>

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
                        padding: "15px"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.8rem",
                        }}
                    >
                        “Insight Brandcom has a good understanding of consumer insight, which helps our brand to associate with the right TG. Their young team members are quite agile and witty”
                    </Typography>

                    <Typography
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Switzer-Variable",
                            fontWeight: "200",
                            fontSize: "0.7rem"
                        }}
                    >
                        <b>
                            Syed Mujaddid Hussain
                        </b>
                        <span>Manager – Marketing</span>
                        <span>West Assam Milk Producers Cooperative Union Ltd (WAMUL)</span>
                    </Typography>

                </Box>                

            </Flickity>
        </Box>
    )

}

export default ClientsSpeak;