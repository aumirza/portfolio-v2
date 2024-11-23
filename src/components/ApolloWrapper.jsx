import React from "react"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../lib/appoloClient"

export const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
