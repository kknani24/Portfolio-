import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Data Scientist",
          "AI & Machine Learning Enthusiast",
          "Python Full Stack Developer",
          "Deep Learning Researcher",
          "Data Analyst",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
