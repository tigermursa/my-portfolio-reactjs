import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cp1 from "../../../../public/img/react-native_large.jpg";
import cp2 from "../../../../public/img/php.jpg";
import cp3 from "../../../../public/img/wpress.jpg";
import cp4 from "../../../../public/img/virtual-env-python.jpg";
import cp5 from "../../../../public/img/Why-AngularJS-A1.jpg";
const CurrentlyLearning = () => {
  const galleryItems = [cp1,cp2,cp3,cp1,cp4,cp5,cp2];
  return (
    <>
      <div>
        <h1 className="text-center mb-2 md:mb-14 font-serif text-3xl md:text-5xl font-bold">
         My Next Target To learn
          <div className="typing-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </h1>
      </div>
      <Carousel
        showArrows={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={true}
        showStatus={false}
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
              className="gallery-image mx-auto max-w-2xl rounded-3xl p-10 md:p-0"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CurrentlyLearning;
