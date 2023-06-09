import React, { useEffect } from "react";
import "./About.css";
import aboutImg from "../../../../../public/img/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="flex flex-col justify-between items-center mt-28 mb-40 sm:flex-row ">
      <div className="order-2 sm:order-1 p-8 md:p-6" data-aos="fade-right">
        <img
          className="w-full h-auto about-photo p-2  md:ms-7 md:me-10 border-2 border-yellow-600 "
          src={aboutImg}
          alt=""
        />
      </div>
      <div
        className="w-full sm:w-7/12 mx-auto text-center sm:text-left mb-6 order-1 sm:order-2"
        data-aos="fade-left"
      >
        <h1 className="font-serif text-4xl md:text-5xl  font-bold mb-5 p-5  ">
          About Me{" "}
          <div className="typing-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </h1>
        <div className="text-xl font-sans p-8 text-start ">
          <p>
            Hi there! My name is Mursalin Hossain, a 23-year-old aspiring web
            developer with a passion for writing clean and error-free code. I've
            been on this exciting web development journey for the past year,
            constantly learning and exploring new technologies. I'm on a mission
            to become an expert in the field of web development by embracing the
            joy of continuous learning and keeping up with the latest trends.
          </p>
          <p>
            Building websites is not just a job for me; it's a creative outlet
            where I can bring ideas to life and make a meaningful impact. I
            believe in the power of user-centric design and strive to create
            seamless and engaging experiences for users. When I'm not coding,
            you can find me experimenting with new technologies, attending tech
            meetups, or sipping a cup of coffee while brainstorming my next
            project.
          </p>
          <p>
            If you share the same enthusiasm for web development and enjoy
            crafting elegant solutions, I'd love to connect with you. Let's
            collaborate, learn, and create amazing things together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
