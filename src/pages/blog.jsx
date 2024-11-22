import React from "react"
import { Seo } from "../components/Seo"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"

const blog = () => {
  const data = graphql`
    query getBlogs {
      publication(host: "blog.ahmadullah.in") {
        id
        posts(first: 10) {
          edges {
            node {
              id
              slug
              coverImage {
                attribution
                photographer
              }
              tags {
                name
              }
            }
          }
        }
      }
    }
  `
  console.log(data)
  return <Layout>Blog</Layout>
}

export default blog
export const Head = () => <Seo title="Blog" />
