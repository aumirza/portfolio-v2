import React from "react"
import { FaQuoteLeft, FaUser } from "react-icons/fa"

export const TestimonialCard = ({
  testimonial: { name, avatar, title, company, quote },
}) => {
  return (
    <blockquote className="w-[16rem] md:w-[30rem] p-2 md:p-5 h-80 md:h-60 bg-gray-300 dark:text-secondary flex flex-col justify-center items-center rounded-md shadow-lg">
      <cite className="w-full">
        <div className="w-full flex">
          <div className="mr-4 mb-2">
            {avatar ? (
              <img
                className="w-20 h-20 rounded-full"
                src={avatar ?? "https://via.placeholder.com/150"}
                alt="testimonial avatar"
              />
            ) : (
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary">
                <FaUser className="text-2xl" />
              </div>
            )}
          </div>
          <div className="">
            <h3 className="text-lg font-bold">{name}</h3>
            {title && (
              <h4 className="">
                {title} {company && `at ${company}`}
              </h4>
            )}
          </div>
        </div>
      </cite>
      <div className="relative mt-2">
        <FaQuoteLeft className="absolute text-2xl" />
        <div className="px-5 text-sm md:text-base ml-2 w-[30ch] md:w-auto">
          {quote}
        </div>
      </div>
    </blockquote>
  )
}
