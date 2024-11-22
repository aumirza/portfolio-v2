import { graphql, useStaticQuery } from "gatsby"

export const useHiremeQuery = () => {
  const data = useStaticQuery(graphql`
    query getHireSectionDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "hireSection" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              title
              description
              image
              button {
                text
                link
              }
            }
          }
        }
      }
    }
  `)

  const { title, description, image, button } =
    data.allMarkdownRemark.edges[0].node.fields

  return {
    title,
    description,
    image,
    button,
  }
}
