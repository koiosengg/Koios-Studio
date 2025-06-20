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
import Balaji_Proto_Tools from "./Projects/Balaji_Proto_Tools";
import Happy_Gummies from "./Projects/Happy_Gummies";
import Fourstor from "./Projects/Fourstor";
import Talankey from "./Projects/Talankey";
import Urban_Sphere from "./Projects/Urban_Sphere";

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
      <Route
        path="/projects/Balaji_Proto_Tools"
        element={<Balaji_Proto_Tools />}
      />
      <Route path="projects/Happy_Gummies" element={<Happy_Gummies />} />
      <Route path="projects/Fourstor" element={<Fourstor />} />
      <Route path="projects/Talankey" element={<Talankey />} />
      <Route path="projects/Urban_Sphere" element={<Urban_Sphere />} />
    </Routes>
  );
}

export default Portfolio;
