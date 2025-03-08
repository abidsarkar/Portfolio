import React from "react";
import { PiCircleThin } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";
const HeroLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href="https://react-icons.github.io/react-icons/search/#q=arrow%20up"
        className="text-xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text"
      >
        Let's
        <br />
        Connect
      </a>
      <BsArrowUpRight className="absolute z-0  text-white" />
      <div className="absolute z-0 ">
        <PiCircleThin className="text-cyan h-[200px] w-[200px]" />
      </div>
      <button>click me</button>
    </div>
  );
};

export default HeroLinks;
