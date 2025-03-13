import React from "react";
import { Link } from "react-scroll";

const QuickLinks = () => {
  return (
    <div className="flex flex-col items-center sm:items-start mb-8 md:mb-0 ">
      <h3 className=" text-2xl font-semibold text-orange mb-4">Quick Links</h3>
      <ul className="cursor-pointer">
        <li className="mb-2">
          <Link
            to={"home"}
            smooth={true}
            spy={true}
            duration={1000}
            offset={-70}
            className="text-gray-300 hover:text-white"
          >
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to={"skills"}
            smooth={true}
            spy={true}
            duration={1000}
            offset={-70}
            className="text-gray-300 hover:text-white"
          >
            Skills
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to={"projects"}
            smooth={true}
            spy={true}
            duration={1000}
            offset={-70}
            className="text-gray-300 hover:text-white"
          >
            Projects
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to={"education"}
            smooth={true}
            spy={true}
            duration={1000}
            offset={-70}
            className="text-gray-300 hover:text-white"
          >
            Education
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to={"contact"}
            smooth={true}
            spy={true}
            duration={1000}
            offset={-70}
            className="text-gray-300 hover:text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
