import React from "react"
import { FullSection } from "../FullSection"
import { ScrollDownButton } from "../ScrollDownButton"
import { SocialVertical } from "../SocialVertical"
import ProfileImage from "../../images/profile-pic.png"
import BlobImage from "../../images/blob.png"

export const HeroSection = () => {
  return (
    <FullSection>
      <div className="h-[90%] pt-14 w-11/12 flex items-center">
        <div className="flex-grow">
          <SocialVertical />
        </div>
        <div className="flex-grow flex items-center justify-around">
          <div className="">
            <h5 className="text-lg">Hi, Myself</h5>
            <h1 className="text-6xl font-bold">Ahmadullah Mirza</h1>
            <h2 className="mt-2 mb-1 text-3xl text-primary">web developer</h2>
            <p className="max-w-[50ch]">
              I started my programming career with a blog. From editing my xml
              templates to a full stack softwares. I like to code and program in
              free time as hobby.
            </p>
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
              <img className="absolute w-60 h-60" src={ProfileImage} alt="" />
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
