import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa"; // Import all FontAwesome icons
import * as SiIcons from "react-icons/si"; // Import other icons if needed

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  // Fetch project data
  useEffect(() => {
    fetch("json/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-cyan mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-white mt-4">
              {project.title}
            </h3>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technology.map((tech, idx) => {
                const IconComponent =
                  (FaIcons[tech.name.charAt(0).toUpperCase() + tech.name.slice(1)]) ||
                  (SiIcons[tech.name.charAt(0).toUpperCase() + tech.name.slice(1)]) ||
                  null;

                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-md shadow-md"
                  >
                    {IconComponent && <IconComponent className="text-cyan text-xl" />}
                    <span className="text-white capitalize">{tech.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Project Links */}
            <div className="mt-4 flex justify-between">
              <a
                href={project.demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-white transition"
              >
                Live Demo
              </a>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
