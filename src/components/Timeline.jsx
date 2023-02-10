import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { TimelineCard } from "./TimelineCard"

export const Timeline = ({ timelines }) => {
  return (
    <div class="max-w-3xl w-full px-1 md:px-0 h-full">
      <div class="relative wrap overflow-hidden h-full">
        <div class="border-2 absolute border-primary h-full left-[50%]"></div>
        {timelines.map((timeline, i) => (
          <ScrollAnimation
            animateIn={i % 2 ? "fadeInLeft" : "fadeInRight"}
            animateOnce={true}
          >
            <TimelineCard
              timeline={timeline.fields}
              key={timeline.id}
              rtl={i % 2}
              index={i + 1}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}
