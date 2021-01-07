import { ApolloProvider, gql, useQuery } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
// import "../public/yensaodatquang/assets/css/style.css";
import MenuApp from "../components/MenuApp/index";
import { useApollo } from "../apollo/client";
import { Footer } from "../components/src/Footer";
import { FacebookProvider, CustomChat } from "react-facebook";
import { createContext, Fragment, useContext } from "react";
import { SellerProvider } from "../components/src/SellerProvider";
function App(props) {
  const { Component, pageProps, host } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <Fragment>
      <ApolloProvider client={apolloClient}>
        <SellerProvider host={host}>
          <header>
            <MenuApp />
          </header>
          <main style={{ paddingTop: 68, minHeight: "60vh" }}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </SellerProvider>
      </ApolloProvider>
    </Fragment>
  );
}
App.getInitialProps = async ({ ctx: { req } }) => {
  var host =
    process.env.NODE_ENV === "production"
      ? req
        ? req.headers.host
        : window.location.hostname
      : "shopwheydanang.com";
  return { host };
};
export default App;
