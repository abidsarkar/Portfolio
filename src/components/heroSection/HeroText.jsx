import React from "react";
import { Typewriter } from "react-simple-typewriter";
const HeroText = () => {
  return (
    <div className="w-full sm:w-[80%]">
      <h2 className="text-5xl sm:text-6xl text-white font-semibold font-poppins">
        Hi there!
      </h2>
      <br />
      <h2 className="text-5xl sm:text-6xl text-white font-semibold font-poppins">
        I am
      </h2>
      <br />
      <h1 className="text-3xl sm:text-6xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        MD ABID SARKAR
      </h1>
      <br />

      <div className="lg:text-3xl sm:text-2xl uppercase text-orange">
        
        <span>
          {<Typewriter 
          words={["Backend Dev","React Dev", "Web designer", "Next js dev"]}
          loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            />}
        </span>
      </div>
      <p className="text-white text-xl sm:text-2xl text-wrap">
         from Bangladesh.I love building interactive,
        user-friendly web applications and constantly learning new technologies.
      </p>
    </div>
  );
};

export default HeroText;
