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
import Cilkencave from "./Projects/Cilkencave";
import MRIndustries from "./Projects/MR_Industries";
import Ameya from "./Projects/Ameya";
import LMG from "./Projects/LMG";
import Negilu from "./Projects/Negilu";
import Airportr from "./Projects/Airportr";
import GOAT from "./Projects/GOAT";
import Nirmalayam from "./Projects/Nirmalayam";
import Micronix from "./Projects/Micronix";
import Aerovidya from "./Projects/Aerovidya";

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
      <Route path="projects/Cilkencave" element={<Cilkencave />} />
      <Route path="projects/MR_Industries" element={<MRIndustries />} />
      <Route path="projects/Ameya" element={<Ameya />} />
      <Route path="projects/LMG" element={<LMG />} />
      <Route path="projects/Negilu" element={<Negilu />} />
      <Route path="projects/Airportr" element={<Airportr />} />
      <Route path="projects/GOAT" element={<GOAT />} />
      <Route path="projects/Nirmalayam" element={<Nirmalayam />} />
      <Route path="projects/Micronix" element={<Micronix />} />
      <Route path="projects/Aerovidya" element={<Aerovidya />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Portfolio;
