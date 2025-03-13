import React, { useMemo } from "react";
import Lottie from "lottie-react";
import educationAnimation from "../../lotties/educationAnimation.json";
import { motion } from "motion/react";

const Education = () => {
  const abc = () =>{
    
  }
  const animationData = useMemo(() => educationAnimation, []);
  return (
    <section id="education" className="py-16 px-6 bg-darkBrown text-white">
      <h2 className="text-center text-4xl sm:text-6xl  mb-10 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        Education
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-around  gap-12">
        {/* Animation */}
        <motion.div className="sm:w-80 w-50"
        initial={{ y: "100%", opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ type: "spring", stiffness: 100, duration: 1 }} 
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
        {/* Education Details */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div className="w-full h-auto bg-white rounded-xl py-1 mb-6"
          initial={{ x: "100%", opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 100, duration: 1 }} 
          >
            <img src="./image/ewulogo.png" />
          </motion.div>

          {/* University Info */}
          <motion.div className="p-6 bg-gray-800 rounded-xl shadow-lg"
          initial={{ x: "100%", opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 100, duration: 1 }} 
          >
            <h3 className="text-2xl font-semibold text-orange">
              East West University
            </h3>
            <p className="text-lightCyan text-lg font-medium mt-1">
              Computer Science & Engineering
            </p>
            <p className="text-sm text-lightGray mt-1">
              January 2020 - June 2024
            </p>
          </motion.div>

          {/* Major & Minor */}
          <motion.div className="mt-6 p-6 bg-gray-800 rounded-xl shadow-lg"
          initial={{ x: "100%", opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 100, duration: 1 }} 
          >
            <h4 className="text-xl font-semibold text-orange">
              Specialization
            </h4>
            <p className="text-lightGray mt-2">
              <span className="font-semibold text-lightCyan">Major:</span>{" "}
              Intelligent Systems & Data Science
            </p>
            <p className="text-lightGray mt-1">
              <span className="font-semibold text-lightCyan">Minor:</span>{" "}
              Software Engineering
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
