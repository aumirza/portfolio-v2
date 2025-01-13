import React from "react"

export const SkillCircle = ({ name, icon, level, className }) => {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer hover:scale-105">
      <div className="flex items-center justify-center mb-1 rounded bg-card w-14 h-14 md:w-16 md:h-16">
        <img
          className={`w-10 h-10 md:h-12 md:w-12 ${className}`}
          src={icon}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm md:text-base">{name}</h3>
        {/* <div className="w-12 h-1.5 bg-gray-200 rounded md:w-16 flex items-center pl-0.5">
          <div
            className="h-1 rounded bg-secondary"
            style={{ width: level + "%" }}
          ></div>
        </div> */}
      </div>
    </div>
  )
}
