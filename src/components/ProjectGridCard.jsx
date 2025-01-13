import React from "react"
import { FaGithub } from "react-icons/fa"
import { Button } from "./ui/Button"

export const ProjectGridCard = ({ project }) => {
  const { title, description, cover, techStack } = project

  return (
    <div className="w-[22rem] h-[28rem] mx-auto p-5 gap-2  bg-card text-gray-950 rounded-xl shadow-md hover:-translate-y-3 hover:shadow-xl flex flex-col items-center transition-all ease-in-out duration-500">
      {/* <div className="z-20 group h-52 w-[98%] flex justify-center items-center hover:bg-transparent bg-secondary dark:bg-primary  overflow-hidden"> */}
      <div className="z-20 flex items-center justify-center overflow-hidden group h-60 hover:bg-transparent">
        <img
          className="object-cover h-full rounded-md mix-blend-multiply"
          // className="object-cover h-full rounded-md mix-blend-multiply group-hover:grayscale-0 group-hover:brightness-100 grayscale brightness-90"
          src={cover}
          alt={title}
        />
      </div>

      <div className="">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="px-3 mb-2">
        <p className="text-lg leading-5 text-center">
          {description.substring(0, 80) +
            (description.length > 80 ? "  ...  " : "") +
            (description.length > 80
              ? description.substring(
                  description.length - 15,
                  description.length
                )
              : "")}
        </p>
      </div>
      <div className="flex justify-center w-full gap-2">
        {techStack?.map(({ name, icon }) => (
          <div key={name} className="flex gap-0.5">
            <img
              className="size-6 filter brightness-0 "
              src={icon}
              alt={name}
            />
            {/* <p className="text-sm text-gray-900">{name}</p> */}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around flex-grow w-full gap-10">
        {project.source && (
          <Button theme="secondary">
            <a href={project.source} target="_blank" rel="noreferrer">
              <FaGithub className="text-3xl" />
            </a>
          </Button>
        )}
        {project.url && (
          <Button theme="secondary">
            <a href={project.url}>
              <span className="text-lg">View</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
