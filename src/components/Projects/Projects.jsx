// src/components/Projects/Projects.jsx
import React from "react";
import portfolioData from "../../assets/data/portfolioData"; // Adjust the path as necessary

function Projects() {
  return (
    <section
      id="projects"
      className="font-customFont px-5 scroll-mt-20 bg-pink-50"
    >
      <h2 className="text-center font-thin italic text-4xl md:text-6xl lg:text-8xl mb-12">
        <span className="underline">M</span>y Projects :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-1">
        {portfolioData.map((project, index) => (
          <div key={index} className="card">
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 "
            />
            <h3 className="text-3xl font-semibold italic">{project.title}</h3>
            <p className="text-gray-600 text-xl">{project.description}</p>
            <ul className="list-disc list-inside font-bold text-xl ">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xl text-blue-500 hover:text-blue-800 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
