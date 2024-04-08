import React from "react";

function Hero() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 83"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-background1 bg-no-repeat animate-fade-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="-40 60 500 100"
          fill="none"
        >
          <circle cx="-30" cy="60" r="18" stroke="#C70039" />
          <rect
            opacity=".4"
            x="8"
            y="20"
            width="15"
            height="15"
            rx="4"
            transform="rotate(-45 81.133 80.72)"
            fill="#000"
          />
          <rect
            opacity=".4"
            x="200"
            y="80"
            width="15"
            height="15"
            rx="4"
            transform="rotate(-45 81.133 80.72)"
            fill="#000"
          />
        </svg>
        <svg
          width="100%"
          height="50"
          viewBox="-50 -11 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4303 15H4.40034C2.58034 15 1.42034 13.05 2.30034 11.45L4.63034 7.20994L6.81034 3.23994C7.72034 1.58994 10.1003 1.58994 11.0103 3.23994L13.2003 7.20994L14.2503 9.11995L15.5303 11.45C16.4103 13.05 15.2503 15 13.4303 15Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <defs>
          <linearGradient id="TextGradient" x1={0} y1={0} x2="100%" y2={0}>
            <stop offset={0} />
            <stop offset="100%" stopColor="hsl(0, 100%, 50%)" />
          </linearGradient>
        </defs>
        <text
          x={30}
          y={30}
          fontWeight="thin"
          fontSize=".6rem"
          className="font-customFont selection:bg-yellow-300"
        >
          I am{" "}
          <tspan
            fontStyle="italic"
            fontWeight="bold"
            className="animate-pulse "
          >
            Samir Mulla,
          </tspan>
        </text>
        <text
          x={105}
          y={50}
          fontWeight="thin"
          fontSize=".6rem"
          className="font-customFont selection:bg-yellow-300"
        >
          and i'm a
        </text>{" "}
        <text
          x={5}
          y={80}
          fontWeight="bold"
          fontStyle="italic"
          fontSize="1.3rem"
          className="selection:bg-yellow-300 font-customFont "
          fill="url(#TextGradient)"
          stroke="#fff"
          strokeDasharray={50}
          strokeDashoffset={50}
        >
          Front-end Developer
          <animate
            attributeName="stroke-dashoffset"
            from={50}
            to={0}
            dur="15s"
            fontWeight="bold"
            repeatCount="indefinite"
          />
        </text>
      </svg>

      <h1 className="text-6xl text-center text-gray-400 selection:bg-yellow-300">
        ..........
      </h1>
    </>
  );
}

export default Hero;
