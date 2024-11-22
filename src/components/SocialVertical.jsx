import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    <div className="px-2 space-y-4 text-3xl text-white md:px-5">
      <div className="hover:text-primary">
        <a href={github}>
          <FaGithub />
        </a>
      </div>
      <div className="hover:text-primary">
        <a href={linkedin}>
          <FaLinkedin />
        </a>
      </div>

      <div className="hover:text-primary">
        <a href={twitter}>
          <FaTwitter />
        </a>
      </div>
    </div>
  )
}
