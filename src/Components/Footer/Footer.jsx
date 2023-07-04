import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="grid items-center grid-flow-col gap-4 text-gray-500 text-lg">
          <img className="w-10" src="/img/my-site-logo.png" alt="" />
          <p>
            Copyright
            <span className="sm:inline">
              © mursalin-hossain 2023 <br className=" md:hidden" /> All rights reserved
            </span>
          </p>
        </div>
        <div className="grid items-center grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://github.com/tigermursa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/mursalin77/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
