import React from "react"

export const FullSection = ({
  id,
  children,
  className,
  centerX = true,
  centerY = true,
  Hscreen = false,
}) => {
  return (
    <div
      id={id}
      className={
        "min-h-screen flex flex-col " +
        " " +
        (centerX ? "items-center" : "") +
        " " +
        (centerY ? "justify-center " : "") +
        " " +
        (Hscreen ? "h-screen" : "") +
        " " +
        className
      }
    >
      {children}
    </div>
  )
}
