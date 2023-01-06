import React from "react"
import { FullSection } from "../FullSection"
import { ScrollDownButton } from "../ScrollDownButton"
import { SocialVertical } from "../SocialVertical"
import ProfileImage from "../../images/profile-pic.png"
import BlobImage from "../../images/blob.png"
import { graphql, useStaticQuery } from "gatsby"

export const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query getHomePageDetails {
      allConfigYaml(filter: { key: { eq: "homePage" } }) {
        edges {
          fields: node {
            id
            title
            subtitle
            description
            avatar
          }
        }
      }
    }
  `)

  const { title, subtitle, description, avatar } =
    data.allConfigYaml.edges[0].fields

  return (
    <FullSection>
      <div className="h-[90%] pt-14 w-11/12 flex items-center">
        <div className="flex-grow">
          <SocialVertical />
        </div>
        <div className="flex-grow flex items-center justify-around">
          <div className="">
            <h5 className="text-lg">Hi, Myself</h5>
            <h1 className="text-6xl font-bold">{title}</h1>
            <h2 className="mt-2 mb-1 text-3xl text-primary">{subtitle[0]}</h2>
            <p className="max-w-[50ch]">{description}</p>
            <div className="flex items-center mt-5">
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Hire Me
              </button>
              <button className="ml-2  text-primary px-4 py-2 border-2 border-primary rounded-md">
                Download CV
              </button>
            </div>
          </div>
          <div className="">
            <div className="relative flex justify-center items-center">
              <img className="h-80 w-80" src={BlobImage} alt="" />
              <img className="absolute w-60 h-60" src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10%] w-11/12 flex items-center justify-center">
        <ScrollDownButton />
      </div>
    </FullSection>
  )
}
