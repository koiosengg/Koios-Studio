import React from "react";
import Connect from "./components/Connect";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
import "./style.css";

function MudigetiSantosh() {
  return (
    <div className="virtual-card">
      <h1>Mudigeti Santosh</h1>
      <Testimony />
      <Connect />
      <Footer />
    </div>
  );
}

export default MudigetiSantosh;
