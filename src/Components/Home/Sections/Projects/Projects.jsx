import React, { useState } from "react";
import toygem from "../../../../../public/img/websitetoygem.jpg";
import foodmonkey from "../../../../../public/img/webfoodmonkey.jpg";
import emajhon from "../../../../../public/img/websiteemajhon.jpg";
import todo from "../../../../../public/img/Screenshot 2023-06-06 162457.jpg";
import snap from "../../../../../public/img/websitesnapart.jpg";
import techat from "../../../../../public/img/teachat.jpg";

const Projects = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);

  const handleMouseEnter1 = () => {
    setHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setHovered4(false);
  };

  const handleMouseEnter5 = () => {
    setHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setHovered5(false);
  };

  const handleMouseEnter6 = () => {
    setHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setHovered6(false);
  };

  return (
    <div className="ms-4 me-4 ">
      <h1 className="text-5xl mb-5 font-semibold">
        {" "}
        Projects{" "}
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Project no 1 */}
        <div className="mt-5 mb-5 ">
          <div
            className=" card w-96 bg-base-100 shadow-xl image-full relative overflow-hidden rounded-2xl opacity-75  "
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <figure className="bg-opacity- ">
              <img className="" src={toygem} alt="Shoes" />
            </figure>
            <div
              className={`card-body text-center absolute bottom-0 left-0 transition-transform duration-1000 ${
                hovered1 ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div
                className={`p-5 ${
                  hovered1
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-12 opacity-0"
                }`}
                style={{ backgroundColor: "" }}
              >
                <h2 className="font-bold text-2xl">Toy Gem (Toy store)</h2>
                <p className="mt-7 text-xl font-semibold">
                  A MERN Project : Toy Gem (a toy store demo)
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline  mt-5">
                    <a
                      href="https://toy-gem.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project no 2 */}
        <div className="mt-5 mb-5">
          <div
            className=" card w-96 bg-base-100 shadow-xl image-full relative overflow-hidden rounded-2xl opacity-75 "
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <figure className="bg-opacity- ">
              <img src={foodmonkey} alt="Shoes" />
            </figure>
            <div
              className={`card-body text-center absolute bottom-0 left-0 transition-transform duration-1000 ${
                hovered2 ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div
                className={`p-5 ${
                  hovered2
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-12 opacity-0"
                }`}
                style={{ backgroundColor: "" }}
              >
                <h2 className="font-bold text-2xl">Food Monkey</h2>
                <p className="mt-7 text-xl font-semibold">
                  A REACT Project Food Monkey( a recipe site)
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline  mt-5">
                    <a
                      href="https://food-monkey-83577.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project no 3 */}
        <div className="mt-5 mb-5">
          <div
            className=" card w-96 bg-base-100 shadow-xl image-full relative overflow-hidden rounded-2xl opacity-75 "
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            <figure className="bg-opacity- ">
              <img src={emajhon} alt="Shoes" />
            </figure>
            <div
              className={`card-body text-center absolute bottom-0 left-0 transition-transform duration-1000 ${
                hovered3 ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div
                className={`p-5 ${
                  hovered3
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-12 opacity-0"
                }`}
                style={{ backgroundColor: "" }}
              >
                <h2 className="font-bold text-2xl">Ema Jhon</h2>
                <p className="mt-7 text-xl font-semibold">
                  A MERN Project e-commerce Site(pending work)
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline  mt-5">
                    <a
                      href="https://ema-jhon-42245.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project no 4 */}
        <div className="mt-5 mb-5">
          <div
            className=" card w-96 bg-base-100 shadow-xl image-full relative overflow-hidden rounded-2xl opacity-75 "
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
          >
            <figure className="bg-opacity- ">
              <img src={todo} alt="Shoes" />
            </figure>
            <div
              className={`card-body text-center absolute bottom-0 left-0 transition-transform duration-1000 ${
                hovered4 ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div
                className={`p-5 ${
                  hovered4
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-12 opacity-0"
                }`}
                style={{ backgroundColor: "" }}
              >
                <h2 className="font-bold text-2xl">TO-do List</h2>
                <p className="mt-7 text-xl font-semibold">
                  A MERN Project : TO DO LIST
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline  mt-5">
                    <a
                      href="https://to-do-list-d5399.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project no 5 */}
        <div className="mt-5 mb-5">
          <div
            className=" card w-96 bg-base-100 shadow-xl image-full relative overflow-hidden rounded-2xl opacity-75 "
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
          >
            <figure className="bg-opacity- ">
              <img src={snap} alt="Shoes" />
            </figure>
            <div
              className={`card-body text-center absolute bottom-0 left-0 transition-transform duration-1000 ${
                hovered5 ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div
                className={`p-5 ${
                  hovered5
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-12 opacity-0"
                }`}
                style={{ backgroundColor: "" }}
              >
                <h2 className="font-bold text-2xl">Snap Artistry</h2>
                <p className="mt-7 text-xl font-semibold">
                  A MERN Project Snap Artistry
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline  mt-5">
                    <a
                      href="https://summer-camp-81b20.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project no 6 */}
        <div className="mt-5 mb-5">
          <div
            className=" card w-96 bg-base-100 shadow-xl image-full relative overflow-hidden rounded-2xl opacity-75 "
            onMouseEnter={handleMouseEnter6}
            onMouseLeave={handleMouseLeave6}
          >
            <figure className="bg-opacity- ">
              <img src={techat} alt="Shoes" />
            </figure>
            <div
              className={`card-body text-center absolute bottom-0 left-0 transition-transform duration-1000 ${
                hovered6 ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div
                className={`p-5 ${
                  hovered6
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-12 opacity-0"
                }`}
                style={{ backgroundColor: "" }}
              >
                <h2 className="font-bold text-2xl">Tea Chat</h2>
                <p className="mt-7 text-xl font-semibold">
                  A Social Media Site Tea Chat
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-outline  mt-5">
                    <a
                      href="https://tea-chat-d0a15.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
