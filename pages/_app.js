import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useApollo } from "../apollo/client";
import { Fragment, useReducer } from "react";
import { SellerProvider } from "../apollo";
import { useRouter } from "next/router";
import Header from "../components/Header/index";
import { Footer } from "../components/Footer";

function App(props) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const router = useRouter();
  return (
    <Fragment>
      <ApolloProvider client={apolloClient}>
        <SellerProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SellerProvider>
      </ApolloProvider>
    </Fragment>
  );
}
export default App;
