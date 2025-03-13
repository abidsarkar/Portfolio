import React from "react";
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";
import HeroResumeBtn from "../heroSection/HeroResumeBtn";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://github.com/abidsarkar"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-orange transition-all duration-300"
      >
        <FaGithub className="text-white text-2xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/md-abid-sarkar-556903290/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-orange transition-all duration-300"
      >
        <FaLinkedin className="text-white text-2xl" />
      </a>

      <a
        href="https://www.facebook.com/abidsarkar.61"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-orange transition-all duration-300"
      >
        <FaFacebook  className="text-white text-2xl" />
      </a>
      <HeroResumeBtn/>
    </div>
  );
};

export default ContactSocial;
