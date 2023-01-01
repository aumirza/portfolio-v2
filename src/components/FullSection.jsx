import React from "react";

export const FullSection = ({
  children,
  className,
  centerX = true,
  centerY = true,
}) => {
  return (
    <div
      className={`h-screen flex flex-col  ${centerX ? "items-center" : ""}  ${
        centerY ? "justify-center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
