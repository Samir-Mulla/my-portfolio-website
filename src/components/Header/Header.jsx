// src/components/Header/Header.jsx
import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

import IconButton from "../Button/IconButton";
// import { FaMoon, FaSun } from "react-icons/fa"; // Import the moon and sun icons

function Header() {
  return (
    <>
      <header>
        {/* logo */}
        <div className="bg-white h-20 w-full fixed flex justify-around selection:bg-yellow-300 font-customFont border-b">
          <div className=" lg:block hidden md:hidden xl:flex items-center">
            <Logo />
          </div>
          {/* navbar */}
          <Navbar />
          <div className="flex items-center">
            <IconButton />
          </div>

          {/* mobile menu */}
          <button className="md:hidden">
            <RiMenuFoldFill size="2rem" />
          </button>
          {/* Dark mode toggle */}
        </div>
      </header>
    </>
  );
}

export default Header;
