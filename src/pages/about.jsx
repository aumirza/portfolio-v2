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
      <div className="w-11/12 mx-auto max-w-7xl">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <QualificationSection />
      </div>
    </Layout>
  )
}

export default about
export const Head = () => <Seo title="About me" />
