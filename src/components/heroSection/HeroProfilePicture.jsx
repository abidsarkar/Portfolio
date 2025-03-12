import React from "react";
import { PiCircleDashedThin } from "react-icons/pi";

const HeroProfilePicture = () => {
  return (
    <div className="relative flex items-center justify-center mt-20">
      {/* Profile Image */}
      <div className="relative z-10">
        <img
          src="/image/profilepic.png"
          
          alt="MD Abid Sarkar"
          className=" bg-lightOrange hover:shadow-orangeMediumShadow max-w-[200px] sm:max-w-[300px]  h-auto rounded-full shadow-xl border-4 border-cyan "
        />
      </div>

      {/* Rotating Dashed Circle */}
      {/* animate-spinSlow */}
      <div className="absolute z-0 ">
        <PiCircleDashedThin className="animate-pulse text-orange w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]" />
      </div>
    </div>
  );
};

export default HeroProfilePicture;
