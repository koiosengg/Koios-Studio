import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Testimony from "./components/Testimony";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import "./style.css";

function MahiRastogi() {
  return (
    <div className="virtual-card">
      <Banner />
      <About />
      <Experience />
      <Contact />
      <Testimony />
      <Connect />
      <Footer />
    </div>
  );
}

export default MahiRastogi;
