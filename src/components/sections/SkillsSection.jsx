import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FullSection } from "../layouts/FullSection"
import ScrollAnimation from "react-animate-on-scroll"
import { SkillCircle } from "../SkillCircle"

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
    <FullSection centerY={false}>
      <div className="mb-14">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h1 className="text-3xl font-bold">My Skills</h1>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8">
        {skills.map(({ node }) => (
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={500}>
            <SkillCircle key={node.id} fields={node.fields} />
          </ScrollAnimation>
        ))}
      </div>
    </FullSection>
  )
}
