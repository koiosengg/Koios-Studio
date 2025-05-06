import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";
import WebsiteDesigning from "./WebsiteDesigning";

function Main() {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web_desgining" element={<WebsiteDesigning />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
