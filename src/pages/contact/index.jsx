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
        <div className="mt-10 flex justify-center md:my-10">
          <h1 className="text-4xl mb-5">Contact</h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row rounded-lg max-w-4xl ">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <ContactForm />
          </ScrollAnimation>
          <ContactDetails className="md:ml-10 px-5" />
        </div>
      </FullSection>
    </Layout>
  )
}

export default contact
export const Head = () => <Seo title="Contact" />
