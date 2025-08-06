import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type AppProviderProps = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: "/graphql", // MSW intercepts this
  cache: new InMemoryCache(),
});

/**
 * AppProvider sets up the Apollo Client context for GraphQL data fetching.
 *
 * Wrap this around the root of the app to enable Apollo throughout the component tree.
 *
 * Also serves as a future wrapper for other global providers (e.g., Theme, Context).
 */

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
