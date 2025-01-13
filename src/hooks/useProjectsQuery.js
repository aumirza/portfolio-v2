import { graphql, useStaticQuery } from "gatsby"

export const useProjectsQuery = () => {
  const { allProjects, allTechStacks } = useStaticQuery(
    graphql`
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
          sort: { frontmatter: { date: DESC } }
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
    `
  )

  let projects = allProjects.projects

  projects = projects.map(edge => {
    edge.project.fields.techStack = edge.project.fields.tech_stack?.map(
      techName => {
        const techData = allTechStacks.techStack.find(
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
