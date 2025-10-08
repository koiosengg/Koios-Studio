import React from "react";
import { Link } from "react-router-dom";

function Tertiary({ toLink, buttonLabel }) {
  return (
    <Link to={toLink} className="tertiary-btn">
      <p>{buttonLabel}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path
          d="M1.81139 13.707L0.400391 12.293L5.68938 6.99997L0.400391 1.70697L1.81539 0.292969L7.10038 5.58597C7.47532 5.96102 7.68595 6.46964 7.68595 6.99997C7.68595 7.5303 7.47532 8.03891 7.10038 8.41397L1.81139 13.707Z"
          fill="#FFBF00"
        />
      </svg>
    </Link>
  );
}

export default Tertiary;
