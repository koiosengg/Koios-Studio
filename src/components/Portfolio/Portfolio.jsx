import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import Websites from "./Websites";
import Branding from "./Branding";

function Portfolio() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/branding" element={<Branding />} />
    </Routes>
  );
}

export default Portfolio;
