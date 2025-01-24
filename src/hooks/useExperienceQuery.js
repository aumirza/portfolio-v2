import { graphql, useStaticQuery } from "gatsby"

export const useExperienceQuery = () => {
  const data = useStaticQuery(graphql`
    query getExperiencesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(experiences)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              position
              institution
              description
              started
              ended
            }
          }
        }
      }
    }
  `)

  let experiences = data.allMarkdownRemark.edges.map(
    ({ node: { id, frontmatter } }) => ({
      id,
      ...frontmatter,
    })
  )
  
  experiences = experiences.sort((a, b) => {
    const dateA = new Date(a.started)
    const dateB = new Date(b.started)
    return dateB - dateA
  })

  return { experiences }
}
