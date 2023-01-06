import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const SocialVertical = () => {
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
    <div className="px-5">
      <a href={github}>
        <FaGithub className="text-3xl text-primary my-3" />
      </a>
      <a href={linkedin}>
        <FaLinkedin className="text-3xl text-primary my-3" />
      </a>
      <a href={twitter}>
        <FaTwitter className="text-3xl text-primary my-3" />
      </a>
    </div>
  )
}
