import React, { useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); // Toggle the 'dark' class on the root element
  };

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={toggleTheme}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default Theme;
