import React from "react"
import { FullSection } from "../layouts/FullSection"
import { ScrollDownButton } from "../ScrollDownButton"
import { SocialVertical } from "../SocialVertical"
import { AvatarImage } from "../AvatarImage"

import "animate.css/animate.min.css"
import { HeroInfo } from "../HeroInfo"
import ScrollAnimation from "react-animate-on-scroll"

export const HeroSection = () => {
  return (
    <FullSection>
      <div className="h-[90vh] pt-14 w-11/12 flex items-center">
        <div className="flex flex-col justify-around flex-grow h-full">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={1}
            delay={1400}
          >
            <SocialVertical />
          </ScrollAnimation>
          <div className="md:hidden"></div>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-grow md:flex-row md:justify-around">
          <HeroInfo />
          <AvatarImage />
        </div>
      </div>
      <div className="h-[10vh] w-11/12 flex items-center justify-center">
        <ScrollAnimation
          offset={0}
          animateIn="bounceInUp"
          delay={1800}
          animateOnce={true}
          duration={1}
        >
          <ScrollDownButton />
        </ScrollAnimation>
      </div>
    </FullSection>
  )
}
