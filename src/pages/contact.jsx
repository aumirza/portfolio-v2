import React from "react"
import { ContactDetails } from "../components/ContactDetails"
import { ContactForm } from "../components/ContactForm"
import { FullSection } from "../components/FullSection"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

const contact = () => {
  return (
    <Layout>
      <FullSection>
        <div className="flex justify-center my-10">
          <h1 className="text-4xl">Contact</h1>
        </div>

        <div className="flex rounded-lg max-w-4xl ">
          <ContactForm />
          <ContactDetails className="ml-10 px-5" />
        </div>
      </FullSection>
    </Layout>
  )
}

export default contact
export const Head = () => <Seo title="Contact" />
