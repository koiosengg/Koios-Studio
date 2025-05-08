import React from "react";
import { Link } from "react-router-dom";
import Branding from "./assets/Company Branding/Company Branding.webp";
import Merchandise from "./assets/Company Branding/Promotional Merchandise.webp";

function CompanyBranding() {
  return (
    <div class="p-mechanical-design">
      <div class="p-breadcrumb">
        <div class="p-breadcrumb-text">
          <Link to="/">
            Home<span> / </span>
          </Link>
          <p>Company Branding</p>
        </div>
      </div>
      <div class="p-mechanical-text-container">
        <div class="p-yellow-gradient-text">SOFTWARE</div>
        <div class="p-title-description">
          <div class="p-big-mechanical-title">Company Branding</div>
          <p>
            We deliver exceptional mechanical and automotive design, coupled
            with cutting-edge manufacturing, for your specialized machines and
            vehicles, meticulously meeting the highest industry standards.
          </p>
        </div>
      </div>

      <div class="s-product-list s-software-solutions">
        <div class="s-product-list-set">
          <div class="s-product-list-set-heading">
            <p>Company Branding</p>
            <h2>Shaping a unique identity, as memorable as your company.</h2>
          </div>
          <div class="s-product-list-set-container">
            <img src={Branding} alt="company branding" />
            <p class="subpage-desc">
              We include crafting a memorable logo, defining your values and
              mission, and creating a consistent visual and emotional experience
              across platforms. Effective and consistent branding helps build
              trust, recognition, and a strong connection with your audience,
              making it memorable.
            </p>
            <div class="p-various-types">
              <div class="p-various-types-text">The branding kit includes:</div>
              <div class="p-service-offering">
                <div class="p-left-service-text">
                  <div class="p-line-p">
                    <p>Logo Design</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>Typography</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>Email Templates</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>Letterhead</p>
                    <div class="p-btm-line"></div>
                  </div>
                </div>

                <div class="p-right-service-text">
                  <div class="p-line-p">
                    <p>Color Palette</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>Vision and Misson</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>Brochure</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>Business Card</p>
                    <div class="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="s-product-list-set">
          <div class="s-product-list-set-heading">
            <p>Promotional Merchandise</p>
            <h2>
              For the term <br />" that shoud be on a tshirt"!
            </h2>
          </div>
          <div class="s-product-list-set-container">
            <img src={Merchandise} alt="Promotional merchandise" />
            <p class="subpage-desc">
              Elevate your brand with our promotional merchandise service,
              offering expertly designed letterheads, business cards, flyers,
              posters, t-shirts, and more, tailored to represent your company's
              identity with professional precision.
            </p>
            <div class="p-various-types">
              <div class="p-various-types-text">Merchandise such as:</div>
              <div class="p-service-offering">
                <div class="p-left-service-text">
                  <div class="p-line-p">
                    <p>Company T-shirts</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>
                      Book/Menu Designing <br />
                      and Printing
                    </p>
                    <div class="p-btm-line"></div>
                  </div>
                </div>

                <div class="p-right-service-text">
                  <div class="p-line-p">
                    <p>Business Cards</p>
                    <div class="p-btm-line"></div>
                  </div>
                  <div class="p-line-p">
                    <p>
                      Letter Heads and Many <br />
                      More
                    </p>
                    <div class="p-btm-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyBranding;
