import React from "react"
import { Layout } from "../components/Layout"
import { ProjectGridCard } from "../components/ProjectGridCard"
import { useProjectsQuery } from "../hooks/useProjectsQuery"
import { Seo } from "../components/Seo"
import ScrollAnimation from "react-animate-on-scroll"

const Projects = () => {
  const projects = useProjectsQuery()
  const allStacks = projects
    .map(edge => edge.project.fields.techStack)
    .filter(tech => tech !== undefined)
    .flat()

  const uniqueStack = Array.from(
    new Set(allStacks.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item))

  return (
    <Layout className="pt-20">
      <div className="flex justify-center mb-8">
        <h1 className="mb-2 text-4xl font-bold border-b-4 text-secondary dark:text-white border-primary">
          Projects
        </h1>
      </div>

      <div className="flex flex-wrap justify-center max-w-lg mx-auto my-10">
        {uniqueStack.map(stack => (
          <div className="flex gap-0.5 bg-card rounded-full p-2 py-1 cursor-pointer">
            <img
              className="size-6 filter brightness-0"
              src={stack.icon}
              alt={stack.name}
            />
            <p className="text-sm text-gray-900">{stack.name}</p>
          </div>
        ))}
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto mb-10 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map(edge => (
          <ScrollAnimation
            key={edge.project.id}
            animateIn="fadeInUp"
            animateOnce={true}
            duration={1}
          >
            <ProjectGridCard project={edge.project.fields} />
          </ScrollAnimation>
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => <Seo title="Projects" />
