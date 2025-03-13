import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-scroll";
const NavbarBtn = () => {
  return (
    <Link
      to="contact" // The id of your contact section (we will define it in your Contact section)
      smooth={true} // This makes the scroll smooth
      offset={-80} // Adjust the scroll offset to account for navbar height (if any)
      duration={1500} // Smooth scroll duration
    >
      <button className="px-4 py-2 rounded-full font-bold text-white border border-cyan flex items-center gap-1 cursor-pointer bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
        Hire ME
        <FiArrowDownRight />
      </button>
    </Link>
  );
};

export default NavbarBtn;
