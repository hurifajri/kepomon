// External modules
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

// Internal modules
import { URI } from '@/graphql/constants';

const client = new ApolloClient({
  link: new HttpLink({ uri: URI, fetch }),
  cache: new InMemoryCache(),
});

export default client;
