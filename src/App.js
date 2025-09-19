import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/index.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Signup from "./pages/Signup/index.jsx";
import Patientlist from "./pages/Patientlist/index.jsx"
import Forgot from "./pages/Forget/index.jsx";
import Doctor from "./pages/Doctor/index.jsx";
import Home from "./pages/Home/index.jsx";
import HealthPlan from "./pages/Healthplan/index.jsx";
import About from './pages/About/index.jsx';



function App() {
  return (
     <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/healthplan" element={<HealthPlan />}/>
        <Route path="/patientlist" element={<Patientlist/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/forget-password" element={<Forgot/>} />
      </Routes>
    </Router>

  );
}

export default App;
