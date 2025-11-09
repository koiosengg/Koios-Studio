import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

// Main Pages
import Home from "./Home";
import Websites from "./Websites";
import Branding from "./Branding";
import Applications from "./Applications";

// 🧱 Website Projects
import Mobiglide from "./Projects/Mobiglide";
import NE_Structures from "./Projects/NE_Structures";
import ISK_Auto_Industries from "./Projects/ISK_Auto_Industries";
import Happy_Gummies from "./Projects/Happy_Gummies";
import Fourstor from "./Projects/Fourstor";
import Talankey from "./Projects/Talankey";
import Urban_Sphere from "./Projects/Urban_Sphere";
import Cilkencave from "./Projects/Cilkencave";
import Balaji_Proto_Tools from "./Projects/Balaji_Proto_Tools";
import MR_Industries from "./Projects/MR_Industries";
import Ameya from "./Projects/Ameya";
import XLR8 from "./Projects/XLR8";
import Akarswift from "./Projects/Akarswift";
import GMW from "./Projects/GMW";
import SIMMFA from "./Projects/SIMMFA";
import Clayful_Homes from "./Projects/Clayful_Homes";

// 🪄 Branding Projects
import GOAT from "./Projects/GOAT";
import Nirmalyam from "./Projects/Nirmalyam";
import Micronix from "./Projects/Micronix";
import Aerovidya from "./Projects/Aerovidya";
import Coffee_Culture from "./Projects/Coffee_Culture";
import Motard from "./Projects/Motard";

// 💻 Application Projects
import LMG from "./Projects/LMG";
import Negilu from "./Projects/Negilu";
import Airportr from "./Projects/Airportr";
import IdaviFoods from "./Projects/IdaviFoods";

// ⚙️ Miscellaneous / Product Projects

function Portfolio() {
  return (
    <Routes>
      {/* 🌐 Main Sections */}
      <Route path="/" element={<Home />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/branding" element={<Branding />} />
      <Route path="/applications" element={<Applications />} />

      {/* 🧱 Websites */}
      <Route path="/websites/Mobiglide" element={<Mobiglide />} />
      <Route path="/websites/NE_Structures" element={<NE_Structures />} />
      <Route
        path="/websites/ISK_Auto_Industries"
        element={<ISK_Auto_Industries />}
      />
      <Route path="/websites/Happy_Gummies" element={<Happy_Gummies />} />
      <Route path="/websites/Fourstor" element={<Fourstor />} />
      <Route path="/websites/Talankey" element={<Talankey />} />
      <Route path="/websites/Urban_Sphere" element={<Urban_Sphere />} />
      <Route path="/websites/Cilkencave" element={<Cilkencave />} />
      <Route
        path="/websites/Balaji_Proto_Tools"
        element={<Balaji_Proto_Tools />}
      />
      <Route path="/websites/MR_Industries" element={<MR_Industries />} />
      <Route path="/websites/XLR8" element={<XLR8 />} />
      <Route path="/websites/Akarswift" element={<Akarswift />} />
      <Route path="/websites/GMW" element={<GMW />} />
      <Route path="/websites/Ameya" element={<Ameya />} />
      <Route path="/websites/SIMMFA" element={<SIMMFA />} />
      <Route path="/websites/Clayful_Homes" element={<Clayful_Homes />} />

      {/* 🪄 Branding */}
      <Route path="/branding/GOAT" element={<GOAT />} />
      <Route path="/branding/Nirmalyam" element={<Nirmalyam />} />
      <Route path="/branding/Micronix" element={<Micronix />} />
      <Route path="/branding/Aerovidya" element={<Aerovidya />} />
      <Route path="/branding/Coffee_Culture" element={<Coffee_Culture />} />
      <Route path="/branding/Motard" element={<Motard />} />

      {/* 💻 Applications */}
      <Route path="/applications/LMG" element={<LMG />} />
      <Route path="/applications/Negilu" element={<Negilu />} />
      <Route path="/applications/Airportr" element={<Airportr />} />
      <Route path="/applications/Idavi_Foods" element={<IdaviFoods />} />

      {/* 🏠 Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Portfolio;
