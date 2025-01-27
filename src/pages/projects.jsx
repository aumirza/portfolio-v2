import React from "react"
import { Layout } from "../components/Layout"

import { useProjectsQuery } from "../hooks/useProjectsQuery"
import { Seo } from "../components/Seo"
import { FullSection } from "../components/layouts/FullSection"
import { ProjectsGrid } from "../components/ProjectsGrid"

const Projects = () => {
  const projectsDataCategorised = useProjectsQuery()

  return (
    <Layout className="pt-20">
      <FullSection>
        <div className="flex justify-center mb-8">
          <h1 className="mb-2 text-4xl font-bold border-b-4 text-secondary dark:text-white border-primary">
            Projects
          </h1>
        </div>

        {projectsDataCategorised ? (
          projectsDataCategorised.map(category => (
            <div className="flex flex-col gap-5" key={category.name}>
              {category.name.toLowerCase() !== "uncategorized" && (
                <div className="flex flex-col items-center justify-center gap-1">
                  {category.icon && (
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="h-6"
                    />
                  )}
                  <h2 className="text-2xl font-bold text-secondary dark:text-white">
                    {category.name}
                  </h2>
                </div>
              )}
              <ProjectsGrid projectsData={category.projects} />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-secondary dark:text-white">
              No projects found
            </h1>
          </div>
        )}
      </FullSection>
    </Layout>
  )
}

export default Projects

export const Head = () => <Seo title="Projects" />
