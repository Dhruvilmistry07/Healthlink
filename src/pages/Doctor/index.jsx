import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from "../../components/navbar/index.jsx";

const doctor = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div style={{ display: "flex" }}>

      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Main Content Area */}
      <div style={{
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center",     // vertical center
        height: "100vh",           // full screen height
        marginLeft: openSidebar ? "200px" : "60px",
        transition: "margin 0.3s",
      }}>
        <h1>Hello World</h1>
      </div>


    </div>
  )
}

export default doctor




