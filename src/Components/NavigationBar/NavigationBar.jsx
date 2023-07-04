import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { FaLayerGroup } from "react-icons/fa";
const NavigationBar = () => {
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
            <div className="flex  w-96 items-center justify-between mx-auto">
              <label
                tabIndex={0}
                className="btn btn-ghost"
                onClick={toggleMenu}
              >
                <FaLayerGroup className="text-2xl" />
              </label>
              <div className=" w-12  FONT">
                <img src="/public/img/my-site-logo.png" alt="" />
              </div>
            </div>

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
                  </animated.ul>
                )
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <NavLink to="/">
          <a className="btn btn-ghost normal-case text-4xl font-bold ">
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
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
