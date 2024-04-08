import React from "react";

function Navbar() {
  return (
    <>
      <nav className="lg:flex items-center md:flex hidden cursor-pointer font-semibold animate-fade-in">
        <ul className="flex gap-9 ">
          <li className="hover:underline underline-offset-8 decoration-2">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:underline underline-offset-8 decoration-2">
            <a href="#services">Projects</a>
          </li>
          <li className="hover:underline underline-offset-8 decoration-2">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:underline underline-offset-8 decoration-2">
            <a href="#projects">Services</a>
          </li>
          <li className="hover:underline underline-offset-8 decoration-2 transition duration-300">
            <a href="#contact us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
