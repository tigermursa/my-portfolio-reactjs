import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoVercel,
  IoLogoFirebase,
  IoLogoNpm,
} from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaGoogle,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import { a } from "react-scroll";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 p-5">
        My Projects
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </h1>
      <div className="project card ">
        <div className="Uni-Blocks cursor-pointer">
          <div className="Uni-block" id="uni-1" data-aos="fade-right">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/grocery-store.jpg" alt="Image 1" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <p className="font-bold">Grocery Store</p>
                  <div className="text-sm font-semibold text-slate-600 mt-3">
                    <p>An online local grocery shop</p>
                    <div className="flex gap-3 text-2xl mt-3 mb-3">
                      <IoLogoReact className="text-blue-500" />
                      <SiTailwindcss className="text-teal-500" />
                      <IoLogoNpm className="text-red-500" />
                      <SiExpress className="text-purple-500" />
                      <IoLogoVercel className="text-pink-500" />
                      <SiMongodb className="text-green-500" />
                      <IoLogoFirebase className="text-yellow-500" />
                    </div>
                  </div>
                  <button className="btn btn-outline mt-2 ">
                    <a
                      href="https://grocery-store-53ee3.web.app/"
                      target="_blank"
                      rel="noopener noreferrer">
                      Visit now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-2" data-aos="fade-right">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/hire=sync.jpg" alt="Image 2" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">Hire Sync</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>An Online Job Portal</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a href="https://hire-sync.web.app/" target="_blank" rel="noopener noreferrer">
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-3" data-aos="fade-right">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/quantum.jpg" alt="Image 3" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">Quantum Tech</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>A website for Tech company</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a
                          href="https://quantum-tech-74ed5.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-4" data-aos="fade-left">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/snap-art.jpg" alt="Image 3" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">Snap Artistry</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>A site with Admin control panel!</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                        <IoLogoFirebase className="text-yellow-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a
                          href="https://summer-camp-81b20.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-5" data-aos="fade-left">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/teachat-app.jpg" alt="Image 3" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">Tea Chat</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>A social media app, Post a status now!</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                        <IoLogoFirebase className="text-yellow-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a
                          href="https://tea-chat-d0a15.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-6" data-aos="fade-left">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/todolistfor.jpg" alt="Image 3" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">TO-DO List</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>Track Daily Task Easily</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a
                          href="https://to-do-list-d5399.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-7" data-aos="fade-right">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/toygem-store.jpg" alt="Image 3" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">Toy Gem</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>Buy and Sell Toys from the site</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                        <IoLogoFirebase className="text-yellow-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a
                          href="https://toy-gem.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Uni-block" id="uni-8" data-aos="fade-right">
            <div className="uni-main">
              <div className="uni-card uni-card1">
                <div className="uni-content">
                  <img src="/img/fooodmonkeyy.jpg" alt="Image 3" />
                </div>
              </div>
              <div className="uni-card uni-card2">
                <div className="uni-content">
                  <div>
                    <p className="font-bold">Food Monkey</p>
                    <div className="text-sm font-semibold text-slate-600 mt-3">
                      <p>Try Famous Chinese Food Recipes</p>
                      <div className="flex gap-3 text-2xl mt-3 mb-3">
                        <IoLogoReact className="text-blue-500" />
                        <SiTailwindcss className="text-teal-500" />
                        <IoLogoNpm className="text-red-500" />
                        <SiExpress className="text-purple-500" />
                        <IoLogoVercel className="text-pink-500" />
                        <SiMongodb className="text-green-500" />
                        <IoLogoFirebase className="text-yellow-500" />
                      </div>
                      <button className="btn btn-outline mt-2 ">
                        <a
                          href="https://food-monkey-83577.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit now
                        </a>
                      </button>
                    </div>
                  </div>
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
