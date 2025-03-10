import React from "react";
import TypingEffect from "../../framerMotion/TypingEffect";

const HeroText = () => {
  return (
    <div className="w-full sm:w-[80%]">
      <h1 className="text-5xl sm:text-6xl text-white font-semibold font-poppins">
        Hi there!
      </h1>
      <br />
      <h2 className="text-5xl sm:text-6xl text-white font-semibold font-poppins">
        I am
      </h2>
      <br />
      <h2 className="text-3xl sm:text-6xl font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        MD ABID SARKAR
      </h2>
      <br />

      <div className="uppercase text-orange">
        <TypingEffect
          texts={[
            "Full Stack Web Developer",
            "Software Engineer",
            "Data Analyst",
          ]}
        />
      </div>
      <p className="text-gray-300 text-xl sm:text-2xl text-wrap">
        {" "}
        from Bangladesh.I love building interactive, user-friendly web
        applications and constantly learning new technologies.
      </p>
    </div>
  );
};

export default HeroText;
