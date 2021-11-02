// External modules
import { ApolloProvider } from '@apollo/client';
import { Global } from '@emotion/react';

// Internal modules
import Layout from '@/components/layout';
import { AppProvider } from '@/state/context';
import client from '@/graphql/client';
import globalStyles from '@/styles/global-styles';

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <AppProvider>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  </ApolloProvider>
);

export default App;
