import React from "react";
import gp1 from "../../../../../../public/img/gp1.jpg";
import gp2 from "../../../../../../public/img/gp2.jpg";
import gp3 from "../../../../../../public/img/gp3.jpg";
import gp4 from "../../../../../../public/img/gp4.jpg";
import gp5 from "../../../../../../public/img/gp5.jpg";
import gp6 from "../../../../../../public/img/gp6.jpg";
import gp7 from "../../../../../../public/img/gp7.jpg";
import gp8 from "../../../../../../public/img/gp8.jpg";
import gp9 from "../../../../../../public/img/gp9.jpg";
import "./PhotoGallery.css"; // Import the CSS file

const PhotoGallery = () => {
  const galleryItems = [gp1, gp5, gp6, gp3, gp7, gp2, gp8, gp9, gp4];

  return (
    <div>
      <h1 className="text-5xl mb-5 p-5 font-semibold ">
         My photos{" "}
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </h1>
      <div className="gallery-container">
        {galleryItems.map((image, index) => (
          <img key={index} src={image} alt="" className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
