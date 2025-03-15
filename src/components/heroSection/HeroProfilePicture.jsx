import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import blur effect
import { PiCircleDashedThin } from "react-icons/pi";

const HeroProfilePicture = () => {
  return (
    <div className="relative flex items-center justify-center mt-20">
      {/* Profile Image */}
      <div className="relative z-10">
        <LazyLoadImage
          src="/image/profilepic.png"
          alt="MD Abid Sarkar"
          effect="blur" // Blur effect while loading
          placeholderSrc="/image/profilepic-low.png" // Low-res placeholder
          className="bg-lightOrange hover:shadow-orangeMediumShadow max-w-[200px] sm:max-w-[300px] h-auto rounded-full shadow-xl border-4 border-cyan"
        />
      </div>

      {/* Rotating Dashed Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PiCircleDashedThin className="animate-spinSlow text-orange w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]" />
      </div>
    </div>
  );
};

export default HeroProfilePicture;
