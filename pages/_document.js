import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>Shop Whey Đà Nẵng | Dinh Dưỡng Thể Thao</title>
        <meta
          name="twitter:description"
          content="113 Phan Châu Trinh, Phước Ninh, Hải Châu, Đà Nẵng | 0905 586 577 - 0773 502 200 | Uy tín, giá cả phải chăng, hợp lí"
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="113 Phan Châu Trinh, Phước Ninh, Hải Châu, Đà Nẵng | 0905 586 577 - 0773 502 200 | Uy tín, giá cả phải chăng, hợp lí"
        />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
