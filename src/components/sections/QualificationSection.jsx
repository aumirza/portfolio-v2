import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Timeline } from "../Timeline"
import { HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi"
import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs"

export const QualificationSection = () => {
  const [showEducational, setShowEducational] = React.useState(true)
  const data = useStaticQuery(graphql`
    query getQualificationQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(qualification)/" } }
      ) {
        edges {
          node {
            id
            fields: frontmatter {
              title
              date
              institution
              duration
              description
              type
            }
          }
        }
      }
    }
  `)

  const qualifications = data.allMarkdownRemark.edges

  let educationalQualifications = qualifications.filter(
    ({ node }) => node.fields.type === "educational"
  )

  educationalQualifications = educationalQualifications.map(item => ({
    ...item.node,
  }))

  educationalQualifications = educationalQualifications.sort(
    (a, b) => new Date(b.fields.date) - new Date(a.fields.date)
  )

  let professionalQualifications = qualifications.filter(
    ({ node }) => node.fields.type === "professional"
  )

  professionalQualifications = professionalQualifications.map(item => ({
    ...item.node,
  }))

  professionalQualifications = professionalQualifications.sort(
    (a, b) => new Date(b.fields.date) - new Date(a.fields.date)
  )

  const toggleHandler = () => {
    setShowEducational(!showEducational)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <h1 className="text-2xl md:text-3xl mb-2 border-b-2 border-primary font-bold">
          My Qualification
        </h1>
      </div>

      <div className="my-5 mb-10  max-w-3xl w-full flex justify-between cursor-pointer">
        <button
          onClick={toggleHandler}
          className="w-1/2 flex justify-center items-center"
        >
          {showEducational ? (
            <HiAcademicCap className="text-3xl mr-2" />
          ) : (
            <HiOutlineAcademicCap className="text-3xl mr-2" />
          )}
          <h3 className="text-lg font-bold">Educational</h3>
        </button>

        <button
          onClick={toggleHandler}
          className="w-1/2 flex justify-center items-center cursor-pointer"
        >
          {!showEducational ? (
            <BsBriefcaseFill className="text-3xl mr-2" />
          ) : (
            <BsBriefcase className="text-3xl mr-2" />
          )}
          <h3 className="text-lg font-bold">Professional</h3>
        </button>
      </div>

      {showEducational ? (
        <Timeline timelines={educationalQualifications} />
      ) : (
        <Timeline timelines={professionalQualifications} />
      )}
    </div>
  )
}
