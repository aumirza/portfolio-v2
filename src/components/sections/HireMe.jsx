import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const HireMe = () => {
  const data = useStaticQuery(graphql`
    query getHireSectionDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "hireSection" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              title
              description
              image
              button {
                text
                link
              }
            }
          }
        }
      }
    }
  `)

  const { title, description, image, button } =
    data.allMarkdownRemark.edges[0].node.fields
  return (
    <div className="h-96 my-10 flex justify-center">
      <div className="h-full w-10/12 flex justify-around bg-secondary dark:bg-primary dark:text-secondary text-white rounded-2xl shadow-lg ">
        <div className="flex flex-col p-5 justify-center">
          <div className="flex items-end mb-1">
            <h1 className="text-4xl font-bold mx-1">{title}</h1>
          </div>
          <p className="max-w-[40ch]">{description}</p>
          <div className="my-5">
            <a
              href={button.link}
              className="bg-white text-secondary text-lg p-2 px-5 rounded-md"
            >
              <span>{button.text}</span>
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-60 w-60" src={image} alt="Hire Me" />
        </div>
      </div>
    </div>
  )
}
