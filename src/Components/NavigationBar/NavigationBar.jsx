import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = ({ button }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
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
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
                    href="https://drive.google.com/file/d/1w0d9kAlLsHRucE-ItCb8Z5_Vq_x2Py-w/view?usp=share_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <NavLink to="/contact" onClick={closeMenu}>
                    Contact Me
                  </NavLink>
                </li>
                {button && <li>{button}</li>}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost normal-case text-4xl font-bold ">
            Mursalin Hossain
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1XB8IGWTj6a8gZW3QlU91Na5muvUJrBLL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
            {button && <li>{button}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
