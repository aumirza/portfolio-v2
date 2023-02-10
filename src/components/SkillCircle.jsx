import React from "react"

export const SkillCircle = ({ fields }) => {
  const { name, icon, level } = fields
  return (
    <div className="flex flex-col items-center hover:cursor-pointer hover:scale-105">
      <div className="flex items-center justify-center w-14 h-14  md:w-16 md:h-16 mb-3 bg-gray-200 rounded-full">
        <img className="h-10 w-10 md:h-12 md:w-12" src={icon} alt={name} />
      </div>
      <div className="text-center">
        <h3 className="text-sm md:text-lg ">{name}</h3>
        <div className="w-12 md:w-16 h-1 bg-gray-200 rounded-full">
          <div
            className="h-1 bg-primary rounded-full"
            style={{ width: level + "%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
