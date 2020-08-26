import Document, { Html, Head, Main, NextScript } from "next/document";
import { page } from "../config";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>{page.title}</title>
        <meta name="twitter:description" content={page.content} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta name="description" content={page.content} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
