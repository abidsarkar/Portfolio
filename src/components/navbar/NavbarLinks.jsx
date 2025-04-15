import React from "react";
import { Link } from "react-scroll";

const NavbarLinks = ({ direction = "row" }) => {
  const links = [
    { link: "Home", section: "home" },
    { link: "Experience", section: "experience" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
    { link: "Education", section: "education" },
    { link: "Contact Me", section: "contact" },
  ];

  return (
    <ul
      className={`flex gap-1 text-sm sm:text-xl sm:gap-6 text-white font-bold ${
        direction === "col" ? "flex-col items-center" : "flex-row"
      }`}
    >
      {links.map((link, index) => {
        return (
          <li key={index} className="group relative">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={1000}
              offset={-70}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="absolute bottom-0 left-0 bg-cyan w-0 h-[1px] group-hover:w-full transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
