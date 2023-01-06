import React from "react"
import { ContactDetails } from "../components/ContactDetails"
import { ContactForm } from "../components/ContactForm"
import { FullSection } from "../components/FullSection"
import { Layout } from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <FullSection>
        <div className="flex justify-center my-10">
          <h1 className="text-4xl">Contact</h1>
        </div>

        <div className="flex bg-gray-100 rounded-lg w-full max-w-3xl shadow-xl p-5">
          <ContactForm />
          <div className="ml-10 px-5">
            <ContactDetails />
          </div>
        </div>
      </FullSection>
    </Layout>
  )
}

export default contact
export const Head = () => <title>Ahmadullah mirza | Contact</title>
