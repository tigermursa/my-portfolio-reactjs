import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "./Sections/Banner/Banner";
import AboutMe from "./Sections/AboutMe/AboutMe";
import MyServices from "./Sections/MyServices/MyServices";
import Contact from "./Sections/ContactMe/Contact";
import Projects from "./Sections/Projects/Projects";
import NavigationBar from "../NavigationBar/NavigationBar";
import Skills from "./Sections/Skills/Skills";
import CurrentlyLearning from "./CurrentlyLearning/CurrentlyLearning";
import Marquee from "react-fast-marquee";
const Home = () => {
  // Services Data fetching codes here .......................
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Marquee className="text-xl font-mono me-5  mt-4 ">
        Welcome to my Portfolio! Here, I showcase my skills in HTML, CSS,
        JavaScript, and React.js, along with my other MERN projects. From web
        development to social media links, Explore my projects, and you'll find
        a mix of creativity, functionality, and innovation. With features like a
        direct email system, stylish night mode, and captivating skill
        monitoring animations, my Portfolio is designed to impress.
      </Marquee>
      {/* Banner  Section */}
      <Banner></Banner>

      {/* About Me Section */}
      <AboutMe></AboutMe>
      {/*  Skills Section */}
      <Skills></Skills>
      {/* learning Section */}
      <CurrentlyLearning></CurrentlyLearning>
      {/* Project Section */}
      <Projects></Projects>

      {/* My Services Section */}
      <div>
        <h1 className="text-5xl mb-5 font-semibold mt-32 ">
          My Services{" "}
          <div className="typing-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>{" "}
        </h1>
        <div className="flex flex-wrap">
          {services.map((service) => (
            <MyServices key={service._id} service={service} />
          ))}
        </div>
      </div>
      {/* contact me  */}
      <Contact></Contact>
      <Marquee className="text-xl font-mono me-5  mt-4 ">
        Welcome to my Portfolio! Here, I showcase my skills in HTML, CSS,
        JavaScript, and React.js, along with my other MERN projects. From web
        development to social media links, Explore my projects, and you'll find
        a mix of creativity, functionality, and innovation. With features like a
        direct email system, stylish night mode, and captivating skill
        monitoring animations, my Portfolio is designed to impress.
      </Marquee>
    </div>
  );
};

export default Home;
