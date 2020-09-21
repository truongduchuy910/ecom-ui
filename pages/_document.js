import Document, { Html, Head, Main, NextScript } from "next/document";
import { useApollo } from "../apollo/client";
import { page } from "../config/index";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap"
          rel="stylesheet"
        /> */}
        <body style={{ fontFamily: `'Lora', sans-serif` }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
