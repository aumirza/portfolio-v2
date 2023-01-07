import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Logo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query getLogoDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "siteMetadata" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              text_logo
            }
          }
        }
      }
    }
  `)

  const { text_logo } = data.allMarkdownRemark.edges[0].node.fields

  return (
    <div className="">
      <span
        className={"uppercase text-2xl text-primary p-2 underline " + className}
      >
        {text_logo}
      </span>
    </div>
  )
}
