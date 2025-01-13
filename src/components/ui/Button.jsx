import React from "react"

export const Button = ({
  asChild,
  theme,
  className: CN,
  children,
  ...props
}) => {
  if (!asChild && !children) {
    throw new Error("Button component requires children when not using asChild")
  }
  let className =
    "px-8 py-1 text-white transition-all duration-100 ease-in-out border-2 border-white rounded-full hover:bg-white hover:text-secondary"

  if (theme === "primary") {
    className =
      "px-8 py-1 transition-all duration-100 ease-in-out border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-secondary"
  } else if (theme === "secondary") {
    className =
      "px-8 py-1 transition-all duration-100 ease-in-out border-2 rounded-full text-secondary border-secondary hover:bg-secondary hover:text-white"
  }

  if (asChild) {
    return React.cloneElement(children, {
      className: className + " " + CN,
      ...props,
    })
  }
  return (
    <button className={className + " " + CN} {...props}>
      {children}
    </button>
  )
}
