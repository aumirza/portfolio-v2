import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import BlobImage from "../images/blob.png"

export const AvatarImage = () => {
  const data = useStaticQuery(graphql`
    query getHeroAvatarImage {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "heroSection" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              avatar
            }
          }
        }
      }
    }
  `)

  const { avatar } = data.allMarkdownRemark.edges[0].node.fields
  return (
    <ScrollAnimation animateIn="slideInRight" animateOnce={true} duration={1}>
      <div className="relative flex items-center justify-center">
        <img className="h-60 w-60 md:h-80 md:w-80" src={BlobImage} alt="" />
        <img
          className="absolute z-50 w-48 h-48 md:w-60 md:h-60"
          src={avatar}
          alt=""
        />
      </div>
    </ScrollAnimation>
  )
}
