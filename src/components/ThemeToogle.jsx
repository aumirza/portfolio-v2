import React, { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import { isWinter } from "../constants"

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true)

  const darkModeHandler = e => {
    if (isWinter) {
      // alert notify
      return
    }

    setDarkMode(darkMode => !darkMode)
  }

  useEffect(() => {
    if (!document) return
    document.documentElement.classList.toggle("dark", darkMode)
    sessionStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
    <div className="flex items-center justify-center w-8 h-8 cursor-pointer">
      <FiSun
        className={
          "text-primary  text-3xl duration-200 overflow-hidden " +
          (darkMode ? "h-0 w-0" : "")
        }
        onClick={darkModeHandler}
      />
      <FiMoon
        className={
          "text-white hover:text-primary text-3xl duration-200 overflow-hidden " +
          (!darkMode ? "h-0 w-0" : "")
        }
        onClick={darkModeHandler}
      />
    </div>
  )
}
