import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://spacex-production.up.railway.app/',
  credentials: 'same-origin'
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: 'all'
    }
  }
})
