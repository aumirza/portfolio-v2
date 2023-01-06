import React from "react"
import { Layout } from "../components/Layout"
import { AboutSection } from "../components/sections/AboutSection"
import { QualificationSection } from "../components/sections/QualificationSection"
import { SkillsSection } from "../components/sections/SkillsSection"

const about = () => {
  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <QualificationSection />
    </Layout>
  )
}

export default about
export const Head = () => <title>Ahmadullah mirza | About</title>
