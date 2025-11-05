import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
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
  SiPostman,
  SiCanva,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPassport,
  SiZod,
  SiPostgresql,
  SiCloudinary ,
  SiVercel, SiRender 
} from "react-icons/si";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa6";
import { FaJava, FaLinux, FaCpanel, FaSave ,FaAws,FaDocker  } from "react-icons/fa";
import { GrOracle, GrGraphQl } from "react-icons/gr";
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandRedux,
  TbBrandOauth,
  TbBrandPrisma,
  TbBrandMysql,
  TbBrandNextjs 
} from "react-icons/tb";

import { FaC } from "react-icons/fa6";
const iconMap = {
  TbBrandFramerMotion,
  FaC,
  TbBrandCpp,
  FaCpanel,
  GrOracle,
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
  SiPostman,
  SiCanva,
  FaLinux,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPassport,
  TbBrandRedux,
  BsCloudArrowDownFill,
  TbBrandOauth,
  FaSave,
  SiZod,
  TbBrandPrisma,
  GrGraphQl,
  TbBrandMysql,
  SiPostgresql,
  SiCloudinary,
  FaAws ,
  FaDocker ,
  SiVercel ,
  SiRender ,
  TbBrandNextjs 
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
    <div
      id="skills"
      className="w-full flex flex-col sm:items-center px-6 py-10  bg-[url('/image/perallex/skills.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen "
    >
      <h2 className="text-3xl sm:text-6xl  mb-10 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        Skills
      </h2>
      <div className="relative  pl-6 sm:grid sm:grid-cols-2 sm:gap-x-25 sm:content-center">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-10 relative ">
            {/* Timeline Circle */}
            <div className="absolute z-1 -left-8.5 w-4 h-4  rounded-full border bg-gray border-gray"></div>
            {/* timeline line */}
            <div className="absolute -left-7  h-full scale-y-120 rounded-full border border-l-1 border-gray "></div>
            {/* Skill Category */}
            <motion.h3
              className="text-xl sm:text-3xl mb-2 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text"
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 1 }}
            >
              {category.category}
            </motion.h3>

            {/* Skills List */}
            <motion.div
              className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            >
              {category.skills.map((skill, idx) => {
                const IconComponent = iconMap[skill.icon] || SiMongodb; // Default icon
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 ">
                    <IconComponent className="text-white text-2xl hover:text-lightCyan transition-all duration-300" />
                    <span className="text-darkCyan text-sm ">
                      {skill.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTimeline;
