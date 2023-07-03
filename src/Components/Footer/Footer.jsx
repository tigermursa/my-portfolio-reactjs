import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <img className="w-8" src="/img/android-chrome-512x512.png" alt="" />
          <p>
            Copyright
            <span className=" sm:inline">
              © mursalin-hossain 2023 - All rights reserved
            </span>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/tigermursa" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mursalin77/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
