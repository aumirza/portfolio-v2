import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { GoLocation } from "react-icons/go"

export const ContactDetails = () => {
  const data = useStaticQuery(graphql`
    query getContactDetails {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "contactInfo" } } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              email
              phone
              location
              address
            }
          }
        }
      }
    }
  `)

  const { email, phone, location, address } =
    data.allMarkdownRemark.edges[0].node.fields

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-2xl font-bold">Contact Info</h1>

      <div className="">
        <div className="flex my-3">
          <AiOutlineMail className="text-primary text-2xl mr-2" />
          <p className="text-lg">
            <a href="mailto:" className="text-primary">
              {email}
            </a>
          </p>
        </div>

        <div className="flex my-3">
          <BsFillTelephoneFill className="text-primary text-2xl mr-2" />
          <p className="text-lg">
            <a href="tel:" className="text-primary">
              {phone}
            </a>
          </p>
        </div>

        <div className="flex my-3">
          <GoLocation className="text-primary text-2xl mr-2" />
          <p className="text-lg">
            <a
              href={location}
              className="text-primary"
              dangerouslySetInnerHTML={{
                __html: address.replace(/\n/g, "<br />"),
              }}
            ></a>
          </p>
        </div>
      </div>
    </div>
  )
}
