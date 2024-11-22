import { graphql, useStaticQuery } from "gatsby"

export const useQualificationQuery = () => {
  const data = useStaticQuery(graphql`
    query getQualificationQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(qualification)/" } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              title
              date
              institution
              duration
              description
              type
            }
          }
        }
      }
    }
  `)

  const qualifications = data.allMarkdownRemark.edges

  let educationalQualifications = qualifications.filter(
    ({ node }) => node.fields.type === "educational"
  )
  educationalQualifications = educationalQualifications.map(item => ({
    ...item.node,
  }))
  educationalQualifications = educationalQualifications.sort(
    (a, b) => new Date(b.fields.date) - new Date(a.fields.date)
  )
  let professionalQualifications = qualifications.filter(
    ({ node }) => node.fields.type === "professional"
  )
  professionalQualifications = professionalQualifications.map(item => ({
    ...item.node,
  }))
  professionalQualifications = professionalQualifications.sort(
    (a, b) => new Date(b.fields.date) - new Date(a.fields.date)
  )

  return {
    educationalQualifications,
    professionalQualifications,
  }
}
