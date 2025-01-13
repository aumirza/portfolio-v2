import React from "react"

export const Button = ({ asChild, children, ...props }) => {
  const className =
    "px-8 py-1 transition-all duration-100 ease-in-out border-2 rounded-full text-secondary border-secondary hover:bg-secondary hover:text-white"

  if (asChild) {
    return React.cloneElement(asChild, {
      className: className,
      ...props,
    })
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
