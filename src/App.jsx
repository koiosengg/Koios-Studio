import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import TemplateTKS from "./components/Virtual Card/TemplateTKS";
import MudigetiSantosh from "./components/Virtual Card/MudigetiSantosh";
import PriyankaKP from "./components/Virtual Card/PriyankaKP";
import LakshitJain from "./components/Virtual Card/LakshitJain";
import ShvethaS from "./components/Virtual Card/ShvethaS";
import AbhayNayak from "./components/Virtual Card/AbhayNayak";
import Payal from "./components/Virtual Card/Payal";
import TemplateKES from "./components/Virtual Card/TemplateKES";
import BalasubramanyamM from "./components/Virtual Card/BalasubramanyamM";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio/*" element={<Portfolio />} />
          <Route path="TemplateTKS" element={<TemplateTKS />} />
          <Route path="MudigetiSantosh" element={<MudigetiSantosh />} />
          <Route path="PriyankaKP" element={<PriyankaKP />} />
          <Route path="LakshitJain" element={<LakshitJain />} />
          <Route path="ShvethaS" element={<ShvethaS />} />
          <Route path="AbhayNayak" element={<AbhayNayak />} />
          <Route path="Payal" element={<Payal />} />
          <Route path="TemplateKES" element={<TemplateKES />} />
          <Route path="BalasubramanyamM" element={<BalasubramanyamM />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
