import React from 'react';
import './Banner.css';
import bannarImg from "../../../../../public/img/mursalin's photo.png";

const Banner = () => {
  return (
    <div className=''>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center sm:items-center gap-x-20 mt-10 md:mt-5">
        <div className="text-start">
          <p className="text-2xl font-semibold ">Hello,</p>
          <br />
          <p className="text-3xl md:text-6xl font-semibold  ">
            I am Mursalin Hossain
          </p>
          <br />
          <p id="animation" className="text-xl lg:text-4xl ">
            Web Developer .......
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
        <div className="mb-10 mt-10 p-7">
          <img
            className="hero-photo p-1 animated-gradient"
            src={bannarImg}
            alt="banner photo mursalin"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
