import React from "react"
import { Layout } from "../components/Layout"
import { HeroSection } from "../components/sections/HeroSection"
import { HireMe } from "../components/sections/HireMe"
import { ProjectSection } from "../components/sections/ProjectSection"
import { TestimonialSection } from "../components/sections/TestimonialSection"
import { Seo } from "../components/Seo"
import { SkillsSection } from "../components/sections/SkillsSection"

const IndexPage = () => {
  return (
    <Layout className="flex flex-col w-11/12 gap-5 mx-auto md:gap-10 max-w-7xl">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <HireMe />
      <TestimonialSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
