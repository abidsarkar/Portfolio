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
          className="bg-lightOrange hover:shadow-cyanMediumShadow max-w-[200px] sm:max-w-[300px]  h-auto rounded-full shadow-xl border-4 border-cyan "
        />
      </div>

      {/* Rotating Dashed Circle */}
      <div className="absolute z-0 animate-spinSlow">
        <PiCircleDashedThin className="text-orange w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]" />
      </div>
    </div>
  );
};

export default HeroProfilePicture;
