import React, { useEffect, useState } from "react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
const iconMap = {
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiGithubactions,
  FaAmazon,
  SiFigma,
  SiAdobexd,
  FaJava,
};

const SkillsTimeline = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch("json/skills.json")
      .then((response) => response.json())
      .then((data) => setSkillsData(data))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);

  return (
    <div className="w-full flex flex-col sm:items-center px-6 py-10 mt-10 ">
      <h2 className="text-3xl sm:text-6xl  mb-10 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">Skills</h2>
      <div className="relative  pl-6 sm:grid sm:grid-cols-2 sm:gap-x-25 sm:content-center">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-10 relative ">
            {/* Timeline Circle */}
            <div className="absolute z-1 -left-8.5 w-4 h-4  rounded-full border bg-gray border-gray"></div>
            {/* timeline line */}
            <div className="absolute -left-7  h-full scale-y-120 rounded-full border border-l-1 border-gray "></div>
            {/* Skill Category */}
            <h3 className="text-xl sm:text-3xl mb-2 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
              {category.category}
            </h3>

            {/* Skills List */}
            <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
              {category.skills.map((skill, idx) => {
                const IconComponent = iconMap[skill.icon] || SiMongodb; // Default icon
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 "
                  >
                    <IconComponent className="text-white text-2xl hover:text-lightCyan transition-all duration-300" />
                    <span className="text-darkCyan text-sm ">
                      {skill.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTimeline;
