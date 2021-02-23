import React from "react";

const Background = ({ clientWidth }) => {
  const svgHeight = clientWidth * 1.20833; // =~435 when clientWidth 360
  return (
    <svg
      className="position-absolute bottom-0"
      width={clientWidth}
      height={svgHeight}
      viewBox={`0 0 ${clientWidth} ${svgHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(0,18)"
        d={`M0 40.3105 C92.0388 80.8932 175.079 -3.22818 276 0.0963014 C302.594 0.972354 330.43 6.49644 ${clientWidth} 19.8 V${svgHeight} H0 V40.3105 Z`}
        fill="url(#gradient_linear)"
      />

      <path
        opacity="0.7"
        d={`M0 20.5 C33.0798 35.0848 108.997 51.8874 141 47.5 C221.504 36.4633 258.549 -29.1403 ${clientWidth} 16.5 V${svgHeight} H0 V20.5 Z`}
        fill="url(#gradient_linear)"
      />

      <path
        transform="translate(0,7)"
        opacity="0.5"
        d={`M0 12.0864 C33.0798 27.1013 95.9971 9.51681 128 5 C208.504 -6.36212 258.549 5.01379 ${clientWidth} 42 V${svgHeight} H0 V12.0864 Z`}
        fill="url(#gradient_linear)"
      />

      <defs>
        <linearGradient
          id="gradient_linear"
          x1="92.709"
          y1="-197.887"
          x2="305.649"
          y2="-191.239"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#006EB5" />
          <stop offset="1" stopColor="#003087" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Background;
