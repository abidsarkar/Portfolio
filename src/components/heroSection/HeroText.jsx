import React from "react";

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
      </h2>{" "}
      <br />
      <p className="text-gray-300 text-xl sm:text-2xl text-wrap">
        {" "}
        <span className="uppercase text-orange">Full Stack web Developer</span> from
        Bangladesh.I love building interactive, user-friendly web applications
        and constantly learning new technologies.
      </p>
    </div>
  );
};

export default HeroText;
