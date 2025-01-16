import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { TimelineCard } from "./TimelineCard"

export const Timeline = ({ timelines }) => {
  return (
    <div className="w-full h-full max-w-3xl px-1 md:px-0">
      <div className="relative h-full overflow-hidden wrap">
        <div className="border-2 absolute border-primary h-full left-[50%]"></div>
        {timelines.map((timeline, i) => (
          <ScrollAnimation
            key={timeline.id}
            animateIn={i % 2 ? "fadeInLeft" : "fadeInRight"}
            animateOnce={true}
          >
            <TimelineCard
              timeline={timeline.fields}
              rtl={i % 2}
              index={i + 1}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}
