import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FullSection } from "../FullSection"

export const SkillsSection = () => {
  const data = useStaticQuery(graphql`
    query getSkillsQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(skills)/" } }) {
        edges {
          node {
            id
            fields: frontmatter {
              name
              icon
              type
              level
            }
          }
        }
      }
    }
  `)

  const skills = data.allMarkdownRemark.edges
  return (
    <FullSection>
      <div className="mb-14">
        <h1 className="text-3xl font-bold">My Skills</h1>
      </div>

      <div className="grid grid-cols-8">
        {skills.map(({ node }) => (
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-200 rounded-full">
              <img
                className="h-14 w-14"
                src={node.fields.icon}
                alt={node.fields.name}
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg">{node.fields.name}</h3>
              {/* create a small progress bar */}
              <div className="w-16 h-1 bg-gray-200 rounded-full">
                <div
                  className="h-1 bg-primary rounded-full"
                  style={{ width: node.fields.level }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FullSection>
  )
}
