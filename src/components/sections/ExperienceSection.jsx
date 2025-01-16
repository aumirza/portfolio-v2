import React from "react"
import { useExperienceQuery } from "../../hooks/useExperienceQuery"
import { FullSection } from "../layouts/FullSection"
import ScrollAnimation from "react-animate-on-scroll"
import ReactMarkdown from "react-markdown"
import { markdownComponents } from "../markdownComponents"

export const ExperienceSection = () => {
  const { experiences } = useExperienceQuery()
  return (
    <FullSection id="experience" className="my-10 scroll-m-28" centerY={false}>
      <div className="mb-10">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="mb-2 text-2xl font-bold border-b-2 md:text-3xl border-primary">
            My Experience
          </h2>
        </ScrollAnimation>
      </div>

      <div className="flex gap-10">
        <div className="w-3 rounded-lg bg-primary"></div>
        <div className="flex flex-col gap-5">
          {experiences.map(exp => (
            <div className="flex items-center gap-10">
              <div className="-ml-[3.8rem]  rounded-full size-8 bg-primary border-white dark:border-secondary border-2"></div>
              <ScrollAnimation
                className="w-full"
                animateIn={"fadeInLeft"}
                animateOnce={true}
              >
                <div
                  className="p-4 rounded shadow text-secondary bg-primary"
                  key={exp.id}
                >
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold">{exp.position}</h3>
                    <div className="flex gap-2 font-medium">
                      <span>
                        {new Date(exp.started).toLocaleDateString("en-In", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span>-</span>
                      <span>
                        {exp.ended !== ""
                          ? new Date(exp.ended).toLocaleDateString("en-In", {
                              month: "short",
                              year: "numeric",
                            })
                          : "present"}
                      </span>
                    </div>
                  </div>
                  <h4 className="ml-1 text-xl font-medium">
                    {exp.institution}
                  </h4>
                  <ReactMarkdown components={markdownComponents}>
                    {exp.description}
                  </ReactMarkdown>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </FullSection>
  )
}
