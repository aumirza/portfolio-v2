import { Link } from "gatsby";
import React from "react";

const NavLink = ({ children, ...restProps }) => {
  return (
    <Link
      activeClassName="text-primary pb-1 border-primary border-b-2"
      className={
        "inline-block p-2  hover:text-primary hover:pb-1 hover:border-primary hover:border-b-2 "
      }
      {...restProps}
    >
      {children}
    </Link>
  );
};

export const Nav = () => {
  return (
    <ul className="text-xl flex">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};
