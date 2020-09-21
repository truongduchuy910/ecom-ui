import { ApolloProvider, gql, useQuery } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/yensaodatquang/assets/css/style.css";
import MenuApp from "../components/MenuApp/index";
import { useApollo } from "../apollo/client";
import { Footer } from "../components/src/Footer";
import { FacebookProvider, CustomChat } from "react-facebook";
import { theme } from "../config/index";
import { Query } from "../components/src/Query";
import { createContext, Fragment, useContext } from "react";
export const sellerContext = createContext();
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Query
        query={gql`
          query($host: String) {
            allUsers(where: { host: $host }) {
              id
              email
              store
              slogan
              intro
              contact
              color
              backgroundColor
              productBackgroundColor
              file {
                publicUrl
              }
            }
          }
        `}
        variables={{
          host:
            typeof window != "undefined" && window
              ? window.location.host
              : null,
        }}
      >
        {({ data, error, loading }) => {
          const seller = data?.allUsers[0];
          return (
            <Fragment>
              <FacebookProvider appId="404979820059541" chatSupport>
                <CustomChat pageId="1627025060846047" minimized={false} />
              </FacebookProvider>
              <MenuApp />
              <Component {...pageProps} {...seller} />
              <Footer />
            </Fragment>
          );
        }}
      </Query>
    </ApolloProvider>
  );
}
