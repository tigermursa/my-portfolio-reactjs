import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gp1 from "../../../../../../public/img/gp1.jpg";
import gp2 from "../../../../../../public/img/gp2.jpg";
import gp3 from "../../../../../../public/img/gp3.jpg";
import gp5 from "../../../../../../public/img/gp5.jpg";
import gp6 from "../../../../../../public/img/gp6.jpg";
import gp7 from "../../../../../../public/img/gp7.jpg";
import gp8 from "../../../../../../public/img/gp8.jpg";
import gp9 from "../../../../../../public/img/gp9.jpg";


const PhotoGallery = () => {
  const galleryItems = [gp1, gp5, gp6, gp3, gp7, gp2, gp8, gp9];

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
     <h1 className="font-serif text-4xl md:text-5xl  font-bold mb-5 p-5  mb-9 ">
            My Photos{" "}
            <div className="typing-animation">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </h1>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={true}
        showStatus={true}
        className="gallery-container w-full"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-0 z-10 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
            >
              Prev
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-0 z-10 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
            >
              Next
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="mx-2 h-3 w-3 rounded-full bg-indigo-500 cursor-pointer"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="mx-2 h-3 w-3 rounded-full bg-gray-500 cursor-pointer"
              aria-label={`${label} ${index + 1}`}
              title={`${label} ${index + 1}`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
            />
          );
        }}
        renderThumbs={() => {}}
        renderStatus={() => {}}
      >
        {galleryItems.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className="gallery-image mx-auto max-w-2xl rounded-3xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoGallery;
