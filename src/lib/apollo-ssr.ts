import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: "https://spacex-production.up.railway.app/",
    }),
    cache: new InMemoryCache(),
  });
}
