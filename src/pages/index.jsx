import React from "react"
import { Layout } from "../components/Layout"
import { HeroSection } from "../components/sections/HeroSection"
import { HireMe } from "../components/sections/HireMe"
import { ProjectSection } from "../components/sections/ProjectSection"
import { TestimonialSection } from "../components/sections/TestimonialSection"
import { Seo } from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
      <HireMe />
      <TestimonialSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
