import React from 'react'
import colors from '../../theme/color'
import { Container, Grid , Typography,Link, IconButton ,  } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { color } from 'framer-motion';

const index = () => {
  return (
    <div>
       <div
              style={{
                backgroundColor: colors.excel,
                color: colors.avatarText, marginTop: "px",
                paddingTop: "80px", paddingBottom: "20px",
                height:"350px"
              }}>
      
              <Container maxWidth="full">
                <Grid container spacing={14}>
      
      
                  <div style={{ textAlign: "center", color: colors.navbarText }}>
                    <img
                      src="/image/logo.png" alt="Logo"
                      style={{ paddingLeft: "10px", height: 80, marginBottom: "16px", mixBlendMode: colors.logoMix }} />
      
                    <Typography variant="body2" sx={{marginLeft:"30px"}} >
                      Bliss Fertility Center provides trusted healthcare services
                      with compassion and innovation, ensuring a healthier tomorrow.
                    </Typography>
      
                  </div>
      
      
      
                  <Grid item xs={12} md={3} sx={{margin:"20px"}} >
                    <Typography variant="h6" color='black' gutterBottom fontWeight={600}>
                      Learn More
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "column", color: colors.navbarText }}>
                      <Link href="/about" color="inherit" underline="hover">
                        About Us
                      </Link>
                      <Link href="/services" color="inherit" underline="hover">
                        Our Services
                      </Link>
                      <Link href="/method" color="inherit" underline="hover">
                        Our Method
                      </Link>
                    </div>
                  </Grid>
      
      
                  <Grid item xs={12} md={3} sx={{marginTop:"20px"}}>
                    <Typography variant="h6" color='black' gutterBottom fontWeight={600}>
                      Contact Us
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", color: colors.navbarText }}>
                      <Link href="/apply" color="inherit" underline="hover">
                        Apply Now
                      </Link>
                      <Link href="/contact" color="inherit" underline="hover">
                        Contact
                      </Link>
                      <div style={{ marginTop: "px", display: "flex", gap: "10px" }}>
                        <IconButton sx={{ color: colors.navbarText }} href="https://facebook.com">
                          <FacebookIcon />
      
                        </IconButton>
                        <IconButton sx={{ color: color.avatarText }} href="https://instagram.com">
                          <InstagramIcon />
                        </IconButton>
                      </div>
                    </div>
                  </Grid>
      
                  {/* Find Us */}
                  <Grid item xs={12} md={3} sx={{margin:"20px"}}>
                    <Typography variant="h6" color='black' gutterBottom fontWeight={600}>
                      Find Us
                    </Typography>
                    <Typography variant="body2">
                      2717 Poinsettia Ave. <br />
                      West Palm Beach, FL 33407
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: "8px" }}>
                      561-210-4596
                    </Typography>
                  </Grid>
                </Grid>
      
                {/* Bottom Bar */}
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    marginTop: "30px",
                    borderTop: "1px solid black",
                  }}
                >
                  <Typography variant="body2">
                    © {new Date().getFullYear()} Bliss Fertility Center Inc. | Privacy
                    Policy | Site Credit
                  </Typography>
                </div>
              </Container>
            </div>
    </div>
  )
}

export default index
