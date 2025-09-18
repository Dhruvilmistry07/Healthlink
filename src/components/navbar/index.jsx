import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import Logout from "@mui/icons-material/Logout";
import Loader from "../loader/index.jsx";
import colors from "../../theme/color.js"; 

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
    else navigate("/");
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const drawerMenuItems = [
    { text: "Home", path: "/home", icon: <HomeIcon  /> },
    { text: "Patientlist", path: "/patientlist", icon: <GroupAddOutlinedIcon /> },
    { text: "Doctor", path: "/doctor", icon: <PersonIcon /> },
  ];

  if (loading) return <Loader />;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Top AppBar */}

      <AppBar position="fixed" style={{ background: colors.navbarBg, color: colors.navbarText }}>
        
        <Toolbar style={{ display: "flex", justifyContent: "space-between", backgroundColor: colors.navbarToolbarBg }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
              <PlaylistPlayIcon fontSize="large"  />
            </IconButton>
            <img
              src="/image/logo.png"
              alt="Logo"
              style={{ height: 50, cursor: "pointer", mixBlendMode: colors.logoMix }}
              onClick={() => navigate("/home")}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Account settings">
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Avatar style={{ backgroundColor: colors.avatarBg, color: colors.avatarText, width: 32, height: 32 }}>
                  {currentUser?.name?.[0]?.toUpperCase() || ""}
                </Avatar>
              </IconButton>
            </Tooltip>
            <IconButton onClick={handleLogout}>
              <Logout />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* User Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>
          <div>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              {currentUser?.name || "Guest"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {currentUser?.email || "No email"}
            </Typography>
          </div>
        </MenuItem>
      </Menu>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        open={openSidebar}
        PaperProps={{
          style: {
            top: "64px",
            width: openSidebar ? 200 : 60,
            transition: "width 0.3s",
            overflowX: "hidden",
            backgroundColor: colors.drawerBg,
          },
        }}
      >
        <List>
          {drawerMenuItems.map((item, idx) => (
            <ListItem key={idx} disablePadding style={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                style={{
                  minHeight: 48,
                  justifyContent: openSidebar ? "initial" : "center",
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
              >
                <ListItemIcon style={{ minWidth: 0, marginRight: openSidebar ? 16 : "auto", justifyContent: "center" }}>
                  {item.icon}
                </ListItemIcon>
                {openSidebar && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
