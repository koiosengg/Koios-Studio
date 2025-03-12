import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import VirtualCard from "./components/Virtual Card/VirtualCard";
import Error from "./components/Error";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>

          <Route path="Team/:employeeName" element={<VirtualCard />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
