// External modules
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#5c7aff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/maskable_icon_x192.png"></link>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="icon"
            href="/favicon-16x16.png"
            sizes="16x16"
            type="image/png"
          />
          <link
            rel="icon"
            href="/favicon-32x32.png"
            sizes="32x32"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
