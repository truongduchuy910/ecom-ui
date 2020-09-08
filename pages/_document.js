import Document, { Html, Head, Main, NextScript } from "next/document";
import { page } from "../config/index";
import FacebookProvider from "react-facebook/dist/FacebookProvider";
import Comments from "react-facebook/dist/Comments";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>{page.name}</title>
        <meta name="twitter:description" content={page.intro.content} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta name="description" content={page.intro.content} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap"
          rel="stylesheet"
        />
        <body style={{ fontFamily: `'Roboto', sans-serif` }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
