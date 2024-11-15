import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import FooterStar from "../Footer/FooterStar";

function OurSuccess() {
  const projectRef = useRef(null);
  const [projectNumber, setProjectNumber] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleCountAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 1;
          const target = 54;
          const increment = 1;
          const duration = 5000;
          const intervalTime = duration / (target - current);

          const interval = setInterval(() => {
            if (current < target) {
              current += increment;
              setProjectNumber(current);
            } else {
              clearInterval(interval);
            }
          }, intervalTime);
        }
      });
    };

    const observer = new IntersectionObserver(handleCountAnimation, {
      threshold: 0.4,
    });

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="our-success">
      <Search />
      <div className="contact-info-set">
        <div className="contact-info-set-div">
          <div className="heading">
            <h3>Our Success Stories</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Venenatis sapien id
              ultrices sed mauris ut et
            </p>
          </div>
          <div className="our-success-number-container">
            <div className="our-success-number">
              <span>37</span>
              <p>Clients</p>
            </div>
            <div className="our-success-number" id="project" ref={projectRef}>
              <span>{projectNumber.toString().padStart(2, "0")}</span>
              <p>Projects</p>
            </div>
            <div className="our-success-number">
              <span>45</span>
              <p>Team Members</p>
            </div>
            <div className="our-success-number-container-left"></div>
            <div className="our-success-number-container-right"></div>
          </div>
        </div>
        <div className="our-success-contact-info-set-bottom-line"></div>
        <FooterStar />
      </div>
    </div>
  );
}

export default OurSuccess;
