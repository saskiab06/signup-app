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
        d={`M0 40.3105 
            C92.0388 80.8932 175.079 -3.22818 276 0.0963014 
            C302.594 0.972354 330.43 6.49644 ${clientWidth} 19.8 
            V${svgHeight} H0 V40.3105 Z`}
        fill="url(#gradient_linear)"
      >
        <animate
          repeatCount="indefinite"
          fill="url(#gradient_linear)"
          attributeName="d"
          dur="10s"
          values={`
            M0 40.3105 
            C92.0388 80.8932 175.079 -3.22818 276 0.0963014 
            C302.594 0.972354 330.43 6.49644 ${clientWidth} 19.8 
            V${svgHeight} H0 V40.3105 Z;

            M 0 40.3105 
            C 100 -36 195 63 261 56 
            C 300 56 334 44 ${clientWidth} 19.8 
            V${svgHeight} H0 V40.3105 Z;

            M0 40.3105 
            C92.0388 80.8932 175.079 -3.22818 276 0.0963014 
            C302.594 0.972354 330.43 6.49644 ${clientWidth} 19.8 
            V${svgHeight} H0 V40.3105 Z
            `}
        ></animate>
      </path>

      <path
        opacity="0.7"
        d={`M0 20.5 C33.0798 35.0848 108.997 51.8874 141 47.5 C221.504 36.4633 258.549 -29.1403 ${clientWidth} 16.5 V${svgHeight} H0 V20.5 Z`}
        fill="url(#gradient_linear)"
      >
        <animate
          repeatCount="indefinite"
          fill="url(#gradient_linear)"
          attributeName="d"
          dur="11s"
          values={`
        M 0 30.5
        C 33.0798 35.0848 108.997 51.8874 141 47.5
        C 221.504 36.4633 258.549 -29.1403 ${clientWidth} 30.5
        V ${svgHeight} H 0 V 20.5 Z;
       
        M 0 30.5 C 33.0798 35.0848 56 15 110 14 C 199 15 271 85 ${clientWidth} 36.5 
        V ${svgHeight} H 0 V 20.5 Z;  
      
        M 0 30.5
        C 33.0798 35.084 108.997 51.8874 141 47.5
        C 221.504 36.4633 258.549 -29.1403 ${clientWidth} 30.5
        V ${svgHeight} H 0 V 20.5 Z;`}
        ></animate>
      </path>
      <path
        transform="translate(0,7)"
        opacity="0.5"
        d={`
          M 0 25.1
          C 33.08 27.10 96 9.52 128 5
          C 208.5 -6.36 258.55 5 ${clientWidth} 42 
          V${svgHeight} H0 V12.0864 Z
          `}
        fill="url(#gradient_linear)"
      >
        <animate
          repeatCount="indefinite"
          fill="url(#gradient_linear)"
          attributeName="d"
          dur="9s"
          values={`
            M 0 25.1
            C 33.08 27.10 96 9.52 128 5
            C 208.5 -6.36 258.55 5 ${clientWidth} 42
            V ${svgHeight}
            H 0
            V 12.0864
            Z;

            M 0 12.0864 C 33.0798 27.1013 79 37 130 43 
            C 205 51 257 54 ${clientWidth} 42
            V ${svgHeight}
            H 0
            V 12.0864
            Z;
          
            M 0 25.1 
            C 33.08 27.1 67 9.52 128 5 
            C 208.5 -6.36 258.55 5 ${clientWidth} 42
            V ${svgHeight}
            H 0
            V 12.0864
            Z`}
        ></animate>
      </path>

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
