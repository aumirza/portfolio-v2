import React from "react"
import { Layout } from "../components/Layout"
import { AboutSection } from "../components/sections/AboutSection"
import { QualificationSection } from "../components/sections/QualificationSection"
import { Seo } from "../components/Seo"
import { ExperienceSection } from "../components/sections/ExperienceSection"

const about = () => {
  return (
    <Layout>
      <div className="flex flex-col w-11/12 gap-10 mx-auto md:gap-5 max-w-7xl">
        <AboutSection />
        <ExperienceSection />
        <QualificationSection />
      </div>
    </Layout>
  )
}

export default about
export const Head = () => <Seo title="About me" />
