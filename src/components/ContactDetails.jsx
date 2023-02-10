import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { ContactDetailCard } from "./ContactDetailCard"

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
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <a href={"mailto:" + email} className="">
            <ContactDetailCard
              Icon={AiOutlineMail}
              title="Email"
              text={email}
            />
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <a href={"tel:" + phone} className="">
            <ContactDetailCard
              Icon={BsWhatsapp}
              title="Whatsapp"
              text={phone}
            />
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <a href={"tel:" + phone} className="">
            <ContactDetailCard
              Icon={BsFillTelephoneFill}
              title="Phone"
              text={phone}
            />
          </a>
        </ScrollAnimation>

        {/* <div className="flex justify-center items-center  rounded-md flex-col my-3 py-5 px-7">
          <GoLocation className="text-3xl" />
          <span className="text-lg">Location</span>
          <p>
            <a
              href={location}
              className=""
              // dangerouslySetInnerHTML={{
              //   __html: address.replace(/\n/g, "<br />"),
              // }}
            >
              {address}
            </a>
          </p>
        </div> */}
      </div>
    </div>
  )
}
