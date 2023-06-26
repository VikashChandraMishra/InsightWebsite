import React, { useEffect, useState } from "react";
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
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const WhatWeDoDesc = ({ serviceNo }) => {
    const location = useLocation(null);
    const navigate = useNavigate(null);

    // useEffect(() => {

    //     try {
    //         setServiceNo(location.state.serviceNo);

    //     } catch (error) {
    //         console.error(error);
    //     }

    //     // eslint-disable-next-line
    // }, [])

    return (
        <div>
            <Box
                marginTop="20vh"
                sx={{ padding: { xs: "0vh 12vw", sm: "0vh 12vw" } }}
            >
                <Box
                    sx={{
                        width: { xs: "90px", sm: "110px", md: "125px" },
                        height: { xs: "90px", sm: "110px", md: "125px" },
                        borderRadius: "50%",
                        backgroundColor: "#2F5325",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // padding: '0px 3px'
                    }}
                >
                    {serviceNo === 1 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "60px" } }}>
                            <img src={icon1} alt="" width="100%" height="85%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 2 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "50px" } }}>
                            <img src={icon2} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 3 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "50px" } }}>
                            <img src={icon3} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 4 ? (
                        <Box sx={{ height: { md: "40px" }, width: { md: "70px" } }}>
                            <img src={icon4} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 5 ? (
                        <Box sx={{ height: { md: "70px" }, width: { md: "70px" } }}>
                            <img src={icon5} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 6 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "50px" } }}>
                            <img src={icon6} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 7 ? (
                        <Box sx={{ height: { md: "70px" }, width: { md: "70px" } }}>
                            <img src={icon7} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 8 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "60px" } }}>
                            <img src={icon8} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 9 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "60px" } }}>
                            <img src={icon9} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 10 ? (
                        <Box sx={{ height: { md: "60px" }, width: { md: "60px" } }}>
                            <img src={icon10} alt="" width="100%" height="100%" />
                        </Box>
                    ) : (
                        <></>
                    )}
                </Box>
                <Box display="flex" flexDirection="column" gap={2} marginTop="20px">
                    {serviceNo === 1 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Communication Consultancy
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Insight Brandcom offers its expertise to organizations and
                                brands in effectively communicating their messages to their
                                target audiences. We specialize in developing comprehensive
                                communication strategies, communication need assessment,
                                refining brand messaging, implementation plan with recommended
                                medium of communication and enhancing overall communication
                                efforts to achieve specific objectives. Our consulting services
                                encompass strategic guidance and actionable insights tailored to
                                the unique needs and goals of each client.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 2 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Brand Strategy Development
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Insight Brandcom is a leading provider of comprehensive brand
                                and strategy development. We work closely with our clients to
                                develop a strong and compelling brand strategy that aligns with
                                their vision, values, and target audience. Our team of skilled
                                experts specializes in various aspects of brand development,
                                including market research, competitor analysis, and brand
                                positioning, messaging, and visual identity. We conduct thorough
                                market study to identify key trends, consumer preferences, and
                                industry insights, enabling us to create strategies that
                                communicates the brand&#39;s essence and creates a lasting
                                impression on consumers.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 3 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Content & Design Services
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Insight offers comprehensive Content &amp; Design Services to
                                meet the diverse needs of businesses. We provide a range of
                                services including copywriting and content creation. Our expert
                                writers have a deep understanding of different industries and
                                can craft compelling content tailored to your target audience.
                                When it comes to design, our talented panel of artists and
                                designers create visually stunning, intuitive and impactful
                                designs. From logos, brochures, hoardings, print ads to content
                                for social media, our designs are meticulously crafted to convey
                                your brand message in a visually impactful manner.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 4 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Audio Visual Production
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Using state-of-the-art audio and visual equipment and creative
                                instincts, we deliver stunning visuals, crystal-clear sound, and
                                precise lighting to enhance the impact of your message and
                                story. From conceptualization to post-production, we handle all
                                stages of the project, meticulously attending to details and
                                incorporating the latest industry trends.With our extensive
                                expertise and cutting-edge technology, we deliver immersive and
                                captivating audio-visual experiences for a wide range of events
                                and projects.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 5 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Digital Marketing
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Our agency specializes in providing comprehensive digital
                                marketing solutions to help businesses establish a strong online
                                presence and achieve their marketing goals. With a deep
                                understanding of the digital landscape and the latest marketing
                                trends, we offer a range of services tailored to suit the unique
                                needs of each client. Our services include performance
                                marketing, Influencer campaign, SEO, native ads, digital PR,
                                Email Marketing, Chat bot integration, AR/VR services and live
                                streaming. By leveraging these channels effectively, we help
                                businesses engage with their audience, build brand loyalty, and
                                drive conversions.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 6 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Social Media Marketing
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Our team of experienced social media experts is well-versed in
                                the latest trends, strategies, and best practices across various
                                platforms such as Facebook, Instagram, Twitter, Quora, LinkedIn,
                                and YouTube. We work closely with our clients and platforms to
                                develop tailored social media marketing plans that align with
                                their business goals, target audience, and industry niche.We are
                                dedicated to helping our clients enhance their online presence,
                                increase brand awareness, drive platform growth, and ultimately
                                increase brand engagement.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 7 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Public Relations
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                We understand the power of positive public perception and its
                                impact on the success of our clients. Our agency works closely
                                with businesses to develop tailored PR strategies that align
                                with their goals and objectives. Whether it&#39;s launching a
                                new product, managing a crisis, or building long-term brand
                                visibility, we have the expertise and experience to deliver
                                results. Our range of PR services includes media relations,
                                strategic communications, crisis management, reputation
                                management and thought leadership.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 8 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Events and Activations
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                Our agency specializes in providing top-notch Events and
                                Activations services, creating unforgettable experiences that
                                captivate audiences and leave a lasting impression. We
                                understand that successful events and activations require
                                meticulous planning, creativity, and flawless execution, and we
                                pride ourselves on delivering all of these elements to our
                                projects. Our comprehensive range of services includes event
                                conceptualization, theme development, venue selection,
                                logistical planning, vendor management, production and technical
                                support, branding and signage and on-site coordination. We take
                                care of every aspect of the event, ensuring a seamless and
                                stress-free experience for you and your attendees.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 9 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                <b>Allied Services</b> (Outdoor production, printing etc.)
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                We specializes in providing a wide range of allied services,
                                including outdoor display production and printing solutions. We
                                understand the importance of effective outdoor advertising and
                                marketing materials, and we strive to deliver high-quality
                                products from LED to retro reflective signages that meet our
                                clients&#39; needs. From hoardings, signages, banners, flipbook
                                to posters and other promotional materials, we can handle
                                various printing and production needs with precision and
                                efficiency.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                    {serviceNo === 10 ? (
                        <>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "2rem" },
                                }}
                            >
                                Integrated marketing communication
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    fontFamily: "Switzer-Variable",
                                    color: "#363435",
                                    fontSize: { xs: "0.8rem" },
                                }}
                            >
                                We offer integrated marketing communications approach that
                                spreads across multiple platforms, using a mix of brand elements
                                across multiple communication medium, but catering to a singular
                                central idea. We understand that effective communication is
                                crucial for any business to succeed in today&#39;s competitive
                                market. Our approach is designed to create a seamless and
                                consistent brand experience across all channels and consumer
                                touchpoints. We develop marketing strategy that covers print,
                                digital &amp; social media, outdoor, electronic, engagement and
                                other traditional media.
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                </Box>
                <Grid
                    container
                    spacing={3}
                    sx={{
                        width: { md: "70%" },
                        marginTop: "30px",
                    }}
                >
                    {serviceNo !== 1 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/1")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 2 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/2")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 3 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/3")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 4 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/4")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 5 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/5")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 6 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/6")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 7 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/7")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 8 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/8")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 9 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/9")}
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
                    ) : (
                        <></>
                    )}

                    {serviceNo !== 10 ? (
                        <Grid item md={2.4} sm={3} xs={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                gap={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/what-we-do-desc/10")}
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
                    ) : (
                        <></>
                    )}
                </Grid>
            </Box>
        </div>
    );
};

export default WhatWeDoDesc;