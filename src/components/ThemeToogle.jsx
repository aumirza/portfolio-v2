import React, { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkMode =
      sessionStorage.getItem("darkMode") === "true" ? true : false
    console.log(darkMode)
    if (darkMode !== null) {
      setDarkMode(darkMode)
      document.documentElement.classList.toggle("dark", darkMode)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const darkModeHandler = e => {
    setDarkMode(darkMode => !darkMode)
    document.documentElement.classList.toggle("dark")
    sessionStorage.setItem("darkMode", !darkMode)
  }

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
  )
}
