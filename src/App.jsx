import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded components
const Main = lazy(() => import("./components/Main/Main"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const TemplateTKS = lazy(() => import("./components/Virtual Card/TemplateTKS"));
const MudigetiSantosh = lazy(() => import("./components/Virtual Card/MudigetiSantosh"));
const PriyankaKP = lazy(() => import("./components/Virtual Card/PriyankaKP"));
const LakshitJain = lazy(() => import("./components/Virtual Card/LakshitJain"));
const ShvethaS = lazy(() => import("./components/Virtual Card/ShvethaS"));
const AbhayNayak = lazy(() => import("./components/Virtual Card/AbhayNayak"));
const Payal = lazy(() => import("./components/Virtual Card/Payal"));
const MahiRastogi = lazy(() => import("./components/Virtual Card/MahiRastogi"));
const TemplateKES = lazy(() => import("./components/Virtual Card/TemplateKES"));
const BalasubramanyamM = lazy(() => import("./components/Virtual Card/BalasubramanyamM"));
const JayeshPV = lazy(() => import("./components/Virtual Card/JayeshPV"));
const ShreeDattaT = lazy(() => import("./components/Virtual Card/ShreeDattaT "));
const VishalPujar = lazy(() => import("./components/Virtual Card/VishalPujar"));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="portfolio/*" element={<Portfolio />} />
            <Route path="TemplateTKS" element={<TemplateTKS />} />
            <Route path="MudigetiSantosh" element={<MudigetiSantosh />} />
            <Route path="PriyankaKP" element={<PriyankaKP />} />
            <Route path="LakshitJain" element={<LakshitJain />} />
            <Route path="ShvethaS" element={<ShvethaS />} />
            <Route path="AbhayNayak" element={<AbhayNayak />} />
            <Route path="Payal" element={<Payal />} />
            <Route path="MahiRastogi" element={<MahiRastogi />} />
            <Route path="TemplateKES" element={<TemplateKES />} />
            <Route path="BalasubramanyamM" element={<BalasubramanyamM />} />
            <Route path="JayeshPV" element={<JayeshPV />} />
            <Route path="ShreeDattaT" element={<ShreeDattaT />} />
            <Route path="VishalPujar" element={<VishalPujar />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
