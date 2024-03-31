import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Logo from "/Logo.svg";
import IconButton from "../Button/IconButton";

function Header() {
  return (
    <>
      <header>
        <div className="h-20 w-full fixed bg-white flex justify-around selection:bg-yellow-300 font-customFont border-b">
          <div className="flex items-center animate-bounce">
            <a href=""><img src={Logo} alt="Logo" /></a>
          </div>

          <Navbar />

          <div className="flex items-center">
            <IconButton />
          </div>

          <button className="md:hidden">
            <RiMenuFoldFill size="2rem" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
