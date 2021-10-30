// External modules
import { ApolloProvider } from '@apollo/client';
import { Global } from '@emotion/react';

// Internal modules
import Layout from '@/components/layout';
import client from '@/graphql/client';
import globalStyles from '@/styles/global-styles';

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
);

export default App;
