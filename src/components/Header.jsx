import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { ThemeToggle } from "./ThemeToogle";

export const Header = () => {
  return (
    <div className="z-50 bg-white dark:bg-secondary fixed w-full h-16 shadow-lg flex items-center justify-center">
      <div className="w-11/12 flex justify-between">
        <div className="flex items-center justify-start">
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
  );
};
