import { gql, useQuery } from "@apollo/client";
import { useEffect, Fragment } from "react";

import { emptyWishlist } from "../../apollo/action";
import { Item } from "../Product/item";
import { Row, Col } from "reactstrap";
export const GET_WISHLIST = gql`
  query {
    wishlist @client
  }
`;

export function List() {
  const { data, loading, error } = useQuery(GET_WISHLIST);

  if (error) return <i>{error}</i>;
  return (
    <div>
      <button onClick={emptyWishlist}>empty wishlist</button>
      <Row>
        {data ? (
          data?.wishlist?.length ? (
            data.wishlist.map((product) => (
              <Col key={product.id} sm={6} lg={4}>
                <Item product={product} />
              </Col>
            ))
          ) : (
            <p>No products in your wishlist</p>
          )
        ) : null}
      </Row>
    </div>
  );
}
