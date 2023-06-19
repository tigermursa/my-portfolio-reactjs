import React from "react";
import "./About.css";
import aboutImg from "../../../../../public/img/about.png";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-28 mb-40 sm:flex-row">
        <div className="order-2 sm:order-1 p-6">
          <img className="w-full h-auto about-photo " src={aboutImg} alt="" />
        </div>
        <div className="w-full sm:w-7/12 mx-auto text-center sm:text-left mb-6 order-1 sm:order-2">
          <h1 className="text-5xl mb-5 p-5 font-semibold ">
            About Me{" "}
            <div className="typing-animation">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </h1>
          <div className="text-xl font-sans p-5 text-justify">
            <p>
              Hi there! My name is Mursalin Hossain, a 23-year-old aspiring web
              developer with a passion for writing clean and error-free code.
              I've been on this exciting web development journey for the past
              year, constantly learning and exploring new technologies. I'm on a
              mission to become an expert in the field of web development by
              embracing the joy of continuous learning and keeping up with the
              latest trends.
            </p>
            <p>
              Building websites is not just a job for me; it's a creative outlet
              where I can bring ideas to life and make a meaningful impact. I
              believe in the power of user-centric design and strive to create
              seamless and engaging experiences for users. When I'm not coding,
              you can find me experimenting with new technologies, attending
              tech meetups, or sipping a cup of coffee while brainstorming my
              next project.
            </p>
            <p>
              If you share the same enthusiasm for web development and enjoy
              crafting elegant solutions, I'd love to connect with you. Let's
              collaborate, learn, and create amazing things together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
