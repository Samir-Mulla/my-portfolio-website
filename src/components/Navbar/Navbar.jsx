import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior:"smooth"
 
       });
    }
  };
  return (
    <nav className="lg:flex items-center md:flex hidden cursor-pointer font-semibold animate-fade-in">
      <ul className="flex gap-9">
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("about")}
        >
          <a href="#about">About Me</a>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("Projects")}
        >
          <a href="#Projects">Projects</a>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("Portfolio")}
        >
          <a href="#mySkills">My Skills</a>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2"
          onClick={() => scrollToSection("projects")}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className="hover:underline underline-offset-8 decoration-2 transition duration-300"
          onClick={() => scrollToSection("ContactMe")}
        >
          <a href="#contactMe">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
