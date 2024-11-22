import React from "react"
import { Link } from "gatsby"

const ScrollLink = ({ to, children, ...props }) => {
  const handleClick = e => {
    // Prevent default Gatsby scroll
    e.preventDefault()

    // Use native behavior to navigate
    const target = document.querySelector(to)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center", // Center alignment
      })
    }

    // Update the URL hash
    window.history.pushState(null, "", to)
  }

  return (
    <Link {...props} to={to} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default ScrollLink
