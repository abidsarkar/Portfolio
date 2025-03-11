import React, { useEffect, useState } from "react";
import { FaJava, FaReact, FaNodeJs,FaGithub ,FaLink} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const iconMap = {
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaJava: FaJava,
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
};

const ProjectCards = () => {const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/json/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error loading projects", error));
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-10">
      {/* Main Title */}
      <h2 className="text-4xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text mb-8">
        My Projects
      </h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1  gap-6 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl hover:shadow-orangeSmallShadow hover:scale-105 transition-transform duration-300 "
            
          >
            <div className="sm:flex rounded-2xl">
              {/* Image Section (1/3 width in desktop) */}
              <div className="flex justify-center items-center sm:w-1/3 w-full bg-darkGray rounded-l-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-fit h-fit object-cover  rounded-l-lg"
                />
              </div>

              {/* Card Content (2/3 width in desktop) */}
              <div className="sm:w-2/3 w-full p-4 rounded-r-lg hover:bg-gray-700">
                {/* Title */}
                <h3 className="text-2xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">{project.title}</h3>
                {/* description */}
                <p className="text-white mt-2 text-xl">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technology.map((tech, idx) => {
                    const IconComponent = iconMap[tech.className];
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md text-white hover:text-orange cursor-grab"
                      >
                        {IconComponent && (
                          <IconComponent className="text-cyan-400 text-lg" />
                        )}
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex justify-between">
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-active btn-secondary cursor-pointer text-black"
                  >
                    <FaLink/>Live Demo
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success text-black"
                  >
                    <FaGithub/>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
