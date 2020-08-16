import { gql, useQuery } from "@apollo/client";
import { useEffect, Fragment } from "react";
import { Item } from "./item";
import { emptyWishlist } from "../../apollo/action";
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
      {data ? (
        data?.wishlist?.length ? (
          data.wishlist.map((product) => (
            <Item key={product.id} product={product} />
          ))
        ) : (
          <p>No products in your wishlist</p>
        )
      ) : null}
    </div>
  );
}
