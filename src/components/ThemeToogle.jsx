import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = (e) => {
    setDarkMode((darkMode) => !darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="h-8 w-8 flex justify-center items-center">
      <FiSun
        className={
          "text-primary  text-3xl duration-200 overflow-hidden " +
          (darkMode ? "h-0 w-0" : "")
        }
        onClick={darkModeHandler}
      />
      <FiMoon
        className={
          "text-white text-3xl duration-200 overflow-hidden " +
          (!darkMode ? "h-0 w-0" : "")
        }
        onClick={darkModeHandler}
      />
    </div>
  );
};
