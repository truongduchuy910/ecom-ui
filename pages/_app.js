import { ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import MenuApp from "../components/MenuApp/index";
import { useApollo } from "../apollo/client";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <MenuApp />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
