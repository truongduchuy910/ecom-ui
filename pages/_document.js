import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <body style={{ fontFamily: `'Lato', sans-serif` }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
