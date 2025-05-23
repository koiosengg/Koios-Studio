import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./Home";
import Navbar from "./Navbar";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";
import WebsiteDesigning from "./WebsiteDesigning";
import WebsiteDevelopment from "./WebsiteDevelopment";
import ApplicationDevelopment from "./ApplicationDevelopment";
import CompanyBranding from "./CompanyBranding";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";

function Main() {
  return (
    <>
      <Helmet>
        <title>Koios Studios</title>
        <meta
          name="description"
          content="Explore Koios' Website Designing services including responsive design and UI/UX development."
        />
      </Helmet>
      <Navbar />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web_desgining" element={<WebsiteDesigning />} />
        <Route path="/web_development" element={<WebsiteDevelopment />} />
        <Route path="/app_development" element={<ApplicationDevelopment />} />
        <Route path="/company_branding" element={<CompanyBranding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
