import React from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export const ProjectCard = ({ project, rtl, className }) => {
  const { title, description, cover } = project

  return (
    <div className={"max-w-[60rem] mx-auto " + className}>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div
          className={`md:z-10 col-start-1 row-start-1 md:col-span-8 ${
            rtl ? "md:col-start-5" : "md:col-end-8"
          }`}
        >
          <div className="group rounded-md h-72 w-full bg-secondary md:hover:bg-transparent">
            <img
              className="h-full object-cover w-full mix-blend-multiply rounded-md md:group-hover:grayscale-0 md:group-hover:brightness-100 grayscale brightness-90"
              src={cover}
              alt={title}
            />
          </div>
        </div>
        <div
          className={`text-white md:text-secondary row-start-1 col-start-1  md:col-span-7 ${
            rtl ? "md:col-end-7" : "md:col-start-6"
          }`}
        >
          <div
            className={`h-full flex flex-col justify-center items-center ${
              rtl ? "md:items-start" : "md:items-end"
            }`}
          >
            <div className="z-20">
              <span>Featured project</span>
            </div>
            <h1 className="z-20 text-2xl">{project.title}</h1>
            <div className="z-20 my-3 bg-primary text-secondary h-28 w-full rounded-md shadow-lg p-5">
              <p className="text-sm">
                {description && description.length > 150
                  ? description.substring(0, 150) +
                    " ... " +
                    description.substring(
                      description.length - 15,
                      description.length
                    )
                  : description}
              </p>
            </div>
            <div className="flex z-20">
              {project.tech_stack
                ? project.tech_stack.map((tech, i) => (
                    <div className="px-1" key={i + tech.name}>
                      <span>{tech.name}</span>
                    </div>
                  ))
                : null}
            </div>
            <div className="z-20 w-1/6 mt-2 flex justify-between">
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
        </div>
      </div>
    </div>
  )
}
