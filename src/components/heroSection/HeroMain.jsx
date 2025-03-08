import React from "react";
import HeroText from "./HeroText";
import HeroLinks from "./HeroLinks";
import HeroProfilePicture from "./HeroProfilePicture";

const HeroMain = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-2 sm:items-center sm:justify-between px-6 mt-6 flex-wrap ">
      <div className=" sm:w-[30%]">
        <HeroText />
      </div>
      <div className="order-last sm:order-none ">
        <HeroLinks />
      </div>
      <div className="w-full sm:w-[30%] ">
        <HeroProfilePicture />
      </div>
    </div>
  );
};

export default HeroMain;
