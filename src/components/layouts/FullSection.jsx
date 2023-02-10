import React from "react"

export const FullSection = ({
  children,
  className,
  centerX = true,
  centerY = true,
  Hscreen = false,
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col  ${
        centerX ? "items-center" : ""
      }  ${centerY ? "justify-center" : ""} ${
        Hscreen ? "h-screen" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
