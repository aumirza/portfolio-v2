import React from "react"
import { FaGithub } from "react-icons/fa"

export const ProjectGridCard = ({ project }) => {
  const { title, description, cover } = project

  return (
    <div className="max-w-[20rem] mx-auto p-2 bg-primary text-secondary rounded-lg shadow-md hover:-translate-y-3 hover:shadow-xl flex flex-col items-center transition-all ease-in-out duration-500">
      {/* <div className="z-20 group h-52 w-[98%] flex justify-center items-center hover:bg-transparent bg-secondary dark:bg-primary  overflow-hidden"> */}
      <div className="z-20 group h-52 w-[98%] flex justify-center items-center hover:bg-transparent   overflow-hidden">
        <img
          className="h-full object-cover rounded-md mix-blend-multiply"
          // className="h-full object-cover rounded-md mix-blend-multiply group-hover:grayscale-0 group-hover:brightness-100 grayscale brightness-90"
          src={cover}
          alt={title}
        />
      </div>

      <div className="mt-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="px-3 mt-2 mb-5">
        <p className="text-sm leading-3 font-mono">
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
      <div className="mb-1 px-2 flex items-center justify-between w-full">
        {project.source && (
          <a href={project.source} target="_blank" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            className="border text-secondary border-secondary hover:bg-secondary hover:text-primary px-2 rounded-md"
          >
            <span className="text-sm">View</span>
          </a>
        )}
      </div>
    </div>
  )
}
