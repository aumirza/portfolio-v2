import React from "react"
import { BsClockFill } from "react-icons/bs"

export const TimelineCard = ({ timeline, rtl, index }) => {
  return (
    <div
      className={
        "mb-8 flex justify-between items-center w-full " +
        (rtl ? "flex-row-reverse" : null)
      }
    >
      <div className="order-1 w-[45%]"></div>
      <div className="z-20 flex items-center order-1 bg-primary text-secondary shadow-xl h-6 w-6 md:w-8 md:h-8 rounded-full">
        <h1 className="mx-auto font-semibold md:text-lg ">{index}</h1>
      </div>
      <div className="order-1 bg-primary text-secondary rounded-lg shadow-xl w-[45%] p-2  md:px-6 md:py-4">
        <h3 className="mb-1 font-bold text-sm md:text-xl">{timeline.title}</h3>
        <p className="mb-3 text-xs md:text-base tracking-wide text-opacity-100">
          {timeline.institution}
        </p>
        <p className="text-sm leading-snug tracking-wide text-opacity-100">
          {timeline.description}
        </p>
        <div className="flex items-center mt-1 text-sm text-opacity-80">
          <BsClockFill className="opacity-95" />
          <p className="ml-2">{timeline.duration}</p>
        </div>
      </div>
    </div>
  )
}
