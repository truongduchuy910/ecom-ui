import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>Yến Sào Đất Quảng</title>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
