import React from "react"
import { Layout } from "../components/Layout"
import { AboutSection } from "../components/sections/AboutSection"
import { HeroSection } from "../components/sections/HeroSection"
import { HireMe } from "../components/sections/HireMe"
import { ProjectSection } from "../components/sections/ProjectSection"
import { TestimonialSection } from "../components/sections/TestimonialSection"
import { Seo } from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <HireMe />
      <TestimonialSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Page two" />
