import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterFollowME = () => {
  return (
    <div className="flex flex-col items-center sm:items-start mb-8 md:mb-0">
      <h3 className="text-2xl font-semibold text-orange mb-4">Follow Me</h3>
      <div className="flex gap-6">
        <a
          href="https://www.facebook.com/abidsarkar.61"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <FaFacebook size={30} />
        </a>

        <a
          href="https://www.linkedin.com/in/md-abid-sarkar-556903290/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/abidsarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default FooterFollowME;
