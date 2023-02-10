import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

export const HeroInfo = () => {
  const data = useStaticQuery(graphql`
    query getHeroDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "heroSection" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              title
              subtitle
              description
              avatar
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, description } =
    data.allMarkdownRemark.edges[0].node.fields

  return (
    <div className="">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}>
        <h5 className="text-lg">Hi, Myself</h5>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={500}
        duration={1}
      >
        <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={1000}
        duration={0.8}
      >
        <h2 className="mt-2 mb-1 text-xl md:text-3xl text-primary">
          {subtitle[0]}
        </h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={1500}
        duration={1}
      >
        <p className="max-w-[50ch]">{description}</p>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={2300}
        duration={1}
      >
        <div className="flex items-center mt-5">
          <button className="bg-primary text-white dark:text-secondary px-4 py-2 rounded-md">
            Hire Me
          </button>
          <button className="ml-2  text-primary px-4 py-2 border-2 border-primary rounded-md">
            Download CV
          </button>
        </div>
      </ScrollAnimation>
    </div>
  )
}
