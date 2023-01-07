import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { GoLocation } from "react-icons/go"

export const ContactDetails = ({ className }) => {
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
    <div className={"h-full flex flex-col items-center " + className}>
      <div className="">
        <div className="flex my-3">
          <AiOutlineMail className="text-2xl mr-2" />
          <p className="text-lg">
            <a href={"mailto:" + email} className="">
              {email}
            </a>
          </p>
        </div>

        <div className="flex my-3">
          <BsFillTelephoneFill className=" text-2xl mr-2" />
          <p className="text-lg">
            <a href={"tel:" + phone} className="">
              {phone}
            </a>
          </p>
        </div>

        <div className="flex my-3">
          <GoLocation className="text-2xl mr-2" />
          <p className="text-lg">
            <a
              href={location}
              className=""
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
