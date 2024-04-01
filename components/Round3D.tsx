import React from "react";

const Round3D = () => {
  return (
    <div className="w-[200px] h-[200px] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 800"
      >
        <defs>
          <radialGradient id="sssurface-grad-dark" r="75%" cx="20%" cy="20%">
            <stop
              offset="0%"
              stop-color="hsl(36, 99%, 55%)"
              stop-opacity="0"
            ></stop>
            <stop offset="100%" stop-color="#c57400" stop-opacity="1"></stop>
          </radialGradient>
          <radialGradient id="sssurface-grad-light" r="25%" cx="30%" cy="30%">
            <stop offset="0%" stop-color="#ffd454" stop-opacity="0.75"></stop>
            <stop
              offset="100%"
              stop-color="hsl(36, 99%, 55%)"
              stop-opacity="0"
            ></stop>
          </radialGradient>
          <filter
            id="sssurface-blur"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="30"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g>
          <ellipse
            rx="350"
            ry="175"
            cx="450"
            cy="500"
            fill="#8f4800"
            opacity="0.25"
            filter="url(#sssurface-blur)"
          ></ellipse>
          <circle r="350" cx="400" cy="400" fill="hsl(36, 99%, 55%)"></circle>
          <circle
            r="350"
            cx="400"
            cy="400"
            fill="url(#sssurface-grad-dark)"
          ></circle>
          <circle
            r="350"
            cx="400"
            cy="400"
            fill="url(#sssurface-grad-light)"
          ></circle>
        </g>
      </svg>
    </div>
  );
};

export default Round3D;
