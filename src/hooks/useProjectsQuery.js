import { graphql, useStaticQuery } from "gatsby"

export const useProjectsQuery = () => {
  const { allProjects, allTechStacks, allCategories } = useStaticQuery(
    graphql`
      query {
        allCategories: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(categories)/" } }
        ) {
          edges {
            category: node {
              id
              fields: frontmatter {
                name
                image
              }
            }
          }
        }
        allTechStacks: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(skills)/" } }
        ) {
          techStack: edges {
            tech: node {
              id
              fields: frontmatter {
                name
                icon
              }
            }
          }
        }
        allProjects: allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
          projects: edges {
            project: node {
              id
              fields: frontmatter {
                title
                date
                cover
                description
                source
                icon
                category
                url
                tech_stack
              }
            }
          }
        }
      }
    `
  )

  let projects = allProjects.projects

  projects = projects.map(edge => {
    edge.project.fields.techStack = edge.project.fields.tech_stack?.map(
      techName => {
        const techData = allTechStacks.techStack.find(
          node => node.tech.fields.name === techName
        )
        return {
          name: techData?.tech.fields.name,
          icon: techData?.tech.fields.icon,
        }
      }
    )
    return edge
  })

  projects = projects.map(edge => {
    edge.project.fields.category = allCategories.edges.find(
      node => node.category.fields.name === edge.project.fields.category
    )
    return edge
  })

  // Transform into array of category objects
  const categorizedProjects = projects.reduce((acc, project) => {
    const category = project.project.fields.category
      ? project.project.fields.category.category.fields.name
      : "Uncategorized"

    const categoryIcon = project.project.fields.category
      ? project.project.fields.category.category.fields.image
      : null

    const existingCategory = acc.find(cat => cat.name === category)

    if (existingCategory) {
      existingCategory.projects.push(project)
      existingCategory.projects.sort((a, b) => {
        return new Date(b.project.fields.date) - new Date(a.project.fields.date)
      })
    } else {
      acc.push({
        name: category,
        icon: categoryIcon,
        projects: [project],
      })
    }

    return acc
  }, [])

  // Sort categories to push Uncategorized to the end
  categorizedProjects.sort((a, b) => {
    if (a.name === "Uncategorized") return 1
    if (b.name === "Uncategorized") return -1
    return 0
  })

  return categorizedProjects
}
