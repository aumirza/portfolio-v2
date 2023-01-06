import React from "react"
import { FullSection } from "../FullSection"
import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TestimonialCard } from "../TestimonialCard"
import { graphql, useStaticQuery } from "gatsby"

export const TestimonialSection = () => {
  const data = useStaticQuery(graphql`
    query getTestimonialQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(testimonials)/" } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              name
              title
              company
              quote
            }
          }
        }
      }
    }
  `)

  const testimonials = data.allMarkdownRemark.edges

  return (
    <FullSection>
      <div className="mb-14">
        <h1 className="text-3xl">Testimonial Section</h1>
      </div>
      <div className="w-10/12">
        <Slider
          dots={true}
          infinite={true}
          speed={9000}
          autoplaySpeed={0}
          centerMode={true}
          centerPadding="60px"
          autoplay={true}
          slidesToShow={1.9}
          // slidesToScroll={3}
        >
          {testimonials.map(edge => (
            <TestimonialCard key={edge.id} testimonial={edge.node.fields} />
          ))}
        </Slider>
      </div>
    </FullSection>
  )
}
