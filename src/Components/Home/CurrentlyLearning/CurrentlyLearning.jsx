import React from "react";
import "./CurrentlyLearning.css"; // Import the CSS file for styling
import nextjsImage from "../../../../public/img/next-js-i.png";

const CurrentlyLearning = () => {
  return (
    <div className="flex justify-center mt-40 mb-40 flex-col">
      <h1 className="text-center  mb-24 font-serif text-4xl md:text-5xl  font-bold">
        Currently learning
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </h1>
      <h2 className="text-5xl mb-10 font-bold">Next js</h2>
      <div className="flex justify-center">
        <div className="jumping-animation">
          <img className="w-60 h-60" src={nextjsImage} alt="Next.js" />
        </div>
      </div>
    </div>
  );
};

export default CurrentlyLearning;
