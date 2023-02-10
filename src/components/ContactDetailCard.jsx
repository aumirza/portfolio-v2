import React from "react"

export const ContactDetailCard = ({ Icon, title, text }) => {
  return (
    <div className="flex justify-center text-white items-center rounded-md flex-col mb-3 py-5 px-7 dark:bg-secondaryLight bg-primary hover:scale-105 ease-in">
      <Icon className="text-3xl" />
      <span className="text-lg">{title}</span>
      <span> {text}</span>
    </div>
  )
}
