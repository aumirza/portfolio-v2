import React from "react"
import { FaGithub } from "react-icons/fa"

export const ProjectGridCard = ({ project }) => {
  const { title, description, cover } = project

  return (
    <div className="max-w-[20rem] p-2 border-primary border-2 bg-opacity-60 rounded-lg shadow-md hover:-translate-y-3 hover:shadow-xl flex flex-col items-center transition-all ease-in-out duration-500">
      <div className="group h-52 w-[98%] flex justify-center items-center hover:bg-transparent bg-secondary overflow-hidden">
        <img
          className="h-full object-cover rounded-md mix-blend-multiply group-hover:grayscale-0 group-hover:brightness-100 grayscale brightness-90"
          src={cover}
          alt={title}
        />
      </div>
      <div className="mt-3">
        <h1 className="text-2xl">{title}</h1>
      </div>
      <div className="p-2">
        <p className="h-24 text-sm">
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
      <div className="mb-1 px-2 flex justify-between w-full">
        {project.source && (
          <a href={project.source} target="_blank" rel="noreferrer">
            <FaGithub className="text-xl text-secondary" />
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            className="border border-secondary text-secondary py-0.5 px-3 rounded-md"
          >
            <span className="text-base">View</span>
          </a>
        )}
      </div>
    </div>
  )
}
