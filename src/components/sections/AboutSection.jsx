import React from "react"
import ReactMarkdown from "react-markdown"
import ScrollAnimation from "react-animate-on-scroll"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { FullSection } from "../layouts/FullSection"
import { markdowComponents } from "../../utils/markdownComponents"

export const AboutSection = () => {
  const { text, image } = useAboutQuery()

  return (
    <FullSection>
      <div className="mb-5 md:mb-10">
        <ScrollAnimation animateIn="fadeInTop" animateOnce={true} duration={1}>
          <h1 className="mb-2 text-2xl font-bold border-b-2 md:text-3xl border-primary">
            About me
          </h1>
        </ScrollAnimation>
      </div>
      <div className="flex flex-col-reverse items-center justify-center p-2 md:flex-row">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2}>
          <div className="max-w-[50ch] mt-10 md:mt-0 px-3 list-inside list-disc">
            <ReactMarkdown components={markdowComponents}>{text}</ReactMarkdown>
          </div>
        </ScrollAnimation>
        <div className="flex-grow pl-10">
          <ScrollAnimation animateIn="flipInY" animateOnce={true} duration={2}>
            <div className="relative h-[14rem] w-[14rem] md:h-80 md:w-80 transform ">
              <div className="absolute w-full h-full border-4 top-5 right-5 border-primary before:h-full before:w-full hover:translate-x-1 hover:-translate-y-1"></div>
              <img className="absolute" src={image} alt="about" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </FullSection>
  )
}
