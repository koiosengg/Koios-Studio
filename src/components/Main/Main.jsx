import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";
import WebsiteDesigning from "./WebsiteDesigning";
import WebsiteDevelopment from "./WebsiteDevelopment";
import ApplicationDevelopment from "./ApplicationDevelopment";

function Main() {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web_desgining" element={<WebsiteDesigning />} />
        <Route path="/web_development" element={<WebsiteDevelopment />} />
        <Route path="/app_development" element={<ApplicationDevelopment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
