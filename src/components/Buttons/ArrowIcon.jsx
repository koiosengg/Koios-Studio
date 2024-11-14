import React from "react";

function ArrowIcon({ classname, id }) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
      id={id}
      aria-label="arrow icon"
    >
      <g id="01 align center">
        <path
          id="Vector"
          d="M2.06139 13.707L0.650391 12.293L5.93938 6.99997L0.650391 1.70697L2.06539 0.292969L7.35038 5.58597C7.72532 5.96102 7.93595 6.46964 7.93595 6.99997C7.93595 7.5303 7.72532 8.03891 7.35038 8.41397L2.06139 13.707Z"
          fill="#121212"
        />
      </g>
    </svg>
  );
}

export default ArrowIcon;
