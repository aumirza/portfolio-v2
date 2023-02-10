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
      <div className="h-[90%] pt-14 w-11/12 flex items-center">
        <div className="flex-grow h-full flex flex-col justify-around">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={1}
            delay={2500}
          >
            <SocialVertical />
          </ScrollAnimation>
          <div className="md:hidden"></div>
        </div>
        <div className="md:flex-grow flex flex-col-reverse md:flex-row items-center md:justify-around">
          <HeroInfo />
          <AvatarImage />
        </div>
      </div>
      <div className="h-[10%] w-11/12 flex items-center justify-center">
        <ScrollAnimation
          offset={0}
          animateIn="bounceInUp"
          delay={3000}
          animateOnce={true}
          duration={1}
        >
          <ScrollDownButton />
        </ScrollAnimation>
      </div>
    </FullSection>
  )
}
