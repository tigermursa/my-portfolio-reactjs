import React from "react";
import "./About.css";
import aboutImg from "../../../../../public/img/about.png";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import AboutMe from "./AboutMe";

const AboutMeDetail = () => {
  return (
    <div>
      <AboutMe></AboutMe>
      <div className="">
        <PhotoGallery></PhotoGallery>
      </div>
    </div>
  );
};

export default AboutMeDetail;
