import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { Copyright } from "../Copyright"
import { Social } from "../Social"

export const Footer = () => {
  return (
    <div className="flex flex-col max-h-48 py-5 bg-primary text-secondary items-center justify-center">
      <ScrollAnimation offset={0} animateIn="fadeInUp" animateOnce={true}>
        <Social />
      </ScrollAnimation>
      <ScrollAnimation offset={0} animateIn="fadeIn" animateOnce={true}>
        <Copyright />
      </ScrollAnimation>
    </div>
  )
}
