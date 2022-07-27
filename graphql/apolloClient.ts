// https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1.hygraph.com/v2/cl5reai2t02on01ukgy3g7zk3/master',
  cache: new InMemoryCache(),
});