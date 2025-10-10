import React from "react";
import Banner from "./Blogs/Banner";
import "./style.css";
import OurBlogs from "./Blogs/OurBlogs";
import Vision from "./Vision";
import Gallery from "./Gallery";
import FAQ from "./FAQ";

function Blogs() {
  return (
    <>
      <Banner />
      <OurBlogs />
      <Vision />
      <Gallery />
      <FAQ />
    </>
  );
}

export default Blogs;
