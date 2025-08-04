import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
} from "@apollo/client";

type AppProviderProps = {
    children: React.ReactNode
}

const client = new ApolloClient({
  uri: "/graphql", // MSW intercepts this
  cache: new InMemoryCache(),
});


export const AppProvider = ({children}: AppProviderProps) => {
    
return(
     <ApolloProvider client={client}>
        {children}
     </ApolloProvider>
)
}