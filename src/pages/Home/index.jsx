import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbarTwo'
import { Box, CardMedia } from '@mui/material';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import colors from '../../theme/color';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Button } from "@mui/material";
import Footer from '../../components/footer'


const cardData = [
  {
    img: "/image/medicin.jpeg",
    title: "Medical Counseling",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Dolores quae porro consequatur aliquam, incidunt.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.!"

    ],
  },
  {
    img: "/image/patient.jpeg",
    title: "Qualified Doctors",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Dolores quae porro consequatur aliquam, incidunt.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Dolores quae porro consequatur aliquam, incidunt.",
    ],
  },
  {
    img: "/image/patient.jpeg",
    title: "Emergency Services",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Dolores quae porro consequatur aliquam, incidunt.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Dolores quae porro consequatur aliquam, incidunt.",
    ],
  },
];



const hindex = () => {


  const images = [
    "/image/green.jpeg",
    "/image/item1.jpg",
    "/image/item2.jpg",
    "/image/Mental.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
     
    }, 4000);
    return () => clearInterval(interval);
  }, []);





  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const nextImage = () => setIndex((prev) => (prev + 1) % 3); 


 
  const getPosition = (i) => {

    const position = (i - index + 3) % 3;
    if (position === 0) return { x: "-220px", scale: 0.9, zIndex: 1 };
    if (position === 1) return { x: "0px", scale: 2, zIndex: 3 };
    if (position === 2) return { x: "220px", scale: 0.9, zIndex: 1 };

  };

  return (
    <>

      <Navbar />

      {/* ----------------------------------------hero---------------------------------------------- */}

      <div style={{
        position: "relative", height: "90vh", width: "100%",
        overflow: "hidden",
      }}>


        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="hero"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        </AnimatePresence>



        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.4)", zIndex: 2
        }} />

        {/* Text Content on Top */}
        <motion.div
          key={currentIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 20, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            color: colors.avatarText,
            zIndex: 3,
          }}
        >
          <p style={{ color: colors.blue, fontWeight: "600", fontSize: "20px" }}>
            [ Services ]
          </p>
          <h1
            style={{ fontSize: "48px", fontWeight: "bold", lineHeight: "1.2", marginBottom: "20px", }}>
            We Provide Medical Services <br /> That You Can Trust!
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "500px", marginBottom: "20px" }}>
            Professional doctors with years of experience providing quality care.
          </p>
          <button
            style={{
              padding: "12px 28px", fontSize: "16px", fontWeight: 600, borderRadius: "12px",
              border: "none", id: "learn", cursor: "pointer", background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              color: colors.avatarText,
            }}>
            Learn More
          </button>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------------- */}



      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "65vh",
          backgroundColor: colors?.global,
          padding: "20px"
        }} >

 
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "280px",
            position: "relative",
            height: "300px",

          }}
        >
          <motion.img
            src="/image/green.jpeg"
            alt="img1"
            style={{ position: "absolute",
              maxWidth: "30vw",
              width: "200px",
              borderRadius: "16px"}}
            animate={getPosition(0)}
            transition={{ duration: 0.8 }}/>

          <motion.img
            src="/image/team.jpeg"
            alt="img2"
            style={{
              position: "absolute",
              maxWidth: "30vw",
              width: "200px",
              borderRadius: "16px",
            }}
            animate={getPosition(1)}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            src="/image/Mental.jpg"
            alt="img3"
            style={{
              position: "absolute",
              maxWidth: "30vw",
              width: "200px",
              borderRadius: "16px",
            }}
            animate={getPosition(2)}
            transition={{ duration: 0.8 }}
          />

        </div>

        {/* Right Side - Text */}
        <motion.div
          style={{ flex: 1, }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", fontSize: "clamp(2rem, 5vw, 3.5rem)", }}>
            Welcome to <span style={{ color: colors.primary }}>Our Platform</span>

          </h1>

          <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
            🌿 "We believe that true health is more than just the absence of
            illness — it’s about balance, vitality, and peace of mind. Our expert
            team combines modern medical care with holistic wellness practices to
            support your body, mind, and spirit. Together, we help you live
            healthier, stronger, and happier every day."
          </p>
          <button
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              color: "white",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </motion.div>
      </div>


      {/* --------------------------------------------------------------------------------- */}


      <Grid container spacing={4} justifyContent="center" sx={{ padding: "40px", backgroundColor:colors.global }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>

            <Card
              sx={{
                height: "100%", 
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)", },}}>

              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200px"
                  image={card.img}
                  alt={card.title}
                  sx={{ objectFit: "contain" }}/>

                <Box
                  sx={{ position: "absolute",bottom: 0,
                    left: 0, width: "100%",  bgcolor: "rgba(255,255,255,0.9)",
                    textAlign: "center", py: 1,}}>

                  <Typography variant="h6" fontWeight="bold"sx={{ color: colors.textPrimary }}>
                    {card.title}
                  </Typography>
                </Box>
                
              </Box>

         
              <CardContent sx={{ flexGrow: 1 }}>
                {card.description.map((line, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    {line}
                  </Typography>
                ))}
              </CardContent>

              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button variant="contained"sx={{borderRadius: "8px", textTransform: "none",px: 3,py: 1,}}>
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>


      {/* -----------------------------------------------------about-------------------------------- */}


      <Grid item xs={12} md={6} sx={{ backgroundColor: colors.global, padding:"80px", marginRight:"80xp" }}>
        {/* Title */}
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" }, // responsive font size
            textAlign: "center",
            color: colors.primary,
            mb: 3,
          }}
        >
          About Us
        </Typography>

        {/* Paragraph 1 */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            px: { xs: 2, sm: 4, md: 6 }, 
            textAlign: "",
            lineHeight: 1.8,
            mb: " ",
          }}
          paragraph
        >
          We are committed to providing top-quality healthcare services with a
          holistic approach. Our experienced doctors and compassionate staff
          ensure that every patient receives the attention and care they
          deserve. We combine advanced technology with empathy to deliver
          trusted and reliable healthcare.With state-of-the-art facilities and a focus on innovation, we aim to
          make healthcare accessible, affordable, and trustworthy for
          everyone. We believe in building healthier communities by blending
          science, care, and compassion.
          With state-of-the-art facilities and a focus on innovation, we aim to
          make healthcare accessible, affordable, and trustworthy for
          everyone. We believe in building healthier communities by blending
          science, care, and compassion.
          With state-of-the-art facilities and a focus on innovation, we aim to
          make healthcare accessible, affordable, and trustworthy for
          everyone. We believe in building healthier communities by blending
          science, care, and compassion.
        </Typography>

        {/* Paragraph 2 */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            px: { xs: 2, sm: 4, md: 6 },
            textAlign: "",
            lineHeight: 1.8,
          }}
          paragraph
        >
          With state-of-the-art facilities and a focus on innovation, we aim to
          make healthcare accessible, affordable, and trustworthy for
          everyone. We believe in building healthier communities by blending
          science, care, and compassion.
        </Typography>
      </Grid>

      {/* ----------------------------------footer--------------------------------------------------- */}


     <Footer/>


    </>
  )
}

export default hindex

