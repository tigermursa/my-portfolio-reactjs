import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 91 },
    { name: "CSS", percentage: 79 },
    { name: "Tailwind", percentage: 83 },
    { name: "Bootstrap", percentage: 77 },
    { name: "JavaScript", percentage: 62 },
    { name: "ES6", percentage: 74 },
    { name: "React js", percentage: 71 },
    { name: "MongoDB", percentage: 62 },
    { name: "Firebase", percentage: 67 },
    { name: "Rest APIs", percentage: 58 },
    { name: "Node", percentage: 59 },
    { name: "Express js", percentage: 63 },
    { name: "Next js", percentage: 10 },
    { name: "JWT", percentage: 30 },
    { name: "VS Code", percentage: 89 },
    { name: "Git Hub", percentage: 78 },
    { name: "Figma", percentage: 77 },
    { name: "Netlify", percentage: 85 },
    { name: "Vercel", percentage: 62 },
    { name: "ChatGpt", percentage: 92 },
    
  ];

  const getColorByPercentage = (percentage) => {
    if (percentage >= 69) {
      return "#4CAF50"; // Green
    } else if (percentage >= 59) {
      return "#FFC107"; // Yellow
    } else {
      return "#F44336"; // Red
    }
  };

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer1;
    let timer2;

    const startAnimation = () => {
      setIsAnimated(true);
      timer1 = setTimeout(() => {
        setIsAnimated(false);
        timer2 = setTimeout(startAnimation, 700);
      }, 4000);
    };

    startAnimation();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const rows = Math.ceil(skills.length / 4);

  return (
    <div className="mb-16 mx-auto">
      <div className="text-start w-7/12 mx-auto mb-7">
        <h1 className="text-center text-5xl mb-24 font-semibold">
          My Skills{" "}
          <div className="typing-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-14">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center ">
              <div className="w-full">
                <div className="relative">
                  <div
                    className={`pb-circular-progress-bar ${
                      isAnimated ? "animated" : ""
                    }`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <CircularProgressbar
                      value={isAnimated ? skill.percentage : 0}
                      text={`${isAnimated ? skill.percentage : 0}%`}
                      strokeWidth={11}
                      styles={buildStyles({
                        pathColor: getColorByPercentage(skill.percentage),
                        trailColor: "#d6d6d6",
                        rotation: (0.5 + index / skills.length) % 1,
                        strokeLinecap: "butt",
                      })}
                    />
                  </div>
                </div>
                <div className="ms-3 mt-5 font-bold">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;



// { name: "React Native", percentage: 0 },
//     { name: "PHP", percentage: 0 },
//     { name: "Python", percentage: 0 },
//     { name: "JAVA", percentage: 0 },