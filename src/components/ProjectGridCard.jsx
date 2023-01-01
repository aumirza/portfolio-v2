import React from "react";
import { FaGithub } from "react-icons/fa";

export const ProjectGridCard = ({ project }) => {
  const para = JSON.parse(project.description.raw).content[0].content[0].value;
  return (
    <div className="max-w-[20rem] p-2 border-primary border-2 bg-opacity-60 rounded-lg shadow-md hover:-translate-y-3 hover:shadow-xl flex flex-col items-center transition-all ease-in-out duration-500">
      <div className="group h-52 w-[98%] flex justify-center items-center hover:bg-transparent bg-primary overflow-hidden">
        <img
          className="h-full object-cover rounded-md mix-blend-multiply group-hover:grayscale-0 group-hover:brightness-100 grayscale brightness-90"
          src={project.cover.gatsbyImageData.images.fallback.src}
          alt={project.title}
        />
      </div>
      <div className="mt-3">
        <h1 className="text-2xl">{project.title}</h1>
      </div>
      <div className="p-2">
        <p className="h-24 text-sm">
          {para.substring(0, 150) +
            (para.length > 150 ? "  ...  " : "") +
            (para.length > 150
              ? para.substring(para.length - 15, para.length)
              : "")}
        </p>
      </div>
      <div className="mb-1 px-2 flex justify-between w-full">
        <div className="flex justify-center items-center">
          <FaGithub className="text-xl text-primary" />
        </div>
        <button className="border border-primary text-primary py-0.5 px-3 rounded-md">
          <span className="text-base">View</span>
        </button>
      </div>
    </div>
  );
};

//   {/* {JSON.parse(project.description.raw).content.map((node) =>
//     node.nodeType === "paragraph" ? (
//       <p>{node.content[0].value}</p>
//     ) : null
//   )} */}
