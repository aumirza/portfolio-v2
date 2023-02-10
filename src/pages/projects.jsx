import React from "react"
import { Layout } from "../components/Layout"
import { ProjectGridCard } from "../components/ProjectGridCard"
import { useProjectsQuery } from "../hooks/useProjectsQuery"
import { Seo } from "../components/Seo"
import ScrollAnimation from "react-animate-on-scroll"

const Projects = () => {
  const projects = useProjectsQuery()

  return (
    <Layout className="pt-20">
      <div className="flex justify-center my-10">
        <h1 className="text-4xl mb-2 font-bold text-secondary dark:text-white border-b-4 border-primary">
          Projects
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 ">
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
