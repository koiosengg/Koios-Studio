import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import Websites from "./Websites";
import Branding from "./Branding";
import Applications from "./Applications";
import Mobiglide from "./Projects/Mobiglide ";

function Portfolio() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/branding" element={<Branding />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/projects/Mobiglide" element={<Mobiglide />} />
    </Routes>
  );
}

export default Portfolio;
