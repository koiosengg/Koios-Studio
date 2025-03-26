import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Watch from "./components/Watch";
import Skills from "./components/Skills";
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
      <Services />
      <Products />
      <Watch />
      <Skills />
      <Experience />
      <Contact />
      <Testimony />
      <Connect />
      <Footer />
    </div>
  );
}

export default MahiRastogi;
