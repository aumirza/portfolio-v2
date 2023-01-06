import { graphql, useStaticQuery } from "gatsby"

export const useProjectsQuery = () => {
    const data = useStaticQuery(graphql`
    query {
      allTechStacks: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(tech_stack)/" } }
      ) {
        techStack: edges {
          tech: node {
            id
            fields: frontmatter {
              name
              icon
            }
          }
        }
      }
      allProjects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        projects: edges {
          project: node {
            fields: frontmatter {
              title
              date
              cover
              description
              source
              url
              tech_stack
            }
          }
        }
      }
    }
  `)
    const techStack = data.allTechStacks.techStack

    let projects = data.allProjects.projects

    projects = projects.map(edge => {
        edge.project.fields.tech_stack = edge.project.fields.tech_stack?.map(
            tech => {
                const techData = techStack.find(
                    techStack => techStack.tech.fields.name === tech
                )
                return {
                    name: techData?.tech.fields.name,
                    icon: techData?.tech.fields.icon,
                }
            }
        )
        return edge
    })

    return projects
}