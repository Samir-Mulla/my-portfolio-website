import React from "react";

function Navbar() {
  return (
    <>
      <nav className="lg:flex items-center md:flex hidden cursor-pointer font-semibold animate-fade-in">
        <ul className="flex gap-9">
          <li className="hover:border-b border-black">
            <a href="#about">About</a>
          </li>
          <li className="hover:border-b border-black">
            <a href="#services">Services</a>
          </li>
          <li className="hover:border-b border-black">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:border-b border-black">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:border-b border-black">
            <a href="#contact us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
