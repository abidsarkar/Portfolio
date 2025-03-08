import { section } from "motion/react-client";
import React from "react";

const NavbarLinks = () => {
  const links = [
    { link: "About me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
  return (
    <ul className="flex gap-6 text-white font-bold">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a
              href="#"
              className="curser-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </a>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
