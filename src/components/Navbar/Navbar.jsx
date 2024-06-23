import React from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="lg:flex items-center md:flex hidden cursor-pointer font-semibold animate-fade-in">
      <ul className="flex gap-9">
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("about")}
        >
          <Link to="/about">About Me</Link>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("projects")}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("skills")}
        >
          <Link to="/skills">
            My Skills
          </Link>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("services")}
        >
          <Link to="/services">Services</Link>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2 transition duration-300"
          onClick={() => scrollToSection("contact")}
        >
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
