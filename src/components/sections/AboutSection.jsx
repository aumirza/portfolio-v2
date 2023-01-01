import React from "react";
import { FullSection } from "../FullSection";
import aboutImage from "../../images/about.png";

export const AboutSection = () => {
  return (
    <FullSection>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">About me</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <p className="text-xl max-w-[50ch]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ducimus amet, harum aliquid in quas corporis quisquam
            magnam voluptatem. Accusantium? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quod.
          </p>
          <p className="text-xl max-w-[50ch] mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ducimus amet, harum aliquid in quas corporis quisquam
            magnam voluptatem. Accusantium? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
        <div className="flex-grow pl-10">
          <div className="relative h-80 w-80">
            <div className="absolute h-full w-full top-5  right-5 border-4 border-primary before:h-full before:w-full"></div>
            <img className="absolute" src={aboutImage} alt="about" />
          </div>
        </div>
      </div>
    </FullSection>
  );
};
