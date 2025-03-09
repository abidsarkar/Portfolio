import React from "react";
import { FiDownload } from "react-icons/fi";
const HeroResumeBtn = () => {
  return (
    <a 
    href="/resume/resume.pdf" // Change this to the actual path of your resume
    download="MD_Abid_Sarkar_Resume.pdf" //
    className="flex items-center gap-2 border border-orange px-2 py-1 text-white bg-white/10 rounded-md mt-5 cursor-pointer hover:bg-littleWhite hover:text-black hover:bg-opacity-20 hover:shadow-cyanShadow transition-all duration-500">
      <FiDownload /> View Resume
    </a>
  );
};

export default HeroResumeBtn;
