import { useState, useEffect, Fragment } from "react";
import { gql, useQuery, rewriteURIForGET } from "@apollo/client";
import { useRouter, withRouter, Router } from "next/router";
import { Item as Product } from "./item";
import { Container, Row, Col, Spinner } from "reactstrap";


import { Loading } from "../src/Loading";

const GET_PRODUCTS = gql`
  query($first: Int, $skip: Int, $keyword: String, $seller: UserWhereInput) {
    allProducts(
      first: $first
      skip: $skip
      where: { seller: $seller, OR: [{ name_contains: $keyword }] }
    ) {
      id
      name
      images {
        file {
          publicUrl
        }
      }
      price
      sale
    }
  }
`;
export const List = ({ first = 4, skip = 0, keyword, sm, md, lg }) => {
  const [fetchMoreButton, setFetchMoreButton] = useState(true);
  let variables = {
    first,
    skip,
    keyword,
    user,
  };
  if (sale) variables.sale_gt = 0;
  let { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables,
  });
  function loadingMore() {
    const count = data?.allProducts?.length;
    variables.skip = count;
    fetchMore({
      variables,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.allProducts?.length < first) {
          setFetchMoreButton(false);
        }
        if (!fetchMoreResult?.allProducts?.length) {
          setFetchMoreButton(false);
          return prev;
        }
        return Object.assign({}, prev, {
          allProducts: [...prev.allProducts, ...fetchMoreResult.allProducts],
        });
      },
    });
  }
  if (error) return <i>{error}</i>;
  if (loading) return <Loading/>;
  return data?.allProducts?.length ? (
    <section>
      <Row>
        {data.allProducts.map((product) => (
          <Col
            key={product.id}
            sm={sm ? sm : { size: 6 }}
            md={md ? md : { size: 4 }}
            lg={lg ? lg : { size: 3 }}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
      {fetchMoreButton && more ? (
        <button onClick={loadingMore}>loading more</button>
      ) : null}
    </section>
  ) : (
    <i>No result!</i>
  );
};
