import React from "react"
import { FaGithub } from "react-icons/fa"
import { Button } from "./ui/Button"

export const ProjectGridCard = ({ project }) => {
  const { title, description, cover, techStack, icon } = project

  return (
    <div className="w-[22rem] h-[28rem] mx-auto p-5 gap-2  bg-card text-gray-950 rounded-xl shadow-md hover:-translate-y-3 hover:shadow-xl flex flex-col items-center transition-all ease-in-out duration-500">
      {/* <div className="z-20 group h-52 w-[98%] flex justify-center items-center hover:bg-transparent bg-secondary dark:bg-primary  overflow-hidden"> */}
      <div className="z-20 flex items-center justify-center h-48 rounded overflow-clip group hover:bg-transparent">
        <img
          className="object-contain rounded overflow-clip mix-blend-multiply"
          // className="object-cover h-full rounded-md mix-blend-multiply group-hover:grayscale-0 group-hover:brightness-100 grayscale brightness-90"
          src={cover}
          alt={title}
        />
      </div>
      {icon && (
        <div className="z-20 p-2 -mt-20 bg-white border border-gray-500 rounded-full">
          <img className="size-20" src={icon} alt={title} />
        </div>
      )}

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
      <div className="relative flex justify-center w-full gap-2">
        {techStack?.map(({ name, icon }) => (
          <div className="group" key={name}>
            <div className="absolute hidden p-1 px-2 -mt-8 text-sm text-white rounded-full group-hover:flex bg-secondary">
              <p className="text-xs">{name}</p>
            </div>
            <div
              key={name}
              className="flex gap-0.5 cursor-pointer hover:scale-105 transition-all"
            >
              <img
                className="size-6 filter brightness-0 "
                src={icon}
                alt={name}
              />
            </div>
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
