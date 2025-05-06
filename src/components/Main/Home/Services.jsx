import React from "react";
import WebsiteDesigning from "./Services/WebsiteDesigning";
import WebsiteDevelopment from "./Services/WebsiteDevelopment";
import MobileApplication from "./Services/MobileApplication";
import CompanyBranding from "./Services/CompanyBranding";
function Services() {
  return (
    <div className="s-product-list s-software-solutions">
      <WebsiteDesigning />
      <WebsiteDevelopment />
      <MobileApplication />
      <CompanyBranding />
    </div>
  );
}

export default Services;
