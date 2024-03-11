import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Logo from "/Logo.svg";
import Button from "../Button/Button";

function Header() {
  return (
    <>
      <header>
        <div className="h-20 flex justify-around selection:bg-yellow-300 font-customFont">
          <div className="flex items-center ">
            <img src={Logo} alt="Logo" />
          </div>

          <Navbar />

          <div className="flex items-center">
            <Button />
          </div>

          <button className="md:hidden">
            <RiMenuFoldFill size="2rem" />
          </button>
        </div>
        <hr />

        <svg
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-background1 bg-no-repeat"
          
        >
          <defs>
            <linearGradient id="TextGradient" x1={0} y1={0} x2="100%" y2={0}>
              <stop offset={0} />
              <stop offset="100%" stopColor="red" />
            </linearGradient>
          </defs>
          <text
            x={25}
            y={15}
            fontWeight="thin"
            fontSize=".6rem"
            className="font-customFont selection:bg-yellow-300"
          >
            I am <tspan fontStyle="italic" fontWeight="bold">Samir Mulla,</tspan>
          </text>
          <text
            x={105}
            y={25}
            fontWeight="thin"
            fontSize=".6rem"
            className="font-customFont selection:bg-yellow-300"
          >
            and i'm a
          </text>
          <text
            x={30}
            y={44}
            fontWeight="bold"
            fontStyle="italic"
            fontSize="1rem"
            className="selection:bg-yellow-300 font-customFont"
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
              dur="5s"
              fontWeight="bold"
            />
          </text>
        </svg>
      </header>
    </>
  );
}

export default Header;
