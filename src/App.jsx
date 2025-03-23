import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import TemplateTKS from "./components/Virtual Card/TemplateTKS";
import MudigetiSantosh from "./components/Virtual Card/MudigetiSantosh";
import MahiRastogi from "./components/Virtual Card/MahiRastogi";
import Error from "./components/Error";

function Layout({ children }) {
  const location = useLocation();
  const hideLayoutFor = ["/TemplateTKS", "/MudigetiSantosh", "/MahiRastogi"];

  const shouldHideLayout = hideLayoutFor.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="TemplateTKS" element={<TemplateTKS />} />
            <Route path="MudigetiSantosh" element={<MudigetiSantosh />} />
            <Route path="MahiRastogi" element={<MahiRastogi />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
