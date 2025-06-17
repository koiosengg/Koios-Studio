import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import Websites from "./Websites";
import Branding from "./Branding";
import Applications from "./Applications";
import Mobiglide from "./Projects/Mobiglide ";
import NE_Structures from "./Projects/NE_Structures";
import ISK_Auto_Industries from "./Projects/ISK_Auto_Industries";

function Portfolio() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/branding" element={<Branding />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/projects/Mobiglide" element={<Mobiglide />} />
      <Route path="/projects/NE_Structures" element={<NE_Structures />} />
      <Route
        path="/projects/ISK_Auto_Industries"
        element={<ISK_Auto_Industries />}
      />
    </Routes>
  );
}

export default Portfolio;
