import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Social = () => {
  const data = useStaticQuery(graphql`
    query getSocialDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "socialInfo" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              github
              twitter
              linkedin
            }
          }
        }
      }
    }
  `)

  const { twitter, github, linkedin } =
    data.allMarkdownRemark.edges[0].node.fields
  return (
    <div className="flex my-2">
      <a href={github}>
        <FaGithub className="text-xl" />
      </a>
      <a href={linkedin}>
        <FaLinkedin className="text-xl mx-3" />
      </a>
      <a href={twitter}>
        <FaTwitter className="text-xl" />
      </a>
    </div>
  )
}
