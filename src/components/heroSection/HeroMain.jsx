import React from "react";
import HeroText from "./HeroText";
import HeroLinks from "./HeroLinks";
import HeroProfilePicture from "./HeroProfilePicture";
import HeroResumeBtn from "./HeroResumeBtn";

const HeroMain = () => {
  return (
    <div id="home" className="flex flex-col sm:flex-row  gap-4 items-center sm:items-center sm:justify-between px-6 mt-6  mx-6 ">
      <div className="flex flex-col sm:flex-row gap-1 lg:flex-2 ">
        <HeroText/>
        <div className="hidden sm:flex flex-col gap-2 justify-center items-center ">
        <HeroLinks/>
        <HeroResumeBtn/>
        </div>
      </div>
      <div className="lg:flex-1 w-full">
        <HeroProfilePicture/>
      </div>
      <div className="sm:hidden mt-10 flex flex-col gap-2 justify-center items-center border py-8 px-18 rounded-lg bg-darkGray backdrop-blur-sm">
        <HeroLinks/>
        <HeroResumeBtn/>
        </div>
    </div>
  );
};

export default HeroMain;
