import React from "react";
import DesigningIcon from "../../assets/Home/Designing Icon.svg";
import DevelopmentIcon from "../../assets/Home/Development Icon.svg";
import CompanyBrandingIcon from "../../assets/Home/Company Branding Icon.svg";

function Services() {
  return (
    <div className="home-services">
      <div className="home-services-set">
        <div className="home-services-set-icon">
          <img src={DesigningIcon} />
        </div>
        <section>
          <h3>Designing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et arcu egestas. Ligula ut
          </p>
        </section>
      </div>
      <div className="home-services-set">
        <div className="home-services-set-icon">
          <img src={DevelopmentIcon} />
        </div>
        <section>
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et arcu egestas. Ligula ut
          </p>
        </section>
      </div>
      <div className="home-services-set">
        <div className="home-services-set-icon">
          <img src={CompanyBrandingIcon} />
        </div>
        <section>
          <h3>Company Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et arcu egestas. Ligula ut
          </p>
        </section>
      </div>
    </div>
  );
}

export default Services;
