import React from "react";
import DesktopBackground from "../assets/TKS Desktop Products.png";
import SampleServices from "../assets/Sample Services.png";
function Products() {
  return (
    <div className="virtual-card-products">
      <img
        src={DesktopBackground}
        className="virtual-card-products-background"
      />
      <h2>Our Products</h2>
      <div className="virtual-card-products-container">
        <div className="virtual-card-products-set">
          <div className="virtual-card-products-set-img">
            <img src={SampleServices} />
          </div>
          <h3>Website Development</h3>
        </div>
        <div className="virtual-card-products-set">
          <div className="virtual-card-products-set-img">
            <img src={SampleServices} />
          </div>
          <h3>Website Development</h3>
        </div>
        <div className="virtual-card-products-set">
          <div className="virtual-card-products-set-img">
            <img src={SampleServices} />
          </div>
          <h3>Website Development</h3>
        </div>
        <div className="virtual-card-products-set">
          <div className="virtual-card-products-set-img">
            <img src={SampleServices} />
          </div>
          <h3>Website Development</h3>
        </div>
        <div className="virtual-card-products-set">
          <div className="virtual-card-products-set-img">
            <img src={SampleServices} />
          </div>
          <h3>Website Development</h3>
        </div>
        <div className="virtual-card-products-set">
          <div className="virtual-card-products-set-img">
            <img src={SampleServices} />
          </div>
          <h3>Website Development</h3>
        </div>
      </div>
    </div>
  );
}

export default Products;
