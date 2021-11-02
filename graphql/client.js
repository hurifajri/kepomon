// External modules
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Internal modules
import { URI } from '@/graphql/constants';

const client = new ApolloClient({ uri: URI, cache: new InMemoryCache() });

export default client;
