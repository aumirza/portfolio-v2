import React from "react"

export const ContactDetailCard = ({ Icon, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center py-5 mb-3 ease-in rounded-md text-secondary px-7 bg-primary hover:scale-105">
      <Icon className="text-3xl" />
      <span className="text-lg">{title}</span>
      <span> {text}</span>
    </div>
  )
}
