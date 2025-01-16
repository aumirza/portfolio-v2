import React, { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { ProjectGridCard } from "../components/ProjectGridCard"
import { useProjectsQuery } from "../hooks/useProjectsQuery"
import { Seo } from "../components/Seo"
import ScrollAnimation from "react-animate-on-scroll"
import { ProjectsFilter } from "../components/ProjectsFilter"
import { FullSection } from "../components/layouts/FullSection"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const projectsData = useProjectsQuery()

  useEffect(() => {
    if (!projectsData) return
    setProjects(projectsData)
  }, [])

  return (
    <Layout className="pt-20">
      <FullSection>
        <div className="flex justify-center mb-8">
          <h1 className="mb-2 text-4xl font-bold border-b-4 text-secondary dark:text-white border-primary">
            Projects
          </h1>
        </div>

        <div className="max-w-lg mx-auto my-10">
          <ProjectsFilter
            projectsData={projectsData}
            setProjects={setProjects}
          />
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
      </FullSection>
    </Layout>
  )
}

export default Projects

export const Head = () => <Seo title="Projects" />
