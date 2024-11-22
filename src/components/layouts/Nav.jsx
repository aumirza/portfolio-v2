import { Link } from "gatsby"
import React from "react"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

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
  )
}

const NavList = ({ className }) => {
  return (
    <ul className={"text-xl " + className}>
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
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  )
}

export const Nav = () => {
  const [showNav, setShowNav] = React.useState(false)
  const navToggleHandler = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="">
      <FaBars
        onClick={navToggleHandler}
        className="text-2xl md:hidden text-primary"
      />
      <div
        className={
          "md:hidden fixed h-full w-full top-0 left-0 transform transition-all  duration-700 " +
          (showNav ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div
          className={
            "bg-primary w-full h-full fixed left-0 top-0 " +
            (showNav
              ? "translate-x-0  duration-500 ease-out"
              : "-translate-x-full  duration-1000 ease-in")
          }
        ></div>
        <div
          className={
            "bg-secondary  w-full h-full fixed top-0 left-0 " +
            (showNav
              ? "translate-x-0  duration-700 ease-out"
              : "-translate-x-full duration-700 ease-in")
          }
        ></div>
        <div
          className={
            "bg-gray-600 h-full w-full z-20 flex justify-center items-center " +
            (showNav
              ? "translate-x-0  duration-1000 ease-out"
              : "-translate-x-full duration-500 ease-in")
          }
        >
          <div className="fixed right-5 top-5">
            <AiOutlineClose
              className="text-3xl text-primary"
              onClick={navToggleHandler}
            />
          </div>
          <NavList />
        </div>
      </div>

      <NavList className="hidden gap-2 md:flex" />
    </div>
  )
}
