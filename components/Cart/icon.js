import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, Fragment } from "react";
import { cartItemsVar, CART } from "../../apollo/action";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "../src/Link";
import { CountIcon } from "../src/count";
import { theme } from "../../config";
export function Icon({ onClick, style }) {
  const { data, loading, error } = useQuery(CART);
  if (loading || error || !data) return null;

  let count = 0;
  if (data?.cartItems?.length) {
    data.cartItems.map((cartItem) => {
      count += cartItem.quantity;
    });
  }
  return (
    <Link href="/cart" onClick={onClick} style={style}>
      <MdAddShoppingCart style={{ color: theme.primary }} />
      {count ? <CountIcon count={count} /> : null}
    </Link>
  );
}
