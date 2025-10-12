import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Blogs/Banner";
import "./style.css";
import OurBlogs from "./Blogs/OurBlogs";
import Vision from "./Vision";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import InnerPage from "./Blogs/InnerPage";

function Blogs() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Banner />
            <OurBlogs />
            <Vision />
            <Gallery />
            <FAQ />
          </>
        }
      />
      <Route path="inner-page" element={<InnerPage />} />
    </Routes>
  );
}

export default Blogs;
