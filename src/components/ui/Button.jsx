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
    "px-8 py-1 transition-all duration-200 ease-in-out border-2 rounded-full border-secondary dark:border-white text-secondary dark:text-white dark:hover:bg-white dark:hover:text-secondary hover:bg-secondary hover:text-white"

  if (theme === "primary") {
    className =
      "px-8 py-1 transition-all duration-200 ease-in-out border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-secondary"
  } else if (theme === "secondary") {
    className =
      "px-8 py-1 transition-all duration-200 ease-in-out border-2 rounded-full text-secondary border-secondary hover:bg-secondary hover:text-white"
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
