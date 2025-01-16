import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FullSection } from "../layouts/FullSection"
import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { TestimonialCard } from "../TestimonialCard"
import ScrollAnimation from "react-animate-on-scroll"

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
    <section className="flex flex-col items-center justify-center mb-20">
      <ScrollAnimation animateIn="fadeInTop" animateOnce={true} duration={1}>
        <h1 className="pb-2 mb-5 text-2xl font-bold border-b-2 md:text-4xl border-primary md:mb-10">
          Testimonials
        </h1>
      </ScrollAnimation>
      <div className="w-10/12">
        <Slider
          dots={true}
          infinite={true}
          speed={9000}
          autoplaySpeed={0}
          centerPadding="0px"
          centerMode={true}
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 480,
              settings: {
                centerPadding: "20px",
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {testimonials.map(edge => (
            <TestimonialCard
              key={edge.node.id}
              testimonial={edge.node.fields}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}
