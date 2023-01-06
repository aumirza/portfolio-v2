import React from "react"
import { BsClockFill } from "react-icons/bs"

export const TimelineCard = ({ timeline, rtl, index }) => {
  return (
    <div
      class={
        "mb-8 flex justify-between items-center w-full " +
        (rtl ? "flex-row-reverse" : null)
      }
    >
      <div class="order-1 w-[45%]"></div>
      <div class="z-20 flex items-center order-1 bg-primary text-secondary shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg ">{index}</h1>
      </div>
      <div class="order-1 bg-primary text-secondary rounded-lg shadow-xl w-[45%] px-6 py-4">
        <h3 class="mb-1 font-bold text-xl">{timeline.title}</h3>
        <p class="mb-3 leading-snug tracking-wide text-opacity-100">
          {timeline.institution}
        </p>
        <p class="text-sm leading-snug tracking-wide text-opacity-100">
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
