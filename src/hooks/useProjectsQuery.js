import { graphql, useStaticQuery } from "gatsby"

export const useProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allTechStacks: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(skills)/" } }
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
            id
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
  const allTechStacks = data.allTechStacks.techStack
  let projects = data.allProjects.projects

  projects = projects.map(edge => {
    edge.project.fields.techStack = edge.project.fields.tech_stack?.map(
      techName => {
        const techData = allTechStacks.find(
          node => node.tech.fields.name === techName
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
