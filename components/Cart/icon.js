import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, Fragment } from "react";
import { cartItemsVar, CART } from "../../apollo/action";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "../src/Link";
import { CountIcon } from "../src/count";
export function Icon({ onClick, style }) {
  const { data, loading, error } = useQuery(CART);
  let count = 0;
  if (data?.cartItems?.length) {
    data.cartItems.map((cartItem) => {
      count += cartItem.quantity;
    });
  }
  return (
    <Link href="/cart" onClick={onClick} style={style}>
      <MdAddShoppingCart />
      <CountIcon count={count} />
    </Link>
  );
}
