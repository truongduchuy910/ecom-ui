import {ApolloProvider, gql, useQuery} from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "../public/yensaodatquang/assets/css/style.css";
import MenuApp from '../components/MenuApp/index';
import {useApollo} from '../apollo/client';
import {Footer} from '../components/src/Footer';
import {FacebookProvider, CustomChat} from 'react-facebook';
import {createContext, Fragment, useContext} from 'react';
import {SellerProvider} from '../components/src/SellerProvider';
function App(props) {
  const {Component, pageProps} = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <Fragment>
      <ApolloProvider client={apolloClient}>
        <SellerProvider>
          <header>
            <MenuApp />
          </header>
          <main style={{paddingTop: 68, minHeight: '60vh'}}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </SellerProvider>
      </ApolloProvider>
    </Fragment>
  );
}
export default App;
