import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import Websites from "./Websites";

function Portfolio() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites" element={<Websites />} />
    </Routes>
  );
}

export default Portfolio;
