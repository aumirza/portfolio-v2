import React from "react"
import { Layout } from "../components/Layout"
import { ProjectGridCard } from "../components/ProjectGridCard"
import { useProjectsQuery } from "../hooks/useProjectsQuery"
import { Seo } from "../components/Seo"

const Projects = () => {
  const projects = useProjectsQuery()

  return (
    <Layout className="pt-20">
      <div className="flex justify-center my-10">
        <h1 className="text-4xl mb-2 font-bold text-secondary dark:text-white border-b-4 border-primary">
          Projects
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-2 mb-10">
        {projects.map(edge => (
          <ProjectGridCard
            key={edge.project.id}
            project={edge.project.fields}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => <Seo title="Projects" />
