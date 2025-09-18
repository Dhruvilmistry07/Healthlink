import React from 'react'
import Navbar from '../../components/navbarTwo'
import { Typography , Button, Grid, Card, CardContent,CardActions, } from '@mui/material'
import colors from '../../theme/color'
import Footer from '../../components/footer'
  
  

const index = () => {

     const solutions = [
    {
      title: "Family Planning",
      description:
        "Comprehensive care and guidance for fertility, preconception, and family building.",
    },
    {
      title: "Maternity & Newborn",
      description: "Support through pregnancy, postpartum, and early parenting.",
    },
    {
      title: "Mental Health",
      description: "Access to therapists, coaches, and resources for mental well-being.",
    },
  ];
  
   const plans = [
    {
      title: "Basic Plan",
      price: "$29/month",
      features: ["Fertility guidance", "Email support", "Wellness resources"],
    },
    {
      title: "Premium Plan",
      price: "$59/month",
      features: ["Everything in Basic","Virtual doctor consultations","24/7 chat support"],
      highlight: true,
    },
    {
      title: "Enterprise Plan",
      price: "Custom Pricing",
      features: [ "Everything in Premium", "Dedicated care manager", "Tailored company solutions"],
      
    },
  ];


  return (
    <div>
        <Navbar/>
   <div>
   
      <div
        style={{
          minHeight: "80vh",
          background: "url('/image/team.jpeg') center/cover  no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0 0%",
        }}>

        <div
          style={{
            maxWidth: "600px",
            backgroundColor: "rgba(255,255,255,0.85)",
            padding: "30px",
            borderRadius: "16px",
            marginLeft:"50px",
            marginTop:"290px"
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Deliver the future of women’s and family healthcare today
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#555", marginBottom: "20px" }}
          >
            Partnering with leading health plans to provide engaging,
            outcomes-based care from family planning through midlife.
          </Typography>
          <div style={{ display: "flex", gap: "15px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "12px", padding: "10px 30px" }}
            >
              Book a demo
            </Button>
            <Button
              variant="outlined"
              style={{
                borderRadius: "12px",
                padding: "10px 30px",
                fontWeight: "bold",
              }}
            >
              Explore our solutions
            </Button>
          </div>
        </div>
      </div>

      <div style={{ padding: "60px 10%", backgroundColor:colors.global }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Explore Our Health Plan Solutions
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ color: "#666", marginBottom: "40px" }}
        >
          Supporting every stage of life with comprehensive, personalized care.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {solutions.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                style={{ background:colors.excel , borderRadius: "16px", boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
                  transition: "0.3s", height: "100%", padding: "20px" }}>

                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                     {card.title}
                  </Typography>
                   <Typography variant="body2" color="text.secondary">
                    {card.description}
                   </Typography>
                 </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>




{/* ------------------------------plan------------------------------------------------------- */}


      < div style={{ background: colors.global, padding: "60px 10%" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Choose Your Plan
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ color: "#666", marginBottom: "40px" }}
      >
        Flexible options to meet your health and family care needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                borderRadius: "16px",
                boxShadow: plan.highlight
                  ? "0px 8px 25px rgba(0,150,136,0.3)"
                  : "0px 6px 18px rgba(0,0,0,0.1)",
                border: plan.highlight ? "2px solid #009688" : "none",
                height: "100%",
                width: "400px"
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  align="center"
                  gutterBottom
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="primary"
                  gutterBottom
                >
                  {plan.price}
                </Typography>
                <ul style={{ paddingLeft: "20px", margin: "20px 0" }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ marginBottom: "8px", color: "#555" }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions style={{ justifyContent: "center", padding: "20px" }}>
                <Button
                  variant={plan.highlight ? "contained" : "outlined"}
                  color="primary"
                  style={{ borderRadius: "12px", padding: "10px 25px" }}
                >
                  Buy Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>


    <Footer/>



    </div>


// ------------------------------------------------------------------------------------------------------

  
   




  )
}

export default index
