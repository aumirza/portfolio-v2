import React from "react"

export const ProjectsFilter = ({ projectsData, setProjects }) => {
  const filterProjects = stack => {
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
      {uniqueStack.map(stack => (
        <button
          key={stack.name}
          className="flex gap-0.5 bg-card rounded-full p-2 py-1 cursor-pointer"
          onClick={e => filterProjects(stack)}
        >
          <img
            className="size-6 filter brightness-0"
            src={stack.icon}
            alt={stack.name}
          />
          <p className="text-sm text-gray-900">{stack.name}</p>
        </button>
      ))}
    </div>
  )
}
