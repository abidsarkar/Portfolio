import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLink,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReactrouter,
  SiRedux,
  SiCloudinary,
  SiTailwindcss,
  SiJsonwebtokens,
  SiPostgresql
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import { MdOutlineAnimation } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

const iconMap = {
  MdOutlineAnimation: MdOutlineAnimation,
  TbBrandFramerMotion: TbBrandFramerMotion,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaJava: FaJava,
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
  SiCloudinary: SiCloudinary,
  SiRedux: SiRedux,
  SiReactrouter: SiReactrouter,
  SiTailwindcss: SiTailwindcss,
  FaHtml5: FaHtml5,
  FaJs: FaJs,
  FaCss3Alt: FaCss3Alt,
  SiJsonwebtokens:SiJsonwebtokens,
  SiPostgresql:SiPostgresql,
};

const ProjectCards = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/json/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error loading projects", error));
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col items-center px-6 py-10 bg-[url('/image/perallex/projects.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen"
    >
      {/* Main Title */}
      <h2 className="text-4xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text mb-8">
        My Projects
      </h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1  gap-6 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="hover:bg-gradient-to-r from-slate-300 to-slate-500 border rounded-xl hover:shadow-orangeSmallShadow hover:scale-102 transition-transform duration-300 "
            whileInView={{ opacity: 1, scale: 1 }} // When the card comes into view, it will scale up
            initial={{ opacity: 0, scale: 0.7 }} // Initially, it will be smaller and invisible
            transition={{ duration: 0.5 }} // Smooth transition
          >
            <div className="sm:flex rounded-2xl">
              {/* Image Section (1/3 width in desktop) */}
              <div className="flex justify-center items-center sm:w-1/3 w-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-l-2xl">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  placeholderSrc="/image/project/low_Template.png"
                  className="w-fit h-fit object-cover  rounded-l-lg"
                />
              </div>

              {/* Card Content (2/3 width in desktop) */}
              <div className="sm:w-2/3 w-full p-4 rounded-r-lg ">
                {/* Title */}
                <h3 className="text-2xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
                  {project.title}
                </h3>
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
                  {project.demo_link && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-orange px-2 py-1 text-white bg-white/10 rounded-md mt-5 cursor-pointer hover:bg-littleWhite hover:text-black hover:bg-opacity-20 hover:shadow-cyanShadow transition-all duration-500"
                    >
                      <FaLink /> Live Demo
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-orange px-2 py-1 text-white bg-white/10 rounded-md mt-5 cursor-pointer hover:bg-littleWhite hover:text-black hover:bg-opacity-20 hover:shadow-cyanShadow transition-all duration-500"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
