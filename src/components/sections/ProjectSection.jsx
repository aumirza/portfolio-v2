import { Link } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { ProjectCard } from "../ProjectCard"
import { useFeaturedProjectsQuery } from "../../hooks/useFeaturedProjectsQuery"
import { Button } from "../ui/Button"

export const ProjectSection = () => {
  const projects = useFeaturedProjectsQuery()

  return (
    <div className="flex flex-col items-center">
      <ScrollAnimation animateIn="fadeInTop" animateOnce={true} duration={1}>
        <h1 className="pb-2 mb-5 text-2xl font-bold border-b-2 md:text-4xl border-primary md:mb-10">
          Some Featured Projects
        </h1>
      </ScrollAnimation>
      <div className="w-11/12">
        {projects &&
          projects.map((edge, i) => (
            <ProjectCard
              className="mb-5 md:mb-10"
              key={edge.project.id}
              rtl={i % 2}
              project={edge.project.fields}
            />
          ))}
      </div>
      <div className="flex justify-center">
        <Button asChild>
          <Link to="/projects">
            <span className="text-base">View All</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
