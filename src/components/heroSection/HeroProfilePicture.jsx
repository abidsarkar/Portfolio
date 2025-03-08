import React from "react";
import { PiCircleThin, PiCircleDashedThin } from "react-icons/pi";



const HeroProfilePicture = () => {
  return (
    <div className="relative flex items-center justify-center mt-20">
      {/* Profile Image */}
      <div className="relative z-0">
        <img
          src="../../public/image/profilepic.png"
          alt="MD Abid Sarkar"
          className="max-h-[450px] w-auto rounded-full shadow-lg border-4 border-cyan"
        />
      </div>

      {/* Rotating Dashed Circle */}
      <div className="absolute z-0 ">
        <PiCircleDashedThin className="text-orange h-[400px] w-[400px] " />
      </div>

    </div>
  );
};

export default HeroProfilePicture;
