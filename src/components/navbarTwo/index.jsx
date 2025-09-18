import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons";
import colors from "../../theme/color";

const navItems = [
  { type: "logo", label: "MyBrand", href: "/home", logo: "/image/logo.png" },
  { type: "link", label: "Home", href: "/home" },
  { type: "link", label: "Features", href: "/features" },
  { type: "link", label: "Patient List", href: "/patientlist" },
  { type: "link", label: "About", href: "/about" },
  { type: "button", label: "Sign Up", href: "/signup" },
  { type: "btn", label: "Log in" , href: "/"},
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar 
      position="sticky"
      color="transparent"
      elevation={2}
      //  backgroundColor={colors.excel}
      sx={{
        px: { xs: 2, md: 6 },
        py: 1,
        backgroundColor:colors.excel}}>

      {/* Single Flex Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        
        }}
      >
       
        <img 
         
          src={navItems.find((i) => i.type === "logo").logo}
          alt="Logo"
          style={{
            mixBlendMode:colors.logoMix,
            height: 70,
            cursor: "pointer",
            marginLeft: "-10px",
          }}
          onClick={() => navigate("/home")}/>

        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {navItems
            .filter((item) => item.type === "link")
            .map((page) => (

              <Button
                key={page.label}
                onClick={() => navigate(page.href)}
                sx={{
                  color: "text.primary",
                  backgroundColor: "transparent !important", 
                  display: { xs: "none", md: "inline-flex" },
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  position: "relative",
                  "&:hover": { color: "secondary.main" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: -2,
                    left: 0,
                    bgcolor: "secondary.main",
                    transition: "width 0.3s",
                  },
                  "&:hover::after": { width: "100%" },
                }}
              >
                {page.label}
              </Button>
            ))}

        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
     

          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {navItems
              .filter((item) => item.type === "link" || item.type === "button")
              .map((item) =>
                item.type === "button" ? (
                  <MenuItem
                    key={item.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(item.href);
                    }}
                  >
                    <Buttons
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                      }}
                    >
                      {item.label}
                    </Buttons>
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={item.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(item.href);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                )
              )}
          </Menu>

   
          <Button
            variant="contained"
              onClick={() => navigate("/signup")}
            sx={{
              ml: 2,
              borderRadius: "12px",
              textTransform: "none",
              px: 3,
              py: 1,
              fontWeight: 600,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1e88e5)",
              },
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            {navItems.find((i) => i.type === "button").label}
          </Button>
          <Button
          variant="outlined"
          onClick={()=> navigate('/')}
          sx={{
            ml:2,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            height:"4.9vh"
          }}>
            {navItems.find((i)=> i.type === "btn").label}

          </Button>
        </div>
      </div>
    </AppBar>
  );
}




