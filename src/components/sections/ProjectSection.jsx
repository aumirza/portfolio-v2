import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectCard } from "../ProjectCard"

export const ProjectSection = () => {
  //   const contentfulProjects = useStaticQuery(graphql`
  //     query {
  //       allContentfulProjects {
  //         edges {
  //           node {
  //             id
  //             title
  //             description {
  //               raw
  //             }
  //             cover {
  //               gatsbyImageData
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);

  //   const projects = contentfulProjects.allContentfulProjects.edges.slice(0, 3);

  const projects = []

  return (
    <div className="flex flex-col items-center mt-20">
      <div>
        <h1 className="text-4xl font-bold pb-2 border-b-2 border-primary mb-10">
          Some Featured Projects
        </h1>
      </div>
      <div className="w-11/12">
        {projects.map((edge, i) => (
          <ProjectCard key={edge.node.id} rtl={i % 2} project={edge.node} />
        ))}
      </div>
      <div className="mt-10">
        <button className="border border-primary text-primary py-0.5 px-3 rounded-md">
          <span className="text-base">View All</span>
        </button>
      </div>
    </div>
  )
}
