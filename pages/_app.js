import { ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/yensaodatquang/assets/css/style.css";
import MenuApp from "../components/MenuApp/index";
import { useApollo } from "../apollo/client";
import { Footer } from "../components/src/Footer";
import { FacebookProvider, CustomChat } from "react-facebook";
import { theme } from "../config/index";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <FacebookProvider appId="404979820059541" chatSupport>
        <CustomChat pageId="1627025060846047" minimized={false} />
      </FacebookProvider>

      <header>
        <MenuApp />
      </header>
      <main
        style={{
          paddingTop: 60,
          paddingBottom: theme.spacing(4),
          minHeight: "60vh",
          backgroundColor: theme.bgDark,
          color: theme.color,
          textShadow: "1px 1px 1px rgba(0,0,0,0.04)",
        }}
      >
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </ApolloProvider>
  );
}
