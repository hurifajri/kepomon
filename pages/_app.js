// External modules
import { Global } from '@emotion/react';

// Internal modules
import { globalStyles } from '@/styles';

const App = ({ Component, pageProps }) => (
  <>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </>
);

export default App;
