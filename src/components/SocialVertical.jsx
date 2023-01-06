import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const SocialVertical = () => {
  const data = useStaticQuery(graphql`
    query getSocialDetails {
      allConfigYaml(filter: { key: { eq: "socialInfo" } }) {
        edges {
          fields: node {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { twitter, github, linkedin } = data.allConfigYaml.edges[0].fields
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
