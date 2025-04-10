import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";

function Portfolio() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Portfolio;
