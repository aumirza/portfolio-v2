import React from "react"
import { Layout } from "../components/Layout"
import { FullSection } from "../components/layouts/FullSection"
import { Seo } from "../components/Seo"

const services = () => {
  return (
    <Layout>
      <FullSection>
        <h1>Services</h1>
      </FullSection>
    </Layout>
  )
}

export default services
export const Head = () => <Seo title="services" />
