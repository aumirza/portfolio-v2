import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export const ProjectCard = ({ project, rtl, className }) => {
  const { title, description, cover } = project

  return (
    <div className={"max-w-[60rem] mx-auto " + className}>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <ScrollAnimation
          animateIn={rtl ? "fadeInRight" : "fadeInLeft"}
          animateOnce={true}
          duration={1}
          className={`col-start-1 row-start-1 md:col-span-8 ${
            rtl ? "md:col-start-6" : "md:col-end-8"
          }`}
        >
          <div className="w-full rounded-md md:z-10 group h-72 ">
            {/* //bg-secondary md:hover:bg-transparent */}
            <img
              className="object-cover w-full h-full rounded-md mix-blend-multiply "
              // md:group-hover:grayscale-0 md:group-hover:brightness-100 grayscale brightness-90
              src={cover}
              alt={title}
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn={rtl ? "fadeInLeft" : "fadeInRight"}
          animateOnce={true}
          duration={1}
          className={`text-secondary dark:md:text-white font-bold row-start-1 col-start-1  md:col-span-7 ${
            rtl ? "md:col-end-7" : "md:col-start-6"
          }`}
        >
          <div
            className={`h-full flex flex-col justify-center items-center z-20 ${
              rtl ? "md:items-start" : "md:items-end"
            }`}
          >
            <div className="z-20">
              <span>Featured project</span>
            </div>
            <h1 className="z-20 text-2xl">{project.title}</h1>
            <div
              className={
                "z-20 flex flex-col w-full p-5 my-3 rounded-md shadow-lg bg-primary text-secondary h-28 " +
                (rtl ? "" : "md:items-end")
              }
            >
              <p className="flex-grow">
                {description && description.length > 150
                  ? description.substring(0, 150) +
                    " ... " +
                    description.substring(
                      description.length - 15,
                      description.length
                    )
                  : description}
              </p>
              <div className="z-20 flex gap-2">
                {project.techStack
                  ? project.techStack.map((tech, i) => (
                      <div className="px-1" key={i + tech.name}>
                        <img
                          className="size-5 brightness-0"
                          src={tech.icon}
                          alt=""
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div className="z-20 flex justify-between w-1/6 mt-2">
              {project.source && (
                <a href={project.source} target="_blank" rel="noreferrer">
                  <FaGithub className="text-xl text-primary" />
                </a>
              )}

              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="text-xl text-primary" />
                </a>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
