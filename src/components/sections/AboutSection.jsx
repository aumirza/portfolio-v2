import React from "react"
import { FullSection } from "../FullSection"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

export const AboutSection = () => {
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

  const { text, image } = data.allMarkdownRemark.edges[0].node.fields

  return (
    <FullSection>
      <div className="mb-5 md:mb-10">
        <h1 className="text-2xl md:text-3xl mb-2 border-b-2 border-primary font-bold">
          About me
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center p-2">
        <div className="max-w-[50ch] mt-10 md:mt-0 px-3">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <div className="flex-grow pl-10">
          <div className="relative h-[14rem] w-[14rem] md:h-80 md:w-80">
            <div className="absolute h-full w-full top-5  right-5 border-4 border-primary before:h-full before:w-full"></div>
            <img className="absolute" src={image} alt="about" />
          </div>
        </div>
      </div>
    </FullSection>
  )
}
