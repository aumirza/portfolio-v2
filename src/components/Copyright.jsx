import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Copyright = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <div className="">
      <p className="">
        © {new Date().getFullYear()} {title}. All rights reserved.
      </p>
    </div>
  )
}
