import React from 'react'
import { Typography, Grid, Button, } from "@mui/material";
import Navbar from '../../components/navbarTwo';
import colors from '../../theme/color';
import Footer from '../../components/footer';


const index = () => {
    return (
        <div>

            <Navbar />

            <div style={{ padding: "60px 10%", background: colors.global }}>
                <Grid container spacing={6} alignItems="center">

                    <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                        <img
                            src="/image/item 3.jpeg"
                            alt="Our Team"
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Grid>


                    <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
                        <Typography
                            variant="subtitle1"
                            style={{
                                color: "blue",
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                                marginBottom: "10px",
                            }}
                        >
                            OUR STORY
                        </Typography>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            style={{ marginBottom: "20px" }}
                        >
                            Relentlessly focused on closing gaps in care for women and families
                        </Typography>
                        <Typography
                            variant="body1"
                            style={{ color: "#555", marginBottom: "15px", lineHeight: "1.7" }}
                        >
                            After witnessing and experiencing the lack of support that exists for so
                            many as they build and raise their families, Kate Ryder founded Maven in
                            2014, envisioning a new kind of care—one that puts women and families at
                            the center.
                        </Typography>
                        <Typography
                            variant="body1"
                            style={{ color: "#555", marginBottom: "15px", lineHeight: "1.7" }}
                        >
                            The Maven team is built of clinical leaders, engineers, designers, and
                            operators who collaborate to deliver localized support to members in 175
                            countries.
                        </Typography>
                        <Typography
                            variant="body1"
                            style={{ color: "#555", marginBottom: "20px", lineHeight: "1.7" }}
                        >
                            Maven partners with more than 2,000 employers and health plans to
                            provide comprehensive, inclusive care that supports women and families
                            at every stage.
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "primary.main",
                                borderRadius: "25px",
                                px: 4,
                                py: 1.5,
                                fontWeight: "bold",
                                "&:hover": { backgroundColor: "primary" },
                            }}
                        >
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </div>



            <Footer />

        </div>
    )
}

export default index
