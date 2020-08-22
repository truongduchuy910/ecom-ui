import { ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/yensaodatquang/assets/css/style.css";
import MenuApp from "../components/MenuApp/index";
import { useApollo } from "../apollo/client";
import { Footer } from "../components/src/Footer";
import { Container } from "reactstrap";
import { useState, useEffect } from "react";
import { withRouter, useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      setIsOpen(false);
    });
  });
  return (
    <ApolloProvider client={apolloClient}>
      <header style={{ paddingBottom: 60 }}>
        <MenuApp isOpen={isOpen} toggle={toggle} />
      </header>
      <main style={{ minHeight: "60vh", marginTop: 34 }}>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </ApolloProvider>
  );
}
