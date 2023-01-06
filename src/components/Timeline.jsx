import React from "react"
import { TimelineCard } from "./TimelineCard"

export const Timeline = ({ timelines }) => {
  return (
    <div class="max-w-3xl w-full h-full">
      <div class="relative wrap overflow-hidden h-full">
        <div class="border-2 absolute border-primary h-full left-[50%]"></div>
        {timelines.map((timeline, i) => (
          <TimelineCard
            timeline={timeline.fields}
            key={timeline.id}
            rtl={i % 2}
            index={i + 1}
          />
        ))}
      </div>
    </div>
  )
}
