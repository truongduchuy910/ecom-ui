import { gql, useQuery } from "@apollo/client";
import { useEffect, Fragment } from "react";

import { emptyWishlist } from "../../apollo/action";
import { Item } from "../Product/item";
import { Row, Col } from "reactstrap";
import theme from "../src/theme";
export const GET_WISHLIST = gql`
  query {
    wishlist @client
  }
`;

export function List() {
  const { data, loading, error } = useQuery(GET_WISHLIST);

  if (error) return <i>{error}</i>;
  return (
    <Row
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      {data ? (
        data?.wishlist?.length ? (
          data.wishlist.map((product) => (
            <Col key={product.id} xs={4} lg={3} style={{ padding: 8 }}>
              <Item product={product} />
            </Col>
          ))
        ) : (
          <p style={{ color: theme.color }}>Không có sản phẩm</p>
        )
      ) : null}
    </Row>
  );
}
