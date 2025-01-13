import { graphql, useStaticQuery } from "gatsby"

export const useFeaturedProjectsQuery = () => {
  const { allProjects } = useStaticQuery(
    graphql`
      query {
        allProjects: allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: {
            fileAbsolutePath: { regex: "/(projects)/" }
            frontmatter: { featured: { eq: true } }
          }
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

  return allProjects.projects
}
