import React from "react"
import profileImage from "../../images/profile-pic.png"

export const HireMe = () => {
  return (
    <div className="h-96 my-10 flex justify-center">
      <div className="h-full w-10/12 flex justify-around bg-secondary dark:bg-primary dark:text-secondary text-white rounded-2xl shadow-lg ">
        <div className="flex flex-col p-5 justify-center">
          <div className="flex items-end mb-1">
            <h2 className="text-3xl font-semibold">Do you have a</h2>
            <h1 className="text-4xl font-bold mx-1">Project ?</h1>
          </div>
          <p className="max-w-[40ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
          </p>
          <div className="my-5">
            <a
              href=""
              className="bg-white text-secondary text-lg p-2 px-5 rounded-md"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-60 w-60" src={profileImage} alt="Hire Me" />
        </div>
      </div>
    </div>
  )
}
