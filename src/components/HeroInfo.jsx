import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import ScrollLink from "./ScrollLink"

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
        <h1 className="text-3xl font-bold md:text-6xl">{title}</h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={1000}
        duration={0.8}
      >
        <h2 className="my-1 mb-1 text-xl md:text-3xl text-primary">
          {subtitle[0]}
        </h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={1500}
        duration={1}
      >
        <p className="max-w-[60ch] mt-2 leading-5">{description}</p>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        delay={2300}
        duration={1}
      >
        <div className="flex items-center mt-5">
          <ScrollLink
            className="h-full px-4 py-2 text-white transition-all ease-in-out border-2 rounded-md bg-primary border-primary hover:bg-transparent dark:hover:text-primary dark:text-secondary"
            to="#hireme"
          >
            Hire me
          </ScrollLink>
          <button className="h-full px-4 py-2 ml-2 transition-all ease-in-out border-2 rounded-md text-primary hover:text-secondary border-primary hover:bg-primary ">
            Download CV
          </button>
        </div>
      </ScrollAnimation>
    </div>
  )
}
