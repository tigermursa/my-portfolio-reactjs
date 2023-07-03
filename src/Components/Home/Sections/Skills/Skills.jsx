import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const skills = [
    { name: "HTML", percentage: 91 },
    { name: "CSS", percentage: 79 },
    { name: "Tailwind", percentage: 83 },
    { name: "Bootstrap", percentage: 77 },
    { name: "JavaScript", percentage: 62 },
    { name: "ES6", percentage: 74 },
    { name: "React vite", percentage: 71 },
    { name: "MongoDB", percentage: 62 },
    { name: "Firebase", percentage: 67 },
    { name: "Rest APIs", percentage: 58 },
    { name: "Node", percentage: 59 },
    { name: "Express", percentage: 63 },
    { name: "Next.js", percentage: 10 },
    { name: "JWT", percentage: 30 },
    { name: "VS Code", percentage: 89 },
    { name: "Git Hub", percentage: 78 },
    { name: "Figma", percentage: 25 },
    { name: "Netlify", percentage: 85 },
    { name: "Vercel", percentage: 62 },
    { name: "ChatGpt", percentage: 92 },
  ];

  const getColorByPercentage = (percentage) => {
    if (percentage >= 69) {
      return "bg-green-500"; // Green
    } else if (percentage >= 59) {
      return "bg-yellow-500"; // Yellow
    } else {
      return "bg-red-500"; // Red
    }
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const offset = windowHeight * 0.8;

      if (position > offset) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rows = Math.ceil(skills.length / 4);

  return (
    <div className="mb-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 p-5">
        My Skills{" "}
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </h1>
      <div className="flex flex-wrap -mx-4 p-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8"
            data-aos={inView ? "fade-up" : ""}
          >
            <div className="flex items-center mb-2">
              <div className="w-1/2 text-sm text-start ms-1">{skill.name}</div>
              <div className="w-1/2 text-right text-sm font-medium">
                <CountUp end={skill.percentage} suffix="%" duration={10} />
              </div>
            </div>
            <div className="h-3 w-full bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`h-full rounded-lg ${getColorByPercentage(
                  skill.percentage
                )} progress-bar-animation`}
                style={{
                  width: inView ? `${skill.percentage}%` : 0,
                  transition: "width 10s",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
