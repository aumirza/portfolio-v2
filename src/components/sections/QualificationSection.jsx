import React from "react"
import { HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi"
import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs"
import { Timeline } from "../Timeline"
import { useQualificationQuery } from "../../hooks/useQualificationQuery"

export const QualificationSection = () => {
  const [showEducational, setShowEducational] = React.useState(true)

  const { educationalQualifications, professionalQualifications } =
    useQualificationQuery()

  const toggleHandler = () => {
    setShowEducational(!showEducational)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <h2 className="mb-2 text-2xl font-bold border-b-2 md:text-3xl border-primary">
          My Qualification
        </h2>
      </div>

      <div className="flex justify-between w-full max-w-3xl my-5 mb-10 cursor-pointer">
        <button
          onClick={toggleHandler}
          className={"flex items-center justify-center w-1/2 "}
        >
          {showEducational ? (
            <HiAcademicCap className="mr-2 text-3xl text-primary" />
          ) : (
            <HiOutlineAcademicCap className="mr-2 text-3xl " />
          )}
          <h3 className="text-lg font-bold">Educational</h3>
        </button>

        <button
          onClick={toggleHandler}
          className="flex items-center justify-center w-1/2 cursor-pointer"
        >
          {!showEducational ? (
            <BsBriefcaseFill className="mr-2 text-3xl text-primary" />
          ) : (
            <BsBriefcase className="mr-2 text-3xl" />
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
