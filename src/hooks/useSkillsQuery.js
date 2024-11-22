import { graphql, useStaticQuery } from "gatsby"

export const useSkillsQuery = () => {
  const data = useStaticQuery(graphql`
    query getSkillsQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(skills)/" } }) {
        edges {
          node {
            id
            fields: frontmatter {
              name
              icon
              type
              level
            }
          }
        }
      }
    }
  `)

  const skills = data.allMarkdownRemark.edges.map(
    ({ node: { id, fields } }) => ({
      id,
      ...fields,
    })
  )
  return { skills }
}
