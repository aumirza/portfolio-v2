import { gql, useQuery } from "@apollo/client"
import React from "react"

import noImageAvailable from "../images/no-image-available.jpg"

const GET_BLOGS_QUERY = gql`
  query getBlogs {
    publication(host: "blog.ahmadullah.in") {
      id
      posts(first: 10) {
        edges {
          node {
            id
            slug
            title
            url
            coverImage {
              url
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

export const BlogsGrid = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_QUERY)

  if (loading)
    return (
      <div className="grid w-11/12 grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {new Array(6).fill(0).map((_, i) => {
          return (
            <div
              className="flex flex-col p-2 text-black rounded shadow bg-card"
              key={i}
            >
              <div className="flex items-center justify-center p-3">
                <div className="w-full bg-gray-400 rounded h-52 animate-pulse"></div>
              </div>
              <div className="flex flex-col justify-between flex-grow gap-2 mt-2">
                <div className="text-xl font-medium text-center bg-gray-400 rounded h-7 animate-pulse"></div>
                <div className="bottom-0 flex gap-2 ">
                  <div className="px-1 py-0.5 text-sm rounded bg-gray-400 h-5 w-14 animate-pulse"></div>
                  <div className="px-1 py-0.5 text-sm rounded bg-gray-400 h-5 w-14 animate-pulse"></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="grid w-11/12 grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {data.publication.posts.edges.map(post => {
        return (
          <a href={post.node.url} key={post.node.id} target="_blank">
            <div
              className="flex flex-col p-2 text-black rounded shadow bg-card"
              key={post.node.id}
            >
              <div className="flex items-center justify-center p-3">
                <img
                  className="w-full rounded h-52"
                  src={
                    post.node.coverImage
                      ? post.node.coverImage.url
                      : noImageAvailable
                  }
                  alt={post.node.title}
                />
              </div>
              <div className="flex flex-col justify-between flex-grow gap-2 mt-2">
                <h3 className="text-xl font-medium text-center">
                  {post.node.title}
                </h3>
                <div className="bottom-0 flex gap-2 ">
                  {post.node.tags.map(tag => {
                    return (
                      <div
                        className="px-1 py-0.5 text-sm rounded bg-primary"
                        key={tag.name}
                      >
                        #{tag.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
