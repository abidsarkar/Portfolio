
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TypingEffect = ({ texts = ["Typing Effect"] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (texts.length > 1) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, texts[currentTextIndex].length * 150 + 2000); // Adjust timing based on text length

      return () => clearInterval(interval);
    }
  }, [texts, currentTextIndex]);

  return (
    <h2
      ref={ref}
      className="text-xl text-start sm:text-2xl font-semibold tracking-tighter  md:leading-[4rem]"
    >
      {texts[currentTextIndex].split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
};

export default TypingEffect;
