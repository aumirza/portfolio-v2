import React, { useState } from "react"

export const ProjectsFilter = ({ projectsData, setProjects }) => {
  // const [selectedFilters, setSelectedFilters] = React.useState([])

  const [activeFilter, setActiveFilter] = useState("")

  const clearFilter = () => {
    setActiveFilter("")
    setProjects(projectsData)
  }

  const filterProjects = stack => {
    // if (selectedFilters.includes(stack)) {
    //   setSelectedFilters(selectedFilters.filter(filter => filter !== stack))
    // } else {
    //   setSelectedFilters([...selectedFilters, stack])
    // }

    setActiveFilter(stack.name)
    const filteredProjects = projectsData.filter(project => {
      const projectStack = project.project.fields.techStack
      return projectStack && projectStack.some(item => item.name === stack.name)
    })
    setProjects(filteredProjects)
  }

  const allStacks = projectsData
    .map(edge => edge.project.fields.techStack)
    .filter(tech => tech !== undefined)
    .flat()

  const uniqueStack = Array.from(
    new Set(allStacks.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item))

  return (
    <div className="flex flex-wrap justify-center gap-2 ">
      {uniqueStack &&
        uniqueStack.length > 1 &&
        uniqueStack.map(stack => (
          <button
            key={stack.name}
            className={
              "flex justify-center items-center gap-0.5 rounded-full px-3 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 " +
              (activeFilter === stack.name ? "bg-primary" : "bg-card ")
            }
            onClick={e => filterProjects(stack)}
          >
            <img
              className="rounded size-5 filter brightness-0"
              src={stack.icon}
              alt={stack.name}
            />
            <p className="text-sm text-gray-900">{stack.name}</p>
          </button>
        ))}
      {activeFilter && (
        <button
          className="flex gap-0.5 rounded-full p-2 py-1 cursor-pointer bg-primary text-gray-900"
          onClick={e => clearFilter()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
      )}
    </div>
  )
}
