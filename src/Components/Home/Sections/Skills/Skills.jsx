// Skills.js
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoVercel,
  IoLogoFirebase,
  IoLogoNpm,
} from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaGoogle,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 91 },
    { name: "CSS", percentage: 79 },
    { name: "JavaScript", percentage: 69 },
    { name: "Tailwind", percentage: 83 },
    { name: "Bootstrap", percentage: 77 },
    { name: "React vite", percentage: 81 },
    { name: "MongoDB", percentage: 65 },
    { name: "Firebase", percentage: 67 },
    { name: "Node js", percentage: 59 },
    { name: "Express", percentage: 63 },
    { name: "Next.js", percentage: 10 },
    { name: "Git Hub", percentage: 78 },
    { name: "ChatGpt", percentage: 92 },
    { name: "Google Bard", percentage: 78 },
  ];

  const getColorByPercentage = (percentage) => {
    if (percentage >= 69) {
      return "bg-green-800"; // Green
    } else if (percentage >= 59) {
      return "bg-yellow-800"; // Yellow
    } else {
      return "bg-red-800"; // Red
    }
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skillsComponent");
      const elementPosition = element.getBoundingClientRect();

      // Adjust the scroll area to a larger value (e.g., 300)
      if (
        elementPosition.top >= -1300 &&
        elementPosition.bottom <= window.innerHeight + 800
      ) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="skillsComponent" className="">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 p-5">
        My Skills{" "}
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </h1>
      <div
        className="flex justify-center items-center text-xl md:text-5xl md:gap-10 gap-1 mt-10 p-3"
        data-aos="fade-up"
      >
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <SiTailwindcss />
        <FaBootstrap />
        <IoLogoReact />
        <SiMongodb />
        <IoLogoFirebase />
        <IoLogoNodejs />
        <SiExpress />
        <SiNextdotjs />
        <FaGithub />
        <FaRobot />
        <FaGoogle />
        <IoLogoVercel />
        <IoLogoNpm />
      </div>
      <div className="flex flex-wrap -mx-4 pt-12 p-24 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8"
            data-aos={inView ? "fade-up" : ""}
          >
            <div className="flex items-center mb-2">
              <div className="w-1/2 text-sm text-start ms-1">{skill.name}</div>
              <div className="w-1/2 text-right text-sm font-medium">
                {inView && (
                  <CountUp
                    start={0}
                    end={skill.percentage}
                    suffix="%"
                    duration={3} // Adjust the duration for slower speed
                  />
                )}
              </div>
            </div>
            <div className="h-3 w-full bg-white bg-opacity-50 rounded-lg overflow-hidden">
              <div
                className={`h-full rounded-lg ${getColorByPercentage(
                  skill.percentage
                )} progress-bar-animation`}
                style={{
                  width: inView ? `${skill.percentage}%` : 0,
                  transition: inView ? "width 3s" : "none",
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
