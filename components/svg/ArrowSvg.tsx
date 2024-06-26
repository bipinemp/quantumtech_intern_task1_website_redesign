import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  val?: string;
};
const ArrowSvg = ({ val }: Props) => {
  return (
    <div
      className={cn("size-[100px] hidden llg:absolute llg:block", {
        "-right-5 rotate-90 top-0": val === "",
        "-left-2 rotate-[280deg] top-5": val !== "",
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="100%"
        height="100%"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <defs></defs>
        <g
          fill={`${val !== "" ? "hsla(36 99% 55%)" : "black"}`}
          //   style="stroke: none; strokeWidth: 0; stroke-dasharray: none; stroke-linecap: butt; strokeLinejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 72.582 89.984 c -0.036 -0.004 -0.071 -0.005 -0.107 -0.011 c -0.979 -0.13 -1.738 -0.959 -1.738 -1.973 v -9.704 c 0 -1.104 0.895 -2 2 -2 c 1.104 0 2 0.895 2 2 v 5.319 c 4.224 -4.317 6.945 -9.85 7.78 -15.943 c 1.029 -7.506 -0.929 -14.955 -5.508 -20.987 C 73.24 41.72 68.14 38.347 62.58 36.685 c -1.111 8.229 -5.362 16.031 -12.483 21.437 c -10.258 7.788 -18.323 6.538 -22.112 3.101 c -3.889 -3.527 -4.116 -9.518 -0.581 -15.262 c 1.712 -2.782 4.223 -5.44 7.464 -7.9 c 6.883 -5.225 15.387 -7.457 23.949 -6.285 c 0.019 0.002 0.036 0.005 0.055 0.007 c -0.11 -5.796 -1.988 -11.61 -5.754 -16.57 C 48.539 9.182 41.885 5.295 34.383 4.268 C 26.881 3.24 19.427 5.196 13.396 9.775 c 0 0 0 0 -0.001 0.001 c -2.845 2.159 -5.024 4.451 -6.476 6.811 c -0.579 0.94 -1.81 1.234 -2.751 0.655 c -0.94 -0.578 -1.235 -1.81 -0.655 -2.751 c 1.712 -2.783 4.223 -5.441 7.464 -7.901 c 0.001 -0.001 0.003 -0.002 0.004 -0.003 c 6.882 -5.223 15.385 -7.453 23.944 -6.281 c 8.561 1.172 16.153 5.608 21.377 12.49 c 4.491 5.915 6.659 12.896 6.57 19.798 c 6.889 1.848 12.939 5.9 17.321 11.673 c 4.316 5.685 6.59 12.477 6.59 19.492 c 0 1.478 -0.101 2.967 -0.305 4.456 C 85.553 74.98 82.581 81.135 77.981 86 h 4.459 c 1.104 0 2 0.895 2 2 s -0.895 2 -2 2 h -9.704 C 72.684 90 72.634 89.988 72.582 89.984 z M 37.287 41.246 c -2.845 2.16 -5.024 4.451 -6.476 6.81 c -1.283 2.085 -1.925 4.122 -1.925 5.911 c 0 1.721 0.595 3.212 1.787 4.293 c 2.864 2.598 9.233 2.577 17.008 -3.324 c 6.339 -4.812 10.082 -11.791 10.983 -19.128 C 51.354 34.705 43.625 36.435 37.287 41.246 z"
            // style="stroke: none; strokeWidth: 1; stroke-dasharray: none; stroke-linecap: butt; strokeLinejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
            transform=" matrix(1 0 0 1 0 0) "
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowSvg;
