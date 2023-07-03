import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const NavigationBar = ({ button }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuTransition = useTransition(isMenuOpen, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    config: { duration: 200 },
  });

  return (
    <div className="w-full  flex justify-between items-center navbar">
      <div className="lg:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {menuTransition(
              (style, item) =>
                item && (
                  <animated.ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    style={style}
                  >
                    <li>
                      <NavLink to="/" onClick={closeMenu}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" onClick={closeMenu}>
                        About Me
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/services" onClick={closeMenu}>
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1yd-OFM_gvDRnVsaNLj0mSrS3_MoKbJaS/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <NavLink to="/contact" onClick={closeMenu}>
                        Contact Me
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blogs" onClick={closeMenu}>
                        Blogs
                      </NavLink>
                    </li>
                    {button && <li>{button}</li>}
                  </animated.ul>
                )
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <NavLink to="/">
          <a className="btn btn-ghost normal-case text-4xl font-bold">
            Mursalin Hossain
          </a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="me-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="me-4">
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li className="me-4">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="me-4">
            <a
              href="https://drive.google.com/file/d/1yd-OFM_gvDRnVsaNLj0mSrS3_MoKbJaS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="me-4">
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
          <li className="me-4">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          {button && <li>{button}</li>}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
