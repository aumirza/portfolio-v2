import React, { useEffect, useState } from "react"
import { ProjectGridCard } from "../components/ProjectGridCard"
import ScrollAnimation from "react-animate-on-scroll"
import { ProjectsFilter } from "../components/ProjectsFilter"

export function ProjectsGrid({ projectsData }) {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    if (!projectsData) return
    setProjects(projectsData)
  }, [])
  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-lg mx-auto">
        <ProjectsFilter projectsData={projectsData} setProjects={setProjects} />
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
    </div>
  )
}
