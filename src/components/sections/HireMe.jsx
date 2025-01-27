import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { useHiremeQuery } from "../../hooks/useHiremeQuery"

export const HireMe = () => {
  const { title, description, image, button } = useHiremeQuery()

  return (
    <div id="hireme" className="flex justify-center my-10 md:h-96">
      <div className="flex flex-col-reverse justify-around w-10/12 h-full p-5 text-white shadow-lg md:flex-row bg-secondary dark:bg-card dark:text-secondary rounded-2xl">
        <div className="flex flex-col justify-center">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="flex items-end mb-1">
              <h1 className="mx-1 text-2xl font-bold md:text-4xl">{title}</h1>
            </div>
            <p className="max-w-[40ch] md:text-lg">{description}</p>
            <div className="flex justify-center mt-5 md:justify-start">
              <a
                href={button.link}
                className="p-2 px-5 text-lg rounded-md dark:bg-secondary dark:text-white text-secondary bg-primary"
              >
                <span>{button.text}</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <div className="flex items-center justify-center">
          <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
            <img
              className="w-48 h-48 p-2 md:h-60 md:w-60"
              src={image}
              alt="Hire Me"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
