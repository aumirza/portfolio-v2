import React from "react"
import { Layout } from "../components/Layout"
import { AboutSection } from "../components/sections/AboutSection"
import { QualificationSection } from "../components/sections/QualificationSection"
import { SkillsSection } from "../components/sections/SkillsSection"
import { Seo } from "../components/Seo"
import { ExperienceSection } from "../components/sections/ExperienceSection"

const about = () => {
  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <QualificationSection />
    </Layout>
  )
}

export default about
export const Head = () => <Seo title="About me" />
