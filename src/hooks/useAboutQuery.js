import { graphql, useStaticQuery } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query getAboutSectionDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "aboutSection" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              text
              image
            }
          }
        }
      }
    }
  `)
  const fields = data.allMarkdownRemark.edges[0].node.fields

  return {
    text: fields.text,
    image: fields.image,
  }
}
