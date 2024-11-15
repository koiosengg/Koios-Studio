import React, { useEffect, useRef, useState } from "react";
import GlowDivImg from "../../assets/Contact/Glow Div Img.png";

function Glow() {
  const imgRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-glow-div">
      <img
        ref={imgRef}
        src={GlowDivImg}
        className={hasEnteredView ? "contact-glow-div-in-view" : ""}
        alt="Glow Div"
      />
    </div>
  );
}

export default Glow;
