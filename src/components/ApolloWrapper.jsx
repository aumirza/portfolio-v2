import React from "react"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../lib/appoloClient"

export const ApolloWrapper = ({ children }) => {
  if (typeof window === "undefined") {
    return null // Prevent rendering on the server
  }
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
