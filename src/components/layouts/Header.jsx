import React from "react"
import { Logo } from "../Logo"
import { Nav } from "./Nav"
import { ThemeToggle } from "../ThemeToogle"

export const Header = () => {
  return (
    <div className="fixed z-50 flex items-center justify-center w-full h-16 bg-white shadow-lg dark:bg-secondary">
      <div className="flex justify-between w-11/12">
        <div className="flex items-center justify-start cursor-pointer">
          <Logo />
        </div>
        <div className="flex items-center">
          <div className="mr-5">
            <Nav />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
