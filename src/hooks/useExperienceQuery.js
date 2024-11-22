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

  const experiences = data.allMarkdownRemark.edges.map(
    ({ node: { id, frontmatter } }) => ({
      id,
      ...frontmatter,
    })
  )

  return { experiences }
}
