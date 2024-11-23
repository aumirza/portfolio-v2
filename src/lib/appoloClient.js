import { ApolloClient, InMemoryCache } from "@apollo/client"
import { BLOG_GRAPHQL_URL } from "../constants"

const apolloClient = new ApolloClient({
  uri: BLOG_GRAPHQL_URL,

  cache: new InMemoryCache(),
})

export default apolloClient
