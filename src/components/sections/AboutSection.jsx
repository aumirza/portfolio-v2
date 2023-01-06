import React from "react"
import { FullSection } from "../FullSection"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

export const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query getAboutSectionDetails {
      allMarkdownRemark(filter: { frontmatter: { key: { eq: "aboutPage" } } }) {
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

  const { text, image } = data.allMarkdownRemark.edges[0].node.fields

  return (
    <FullSection>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">About me</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[50ch]">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <div className="flex-grow pl-10">
          <div className="relative h-80 w-80">
            <div className="absolute h-full w-full top-5  right-5 border-4 border-primary before:h-full before:w-full"></div>
            <img className="absolute" src={image} alt="about" />
          </div>
        </div>
      </div>
    </FullSection>
  )
}
