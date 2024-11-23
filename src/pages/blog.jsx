import React from "react"
import { Seo } from "../components/Seo"
import { Layout } from "../components/Layout"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../lib/appoloClient"
import { BlogsGrid } from "../components/BlogsGrid"
import { FullSection } from "../components/layouts/FullSection"

const blog = () => {
  return (
    <Layout className="py-10 pt-20">
      <ApolloProvider client={apolloClient}>
        <FullSection>
          <div className="flex justify-center my-10">
            <h2 className="mb-2 text-4xl font-bold border-b-4 text-secondary dark:text-white border-primary">
              Blogs
            </h2>
          </div>
          <BlogsGrid />
          <div className="my-5">
            <a
              className="px-3 py-2 transition-all ease-in-out border-2 text-primary border-primary hover:bg-primary hover:text-secondary"
              href="blog.ahmadullah.in"
            >
              View All on Hashnode
            </a>
          </div>
        </FullSection>
      </ApolloProvider>
    </Layout>
  )
}

export default blog
export const Head = () => <Seo title="Blog" />
