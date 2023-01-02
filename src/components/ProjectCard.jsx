import React from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export const ProjectCard = ({ project, rtl }) => {
  const { title, description, cover } = project

  return (
    <div className="p-5 max-w-[60rem] mx-auto">
      <div className="grid grid-cols-12">
        <div
          className={`z-10 col-span-8 row-start-1 ${
            rtl ? "col-start-5" : "col-end-8"
          }`}
        >
          <div className="group rounded-md h-72 w-full bg-primary hover:bg-transparent">
            <img
              className="h-full object-cover w-full mix-blend-multiply rounded-md group-hover:grayscale-0 group-hover:brightness-100 grayscale brightness-90"
              src={cover}
              alt={title}
            />
          </div>
        </div>
        <div
          className={`row-start-1 col-span-7 ${
            rtl ? "col-end-7" : "col-start-6"
          }`}
        >
          <div
            className={`h-full flex flex-col justify-center ${
              rtl ? "items-start" : "items-end"
            }`}
          >
            <div className="">
              <span>Featured project</span>
            </div>
            <h1 className="text-2xl">{project.title}</h1>
            <div className="z-20 my-3 bg-primary text-white h-28 w-full rounded-md shadow-lg p-5">
              <p className="text-sm">
                {description.substring(0, 150) +
                  (description.length > 150 ? "  ...  " : "") +
                  (description.length > 150
                    ? description.substring(
                        description.length - 15,
                        description.length
                      )
                    : "")}
              </p>
            </div>
            <div className="flex">
              {project.tech_stack
                ? project.tech_stack.map((tech, i) => (
                    <div className="px-1" key={i}>
                      <span>{tech.name}</span>
                    </div>
                  ))
                : null}
            </div>
            <div className="w-1/6 mt-2 flex justify-between ">
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
