import { Link } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { useProjectsQuery } from "../../hooks/useProjectsQuery"
import { ProjectCard } from "../ProjectCard"

export const ProjectSection = () => {
  const projects = useProjectsQuery()
  return (
    <div className="flex flex-col items-center mt-20">
      <ScrollAnimation animateIn="fadeInTop" animateOnce={true} duration={1}>
        <h1 className="text-2xl md:text-4xl font-bold pb-2 border-b-2 border-primary mb-5 md:mb-10">
          Some Featured Projects
        </h1>
      </ScrollAnimation>
      <div className="w-11/12">
        {projects.map((edge, i) => (
          <ProjectCard
            className="mb-5 md:mb-10"
            key={edge.project.id}
            rtl={i % 2}
            project={edge.project.fields}
          />
        ))}
      </div>
      <div className="">
        <Link
          to="/projects"
          className="border hover:bg-primary hover:text-secondary border-primary text-primary py-2 px-3 rounded-md"
        >
          <span className="text-base">View All</span>
        </Link>
      </div>
    </div>
  )
}
