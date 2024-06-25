// src/components/Sidebar/Sidebar.jsx
import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleSidebar(); // Close the sidebar after clicking the link
  };

  return (
    <section
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-gradient-to-r from-rose-100 to-yellow-100 w-64 font-bold font-customFont`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="mt-8">
        <button
          onClick={() => handleLinkClick("about")}
          className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          About Me
        </button>
        <button
          onClick={() => handleLinkClick("projects")}
          className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Projects
        </button>
        <button
          onClick={() => handleLinkClick("skills")}
          className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          My Skills
        </button>
        <button
          onClick={() => handleLinkClick("services")}
          className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Services
        </button>
        <button
          onClick={() => handleLinkClick("contact")}
          className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Contact Me
        </button>
      </nav>
    </section>
  );
};

export default Sidebar;
