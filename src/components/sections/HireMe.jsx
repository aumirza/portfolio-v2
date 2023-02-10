import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

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
    <div className="md:h-96  my-10 flex justify-center">
      <div className="h-full w-10/12 p-5 flex flex-col-reverse md:flex-row justify-around bg-secondary dark:bg-primary dark:text-secondary text-white rounded-2xl shadow-lg">
        <div className="flex flex-col justify-center">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="flex items-end mb-1">
              <h1 className="text-2xl md:text-3xl font-bold mx-1">{title}</h1>
            </div>
            <p className="max-w-[40ch]">{description}</p>
            <div className="mt-5 flex justify-center md:justify-start">
              <a
                href={button.link}
                className="dark:bg-secondary dark:text-white text-secondary bg-primary text-lg p-2 px-5 rounded-md"
              >
                <span>{button.text}</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <div className="flex items-center justify-center">
          <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
            <img
              className="h-48 w-48 md:h-60 md:w-60 p-2"
              src={image}
              alt="Hire Me"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
