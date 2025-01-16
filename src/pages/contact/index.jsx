import React from "react"
import { ContactDetails } from "../../components/ContactDetails"
import { ContactForm } from "../../components/ContactForm"
import { FullSection } from "../../components/layouts/FullSection"
import { Layout } from "../../components/Layout"
import { Seo } from "../../components/Seo"
import ScrollAnimation from "react-animate-on-scroll"

const contact = () => {
  return (
    <Layout className="pt-10 pb-5">
      <FullSection>
        <div className="flex justify-center mt-10 md:my-10">
          <h2 className="mb-2 text-4xl font-bold border-b-4 text-secondary dark:text-white border-primary">
            Contact
          </h2>
        </div>

        <div className="flex flex-col-reverse max-w-4xl rounded-lg md:flex-row ">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <ContactForm />
          </ScrollAnimation>
          <ContactDetails className="px-5 md:ml-10" />
        </div>
      </FullSection>
    </Layout>
  )
}

export default contact
export const Head = () => <Seo title="Contact" />
