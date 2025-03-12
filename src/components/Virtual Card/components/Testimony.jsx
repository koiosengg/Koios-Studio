import React, { useRef, useState, useEffect } from "react";
import Sample from "../assets/Testimony.jpg";
import Star from "../assets/Testimony Star.png";
import Arrow from "../assets/Testimony Arrow.png";

function Testimony() {
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [halfWidth, setHalfWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setHalfWidth(containerWidth / 2 + 24);
    }
  }, []);

  const handleSlide = (direction) => {
    setTranslateX(
      (prev) => prev + (direction === "left" ? halfWidth : -halfWidth)
    );
  };
  return (
    <div className="virtual-card-testimony">
      <h2>What People Say</h2>
      <div className="virtual-card-testimony-container">
        <div
          className="virtual-card-testimony-set-container"
          ref={containerRef}
        >
          <div
            className="virtual-card-testimony-set-slide"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div className="virtual-card-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                Quam eleifend magna aliquet ut. Turpis gravida quis
              </p>
              <section>
                <div className="virtual-card-testimony-info">
                  <img
                    src={Sample}
                    style={{ gridArea: "box-1" }}
                    alt="Shreyas Photo"
                  />
                  <h4 style={{ gridArea: "box-2" }}>Shreyas 1</h4>
                  <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                </div>
                <div className="virtual-card-testimony-star">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </section>
            </div>
            <div className="virtual-card-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                Quam eleifend magna aliquet ut. Turpis gravida quis
              </p>
              <section>
                <div className="virtual-card-testimony-info">
                  <img
                    src={Sample}
                    style={{ gridArea: "box-1" }}
                    alt="Shreyas Photo"
                  />
                  <h4 style={{ gridArea: "box-2" }}>Shreyas 2</h4>
                  <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                </div>
                <div className="virtual-card-testimony-star">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </section>
            </div>
            <div className="virtual-card-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                Quam eleifend magna aliquet ut. Turpis gravida quis
              </p>
              <section>
                <div className="virtual-card-testimony-info">
                  <img
                    src={Sample}
                    style={{ gridArea: "box-1" }}
                    alt="Shreyas Photo"
                  />
                  <h4 style={{ gridArea: "box-2" }}>Shreyas 3</h4>
                  <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                </div>
                <div className="virtual-card-testimony-star">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </section>
            </div>
            <div className="virtual-card-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                Quam eleifend magna aliquet ut. Turpis gravida quis
              </p>
              <section>
                <div className="virtual-card-testimony-info">
                  <img
                    src={Sample}
                    style={{ gridArea: "box-1" }}
                    alt="Shreyas Photo"
                  />
                  <h4 style={{ gridArea: "box-2" }}>Shreyas 4</h4>
                  <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                </div>
                <div className="virtual-card-testimony-star">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </section>
            </div>
            <div className="virtual-card-testimony-set">
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus cursus platea
                lobortis id. Sit nibh ullamcorper in libero donec enim auctor.
                Quam eleifend magna aliquet ut. Turpis gravida quis
              </p>
              <section>
                <div className="virtual-card-testimony-info">
                  <img
                    src={Sample}
                    style={{ gridArea: "box-1" }}
                    alt="Shreyas Photo"
                  />
                  <h4 style={{ gridArea: "box-2" }}>Shreyas 5</h4>
                  <span style={{ gridArea: "box-3" }}>13 Dec 2024</span>
                </div>
                <div className="virtual-card-testimony-star">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="virtual-card-testimony-button-container">
          <button onClick={() => handleSlide("left")}>
            <img src={Arrow} alt="Left Arrow" />
          </button>
          <button onClick={() => handleSlide("right")}>
            <img
              src={Arrow}
              style={{ transform: "rotate(180deg)" }}
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
