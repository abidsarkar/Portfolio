import React from "react";
import { PiCircleThin } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";
const HeroLinks = () => {
  return (
   
    <a
      href="https://www.linkedin.com/in/md-abid-sarkar-556903290/" // Replace with your LinkedIn URL
      target="_blank"
      rel="noopener noreferrer"
      className=" group relative flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full border-2 border-cyan shadow-lg bg-darkBlack transition-transform transform hover:scale-110 hover:shadow-cyanShadow"
    >
      {/* Text Inside the Circle */}
      <span className="text-xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text text-start">
        Let's <br /> Connect
      </span>

      {/* Arrow Icon Positioned at the Top Right */}
      <BsArrowUpRight className="absolute top-8 right-8 sm:top-12 sm:right-12 text-cyan group-hover:text-orange transition-all duration-300" />
    </a>
  );
};

export default HeroLinks;
