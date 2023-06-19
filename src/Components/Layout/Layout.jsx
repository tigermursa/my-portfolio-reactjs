import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttonElement = (
    <button
      className={`btn btn-primary bg-transparent  ${isDarkMode ? "" : ""}`}
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <MdOutlineLightMode />
      ) : (
        <MdNightlight className="text-black" />
      )}
    </button>
  );

  return (
    <div
      className={`banner ${isDarkMode ? "dark" : ""}`}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <NavigationBar button={buttonElement} />
      <div className="flex justify-end items-center font-bold p-5 me-12 hidden">
        <span className="me-4 hidden">Change Theme</span>
        {buttonElement}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
