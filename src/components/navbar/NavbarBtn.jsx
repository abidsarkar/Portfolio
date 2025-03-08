import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full font-bold text-white border border-cyan flex items-center gap-1  bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      Hire ME
      <FiArrowDownRight />
    </button>
  );
};

export default NavbarBtn;
