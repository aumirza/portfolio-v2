import React from "react"
import { TfiArrowDown, TfiMouse } from "react-icons/tfi"

export const ScrollDownButton = () => {
  const scrollHandler = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }
  return (
    <button
      onClick={scrollHandler}
      className="cursor-pointer flex items-center justify-center animate-bounce"
    >
      <TfiMouse className="text-3xl text-primary " />
      <span className="mx-1"> Scroll down </span>
      <TfiArrowDown className="text-xl text-primary" />
    </button>
  )
}
