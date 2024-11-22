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
    <div className="md:px-5 px-2 text-3xl text-white">
      <a href={github}>
        <FaGithub />
      </a>
      <a href={linkedin}>
        <FaLinkedin />
      </a>
      <a href={twitter}>
        <FaTwitter />
      </a>
    </div>
  )
}
