import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApollo } from '../apollo/client';
import { Fragment, useReducer } from 'react';
import { SellerProvider } from '../apollo';
import Categories from "../components/Category";
import { useRouter } from 'next/router'
import Link from 'next/link';

function App(props) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const router = useRouter();
  return (
    <Fragment>
      <ApolloProvider client={apolloClient}>
        <SellerProvider>
          <Link href='/'><a>home</a></Link>
          <Categories onChoose={(category) => { router.push({ pathname: '/category', query: { category: category.url } }) }} />
          <Component {...pageProps} />
        </SellerProvider>
      </ApolloProvider>
    </Fragment >
  );
}
export default App;
