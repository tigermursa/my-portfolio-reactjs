import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import bannarImg from "../../../../../public/img/mursalin's photo.png";

const Banner = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center sm:items-center gap-x-20 mt-10 md:mt-5">
        <div className="text-start md:ms-10 ms-0">
          <p className="text-2xl font-semibold ">Hello, How are you Doing ?</p>
          <br />
          <p className="text-3xl md:text-6xl font-semibold  ">
            I am Mursalin Hossain
          </p>
          <br />
          <p className="text-xl lg:text-4xl ">
            <Typewriter
              options={{
                strings: ["Web Developer.", "Front-end web developer.","Full Stack Web Developer.","MERN stack Web-Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <button className="btn btn-outline btn-primary mt-12 w-48">
            <a
              href="https://drive.google.com/file/d/1yd-OFM_gvDRnVsaNLj0mSrS3_MoKbJaS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="mb-10 mt-10 md:p-7 p-8">
          <img
            className="hero-photo p-2 border-2 border-yellow-600"
            src={bannarImg}
            alt="banner photo mursalin"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
